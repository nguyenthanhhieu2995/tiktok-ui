import { Navigate, useParams } from "react-router-dom";
import routesConfig from "~/config/routes";

function Profile() {
    let {username} = useParams();
    if (!username?.includes('@')) return <Navigate to={routesConfig.error} />
    return <div>Profile</div>;
}

export default Profile;
