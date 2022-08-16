import axios from "axios";

const sessionToken = localStorage.getItem("sessionToken") ? localStorage.getItem("sessionToken") : null;

export const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        Authorization: `Bearer ${sessionToken}`,
    }
})