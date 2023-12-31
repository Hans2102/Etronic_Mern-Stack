import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        // answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Đăng ký tài khoản - Etronic">
      <div className="form-container">
        <h1 className="mb-3">Đăng ký</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control" placeholder="Tên người dùng"
              required />
          </div>
          <div className="mb-3">
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control" placeholder="Email"
              required />
          </div>
          <div className="mb-3">
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control" placeholder="Mật khẩu"
              required />
          </div>
          <div className="mb-3">
            <input type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control" placeholder="Số điện thoại"
              required />
          </div>
          <div className="mb-3">
            <input type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control" placeholder="Địa chỉ"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Xác nhận</button>
        </form>

      </div>
    </Layout>
  );
};

export default Register;
