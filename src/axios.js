import axios from "axios";

// base url makes requests at the movie database in the api//
const instance = axios.create ({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;

