import { FormEvent, useContext, useRef, useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { User } from "../models";
import UsersContext from "./UsersContext";

const useStyles = makeStyles({
  buttonWrapper: {
    marginTop: "8px",
  },
});

interface FormProps {}

let count = 0;
export const Form: React.FunctionComponent<FormProps> = (props) => {
  count++;
  console.log(count);
  const classes = useStyles();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useContext(UsersContext);

  //react hooks - 16
  //null assertion !
  //optional chaining ?
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(nameRef.current?.value);
    console.log(emailRef.current?.value);

    setUsers([
      ...users,
      {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
      },
    ]);
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField fullWidth label="Nome" inputRef={nameRef} />
      <TextField fullWidth label="E-mail" inputRef={emailRef} />
      <div className={classes.buttonWrapper}>
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </div>
    </form>
  );
};
//escala margin 8px  2 - 16px
