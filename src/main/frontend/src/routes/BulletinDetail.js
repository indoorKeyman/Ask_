import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../components/styledcomponents/styledcomponents";
import TopContents from "../components/bulletin/TopContents";
import MainContents from "../components/bulletin/MainContents";

function BulletinDetail() {
  const params = useParams();
  const [question, setQuestion] = useState([]);
  const [questionAuthorName, setQuestionAuthorName] = useState("");

  const fetchJob = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      const response = await axios.get(`/question/${params.id}`, {
        headers: {
          Authorization: `${token}`, // Bearer 토큰 방식
        },
      });

      setQuestionAuthorName(response.data.author.username);
      setQuestion(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <>
      <MainContainer>
        <TopContents
          question_index={question.question_index}
          answerList={question.answerList}
          title={question.title}
          authorName={questionAuthorName}
          createDate={question.createDate}
        />

        <MainContents
          content={question.content}
          answerList={question.answerList}
        />
      </MainContainer>
    </>
  );
}

export default BulletinDetail;
