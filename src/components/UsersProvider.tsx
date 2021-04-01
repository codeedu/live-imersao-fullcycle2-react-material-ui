// @flow
import * as React from "react";
import { User } from "../models";
import UsersContext from "./UsersContext";

export const UsersProvider: React.FunctionComponent = (props) => {
  const usersState = React.useState<User[]>([]);
  return (
    <UsersContext.Provider value={usersState}>
      {props.children}
    </UsersContext.Provider>
  );
};
