import { Button } from "@mui/material";
import styled from "styled-components";

const PageController = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.4rem;
`;

function PageNationController({ totalPage, pageControll }) {
  return (
    <>
      <PageController>
        {Array.from({ length: totalPage }, (_, index) => (
          <Button size="small" key={index} onClick={() => pageControll(index)}>
            {index + 1}
          </Button>
        ))}
      </PageController>
    </>
  );
}

export default PageNationController;
