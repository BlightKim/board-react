import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [requestResult, setRequestResult] = useState<string>("");
  const signUpHandler = () => {
    const data = {
      userEMail: "asd@naver.com",
      userPassword: "qwer1234",
      userNickname: "John doe",
      userPhoneNumber: "010-1111-9999",
      userAddress: "대한민국 서울시",
      userAddressDetail: "서초구",
    };

    axios
      .post("http://localhost:4000/api/auth/signUp", data)
      .then((response) => {
        setRequestResult("success!!");
      })
      .catch((error) => {
        setRequestResult("Failed");
      });
  };
  return (
    <div>
      <h3>{requestResult}</h3>
      <button
        onClick={() => {
          signUpHandler();
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default SignUp;
