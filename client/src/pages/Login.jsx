import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../pathConstants";

export default function Login() {
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL[0]}/api/auth/login`, user);
            // console.log("Login success", response.data);
            sessionStorage.setItem("token", response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.log("login failed", error.message)
        }
    }

    return (
        <section className="min-h-screen flex items-stretch text-white">
            <div className="lg:flex w-1/2 hidden bg-black bg-no-repeat bg-cover relative items-center">
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide text-white">Keep it Simple and Fun!</h1>
                    <p className="text-3xl my-4 text-white">Buying and selling made easy!</p>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-orange-700" >
                <div className="w-full py-6 z-20">
                    <h1 className="my-6">
                        <a href="/"className="text-5xl font-bold tracking-wide text-gray-100 hover:text-gray-300">XLO</a>
                    </h1>
                    <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div className="pb-2 pt-4">
                            <input type="email" name="email" id="email" placeholder="Email" value={user.email}
                                    onChange={(e) => setUser({...user, email: e.target.value})}
                                    className="block w-full p-4 text-lg rounded-sm bg-black"/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" value={user.password}
                                    onChange={(e) => setUser({...user, password: e.target.value})}
                                    placeholder="Password"/>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <button onClick={onLogin} className="uppercase block w-full p-4 text-lg rounded-full bg-blue-600  focus:outline-none">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}