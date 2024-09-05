import styled from "styled-components";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { Tooltip } from "@mui/material";

const SideLeftContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// const ArrowContainer = styled.div`
//   position: fixed;
//   top: 20rem;
//   left: 16rem;
// `;

function SideLeft() {
  return (
    <>
      <SideLeftContainer>
        {/* <ArrowContainer>
          <Tooltip title="뒤로가기" arrow>
            <ArrowBackIosIcon sx={{ fontSize: "3rem", cursor: "pointer" }} />
          </Tooltip>
        </ArrowContainer> */}
      </SideLeftContainer>
    </>
  );
}

export default SideLeft;
