import { Outlet, useMatch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "./theme";
import SideLeft from "./components/sidebar/SideLeft";
import SideRight from "./components/sidebar/SideRight";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;

const MainContents = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  width: 100%;
  min-width: 1800px;
  height: calc(100vh-90px);
`;

function App() {
  const match1 = useMatch("/");
  const match2 = useMatch("/login");

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     // localStorage에서 JWT 토큰 삭제
  //     localStorage.removeItem("jwtToken");
  //   };

  //   // 페이지를 떠나기 전 이벤트 리스너 추가
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />

        {match1 || match2 ? (
          <Outlet />
        ) : (
          <MainContents>
            <SideLeft />
            <Outlet />
            <SideRight />
          </MainContents>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
