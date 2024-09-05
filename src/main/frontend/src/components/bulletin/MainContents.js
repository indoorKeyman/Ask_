import styled from "styled-components";

const StyledContents = styled.div`
  width: 100%;
  border-top: 1px solid gray;
  padding: 6rem;
`;

const QuestionContent = styled.div`
  padding-bottom: 8rem;
  line-height: 4rem;
`;

const AnswerContent = styled.div`
  border-top: 1px solid gray;
  padding-top: 3rem;
`;

const AnswerCover = styled.div`
  border-radius: 10px;
  padding: 2.8rem;
  background-color: ${(props) => props.theme.colors.answerCover};
`;

const AnswerTop = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  padding-bottom: 2rem;
  border-bottom: 1px solid gray;
`;

const AnswerTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const AnswerManager = styled.div`
  text-align: end;
  font-weight: bold;
`;

const AnswerElementCover = styled.div`
  line-height: 4rem;
  padding-top: 2rem;
`;

function MainContents({ content, answerList }) {
  return (
    <>
      <StyledContents>
        <QuestionContent>
          {content
            ? content
                .match(/[^\.]+[\.]/g)
                .map((item, index) => <div key={index}>{item}</div>)
            : ""}
        </QuestionContent>
        <AnswerContent>
          {answerList && answerList.length > 0 ? (
            answerList.map((item) => (
              <AnswerCover key={item.answer_index}>
                <AnswerTop>
                  <AnswerTitle>{item.title}</AnswerTitle>
                  <AnswerManager>담당자 : {item.author.username}</AnswerManager>
                </AnswerTop>

                <AnswerElementCover>
                  {item.content
                    ? item.content
                        .match(/[^\.]+[\.]/g)
                        .map((factor, index) => <div key={index}>{factor}</div>)
                    : ""}
                </AnswerElementCover>
              </AnswerCover>
            ))
          ) : (
            <AnswerCover>답변을 준비중입니다!</AnswerCover>
          )}
        </AnswerContent>
      </StyledContents>
    </>
  );
}

export default MainContents;
