import axios from "axios";

axios.defaults.baseURL = 'https://content-sharing-platform-a296effdf373.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
