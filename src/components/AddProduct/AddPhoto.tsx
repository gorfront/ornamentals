import { useState } from "react";

const AddPhoto: React.FC<{
  setPhoto: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ setPhoto }) => {
  const [photos, setPhotos] = useState([
    {
      id: "0",
      defaultImg: "photo.svg",
      downloadImg: "",
    },
    {
      id: "1",
      defaultImg: "photo.svg",
      downloadImg: "",
    },
    {
      id: "2",
      defaultImg: "photo.svg",
      downloadImg: "",
    },
    {
      id: "3",
      defaultImg: "photo.svg",
      downloadImg: "",
    },
  ]);

  const handleSavePhoto = () => {
    setPhoto(photos.find((photo) => photo.downloadImg !== "")?.downloadImg);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);

      setPhotos((prevPhotos) => {
        let foundEmpty = false;
        return prevPhotos.map((photo) => {
          if (!foundEmpty && photo.downloadImg === "") {
            foundEmpty = true;
            return { ...photo, downloadImg: fileUrl };
          }
          return photo;
        });
      });
    }

    handleSavePhoto();
  };

  const handleDeletePhoto = (id: string) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            downloadImg: "",
          };
        }
        return el;
      })
    );
  };

  return (
    <>
      <div className="addProduct--about__photo__main">
        <input
          type="file"
          onChange={handleFileChange}
          disabled={photos.every((el) => el.downloadImg)}
        />
        <div className="addProduct--about__photo__main__img">
          <img src="photo.svg" alt="photo" />
          <p>
            <span>загрузить</span>
            <br /> <span>фото</span>
          </p>
        </div>
      </div>
      <div className="addProduct--about__photo__bottom">
        {photos.map((photo) =>
          photo.downloadImg ? (
            <div
              className="addProduct--about__photo__bottom__small"
              key={photo.id}
            >
              <img src={photo.downloadImg} alt="img" />
              <button
                className="addProduct--about__photo__bottom__small--close"
                onClick={() => handleDeletePhoto(photo.id)}
              >
                <img src="close.svg" alt="close" />
              </button>
            </div>
          ) : (
            <img src={photo.defaultImg} alt="default" key={photo.id} />
          )
        )}
      </div>
    </>
  );
};

export default AddPhoto;
