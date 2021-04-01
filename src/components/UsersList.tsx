// @flow
import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import UsersContext from "./UsersContext";

interface UsersListProps {}
export const UsersList: React.FunctionComponent<UsersListProps> = (props) => {
  const [users] = React.useContext(UsersContext);

  return (
    <List>
      {users.map((user, key) => (
        <ListItem button key={key}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
};
