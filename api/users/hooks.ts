import { useEffect, useLayoutEffect, useState } from "react";
import { oneTimeRead } from "./projects";

export const useProject = () => {
  const [projectState, setProjectState] = useState({
    loading: false,
    error: null,
    projects: [],
  });

  const setProjectStatePartial = (param: any) => {
    setProjectState((prev) => ({ ...prev, ...param }));
  };
  const callbackGetProjectsRealtime = (projects: any) => {
    console.log("callbackGetProjectsRealtime", projects);
    setProjectStatePartial({ projects: projects, loading: false });
  };
  const fetchData = async () => {
    setProjectStatePartial({ loading: true });
    await oneTimeRead(callbackGetProjectsRealtime);
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return projectState;
};
