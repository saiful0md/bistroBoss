import { useRouteError } from "react-router-dom";
import errorImg from '../../assets/404.gif';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className="my-12 flex flex-col items-center">
            <img className="" src={errorImg} alt="" />
            <p className="my-6 text-xl text-white">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;