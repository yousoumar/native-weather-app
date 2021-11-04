import * as Location from "expo-location";
import { APIKEY } from "react-native-dotenv";
const useFetchDataOnLoad = async (setData, setErrorMessage, setLoading) => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMessage("Location is needed to run the app :)");
      setLoading(false);
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}&lang=fr`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
      setLoading(false);
    } else {
      setLoading(false);
      throw Error("Something went rong");
    }
  } catch (error) {
    setLoading(false);
    setErrorMessage(error.message + " , please come back later :)");
  }
};
export default useFetchDataOnLoad;
