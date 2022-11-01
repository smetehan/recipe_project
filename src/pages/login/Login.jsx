import React from "react";
import LoginContainer, {
  Header,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import { FormContainer } from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const userInfo = {
    username: "sevket",
    password: 1234,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    // console.log(userInfo);
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<SMP/>"}RECIPE </Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="ENTER USERNAME" type="text" />
          <StyledInput placeholder="ENTER PASSWORD" type="password" />
          <StyledButton type="submit">LOG IN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
