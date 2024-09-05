import styled from "styled-components";
import {
  ErrorMessage,
  MainContainer,
  StyledInputTitle,
  StyledTitle,
} from "../components/styledcomponents/styledcomponents";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const JoinForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1.6rem;
  margin-top: 4rem;
  width: 30%;
`;

function Join() {
  const navigate = useNavigate();

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
      formData.append("email", data.email);

      const response = await axios.post("/join", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      console.log("Successful Join!");

      navigate("/login");
    } catch (error) {
      console.error("Join failed:", error);
    }
  };

  return (
    <>
      <MainContainer>
        <StyledTitle>Create account</StyledTitle>
        <JoinForm onSubmit={handleSubmit(onSubmit)}>
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
            <StyledInputTitle>Email</StyledInputTitle>
            <TextField
              fullWidth
              id="standard-Email-input"
              placeholder="Email를 입력해주세요."
              type="Email"
              autoComplete="current-Email"
              variant="standard"
              {...register("email", { required: true })}
            />
            {errors.email && <ErrorMessage>email를 입력해주세요.</ErrorMessage>}
          </div>

          <div>
            <Button fullWidth type="submit" variant="contained">
              가입하기
            </Button>
          </div>
        </JoinForm>
      </MainContainer>
    </>
  );
}

export default Join;
