import axios from "axios";

export const API = process.env.REACT_APP_API_URL;
export const fetchData = async endpoint => {
         const url = `${API}/endpoint`;
         return await axios.get(url);
};

