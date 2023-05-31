import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { LoginUser } from "../../redux/Api";
import Swal from "sweetalert2";

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const LoginWrapper = styled.div`
  max-width: 300px;
`;

const LoginLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
const Logo = styled.img``;

const LoginForm = styled.form``;

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
  cursor: pointer;
`;

const ShowPassword = styled.div`
  background-color: white;
  border: none;
  width: fit-content;
  font-size: 10px;
  position: absolute;
  top: 36px;
  right: 10px;
  cursor: pointer;
`;

const AccountConfirmation = styled.div`
  font-size: 13px;
  color: #696868;
  margin-bottom: 10px;
`;

const PrivacyAgreement = styled.div`
  font-size: 13px;
  color: #a3a2a2;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
`;

function Login() {
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, error, isFetching } = useSelector((state) => state.user);

  const ShowPasswordToggle = () => {
    if (showPasswordToggle) {
      setShowPasswordToggle(false);
    } else {
      setShowPasswordToggle(true);
    }
  };

  const getUser = async (e) => {
    e.preventDefault();
    LoginUser(dispatch, { userName, password });
  };

  const isEmpty = () => {
    return !userName || !password;
  };

  useEffect(() => {
    if (currentUser) {
      setPassword("");
      setUserName("");
      navigate("/");
    }
    if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong, please try again later",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [currentUser, error]);

  const LoginGuest = () => {
    setUserName("admin");
    setPassword("admin23eww");
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Link to="/">
          <LoginLogo>
            <Logo
              src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
              alt=""
            />
          </LoginLogo>
        </Link>
        <LoginForm onSubmit={getUser}>
          <InputSection>
            <InputLabel>USERNAME</InputLabel>
            <InputField
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputSection>
          <InputSection>
            <InputLabel>PASSWORD</InputLabel>
            <InputField
              type={showPasswordToggle ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ShowPassword onClick={ShowPasswordToggle}>
              {showPasswordToggle ? "HIDE" : "SHOW"}
            </ShowPassword>
          </InputSection>
          <PrivacyAgreement>
            By continuing, you agree to Firstcry's Conditions of Use and Privacy
            Notice.
          </PrivacyAgreement>
          <SubmitBtn type="Submit" disabled={isFetching || isEmpty()}>
            {isFetching ? <ClipLoader color="white" size={15} /> : "LOGIN"}
          </SubmitBtn>
        </LoginForm>
        <AccountConfirmation>
          DO YOU HAVE A ACCOUNT? <Link to="/register"> SignUp</Link>
        </AccountConfirmation>

        <AccountConfirmation type="guest">
          LOGIN AS A GUEST <Button onClick={() => LoginGuest()}> GUEST </Button>
        </AccountConfirmation>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
