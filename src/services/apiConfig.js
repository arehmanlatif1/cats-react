import axios from "axios";

let apiUrl;
const apiUrls = {
    production: "www.cat-crud-api.heroku.com/api",
    developments: "http://localhost:3000/api",
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.developments;
}else {
    apiUrl = apiUrls.production;
}

const api = axios.create({
    baseURL: apiUrl,

});

export default api;
