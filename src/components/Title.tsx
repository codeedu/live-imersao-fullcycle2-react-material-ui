// @flow
import * as React from "react";
import { Typography } from "@material-ui/core";

interface TitleProps {}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
  const { children } = props;

  return (
    <Typography variant="h3" component="h1">
      {children}
    </Typography>
  );
};
