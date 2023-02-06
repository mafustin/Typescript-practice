import React from "react";

import { css } from "@emotion/css";

const formInputContainer = css`
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 7rem;
  margin-top: 2rem;
`;

const submitButton = css`
  height: 25px;
  color: black;
`;

interface IUserFormInput {
  name: string | undefined;
  age: number | undefined;
  date: string | undefined;
  setName(name: string): void;
  setAge(age: number): void;
  setDate(date: string):void;
  submit(): void;
  convertDate(selectedDate: string): void;
}
export const UserFormInput: React.FC<IUserFormInput> = ({
  name,
  age,
  date,
  setName,
  setAge,
  setDate,
  submit,
  convertDate,
}) => {
  return (
    <div className={formInputContainer}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        type="date"
        onChange={(e) => convertDate(e.target.value)}
      />
      <button onClick={submit} className={submitButton}>
        Submit
      </button>
    </div>
  );
};
