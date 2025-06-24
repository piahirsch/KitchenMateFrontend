import axios from "axios";

const baseURL: string = 'https://kitchenmate-backend.onrender.com';
// const baseURL: string = 'http://localhost:8080'; // Use this for local development

export const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

