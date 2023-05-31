import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const RegisterWrapper = styled.div`
  max-width: 300px;
`;

const RegisterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
const Logo = styled.img``;

const RegisterForm = styled.form``;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  position: relative;
`;
const InputLabel = styled.label`
  /* border: 1px solid black; */
  margin: 4px 0;
  font-size: 14px;
`;

const ShowPassword = styled.div`
  background-color: white;
  border: none;
  width: fit-content;
  font-size: 10px;
  position: absolute;
  top: 36px;
  right: 10px;
`;

const InputField = styled.input`
  border: 1px solid #dedede;
  padding: 8px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  border: none;
  background-color: #ff7043;
  color: white;
  font-weight: 600;
`;

const PrivacyAgreement = styled.div`
  font-size: 13px;
  color: #a3a2a2;
`;

const AccountConfirmation = styled.div`
  font-size: 13px;
  color: #696868;
  margin-bottom: 10px;
`;

function Registered() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setIsfetching] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

  const navigate = useNavigate();

  const SubmitClickHandler = async (e) => {
    e.preventDefault();
    setIsfetching(true);
    await axios
      .post("https://mybasket-server.jerryroy.repl.co/api/auth/register", {
        username: userName,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setUserName("");
        setEmail("");
        setPassword("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong, please try again later",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .finally(() => {
        setIsfetching(false);
      });
  };

  const isEmpty = () => {
    return !userName || !password || !email;
  };

  const ShowPasswordToggle = () => {
    if (showPasswordToggle) {
      setShowPasswordToggle(false);
    } else {
      setShowPasswordToggle(true);
    }
  };

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <Link to="/">
          <RegisterLogo>
            <Logo
              src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
              alt=""
            />
          </RegisterLogo>
        </Link>
        <RegisterForm onSubmit={SubmitClickHandler}>
          <InputSection>
            <InputLabel>USERNAME</InputLabel>
            <InputField
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputSection>
          <InputSection>
            <InputLabel>EMAIL</InputLabel>
            <InputField
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputSection>
          <InputSection>
            <InputLabel>PASSWORD</InputLabel>
            <InputField
              placeholder="password"
              value={password}
              type={showPasswordToggle ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ShowPassword onClick={ShowPasswordToggle}>
              {showPasswordToggle ? "HIDE" : "SHOW"}
            </ShowPassword>
          </InputSection>
          <SubmitBtn type="Submit" disabled={isFetching || isEmpty()}>
            {isFetching ? <ClipLoader color="white" size={15} /> : "REGISTER"}
          </SubmitBtn>
        </RegisterForm>
        <AccountConfirmation>
          DO YOU HAVE A ACCOUNT? <Link to="/login"> SIGNIN</Link>
        </AccountConfirmation>
        <PrivacyAgreement>
          By continuing, you agree to Firstcry's Conditions of Use and Privacy
          Notice.
        </PrivacyAgreement>
      </RegisterWrapper>
    </RegisterContainer>
  );
}

export default Registered;
