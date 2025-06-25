import { useNavigate } from "react-router-dom";

function UserInput() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const query = event.target[0].value;
    navigate(`/user?query=${query}`);
  }

  return (
    <section className="user-form">
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <label htmlFor="query">Username</label>
          <input name="query" />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default UserInput;
