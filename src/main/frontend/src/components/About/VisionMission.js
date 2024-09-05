import FlareIcon from "@mui/icons-material/Flare";
import GroupsIcon from "@mui/icons-material/Groups";
import styled from "styled-components";

const StyledVisionMission = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  padding: 6rem 0;
`;

const VM = styled.div`
  padding: 1rem;
  border: 1.8px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.4fr 1.8fr;
  gap: 0.4rem;
`;

const VMIcon = styled.div`
  background-color: white;
  position: relative;
  top: -3.4rem;
  font-size: 3.4rem;
  font-weight: 600;
`;

const VMTitle = styled.div`
  position: relative;
  top: -1.2rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const VMContents = styled.div`
  line-height: 1.4rem;
  text-align: start;
  padding: 0 4rem;
  font-size: 1rem;
`;

function VisionMission() {
  return (
    <>
      <StyledVisionMission>
        <VM>
          <VMIcon>
            <FlareIcon sx={{ fontSize: "3.4rem", paddingRight: "1rem" }} />
            Vision
          </VMIcon>
          <VMTitle>모두의 가능성을 현실로</VMTitle>
          <VMContents>
            ASK는 기술 혁신을 통해 모든 사람에게 새로운 기회를 제공합니다.
            우리는 가능성을 현실로 바꾸는 기업이 되겠습니다.
          </VMContents>
        </VM>

        <VM>
          <VMIcon>
            <GroupsIcon sx={{ fontSize: "3.4rem", paddingRight: "1rem" }} />
            Mission
          </VMIcon>
          <VMTitle>기술로 세상에 가치를 더하다</VMTitle>
          <VMContents>
            우리는 기술로 세상을 변화시키고, 고객의 성공을 위해 최선을 다합니다.
            고객의 성공이 곧 우리의 성공입니다.
          </VMContents>
        </VM>
      </StyledVisionMission>
    </>
  );
}

export default VisionMission;
