import { useLayoutEffect, useState } from "react";
import projectsAPI, { oneTimeRead } from ".";
import { uuid } from "@/common/common-utils";
import { FORMAT, getCurrentTime } from "@/common/moment-utils";
import { Project } from "@/common/type";

interface States {
  loading: boolean,
  error: string | null,
  projects: Project[]
}
export const useFetchProject = () => {
  const [projectState, setProjectState] = useState<States>({
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
export const useManageProject = () => {
  const addOneProject = (name: Project["name"], type: Project["type"]) => {
    const time = getCurrentTime(FORMAT.CREATED_DATE);
    const id = uuid();
    let newProject = {
      id: id,
      inProgress: false,
      name,
      type,
      createdDate: time,
    } as Project;
    return projectsAPI.addOneProject(newProject);
  };
  return { addOneProject };
};
