import { APIKEY } from "react-native-dotenv";
const useFetchDataOnSearch = async (
  setData,
  setErrorMessage,
  inputValue,
  setLoading
) => {
  setErrorMessage(false);
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputValue}&appid=${APIKEY}&lang=fr`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
      setLoading(false);
    } else {
      setLoading(false);
      setErrorMessage(
        "La ville que vous cherchez nous travaillons dessus encore, merci d'essayer une autre :)"
      );
      return;
    }
  } catch (error) {
    setLoading(false);
    setErrorMessage(error.message + ", please come back later :)");
  }
};
export default useFetchDataOnSearch;
