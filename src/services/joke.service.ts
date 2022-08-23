import axiosService, { AxiosRes } from "./axios.service";
import { urls } from "../constants/urls";
import IJoke from "../interfaces/joke.interface";

const jokeService = {
  gerRandomJoke: (): AxiosRes<IJoke> => axiosService.get(urls.jokes),
};

export default jokeService;
