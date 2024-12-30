import axios from "axios";

axios.defaults.baseURL = 'https://moments-proj-fc5321aa27e8.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true