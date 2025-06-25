import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getUsers } from "../../API";
import UserInput from "../components/userInput";

function User() {
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();
  const username = searchParams.get("query");

  useEffect(() => {
    async function fetchData() {
      try {
        const { users } = await getUsers();
        console.dir(users);

        const foundUser = users.find((user) => user.username === username);
        console.log(foundUser);

        setUser(foundUser);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [username]);

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
