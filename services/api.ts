import axios from "axios";
import {parseCookies} from 'nookies'

const cookies = parseCookies()

export const api = axios.create({
    baseURL: "http://localhost:8001",
    headers: {
        Authorization: `Bearer ${cookies['nextauth.token']}`
    }
})