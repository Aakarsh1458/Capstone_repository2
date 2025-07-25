import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSubmitted(true);
            // Simulate storage (e.g., localStorage or API call)
            localStorage.setItem("userDetails", JSON.stringify(form));
        }
    };

    const handleForgotPassword = () => {
        alert("Password reset link sent to your email (simulation).");
    };

    if (submitted) {
        return (
            <div style={{ margin: "2rem auto", maxWidth: 400, textAlign: "center" }}>
                <h2>Registration Successful</h2>
                <p>
                    <strong>Email:</strong> {form.email}
                </p>
                <p>
                    <strong>Username:</strong> {form.username}
                </p>
                <p>
                    <strong>Password:</strong> {form.password}
                </p>
            </div>
        );
    }

    return (
        <div style={{ margin: "2rem auto", maxWidth: 400 }}>
            <h2>Register</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    type="button"
                    style={{ background: "none", color: "blue", border: "none", padding: 0, textAlign: "left", cursor: "pointer" }}
                    onClick={handleForgotPassword}
                >
                    Forgot Password?
                </button>
            </div>
            <p style={{ marginTop: "1rem", color: "#888" }}>
                Press <strong>Enter</strong> after filling all fields to register.
            </p>
        </div>
    );
};

export default Register;