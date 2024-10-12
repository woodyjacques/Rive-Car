import { FormEvent } from "react";
import { mostrarMensaje } from "../components/Toast";
import axios from "axios";

const api = "https://rive-car-backend.vercel.app";

export const handleSubmitUsers = async (
    event: FormEvent,
    name: string,
    email: string,
    sucursal: string,
    password: string,
    isVerified: boolean,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setSucursal: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setisVerify: React.Dispatch<React.SetStateAction<boolean>>
): Promise<boolean> => {
    event.preventDefault();
    const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");
    const MensajeActUsuario = document.getElementById("MensajeActUsuario");

    if (name === "") {
        mostrarMensaje("Ingrese su nombre", MensajeErrUsuario);
        return false;
    }

    if (email === "") {
        mostrarMensaje("Ingrese su correo", MensajeErrUsuario);
        return false;
    }

    if (sucursal === "") {
        mostrarMensaje("Ingrese su sucursal", MensajeErrUsuario);
        return false;
    }

    if (password === "") {
        mostrarMensaje("Ingrese su password", MensajeErrUsuario);
        return false;
    }

    function resetForm() {
        setName("");
        setEmail("");
        setSucursal("");
        setPassword("");
        setisVerify(false);
    }

    try {
        const responseRegister = await axios.post(`${api}/auth/register`, { name, email,sucursal, password, isVerified });
        const mensaje = responseRegister.data.message;
        mostrarMensaje(mensaje, MensajeActUsuario);
        resetForm();
        return true;
    } catch (error: any) {
        const message = error.response?.data.message;
        mostrarMensaje(message, MensajeErrUsuario);
        resetForm();
        return false;
    }

};