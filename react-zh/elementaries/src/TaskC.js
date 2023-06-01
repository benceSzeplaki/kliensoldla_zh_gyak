import { useState } from "react";

const ImageForm = ({images, setImages}) => {

  const [url, setUrl] = useState("");

  const onInputChange = (newUrl) => {
    setUrl(newUrl);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setImages([...images, url]);
    setUrl("");
  }

  return (
    <form onSubmit={(event) => handleClick(event)}>
      Kép URL:
      <input onChange={(event) => onInputChange(event.target.value)} value={url}/>
      <button type={"submit"}> Kép hozzáadása </button>
    </form>
  );
};

export const TaskC = () => {
  const [ images, setImages ] = useState([]);

  return (
    <>
      <h2>3. feladat</h2>
      <ImageForm
        images={ images }
        setImages={ setImages }/>
      <h3>Képlista</h3>
      {images.map((image, index) => {
        return (
            <img
              key={ index }
              src={ image }
              style={{ height: "200px" }}
              alt=""
            />
        );
      })}
    </>
  );
};
