import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";

const PriveteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};
PriveteRoute.propTypes = {
    children: PropTypes.node
}
export default PriveteRoute;