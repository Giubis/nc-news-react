import { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { getUsers } from "../../API";
import UserInput from "../components/userInput";
import UserContext from "../contexts/userContext";

function User() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("query");
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const { users } = await getUsers();
        const foundUser = users.find((user) => user.username === username);

        if (foundUser) {
          setUser(foundUser);
        }
      } catch (error) {
        console.error(error);
        alert("Username not found.");
      }
    }
    if (username) {
      fetchData();
    }
  }, [username, setUser]);

  return (
    <>
      <h2>User</h2>
      <UserInput />
      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.name} />
          <p>
            <strong>Username</strong>: {user.username}
          </p>
          <p>
            <strong>Name</strong>: {user.name}
          </p>
        </div>
      )}
    </>
  );
}

export default User;
