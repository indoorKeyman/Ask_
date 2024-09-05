import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
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

const DDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.dDay};
`;

const FilterGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem;
  padding-top: 2.4rem;
`;

function JobsTable() {
  const [itemSize, setItemSize] = useState();
  const [totalElements, setTotalElements] = useState();
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(0);
  const [jobsList, setJobsList] = useState([]);

  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      // localStorage에서 JWT 토큰을 가져옵니다.
      const token = localStorage.getItem("jwtToken");
      console.log(token);

      // Authorization 헤더에 JWT를 포함하여 요청을 보냅니다.
      const response = await axios.get(`/jobs/list?page=${page}`, {
        headers: {
          Authorization: `${token}`, // Bearer 토큰 방식
        },
      });

      // 성공적으로 데이터를 받았을 때 처리
      setTotalElements(response.data.totalElements);
      setItemSize(response.data.size);
      setTotalPage(response.data.totalPages);
      setJobsList(response.data.content);
    } catch (error) {
      // 에러가 발생했을 때 처리
      console.error("Error fetching questions:", error);
    }
  };

  const fetchRecruit = async () => {
    try {
      // localStorage에서 JWT 토큰을 가져옵니다.
      const token = localStorage.getItem("jwtToken");
      console.log(token);

      // Authorization 헤더에 JWT를 포함하여 요청을 보냅니다.
      const response = await axios.get(`/jobs/recruit?page=${page}`, {
        headers: {
          Authorization: `${token}`, // Bearer 토큰 방식
        },
      });

      // 성공적으로 데이터를 받았을 때 처리
      setTotalElements(response.data.totalElements);
      setItemSize(response.data.size);
      setTotalPage(response.data.totalPages);
      setJobsList(response.data.content);
    } catch (error) {
      // 에러가 발생했을 때 처리
      console.error("Error fetching questions:", error);
    }
  };

  const fetchEndRecruit = async () => {
    try {
      // localStorage에서 JWT 토큰을 가져옵니다.
      const token = localStorage.getItem("jwtToken");
      console.log(token);

      // Authorization 헤더에 JWT를 포함하여 요청을 보냅니다.
      const response = await axios.get(`/jobs/endrecruit?page=${page}`, {
        headers: {
          Authorization: `${token}`, // Bearer 토큰 방식
        },
      });

      // 성공적으로 데이터를 받았을 때 처리
      setTotalElements(response.data.totalElements);
      setItemSize(response.data.size);
      setTotalPage(response.data.totalPages);
      setJobsList(response.data.content);
    } catch (error) {
      // 에러가 발생했을 때 처리
      console.error("Error fetching questions:", error);
    }
  };

  const checkJWT = () => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login", { state: { previousPage: "/jobs" } });
    } else {
      return true;
    }
  };

  const pageControll = (index) => {
    setPage(index);
  };

  useEffect(() => {
    if (checkJWT()) {
      fetchJobs();
    }
  }, []);

  return (
    <>
      <FilterGroup>
        <Button
          variant="contained"
          sx={{
            borderRadius: "40px",
            marginRight: "0.4rem",
            backgroundColor: "gray",
          }}
          onClick={fetchJobs}
        >
          전체
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "40px",
            marginRight: "0.4rem",
            backgroundColor: "gray",
          }}
          onClick={fetchRecruit}
        >
          모집
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "40px",
            marginRight: "0.4rem",
            backgroundColor: "gray",
          }}
          onClick={fetchEndRecruit}
        >
          마감
        </Button>
      </FilterGroup>
      <TableConatainer>
        {jobsList.map((item, index) => (
          <StyledLink
            key={item.jobs_index}
            to={`/jobs/jobsdetail/${item.jobs_index}`}
          >
            <StyledRow>
              <CellId>{totalElements - itemSize * page - index}</CellId>
              <CellTitleNLocation>
                <CellTitle>{item.title}</CellTitle>
                <div>{item.location}</div>
              </CellTitleNLocation>

              <DDay>
                <span>D-</span>
                {(new Date(item.endDate) - new Date(item.startDate)) /
                  (1000 * 60 * 60 * 24)}
              </DDay>
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

export default JobsTable;
