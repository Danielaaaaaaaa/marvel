 import axios from 'axios';
 import { KEY, ENDPOINT } from "@/configs/marvelapp";

 const PRIVATE_KEY = KEY.API_PRIVATE_KEY;
 const PUBLIC_KEY = KEY.API_PUBLIC_KEY;


 export const comicClient = axios.create({
     baseURL: `${ENDPOINT.COMIC}`,
 });