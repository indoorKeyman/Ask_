import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  MainContainer,
  StyledInputTitle,
  StyledTitle,
} from "../components/styledcomponents/styledcomponents";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainContainerEdit = styled(MainContainer)`
  height: 80vh;
`;

const LoginForm = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 1.6rem;
  margin-top: 4rem;
  width: 20%;
`;

const FindJoin = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 6fr 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 10px;
`;

const FindLink = styled(Link)`
  text-align: end;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const JoinLink = styled(Link)`
  text-align: start;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: bold;
`;

const FindJoinCenter = styled.span`
  text-align: center;
`;

function Login() {
  const navigate = useNavigate();
  // const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("username", data.id);
      formData.append("password", data.password);

      const response = await axios.post("/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const token = response.headers["authorization"];

      localStorage.setItem("jwtToken", token);

      console.log("Login successful and JWT saved:", token);

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <MainContainerEdit>
        <StyledTitle>로그인</StyledTitle>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <StyledInputTitle>ID</StyledInputTitle>
            <TextField
              fullWidth
              id="standard-ID-input"
              placeholder="ID를 입력해주세요."
              type="ID"
              autoComplete="current-ID"
              variant="standard"
              {...register("id", { required: true })}
            />
            {errors.id && <ErrorMessage>ID를 입력해주세요.</ErrorMessage>}
          </div>

          <div>
            <StyledInputTitle>비밀번호</StyledInputTitle>
            <TextField
              fullWidth
              id="standard-password-input"
              placeholder="비밀번호를 입력해주세요."
              type="password"
              autoComplete="current-password"
              variant="standard"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>
            )}
          </div>

          <div>
            <Button fullWidth type="submit" variant="contained">
              로그인
            </Button>
            <FindJoin>
              <FindLink to="/">아이디/비밀번호 찾기</FindLink>
              <FindJoinCenter>|</FindJoinCenter>
              <JoinLink to="/join">회원가입</JoinLink>
            </FindJoin>
          </div>
        </LoginForm>
      </MainContainerEdit>
    </>
  );
}

export default Login;
