import { useState } from "react";

export const TaskB = () => {
  const [isNotEmpty, setNotEmpty] = useState(true);

  const handleOnChange = (inputContent) => {
    if(inputContent.length > 0) {
      setNotEmpty(false);
    } else {
      setNotEmpty(true);
    }
    console.log(isNotEmpty);
  }

  return (
    <>
      <h2>2. feladat</h2>
      <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
      <button disabled={ isNotEmpty }> Submit </button>
    </>
  );
};
