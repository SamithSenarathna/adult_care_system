import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import { withRouter } from "react-router-dom"; 
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import Swal from 'sweetalert2';
import SiteLogo from "./assets/logo.jpg";
import "../App.css";

const firebaseConfig = {
  apiKey: "AIzaSyDlR0drAOx_DfkQzAIj1JJWi9Uf5_yX1YE",
  authDomain: "health-d9186.firebaseapp.com",
  projectId: "health-d9186",
  storageBucket: "health-d9186.appspot.com",
  messagingSenderId: "873978215297",
  appId: "1:873978215297:web:79a7fdef6996fe1d29c680",
  measurementId: "G-43FSP7T3R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function Register({ history }) { 
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await set(ref(database, `users/${user.uid}`), {
        firstName: values.fname,
        lastName: values.lname,
        email: values.email,
        username: values.username,
      });

      setLoading(false);
      console.log("User registered successfully!");
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'User registered successfully!',
      }).then(() => {
        history.push('/login');
      });
    } catch (error) {
      setLoading(false);
      console.error("Registration failed:", error.message);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Username or Email already taken',
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
          style={{ width: "450px", padding: 30 }}
        />
        <p style={{ padding: 15, fontWeight: "bold" }}>Register Account</p>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleRegister} 
        >
          <Form.Item
            name="fname"
            rules={[{ required: true, message: "Please Enter First Name!" }]}
            style={{ textAlign: "center" }}
          >
            <Input 
              placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lname"
            rules={[{ required: true, message: "Please Enter Last Name!" }]}
            style={{ textAlign: "center" }}
          >
            <Input 
              placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please Enter Email!" }]}
            style={{ textAlign: "center" }}
          >
            <Input 
              name="email"
              placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            style={{ textAlign: "center" }}
          >
            <Input 
              name="username"
              placeholder="Username" />
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

          <Form.Item
            name="cpassword"
            dependencies={['password']}
            rules={[
              { required: true, message: "Please Enter Confirm Password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || value === getFieldValue('password')) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Passwords do not match');
                },
              })
            ]}
          >
            <Input.Password 
              placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: 200 }}
              loading={loading} 
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default withRouter(Register); 
