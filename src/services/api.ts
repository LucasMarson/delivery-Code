import axios from "axios";

const sessionToken = localStorage.getItem("sessionToken") ? localStorage.getItem("sessionToken") : null;

export const api = axios.create({
    baseURL: "https://code-delivery.herokuapp.com/",
    headers: {
        Authorization: `Bearer ${sessionToken}`,
    }
})