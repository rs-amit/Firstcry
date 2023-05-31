import React from "react";
import styled from "styled-components";

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
`;

const PrivacyAgreement = styled.div`
  font-size: 13px;
  color: #a3a2a2;
`;

function Registered() {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterLogo>
          <Logo
            src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
            alt=""
          />
        </RegisterLogo>
        <RegisterForm>
          <InputSection>
            <InputLabel>USERNAME</InputLabel>
            <InputField type="text" />
          </InputSection>
          <InputSection>
            <InputLabel>EMAIL</InputLabel>
            <InputField type="text" />
          </InputSection>
          <InputSection>
            <InputLabel>PASSWORD</InputLabel>
            <InputField type="password" />
          </InputSection>
          <SubmitBtn type="Submit">REGISTER</SubmitBtn>
        </RegisterForm>
        <PrivacyAgreement>
          By continuing, you agree to Firstcry's Conditions of Use and Privacy
          Notice.
        </PrivacyAgreement>
      </RegisterWrapper>
    </RegisterContainer>
  );
}

export default Registered;
