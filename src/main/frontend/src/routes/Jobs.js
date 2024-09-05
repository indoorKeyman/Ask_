import styled from "styled-components";
import {
  MainContainer,
  StyledSubTitle,
  StyledTitle,
  TopContainer,
} from "../components/styledcomponents/styledcomponents";
import JobsTable from "../components/jobs/JobsTable";

const BottomContainer = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 4fr;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
`;

function Jobs() {
  return (
    <>
      <MainContainer>
        <TopContainer>
          <StyledTitle>JOB CENTER</StyledTitle>
          <StyledSubTitle>관심있는 채용을 확인해보세요.</StyledSubTitle>
        </TopContainer>
        <BottomContainer>
          <JobsTable />
        </BottomContainer>
      </MainContainer>
    </>
  );
}

export default Jobs;
