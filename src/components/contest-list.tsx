
import { useEffect, useState } from "react";
import ContestPreview from "./contest-preview";
import { fetchContest } from "../api-client";

const ContentList = ({ iniitialContests }) => {
  const [contests, setContests] = useState(iniitialContests);

  useEffect(() => {
    fetchContest().then((data) => {
      setContests(data.contests);
    });
  },[]);

  return (
    <div className="contests-list">
      {contests.map((contest) => {
        return (
          <ContestPreview key={contest.id} contest={contest} />
        );
      })}
    </div>
  );
};

export default ContentList;
