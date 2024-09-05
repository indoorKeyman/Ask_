import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Bulletin from "./routes/Bulletin";
import About from "./routes/About";
import Chat from "./routes/Chat";
import MyPage from "./routes/MyPage";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Jobs from "./routes/Jobs";
import JobsDetail from "./routes/JobsDetail";
import BulletinDetail from "./routes/BulletinDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "jobs/jobsdetail/:id",
        element: <JobsDetail />,
      },
      {
        path: "bulletin",
        children: [
          {
            path: "",
            element: <Bulletin />,
          },
          {
            path: "chat",
            element: <Chat />,
          },
        ],
      },
      {
        path: "bulletin/bulletindetail/:id",
        element: <BulletinDetail />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
