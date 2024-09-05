import styled from "styled-components";
import {
  MainContainer,
  StyledTitle,
} from "../components/styledcomponents/styledcomponents";
import MypageTable from "../components/MyPage/MypageTable";
import human from "../img/human.jpg";
import human2 from "../img/human2.jpg";
import human3 from "../img/human3.jpg";

import { useEffect, useState } from "react";

const TopContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr;
  gap: 4rem;
  justify-items: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 6rem;
`;

const MypageTableContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

const StyledImag = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 24px;
`;

function MyPage() {
  const [randomIMG, setRadomIMG] = useState();

  useEffect(() => {
    const imgList = [human, human2, human3];
    const randomNum = Math.floor(Math.random() * 3);
    setRadomIMG(imgList[randomNum]);
  }, []);

  return (
    <>
      <MainContainer>
        <TopContainer>
          <StyledTitle>마이페이지</StyledTitle>
        </TopContainer>
        <BottomContainer>
          <StyledImag src={randomIMG} alt="mypage" />
          <MypageTableContainer>
            <MypageTable />
          </MypageTableContainer>
        </BottomContainer>
      </MainContainer>
    </>
  );
}

export default MyPage;
