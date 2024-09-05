import styled from "styled-components";
import aiBtn from "../../img/ai_btn.png";
import topBtn from "../../img/top_btn.png";
import { Link } from "react-router-dom";

const SideRightContainer = styled.div`
  min-width: 400px;
  width: 100%;
  height: 100%;
`;

const BtnGroup = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  padding-top: 30%;
`;

const AiBtn = styled.img`
  cursor: pointer;
`;

const TopBtn = styled.img`
  cursor: pointer;
`;

function SideRight() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SideRightContainer>
        <BtnGroup>
          <Link to="/bulletin/chat">
            <AiBtn src={aiBtn} alt="ai btn" />
          </Link>
          <TopBtn onClick={handleClick} src={topBtn} alt="top btn" />
        </BtnGroup>
      </SideRightContainer>
    </>
  );
}

export default SideRight;
