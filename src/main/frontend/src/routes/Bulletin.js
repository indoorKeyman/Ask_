import styled from "styled-components";
import BulletinTable from "../components/bulletin/BulletinTable";
import {
  MainContainer,
  StyledSubTitle,
  StyledTitle,
  TopContainer,
} from "../components/styledcomponents/styledcomponents";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StyledSelectionTab from "../components/bulletin/StyledSelectionTab";

const BottomContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

function Bulletin() {
  const navigate = useNavigate();

  const checkJWT = () => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login", { state: { previousPage: "/bulletin" } });
    }
  };

  useEffect(() => {
    checkJWT();
  }, []);

  return (
    <>
      <MainContainer>
        <TopContainer>
          <StyledTitle>CS CENTER</StyledTitle>
          <StyledSubTitle>궁금한 내용을 확인해보세요.</StyledSubTitle>
          <StyledSelectionTab />
        </TopContainer>
        <BottomContainer>
          <BulletinTable />
        </BottomContainer>
      </MainContainer>
    </>
  );
}

export default Bulletin;
