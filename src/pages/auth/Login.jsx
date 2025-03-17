import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://192.168.23.249:8085/kefa/v1/auth/log-in",
        { username, password },
        config
      );

      // if (data.accessToken) {
      //   localStorage.setItem("authToken", data.accessToken);
        window.location.href = "https://www.kefaelectronic.com/aboutus.html#jnBqrKrjkrqijiqrprr";
      // }
    } catch (error) {
      alert(error.response?.data?.message || "로그인 실패");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-96">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-lg font-bold">로그인</h2>
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          로그인
        </button>
      </form>
      <div className="flex items-center justify-between mt-2 text-sm">
        <label className="flex items-center">
          <input type="checkbox" className="mr-1" /> 아이디 저장
        </label>
        <a href="#" className="text-blue-600">
          아이디/비밀번호 찾기
        </a>
      </div>
    </div>
  );
};

export default Login;
