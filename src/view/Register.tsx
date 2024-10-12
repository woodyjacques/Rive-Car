import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSubmitUsers } from "../validation/AuthRegister";

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();

    const token = localStorage.getItem("ACCESS_TOKEN");

    useEffect(() => {
        if (token) {
            navigate("/works");
        }
    }, [token, navigate]);

    if (token) {
        return null;
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sucursal, setSucursal] = useState("");
    const [password, setPassword] = useState("");
    const [isVerified, setisVerified] = useState(false);

    const handleSubmitRegister = async (event: FormEvent) => {

        const registrationSuccessful = await handleSubmitUsers(event, name, email, sucursal, password, isVerified, setName, setEmail, setSucursal, setPassword, setisVerified);

        if (registrationSuccessful) {
            setTimeout(() => {
                navigate("/verifi");
            }, 3000);
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <header className="flex flex-col items-center mb-8">

                    <h1 className="text-3xl font-bold text-neon-green">Regístrate</h1>
                    <p className="text-gray-400 text-center mt-2">Crea una cuenta para empezar a optimizar tus inspecciones de vehículos.</p>
                </header>

                <form onSubmit={handleSubmitRegister} >

                    <p
                        id="MensajeErrUsuario"
                        className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                    ></p>
                    <p
                        id="MensajeActUsuario"
                        className=" hidden text-green-500 text-sm font-medium rounded-lg text-center"
                    ></p>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-700 text-white rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="Ingresa tu nombre completo"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-700 text-white rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="Ingresa tu correo electrónico"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">
                            Sucursal
                        </label>
                        <input
                            type="text"
                            id="sucursal"
                            value={sucursal}
                            onChange={(e) => setSucursal(e.target.value)}
                            className="bg-gray-700 text-white rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="Ingresa el nombre de la sucusal"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-700 text-white rounded-lg w-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="Ingresa una contraseña segura"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-9 text-gray-500 hover:text-gray-300 focus:outline-none"
                        >
                            {showPassword ? "Ocultar" : "Ver"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-500 hover:bg-lime-600 text-gray-900 py-3 px-6 rounded-full w-full text-lg transition duration-300 transform hover:scale-105 shadow-md"
                    >
                        Registrarse
                    </button>
                </form>
            </div>

            <p className="text-gray-400 mt-6">
                ¿Ya tienes una cuenta?{' '}
                <a href="/login" className="text-neon-green hover:underline">
                    Inicia sesión
                </a>
            </p>
        </div>
    );
}

export default Register;
