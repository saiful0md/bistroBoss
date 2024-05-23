import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import Swal from "sweetalert2";
import authintiaction from '../../assets/others/authentication2.png';
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
import useAuth from "../../hooks/useAuth";
import './Login.css';
const LogIn = () => {
    const { signIn } = useAuth()
    const [disabled, setdisabled] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Sign in Success!",
                        text: "SignUp Successfully.",
                        icon: "success"
                    });
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: error,
                    icon: "error"
                });
            })
    }
   
    const handleCaptchaValidate = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setdisabled(false)
        }
    }
    return (
        <div className="loginBg h-[900px] pt-12">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="max-w-6xl mx-auto loginBg " >
                <div className="hero-content flex-col gap-10 lg:flex-row py-12  " >
                    <img src={authintiaction} alt="" />
                    <div className="card shrink-0 w-full max-w-md  ">
                        <h1 className="text-5xl text-black text-center py-6 font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* captcha  */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleCaptchaValidate} name="captcha" placeholder=" captcha above" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-4">
                                <input disabled={disabled} className="btn bg-[#D1A054] text-white" type="submit" value="Login" />
                            </div>
                            <Link to={'/signUp'} className="text-[#D1A054] text-center font-medium">New here? Create a New Account</Link>
                        </form>
                        <div className="text-center">
                            <p>Or sign in with</p>
                            <div className="flex gap-6 justify-center mt-6">
                                <FaFacebookF className="text-4xl cursor-pointer border-[rgba(68,68,68,1)] border p-2 rounded-full"></FaFacebookF>
                                {/* google */}
                               <SocialLogIn></SocialLogIn>
                                <FaGithub className="text-4xl cursor-pointer border-[rgba(68,68,68,1)] border p-2 rounded-full"></FaGithub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;