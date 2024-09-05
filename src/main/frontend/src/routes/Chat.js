import styled from "styled-components";
import StyledSelectionTab from "../components/bulletin/StyledSelectionTab";
import {
  ErrorMessage,
  MainContainer,
  StyledSubTitle,
  StyledTitle,
  TopContainer,
} from "../components/styledcomponents/styledcomponents";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const BottomContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 80% 10%;
  gap: 10px;
  width: 100%;

  height: 60vh;
  margin-top: 2.4rem;
`;

const StyledInputField = styled.form`
  bottom: 1rem;
  border: 0.18rem solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: grid;
  min-width: 52.8rem;
  grid-template-columns: 90% 10%;
  grid-template-rows: 1fr;
`;

const SyltedInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
  vertical-align: top;
  border: none;
  outline: none;
`;

const StyledLogField = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
`;

const HumanMessageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const RAGMessageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const StyledHumanMessage = styled.div`
  background-color: ${(props) => props.theme.colors.userMessageBox};
  border-radius: 10px;
  padding: 0.8rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0.8rem;
  max-width: 70%;
  line-height: 1.5;
`;

const StyledRAGMessage = styled.div`
  background-color: ${(props) => props.theme.colors.ragMessageBox};
  border-radius: 10px;
  padding: 0.8rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0.8rem;
  max-width: 70%;
  line-height: 1.5;
`;

const IsWaiting = styled.div`
  background-color: ${(props) => props.theme.colors.ragMessageBox};
  border-radius: 10px;
  padding: 0.8rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  min-height: 0.8rem;
  line-height: 1.5;
`;

function Chat() {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Updated log:", log);
    scrollToBottom();
  }, [log]);

  const onSubmit = async (data) => {
    setLoading(true);

    const newLog = { sender: "Human", message: data.question };

    setLog((prevLog) => [...prevLog, newLog]);

    try {
      const formData = new FormData();
      formData.append("question", data.question);
      reset();

      const response = await axios.post("http://3.34.31.192:5000/ask", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);

      const newLog = { sender: "RAG", message: response.data.answer };
      setLog((prevLog) => [...prevLog, newLog]);
      console.log(log);
    } catch (error) {
      console.log("Rag response error", error);
    }
  };

  return (
    <>
      <MainContainer>
        <TopContainer>
          <StyledTitle>CS CENTER</StyledTitle>
          <StyledSubTitle>궁금한 내용을 확인해보세요.</StyledSubTitle>
          <StyledSelectionTab />
        </TopContainer>
        <BottomContainer>
          <StyledLogField>
            {log.map((i, index) => {
              if (i.sender === "Human") {
                return (
                  <HumanMessageBox key={index}>
                    <StyledHumanMessage>{i.message}</StyledHumanMessage>
                  </HumanMessageBox>
                );
              } else {
                return (
                  <RAGMessageBox key={index}>
                    <StyledRAGMessage>{i.message}</StyledRAGMessage>
                  </RAGMessageBox>
                );
              }
            })}
            {loading && <IsWaiting>응답을 기다리는 중...</IsWaiting>}
            <div ref={messagesEndRef} />
          </StyledLogField>
          <StyledInputField onSubmit={handleSubmit(onSubmit)}>
            <SyltedInput
              placeholder="무엇이든 물어보세요."
              {...register("question", { required: true })}
            />

            <Button type="submit" sx={{ backgroundColor: "white" }}>
              Send
            </Button>
          </StyledInputField>
        </BottomContainer>
        {errors.question && <ErrorMessage>질문을 입력해주세요.</ErrorMessage>}
      </MainContainer>
    </>
  );
}

export default Chat;
