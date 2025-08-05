import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Textinput from "./Textinput";
import Form from "./pages/Form";
function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loding, setLoading] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    //validation
    if (password !== confirmPassword) {
      return setError("password dont's match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
      console.log(navigate);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to crate and account");
    }
  }
  return (
    <Form style={{ height: "500px" }} className="form" onSubmit={handleSubmit}>
      <h1>Create an account</h1>
      <Textinput
        type="text"
        placeholder="Enter Name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Textinput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textinput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Textinput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        text="I agree to the Terms and Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button className="mt-3" disabled={loding} type="submit">
        <span>Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}

export default SignupForm;
