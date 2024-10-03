import React from "react";
import { API_BASE_URL } from "../config/apiConfig";

export const GetPersonas = async ()=>{
    const response = await fetch(`${API_BASE_URL}/Persona/GetPersonas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

    let data = await response.json();
    console.log(data);
    return data;
};