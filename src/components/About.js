import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
       <div className="about">
         <h1>About Component</h1>
        
        {/* Calling Components with props */}
         <User name={"Lokesh Singh (function)"} location={"Bhopal"}/>

        <UserClass name={"Sonali Singh function"} location={"Delhi"}/>

       </div>
    )
}

export default About;