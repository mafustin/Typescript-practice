import { css } from "@emotion/css";
import React from "react";
import { UserForm } from "./UserForm";

const container = css`
  background-color: rgb(211, 211, 211);
  height: 100vh;
  padding: 5rem 20rem;
`;

export const UserFormContainer = () => {
  return (
    <div className={container}>
      <UserForm />
    </div>
  );
};
