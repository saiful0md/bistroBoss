import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogIn = () => {
    const axiosPublic = useAxiosPublic()
    const { googleSignin } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleSignin()
            .then(result => {
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                icon: 'success',
                                title: "Sign in successfully"
                            })
                        }
                        navigate(from, {replace:true})
                    })
            })
    }
    return (
        <div>
            <FaGoogle onClick={handleGoogleLogin} className="text-4xl cursor-pointer border-[rgba(68,68,68,1)] border p-2 rounded-full"></FaGoogle>
        </div>
    );
};

export default SocialLogIn;