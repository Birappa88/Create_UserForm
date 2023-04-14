import React, { useState, useEffect } from "react";
// import FormPage from "./components/FormPage";
import Form from "./components/Form";

const getLocalItem = () => {
  const users = localStorage.getItem("users")
  if (users) {
    return JSON.parse(users)
  }
  else {
    return []
  }
}

function UsersData() {
    const [users, setUsers] = useState(getLocalItem);
    console.log(users[users.length-1]);

      useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
      }, [users]);

    const addUser = async (user) => {
        await setUsers([...users, user]);
    };


    return (
        <div className="users">
            {/* <FormPage addUser={addUser} /> */}
            <Form addUser={addUser} />
        </div>
    );
}

export default UsersData;
