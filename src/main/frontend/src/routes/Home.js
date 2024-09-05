import styled from "styled-components";
import FirstOne from "../components/home/FirstOne";
// import SecondOne from "../components/home/SecondOne";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <Container>
        <FirstOne />
      </Container>
    </>
  );
}

export default Home;
