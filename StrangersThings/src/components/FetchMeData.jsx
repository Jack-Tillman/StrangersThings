import { useState } from "react";
import { useEffect } from "react";


export default async function FetchMeData(){
    const token = sessionStorage.getItem(token)
    
  
        try {
            console.log(token)
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-ftb-et-web-am/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
              });
                const result = await response.json();
                console.log(result);
                return result
        }
             catch (err) {
                console.error(err)
            }
        }

    