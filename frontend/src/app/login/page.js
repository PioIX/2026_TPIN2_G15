"use client"

import { useState, useEffect } from 'react';
import Form from "@/components/Form"

export default function LoginPage() {
    const handleLogin =  async (email, password) => {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })

        const data = await response.json()

        console.log(data)
    }

    return (
        <div>
            <Form title="Iniciar sesion" buttonText="Iniciar sesion" onButtonClick={handleLogin} />
        </div>
    )
}
