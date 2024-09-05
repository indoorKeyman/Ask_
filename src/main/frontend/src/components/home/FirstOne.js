import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const MainDescription = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bolder;
  font-size: 4em;
  min-width: 850px;
  color: ${(props) => props.theme.colors.mainSubTitle};
  text-align: center;
`;

const StyledVideo = styled.video`
  width: 100vw; /* 전체 너비 */
  height: 90vh; /* 전체 높이 */
  object-fit: cover; /* 비디오 비율을 유지하면서 화면에 맞춤 */
  object-position: center;
  overflow: hidden;
`;

function FirstOne() {
  return (
    <>
      <Container>
        <MainDescription>
          더 빠르고 정확한
          <br />
          AI 맞춤형 솔루션
        </MainDescription>
        <StyledVideo loop autoPlay muted>
          <source
            src="https://cdn.pixabay.com/video/2020/03/03/33194-396036988_large.mp4"
            type="video/mp4"
          />
        </StyledVideo>
      </Container>
    </>
  );
}

export default FirstOne;
