import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <h2>Sign up with your email and password</h2>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
