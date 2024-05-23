import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import authintiaction from '../../assets/others/authentication2.png';
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import './SingUp.css';
const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        // create user and insert the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        title: "Sign UP!",
                                        text: "SignUp Successfully.",
                                        icon: "success"
                                    });
                                    reset()
                                    navigate('/')
                                }
                            })
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: error,
                    icon: "error"
                });
            })
    }
    return (
        <div className="signUpBg h-[900px] py-12">
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="max-w-6xl mx-auto signUpBg " >
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse py-12 " >
                    <img src={authintiaction} alt="" />
                    <div className="card shrink-0 w-full max-w-md  ">
                        <h1 className="text-5xl text-black text-center py-6 font-bold">SignUp</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                    })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (<p className="text-red-600">password is required</p>)}
                                {errors.password?.type === "minLength" && (<p className="text-red-600">password Minimum 6 characters</p>)}
                                {errors.password?.type === "maxLength" && (<p className="text-red-600">password Maximum 20 characters</p>)}
                                {errors.password?.type === "pattern" && (<p className="text-red-600">Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>)}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] text-white" type="submit" value="Sign Up" />
                            </div>
                            <Link to={'/login'} className="text-[#D1A054] text-center font-medium">Already registered? Go to log in</Link>
                        </form>
                        <div className="text-center">
                            <p>Or sign in with</p>
                            <div className="flex gap-6 justify-center mt-6">
                                <FaFacebookF className="text-4xl border-[rgba(68,68,68,1)] border p-2 rounded-full"></FaFacebookF>
                                {/* google */}
                                <SocialLogIn></SocialLogIn>
                                <FaGithub className="text-4xl border-[rgba(68,68,68,1)] border p-2 rounded-full"></FaGithub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;