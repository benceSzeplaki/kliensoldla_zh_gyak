import { useState } from "react";

export const TaskA = () => {
  const [isClicked, setClicked] = useState(false);

  const handleOnChange = () => {
    setClicked(!isClicked);
  }

  return (
    <>
      <h2>1. feladat</h2>
      <p>
        <button onClick={() => handleOnChange()}> {isClicked ? (<p>Jelenítsd meg az alábbi elemet</p>) : (<p>Rejtsd el</p>) }</button>
      </p>
      {isClicked ? (<p></p>) : (<p>Egyszerű feladat a feltételes renderelésről.</p>)}
    </>
  );
};
