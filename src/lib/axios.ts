import axios from "axios";

export const client = axios.create({
  baseURL: 'https://kitchenmate-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
})
