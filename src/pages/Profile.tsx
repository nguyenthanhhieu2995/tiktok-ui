import { Navigate, useParams } from "react-router-dom";
function Profile() {
    let {username} = useParams();
    if (!username?.includes('@')) return <Navigate to='/404' />
    return <div>Profile</div>;
}

export default Profile;
