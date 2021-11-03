import * as Location from "expo-location";
import { APIKEY } from "react-native-dotenv";
export const fetchDataOnSearch = async (
  setData,
  setErrorMessage,
  inputValue
) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=${inputValue}&appid=${APIKEY}`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      throw Error("Something went rong");
    }
  } catch (error) {
    setErrorMessage(
      error.message
        ? error.message + ", please come back later :)"
        : "Something went rong, please come back later :)"
    );
  }
};
export const fetchDataOnLoad = async (setData, setErrorMessage) => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMessage("Location is needed to run the app :)");
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      throw Error("Something went rong");
    }
  } catch (error) {
    setErrorMessage(error.message + " , please come back later :)");
  }
};
