import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../models";

const UsersContext = createContext<[User[], Dispatch<SetStateAction<User[]>>]>([
  [],
  (value: User[] | ((prevState: User[]) => User[])) => {},
]);

export default UsersContext;

//Context API -> altera dados

//Provider personalizados
