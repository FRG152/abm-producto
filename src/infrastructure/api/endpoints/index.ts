import axios from "axios";

export const ListOfCharacters = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const ListOfLocation = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const ListOfEpisodes = async () => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/episode");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "http://healthaitrack-api-unoceros-projects.vercel.app/api/auth/login",
      { email, password }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
