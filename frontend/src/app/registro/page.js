"use client" 

import {useState} from 'react'; 
import Form from '@/components/Form';

export default function RegistroPage(){

    const handleRegistrer = async (email, password) => {
        const response = await fetch ("http://localhost:3000/registro", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
    }

    return(
        <div>
            <Form title="Registrarse" buttonText="Registrarse" onButtonClick={handleRegistrer}></Form>
        </div>
    )
}