import { css } from "@emotion/css";
import React from "react";

interface IUserFormDescription {
  title: string;
  description: string;
  formId?: number;
}

const formDescription = css`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  flex-basis: 35%;
  justify-content: space-between;
`;

const formIdStyle = css`
  text-align: right;
`;

export const UserFormDescription: React.FC<IUserFormDescription> = ({
  title,
  description,
  formId = 999,
}) => {
  return (
    <div className={formDescription}>
      <span>{title}</span>
      <span>{description}</span>
      <span className={formIdStyle}>{`Form number ${formId}`}</span>
    </div>
  );
};
