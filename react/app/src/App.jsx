import { useState } from "react";
import "./App.css";
import UserCard from "./UserCard";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({});
  const [orginalUsers, setOriginalUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=10");

      const data = await response.json();
      setOriginalUsers(data.results);
      setUsers(data.results);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  useEffect(() => {
    const filteredUsers = () => {
      if (filter.gender == "male") {
        setUsers(orginalUsers.filter((user) => user.gender == filter.gender));
      } else {
        setUsers(orginalUsers.filter((user) => user.gender == filter.gender));
      }
    };
    filteredUsers();
    console.log(filter);
  }, [filter]);

  if (loading) {
    return (
      <div>
        <p>Loading users...</p>
      </div>
    );
  }
  return (
    <>
      <div>
        <label htmlFor="gender">filter by gender</label>
        <select
          onChange={(e) => setFilter({ ...filter, gender: e.target.value })}
          name="gender"
          id="gender"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {users &&
          users.map((user) => {
            return (
              <UserCard
                name={user.name.first}
                location={user.location.state}
                gender={user.gender}
                image={user.picture.large}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
