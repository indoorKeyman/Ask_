import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../components/styledcomponents/styledcomponents";
import TopContents from "../components/jobsDetail/TopContents";
import MainContents from "../components/jobsDetail/MainContents";

function JobsDetail() {
  const params = useParams();
  const [job, setJob] = useState([]);
  const fetchJob = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      const response = await axios.get(`/jobs/${params.id}`, {
        headers: {
          Authorization: `${token}`, // Bearer 토큰 방식
        },
      });

      setJob(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  const qualifications = job.qualifications
    ? job.qualifications.split("\\n").filter((i) => i.trim() !== "")
    : [];

  const responsibilities = job.responsibilities
    ? job.responsibilities.split("\\n").filter((i) => i.trim() !== "")
    : [];

  const preferences = job.preferences
    ? job.preferences.split("\\n").filter((i) => i.trim() !== "")
    : [];

  return (
    <>
      <MainContainer>
        <TopContents
          title={job.title}
          startDate={job.startDate}
          endDate={job.endDate}
        />
        <MainContents
          title={job.title}
          level={job.level}
          startDate={job.startDate}
          endDate={job.endDate}
          qualifications={qualifications}
          responsibilities={responsibilities}
          preferences={preferences}
        />
      </MainContainer>
    </>
  );
}

export default JobsDetail;
