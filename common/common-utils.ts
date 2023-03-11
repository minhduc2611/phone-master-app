import "react-native-get-random-values"; // polyfill, import before uuid
import { v4 as uuidv4 } from "uuid";

export const uuid = () => {
  return uuidv4();
};
