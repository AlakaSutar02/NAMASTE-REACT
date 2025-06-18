import { useState } from "react";

const User = ({ name, age, email,  }) => {
    const [count, setCount] = useState(0); 
  return (
    <div className="user-card">
        <h1>Functional Component</h1>
        <h2>User Details:</h2>
        <h3>Count: {count}</h3>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Email: {email}</h3>
    </div>
  );
}

export default User;