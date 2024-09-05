import { Button, Modal, TextField } from "@mui/material";
import styled from "styled-components";
import { StyledTitle } from "../styledcomponents/styledcomponents";
import { useForm } from "react-hook-form";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  width: 38%;
  min-width: 800px;
  height: 30rem;
  min-height: 28rem;
  border-radius: 10px;
`;

const StyledTitleEdit = styled(StyledTitle)`
  font-size: 2.4rem;
  padding: 1.4rem 0;
`;

const QuestionForm = styled.form`
  display: grid;
  align-items: center;
  grid-template-rows: 1fr 3fr 1fr;
  gap: 16px;
  width: 100%;
  margin: 0 auto;
`;

function CreateQuestionForm({ open, handleClose }) {
  const { register, handleSubmit } = useForm();


  const onSubmit = async (data) => {
    try {
      const token1 = localStorage.getItem("jwtToken");
      const decodedToken = jwtDecode(token1);
      console.log("username", decodedToken.username);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("username", decodedToken.username);

      const token = localStorage.getItem("jwtToken");
      console.log(token);

      const response = await axios.post("/question/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`, // Bearer 토큰 방식
        },
      });

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error("Create failed:", error);
    }
  };

  return (
    <>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <StyledTitleEdit>질문 등록</StyledTitleEdit>
          <QuestionForm onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="제목을 입력하세요."
              multiline
              {...register("title", { required: true })}
            />

            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="내용"
              multiline
              rows={9}
              {...register("content", { required: true })}
            />

            <Button fullWidth type="submit" variant="contained">
              등록하기
            </Button>
          </QuestionForm>
        </ModalContainer>
      </StyledModal>
    </>
  );
}

export default CreateQuestionForm;
