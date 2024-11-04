import { useParams } from "react-router-dom";
import Menu from "../components/Menu";


const ProfilePage = () => {
    let {facebookID, YouTubeID} = useParams();
    return (
        <div>

            <Menu />
            <p>YouTube={YouTubeID}</p>
            <p>Facebook={facebookID}</p>
            <h1>Profile Page</h1>
        </div>
    );
};

export default ProfilePage;