import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../firebase";
const Inter = () => {
  const [data, setData] = useState({
    name: "",
    Techs: "",
    github: "",
    live: "",
  });
  const [preview, setPreview] = useState("");
  const handelchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(preview);
  return (
    <div className="flex inter   flex-col gap-5 justify-center  h-screen">
      <div>
        <p>name</p>
        <input name="name" onChange={handelchange} value={data.name} type="text" />
      </div>
      <div>
        <p>Techs</p>
        <input name="Techs" onChange={handelchange} value={data.Techs} type="text" />
      </div>
      <div>
        <p>github</p>
        <input name="github" onChange={handelchange} value={data.github} type="text" />
      </div>
      <div>
        <p>live</p>
        <input name="live" onChange={handelchange} type="text" />
      </div>
      <div>
        <p>preview</p>
        <input name="preview" type="file" onChange={(e) => setPreview(e.target.files[0])} />
      </div>
      <button
        onClick={async () => {
          const imgref = ref(storage, `${Date.now()}-${preview.name}`);
          const snap = await uploadBytes(imgref, preview);
          const url = await getDownloadURL(snap.ref);
          fetch("https://portfolio-z8h6.onrender.com/repos/65c28ea1dc52464abbb6e233", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              Techs: data.Techs,
              github: data.github,
              live: data.live,
              preview: url,
            }),
          })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        submit
      </button>
    </div>
  );
};

export default Inter;
