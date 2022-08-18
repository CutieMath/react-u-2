import React, { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div>
      <h2>Already have an account?</h2>
      <span>Sign in here</span>
      <form>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignInForm;
