import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { UserFormDescription } from "./UserFormDescription";
import { UserFormInput } from "./UserFormInput";

const formContainer = css`
  background-color: green;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 2rem;
`;

const requiredStyle = (isFormFailed: boolean) => css`
  margin-top: 40px;
  text-align: center;
  font-size: 25px;
  color: ${isFormFailed ? "red" : "white"};
`;

const formDescription =
  "This for is used for submitting users trough our new app! Plese use real information.";

export const UserForm = () => {
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isFormFailed, setIsFormFailed] = useState<boolean>(false);
  const [date, setDate] = useState<string|undefined>();

  const submit = (): void => {
    if (name === undefined || age === undefined) {
      setIsFormFailed(true);
    } else {
      console.log("Name: ", name);
      console.log("Age: ", age);
      setIsSubmitted(true);
    }
  };
  const dateTime = (): void => {
    const format = {month: 'long'}
    const date = new Date().toLocaleDateString('en-US', {month:'2-digit', day:'2-digit', year: 'numeric'});
    setDate(date);
  }
  const convertDateToSameFormat = (selectedDate: any): void => {
    const parts = selectedDate.split('-');
    const newDateString = `${parts[1]}/${parts[2]}/${parts[0]}`;
    setDate(newDateString);
  }
  
  console.log(date);

  useEffect(() => {
    dateTime()
  }, [])
  
  return (
    <div className={formContainer}>
      {!isSubmitted && (
        <>
          <UserFormDescription
            title="User form"
            description={formDescription}
          />
          <UserFormInput
            name={name}
            age={age}
            date={date}
            setName={setName}
            setAge={setAge}
            setDate={setDate}
            convertDate={convertDateToSameFormat}
            submit={submit}
          />
          <span className={requiredStyle(isFormFailed)}>
            ALL FIELDS ARE REQUIRED
          </span>
        </>
      )}
    </div>
  );
};
