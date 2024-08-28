import axios from "axios"; 
import { useState, useEffect } from "react";

function RenderImage( { id }) {
    console.log(id)


    const [image, setImage] = useState(null);
    const [description, setDescription] = useState(null);
    const [label, setLabel] = useState(null);
  
    useEffect(()=> {
      const getImage = async () => {
          let baseURL = "https://api.artic.edu/api/v1/artworks/";
          const response = await axios.get(`${baseURL}${id}/manifest.json`);
          const imageId = response.data.sequences[0].canvases[0]['@id']+ '/full/843,/0/default.jpg'
          const lab = response.data.sequences[0].canvases[0].label.replace(/.*?(\d{4})/, '$1').trim();
          const des = response.data.description[0].value;

          setImage(imageId);
          setDescription(des);
          setLabel(lab);
          
        };
  
        getImage();
  
    }, [id])

    return (
        <>
            <div>{label}</div>
            <img src={image}/>
            <div>{description}</div>
            
        </> 
    );
}

export default RenderImage; 