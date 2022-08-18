import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // Pass the returned user into docCreation
      const res = await createUserDocumentFromAuth(user, { displayName });
      setFormField(defaultFormFields); // reset form
      console.log(res);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("Error occured when registering a user: ", error);
        setFormField(defaultFormFields); // reset form
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value }); // update the ralated field with the new value
  };

  return (
    <div>
      <h2>Sign up with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
