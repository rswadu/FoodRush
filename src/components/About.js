import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";
import { ProfileClass } from "./ProfileClass";
const About=()=>{
    return(
        <>
        <h1>This is about page.</h1>
        {/* <ProfileClass name="robot"/> */}
       {/* < Profile name="machine"/> */}
       <Outlet/>
        </>
    );
}
export default About;