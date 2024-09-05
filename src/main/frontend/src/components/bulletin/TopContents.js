import styled from "styled-components";

const TopContainer = styled.div`
  padding: 2rem;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 15% 60% 25%;
`;

const QustionID = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ResponseCheckY = styled.div`
  padding-right: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;
const ResponseCheckN = styled.div`
  padding-right: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.noResponse};
`;

const QuestionTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

const AuthorPeriodContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
`;

const AuthorContainer = styled.div`
  font-weight: bold;
`;

const PeriodContainer = styled.div`
  display: flex;
`;

const PeriodFront = styled.div`
  font-weight: bold;
`;

const PeriodReal = styled.div`
  margin-left: 0.4rem;
`;

function TopContents({
  question_index,
  answerList,
  title,
  authorName,
  createDate,
}) {
  return (
    <>
      <TopContainer>
        <QustionID>{question_index}</QustionID>
        <TitleContainer>
          {answerList && answerList.length > 0 ? (
            <ResponseCheckY>[응답]</ResponseCheckY>
          ) : (
            <ResponseCheckN>[미응답]</ResponseCheckN>
          )}

          <QuestionTitle>{title}</QuestionTitle>
        </TitleContainer>
        <AuthorPeriodContainer>
          <AuthorContainer>게시자 : {authorName}</AuthorContainer>

          <PeriodContainer>
            <PeriodFront>
              게시일 : {createDate ? createDate.slice(0, 10) : ""}
            </PeriodFront>
            <PeriodReal>
              {createDate ? createDate.slice(11, 16) : ""}
            </PeriodReal>
          </PeriodContainer>
        </AuthorPeriodContainer>
      </TopContainer>
    </>
  );
}

export default TopContents;
