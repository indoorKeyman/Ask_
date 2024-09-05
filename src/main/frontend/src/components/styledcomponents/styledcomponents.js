import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  min-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3.4em 1.2em;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3.4em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.text};
`;

export const StyledInputTitle = styled.div`
  margin: 1rem 0;
`;

export const ErrorMessage = styled.h1`
  margin-top: 0.8rem;
  color: ${(props) => props.theme.colors.textAlert};
`;

export const TopContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;
  align-items: center;
`;

export const StyledSubTitle = styled.span`
  text-align: center;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.2em;
  font-weight: 400;
  padding-bottom: 1rem;
`;

export const StyledTab = styled.div`
  width: 14rem;
  height: 2rem;
  border-radius: 40px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 30% 10% 30%;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.buttonSencondary};
  font-weight: bold;
`;

export const StyledTabText = styled.h1`
  text-align: center;
`;

export const TableConatainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;
`;

export const StyledRow = styled.div`
  padding: 0.6rem 0;
  width: 100%;
  height: 4.8rem;
  display: grid;
  grid-template-columns: 16% 64% 20%;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: ${(props) => props.theme.colors.listSelectSecondary};
  }
`;

export const CellId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const CellTitleNLocation = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 1fr 1fr; /* 두 개의 행을 동일한 비율로 설정 */
  grid-template-columns: 1fr;
`;

export const CellTitle = styled.div`
  font-weight: bold;
`;
