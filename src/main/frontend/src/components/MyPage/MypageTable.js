import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const CustomTableRow = styled(TableRow)`
  &:hover {
    background-color: ${(props) => props.theme.colors.listSelectSecondary};
  }
`;

const CellTitle = styled.div`
  font-weight: bold;
`;

function MypageTable() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  const fetchUserInfo = async () => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login", { state: { previousPage: "/mypage" } });
    }

    console.log("jwt get");

    try {
      const decodedToken = jwtDecode(token);
      console.log("decodedToken", decodedToken);
      console.log("username", decodedToken.username);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        localStorage.removeItem("jwtToken");
        return false;
      }

      console.log("jwt exit");
      setUserInfo(decodedToken);
    } catch (error) {
      console.error("Invalid token");
      return false;
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <Table
        sx={{ minWidth: 650, marginLeft: "8rem" }}
        aria-label="simple table"
      >
        <TableHead></TableHead>
        <TableBody>
          <CustomTableRow
            key={userInfo.username}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="center">UserName</TableCell>
            <TableCell align="center" component="th" scope="row">
              <CellTitle>{userInfo.username}</CellTitle>
            </TableCell>
          </CustomTableRow>

          <CustomTableRow
            key={userInfo.email}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">
              <CellTitle>{userInfo.email}</CellTitle>
            </TableCell>
          </CustomTableRow>

          <CustomTableRow
            key={userInfo.role}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">
              <CellTitle>{userInfo.role}</CellTitle>
            </TableCell>
          </CustomTableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default MypageTable;
