import styled from "styled-components";
import AskLogo from "../../img/ASK.png";

const TopContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 20% 60% 20%;
`;

const StyledTitleContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: flex-start;
  align-items: center;
  grid-template-rows: 60% 40%;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StyledTitle = styled.div`
  width: 32rem;
  font-size: 3.2rem;
  font-weight: bolder;
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

const PeriodSpan = styled.span`
  margin: 0rem 0.2rem;
`;

const StyledDDay = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 2.4rem;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.dDay};
`;

function TopContents({ title, startDate, endDate }) {
  return (
    <>
      <TopContainer>
        <img src={AskLogo} alt="logo" />
        <StyledTitleContainer>
          <StyledTitle>{title}</StyledTitle>
          <PeriodContainer>
            <PeriodFront>{startDate ? startDate.slice(0, 10) : ""}</PeriodFront>
            <PeriodReal>{startDate ? startDate.slice(11, 16) : ""}</PeriodReal>
            <PeriodSpan>~</PeriodSpan>
            <PeriodFront>{endDate ? endDate.slice(0, 10) : ""}</PeriodFront>
            <PeriodReal>{endDate ? endDate.slice(11, 16) : ""}</PeriodReal>
          </PeriodContainer>
        </StyledTitleContainer>
        <StyledDDay>
          D-
          {(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)}
        </StyledDDay>
      </TopContainer>
    </>
  );
}

export default TopContents;
