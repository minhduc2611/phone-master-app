import { ref, onValue, set } from "firebase/database";
import { appDatabase } from "../../firebase/config";

export const getUsersReference = (id: number) =>
  ref(appDatabase, `/users/${id}`);
export const getProjectsReference = (id: number) =>
  ref(appDatabase, `/users/${id}/projects`);

// const ref = appDatabase.ref(userReference);

export const oneTimeRead = async (updateState = (projects: any) => {}) => {
  const projectsRef = getProjectsReference(1);
  let data;
  onValue(projectsRef, (snapshot) => {
    let snapshotVal = snapshot.val();
    // realtime 🫣 !!!!
    console.log("snapshotVal", snapshotVal);
    data = snapshotVal.filter((el: any) => el !== undefined);
    updateState(data);
  });
};
