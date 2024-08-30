import { useRef, useState, useEffect } from "react";
import { GoInfo } from 'react-icons/go';
import { IoMdCheckmark } from 'react-icons/io';
import { LiaTimesCircle } from 'react-icons/lia';
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../api'; // Pastikan path ini sesuai dengan file axiosInstance Anda

const UserValid = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate(); // Hook untuk navigasi
    const [user, setUser] = useState('');
    const [userValidName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [password, setPassword] = useState('');
    const [passValid, setPassValid] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = UserValid.test(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PassValid.test(password);
        setPassValid(result);
    }, [password]);

    useEffect(() => {
        setErrMsg('');
    }, [user, password]);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!userValidName || !passValid) {
            setErrMsg('Isi semua field dengan benar.');
            return;
        }

        try {
            const response = await axiosInstance.post('/login', {
                nama: user, // Pastikan parameter sesuai dengan yang diharapkan oleh server
                password: password
            });

           
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('username', user);
            setSuccess(true);
            setErrMsg('');
            setTimeout(() => {
                navigate('/home');
            }, 1000);
        } catch (error) {
            setErrMsg(error.response?.data?.message || 'Login gagal. Coba lagi.');
            setSuccess(false);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <p ref={errRef} className={`text-red-500 ${errMsg ? "block" : "hidden"}`} aria-live="assertive">{errMsg}</p>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <label htmlFor="username" className="block mb-2 font-medium">
                    Username:
                    <span className={userValidName ? "text-green-500" : "hidden"}>
                        <IoMdCheckmark />
                    </span>
                    <span className={!userValidName && user ? "text-red-500" : "hidden"}>
                        <LiaTimesCircle />
                    </span>
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={userValidName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={`text-sm text-gray-600 mb-4 ${userFocus && user && !userValidName ? "block" : "hidden"}`}>
                    <GoInfo className="inline mr-1" />
                    4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="password" className="block mb-2 font-medium">
                    Password:
                    <span className={passValid ? "text-green-500" : "hidden"}>
                        <IoMdCheckmark />
                    </span>
                    <span className={!passValid && password ? "text-red-500" : "hidden"}>
                        <LiaTimesCircle />
                    </span>
                </label>
                <input
                    type="password"
                    id="password"
                    className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-invalid={passValid ? "false" : "true"}
                    aria-describedby="pwnote"
                    onFocus={() => setPassFocus(true)}
                    onBlur={() => setPassFocus(false)}
                />
                <p id="pwnote" className={`text-sm text-gray-600 mb-4 ${passFocus && !passValid ? "block" : "hidden"}`}>
                    <GoInfo className="inline mr-1" />
                    8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character. Allowed special characters: ! @ # $ %
                </p>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
                <div className="mt-2 text-gray-600">
                    <p>Belum punya akun? <Link className="font-semibold" to="/register">Daftar akun</Link></p>
                </div>
            </form>
        </section>
    );
}

export default Login;
