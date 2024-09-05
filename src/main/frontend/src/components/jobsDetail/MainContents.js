import styled from "styled-components";

const StyledContents = styled.div`
  width: 100%;
  border-top: 1px solid gray;
  padding: 6rem 4rem;
`;

const StyledFirstInfo = styled.div`
  display: grid;
  grid-template-columns: 0.16fr 0.04fr 1fr;
  grid-template-rows: 1fr;
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`;

const StyledFirstInfoFirst = styled.div`
  font-weight: bold;
`;

const StyledFirstInfoSecond = styled.div`
  font-weight: bold;
  text-align: center;
`;

const StyledSecondInfo = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const StyledSecondInfoFirst = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const StyledSecondInfoSecond = styled.div`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

function MainContents({
  title,
  level,
  startDate,
  endDate,
  qualifications,
  responsibilities,
  preferences,
}) {
  return (
    <>
      <StyledContents>
        <StyledFirstInfo>
          <StyledFirstInfoFirst>위 치</StyledFirstInfoFirst>
          <StyledFirstInfoSecond>:</StyledFirstInfoSecond>
          <div>{title}</div>
        </StyledFirstInfo>
        <StyledFirstInfo>
          <StyledFirstInfoFirst>직 급</StyledFirstInfoFirst>
          <StyledFirstInfoSecond>:</StyledFirstInfoSecond>
          <div>{level}</div>
        </StyledFirstInfo>
        <StyledFirstInfo>
          <StyledFirstInfoFirst>모집 시작일</StyledFirstInfoFirst>
          <StyledFirstInfoSecond>:</StyledFirstInfoSecond>
          <div>{startDate ? startDate.slice(0, 10) : ""}</div>
        </StyledFirstInfo>
        <StyledFirstInfo>
          <StyledFirstInfoFirst>모집 종료일</StyledFirstInfoFirst>
          <StyledFirstInfoSecond>:</StyledFirstInfoSecond>
          <div>{endDate ? endDate.slice(0, 10) : ""}</div>
        </StyledFirstInfo>

        <StyledSecondInfo>
          <div>
            <StyledSecondInfoFirst>담당업무</StyledSecondInfoFirst>
            {qualifications.map((item, index) => (
              <StyledSecondInfoSecond key={index}>
                {item}
              </StyledSecondInfoSecond>
            ))}
          </div>

          <div>
            <StyledSecondInfoFirst>자격요건</StyledSecondInfoFirst>
            {responsibilities.map((item, index) => (
              <StyledSecondInfoSecond key={index}>
                {item}
              </StyledSecondInfoSecond>
            ))}
          </div>

          <div>
            <StyledSecondInfoFirst>우대사항</StyledSecondInfoFirst>
            {preferences.map((item, index) => (
              <StyledSecondInfoSecond key={index}>
                {item}
              </StyledSecondInfoSecond>
            ))}
          </div>
        </StyledSecondInfo>
      </StyledContents>
    </>
  );
}

export default MainContents;
