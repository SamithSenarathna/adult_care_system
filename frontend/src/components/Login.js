import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SiteLogo from "./assets/logo.jpg";
import "../App.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import { getDatabase, ref, child, get } from "firebase/database";

function Login() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      // Sign in user with email and password
      const { email, password } = values;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log("User logged in successfully!");

      // Get user information
      const user = userCredential.user;
      const uid = user.uid;

      // Fetch user details from Firebase Realtime Database
      const db = getDatabase();
      const userRef = ref(db, 'users/' + uid);
      const snapshot = await get(child(userRef, 'username'));
      const username = snapshot.val();

      if (username) {
        // Save email, UID, and username to local storage
        localStorage.setItem("email", email);
        localStorage.setItem("uid", uid);
        localStorage.setItem("username", username);

        // Redirect to /dash after successful login
        history.push("/dash");
      } else {
        console.error("Username not found in database");
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Username not found',
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error.message);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password',
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card bordered={false} style={{ textAlign: "center", backgroundColor: '#f5f5f5' }}>
        <img
          src={SiteLogo}
          alt="React Icon"
          style={{ width: "250px", padding: 12 }}
        />
        <p style={{ padding: 15, fontWeight: "bold" }}>Login Account</p>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleLogin} 
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            style={{ textAlign: "center" }} 
          >
            <Input 
              placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: 'Password must be at least 6 characters long' }
            ]}
          >
            <Input.Password 
              placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: 200 }}
              loading={loading} 
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
