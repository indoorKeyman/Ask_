import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  CellId,
  CellTitle,
  CellTitleNLocation,
  StyledLink,
  StyledRow,
  TableConatainer,
} from "../styledcomponents/styledcomponents";
import PageNationController from "../common/PageNationController";
import { Button } from "@mui/material";
import CreateQuestionForm from "../Question/CreateQuestionForm";

const StyledContents = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const AuthorNCreateDate = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const CreateDate = styled.span`
  padding-left: 2rem;
  text-align: start;
  font-size: 0.8rem;
`;

const StyledAuthor = styled.span`
  padding-left: 2rem;
  text-align: start;
  font-size: 0.8rem;
`;

const TableTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 4.2rem;
`;

const FilterGroup = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem;
  padding-top: 2.4rem;
`;

function BulletinTable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log(open);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [itemSize, setItemSize] = useState();
  const [totalElements, setTotalElements] = useState();
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(0);
  const [questionsList, setQuestionList] = useState([]);

  const fetchQuestions = async () => {
    try {
      // localStorage에서 JWT 토큰을 가져옵니다.
      const token = localStorage.getItem("jwtToken");

      // Authorization 헤더에 JWT를 포함하여 요청을 보냅니다.
      const response = await axios.get(`/question/list?page=${page}`, {
        headers: {
          Authorization: `${token}`, // Bearer 토큰 방식
        },
      });

      // 성공적으로 데이터를 받았을 때 처리
      setTotalElements(response.data.totalElements);
      setItemSize(response.data.size);
      setTotalPage(response.data.totalPages);
      setQuestionList(response.data.content);
    } catch (error) {
      // 에러가 발생했을 때 처리
      console.error("Error fetching questions:", error);
    }
  };

  const fetchResponse = async () => {
    try {
      // localStorage에서 JWT 토큰을 가져옵니다.
      const token = localStorage.getItem("jwtToken");

      // Authorization 헤더에 JWT를 포함하여 요청을 보냅니다.
      const response = await axios.get(`/question/response?page=${page}`, {
        headers: {
          Authorization: `${token}`, // Bearer 토큰 방식
        },
      });

      // 성공적으로 데이터를 받았을 때 처리
      setTotalElements(response.data.totalElements);
      setItemSize(response.data.size);
      setTotalPage(response.data.totalPages);
      setQuestionList(response.data.content);
    } catch (error) {
      // 에러가 발생했을 때 처리
      console.error("Error fetching questions:", error);
    }
  };

  const fetchNoResponse = async () => {
    try {
      // localStorage에서 JWT 토큰을 가져옵니다.
      const token = localStorage.getItem("jwtToken");

      // Authorization 헤더에 JWT를 포함하여 요청을 보냅니다.
      const response = await axios.get(
        `/question/noresponse?page=${page}`,
        {
          headers: {
            Authorization: `${token}`, // Bearer 토큰 방식
          },
        }
      );

      // 성공적으로 데이터를 받았을 때 처리
      setTotalElements(response.data.totalElements);
      setItemSize(response.data.size);
      setTotalPage(response.data.totalPages);
      setQuestionList(response.data.content);
    } catch (error) {
      // 에러가 발생했을 때 처리
      console.error("Error fetching questions:", error);
    }
  };

  const pageControll = (index) => {
    setPage(index);
  };

  useEffect(() => {
    fetchQuestions();
  }, [page]);

  return (
    <>
      <TableTopContainer>
        <FilterGroup>
          <Button
            sx={{
              borderRadius: "40px",
              marginRight: "0.4rem",
              backgroundColor: "grey",
            }}
            variant="contained"
            onClick={fetchQuestions}
          >
            전체
          </Button>
          <Button
            sx={{
              borderRadius: "40px",
              marginRight: "0.4rem",
              backgroundColor: "grey",
            }}
            variant="contained"
            onClick={fetchResponse}
          >
            응답
          </Button>
          <Button
            sx={{
              borderRadius: "40px",
              marginRight: "0.4rem",
              backgroundColor: "grey",
            }}
            variant="contained"
            onClick={fetchNoResponse}
          >
            미응답
          </Button>
        </FilterGroup>

        <Button variant="contained" onClick={handleOpen}>
          질문등록
        </Button>

        <CreateQuestionForm open={open} handleClose={handleClose} />
      </TableTopContainer>

      <TableConatainer>
        {questionsList.map((item, index) => (
          <StyledLink
            key={item.question_index}
            to={`/bulletin/bulletindetail/${item.question_index}`}
          >
            <StyledRow>
              <CellId>{totalElements - itemSize * page - index}</CellId>

              <CellTitleNLocation>
                <CellTitle>{item.title}</CellTitle>
                <StyledContents>{item.content}</StyledContents>
              </CellTitleNLocation>

              <AuthorNCreateDate>
                <StyledAuthor>게시자 :{item.author.username}</StyledAuthor>
                <CreateDate>
                  게시일 : {item.createDate ? item.createDate.slice(0, 10) : ""}
                </CreateDate>
              </AuthorNCreateDate>
            </StyledRow>
          </StyledLink>
        ))}
        <PageNationController
          totalPage={totalPage}
          pageControll={pageControll}
        />
      </TableConatainer>
    </>
  );
}

export default BulletinTable;
