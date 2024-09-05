import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

import AskLogo from "../../img/ASK.png";
import { jwtDecode } from "jwt-decode";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  min-width: 900px;
  max-width: 100%;
  width: 100%;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
`;

const PathContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-left: 2em;
`;

const PathItem = styled.div`
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  padding: 16px 0.8rem 0 0;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  &.active {
    color: ${(props) => props.theme.colors.primary};
    border-bottom: solid ${(props) => props.theme.colors.primary} 0.2rem;
  }
`;

const PrivateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-right: 2em;
`;

const PrivateItem = styled.div`
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPrivateNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.icon1};
  padding: 20px;
  &:hover {
    color: ${(props) => props.theme.colors.icon2};
  }
  &.active {
    color: ${(props) => props.theme.colors.icon2};
  }
`;

const StyledPrivateDiv = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.icon1};
  padding: 20px;
  &:hover {
    color: ${(props) => props.theme.colors.icon2};
  }
`;

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    console.log("JWT removed and user logged out.");
    setLoggedIn(false);
    navigate("/login");
    alert("로그아웃 되었습니다.");
  };

  const isLoggedIn = () => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      return false;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        localStorage.removeItem("jwtToken");
        return false;
      }

      console.log("jwt exit");

      return true;
    } catch (error) {
      console.error("Invalid token");
      return false;
    }
  };

  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  return (
    <>
      <NavContainer>
        <PathContainer>
          <PathItem>
            <StyledLink to="/">
              <img src={AskLogo} alt="Logo" />
            </StyledLink>
          </PathItem>

          <PathItem>
            <StyledNavLink to="/about">회사소개</StyledNavLink>
          </PathItem>

          <PathItem>
            <StyledNavLink to="/jobs">채용</StyledNavLink>
          </PathItem>

          <PathItem>
            <StyledNavLink to="/bulletin">고객센터</StyledNavLink>
          </PathItem>
        </PathContainer>

        <PrivateContainer>
          <PrivateItem>
            <StyledPrivateDiv>
              <Tooltip title="Notifications" arrow>
                <NotificationsIcon />
              </Tooltip>
            </StyledPrivateDiv>
          </PrivateItem>

          <PrivateItem>
            <StyledPrivateNavLink to="/mypage" end>
              <Tooltip title="My Page" arrow>
                <PersonIcon />
              </Tooltip>
            </StyledPrivateNavLink>
          </PrivateItem>

          {loggedIn ? (
            <PrivateItem>
              <StyledPrivateDiv onClick={handleLogout}>
                <Tooltip title="Logout" arrow>
                  <LogoutIcon />
                </Tooltip>
              </StyledPrivateDiv>
            </PrivateItem>
          ) : (
            <PrivateItem>
              <StyledPrivateNavLink to="/login" end>
                <Tooltip title="Login" arrow>
                  <LoginIcon />
                </Tooltip>
              </StyledPrivateNavLink>
            </PrivateItem>
          )}
        </PrivateContainer>
      </NavContainer>
    </>
  );
}

export default Navbar;
