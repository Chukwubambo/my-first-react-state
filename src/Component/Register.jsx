import React, { useState } from "react";

const Register = () => {
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [phoneNumberState, setPhoneNumberState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formData = {
      firstNameState,
      lastNameState,
      emailState,
      phoneNumberState,
      passwordState,
    };
    console.log(formData);
  };
  return (
    <>
      <form
        onSubmit={submitForm}
        className="border rounded bg-slate-100 w-[400px] p-2"
        action=""
      >
        <div className="flex items-center justify-between">
          <label htmlFor="first-name">First Name :</label>
          <input
          value={firstNameState}
          onChange={(e) => setFirstNameState(e.target.value)}
            className="w-[270px] mb-2"
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Please enter your first name"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="last-name">Last Name :</label>
          <input
          value={lastNameState}
          onChange={(e) => setLastNameState(e.target.value)}
            className="w-[270px] mb-2"
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Please enter your last name"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="email">Email :</label>
          <input
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
            className="w-[270px] mb-2"
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your email"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="phone-number">Phone Number :</label>
          <input
          value={phoneNumberState}
          onChange={(e) => setPhoneNumberState(e.target.value)}
            className="w-[270px] mb-2"
            type="number"
            name="phone-number"
            id="phone-number"
            placeholder="Please enter your phone number"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="password">Password :</label>
          <input
          value={passwordState}
          onChange={(e) => setPasswordState(e.target.value)}
            className="w-[270px] mb-2"
            type="Password"
            name="password"
            id="password"
            placeholder="Please enter your password"
          />
        </div>

        <button className="w-full bg-black text-white bg-grey-900 ring rounded shadow p-1">
          Login
        </button>
      </form>
    </>
  );
};

export default Register;
