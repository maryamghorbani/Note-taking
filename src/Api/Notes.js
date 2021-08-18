import axios from "axios";

const instance = axios.create({
    baseURL : 'https://note-taking-c97bb-default-rtdb.europe-west1.firebasedatabase.app',
    timeout : 5000
});

export default instance;