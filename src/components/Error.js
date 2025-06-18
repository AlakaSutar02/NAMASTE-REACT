const Error = ({ error }) => {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2>Something went wrong.</h2>
      <p>{error}</p>
      <p>Please try again later.</p>
      <img
        src="https://cdn.dribbble.com/users/1162077/screenshots/3848916/media/0f3b8d4c5e9a0f8b3c4d5e6f7a8b9c0d.gif"
        alt="Error"
      />
    </div>
  );
}
export default Error;
// This component is used to display error messages.