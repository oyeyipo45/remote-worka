import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("password do not match");
    } else if (!name || !email || !role || !password || !confirmPassword) {
      setMessage("Please fill all fields ");
    } else {
      dispatch(register(name, email, role, password, confirmPassword));
    }
  };
  return (
    <div className="register">
      <div className="customer-signup">
        <div className="customer-signup-header">
          <h3 className="customer-signup-heading">Create an account</h3>

          {message && <p>{message}</p>}
          {error && <p className="color-red">{error}</p>}
          {loading && "Loading ..."}
        </div>

        <form action="" onSubmit={submitHandler}>
          <div className="customer-signup-form-group">
            <input
              type="text"
              className="customer-signup-form-input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="customer-signup-form-group">
            <input
              type="email"
              className="customer-signup-form-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="customer-signup-form-group">
            <select
              className="customer-signup-form-input"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              name="Acccount Type"
            >
              <option value="">Select Role</option>
              <option value="hirer" selected>
                Hirer
              </option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>
          <div className="customer-signup-form-group">
            <input
              type="password"
              className="customer-signup-form-input"
              placeholder="Password"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="customer-signup-form-input"
              placeholder="Confirm Password"
              minLength="6"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="customer-signup-form-group">
            <button type="submit" className="customer-signup-btn">
              Create my account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
