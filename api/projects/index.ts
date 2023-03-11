import { ref, onValue, push } from "firebase/database";
import { Project } from "@/common/type";
import { appDatabase } from "@/firebase/config";

const getUsersReference = (id: number) =>
  ref(appDatabase, `/users/${id}`);

const getProjectsReference = (user_id: number) =>
  ref(appDatabase, `/users/${user_id}/projects`);

// const ref = appDatabase.ref(userReference);

export const oneTimeRead = async (updateState = (projects: Project[]) => {}) => {
  const projectsRef = getProjectsReference(1);
  let data: Project[];
  onValue(projectsRef, (snapshot) => {
    let snapshotVal = snapshot.val() as Project[];
    // realtime 🫣 !!!!
    console.log("snapshotVal", snapshotVal);
    data = snapshotVal ? Object.values(snapshotVal) : [];
    console.log("data", data);
    updateState(data);
  });
};
export const addOneProject = async (project: Project) => {
  const newReference = getProjectsReference(1);

  console.log("Auto generated key: ", newReference.key);

  push(newReference, project).then(() => console.log("Data pushed."));
};
const projectsAPI = {
  oneTimeRead,
  addOneProject
}

export default projectsAPI