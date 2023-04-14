import React, { Component, useState } from "react";
import AddText from "./AddText";
import AddCheckbox from "./AddCheckbox";
import AddSelect from "./AddSelect";
import { Button } from "@mui/material";

function FormPage(props) {
  const { addUser } = props;

  const ListComponents = [
    { name: "fullname", type: "addtext", label: "Full Name" },
    { name: "mobile", type: "addtext", label: "Mobile No" },
    { name: "email", type: "addtext", label: "Email Id" },
    { name: "gender", type: "addselect", label: "Select Gender" },
    { name: "birthdate", type: "addtext", label: "Date of Birth" },
    { name: "position", type: "addselect", label: "Select Position" },
    { name: "address", type: "addtext", label: "Address" },
    { name: "city", type: "addtext", label: "City" },
    { name: "pincode", type: "addtext", label: "Pin Code" },
    { name: "skills", type: "addcheck", label: "Add Skills" },
  ];

  const [user, setUser] = useState({
    fullname: "",
    mobile: "",
    email: "",
    gender: "",
    birthdate: "",
    address: "",
    position: "",
    skills: [],
    city: "",
    pincode: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newuser = {
      fullname: user.fullname,
      mobile: user.mobile,
      email: user.email,
      gender: user.gender,
      birthdate: user.birthdate,
      address: user.address,
      position: user.position,
      skills: user.skills,
      city: user.city,
      pincode: user.pincode,
    };
    await addUser(newuser);

    setUser({
      fullname: "",
      mobile: "",
      email: "",
      gender: "",
      birthdate: "",
      address: "",
      position: "",
      skills: [],
      city: "",
      pincode: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="user">
        {ListComponents.map((component) => {
          switch (component.type) {
            case "addtext":
              return (
                <AddText
                  key={component.name}
                  user={user}
                  setUser={setUser}
                  name={component.name}
                  id={component.label}
                  label={component.label}
                />
              );
            case "addselect":
              return (
                <AddSelect
                  key={component.name}
                  user={user}
                  setUser={setUser}
                  name={component.name}
                  id={component.label}
                  label={component.label}
                />
              );
            case "addcheck":
              return (
                <AddCheckbox
                  key={component.name}
                  user={user}
                  setUser={setUser}
                  name={component.name}
                  id={component.label}
                  label={component.label}
                />
              );
            default:
              return "";
          }
        })}
      </div>
      <Button sx={{ ml: 1 }} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default FormPage;
