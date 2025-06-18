import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        This is a simple React application demonstrating the use of functional
        and class components.
      </p>
      {/* <User name="Alka" age="30" email="alakasutar02@gmai/l.com" /> */}
      <UserClass name="Alka" age="30" email="alakasutar02@gmail.com" />
    </div>
  );
};

export default About;
// This is a placeholder for the About component.
