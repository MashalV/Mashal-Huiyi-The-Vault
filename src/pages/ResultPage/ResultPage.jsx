import "./ResultPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import RenderImage from "../../components/RenderImage";

function ResultPage() {
  const location = useLocation();
  const search = location.state?.search || "";
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const getArtworks = async () => {
      let baseURL = "https://api.artic.edu/api/v1/artworks/";

      const response = await axios.get(`${baseURL}search?q=${search}`);
      setArtworks(response.data.data);
    };

    getArtworks();
  }, []);

  console.log(artworks[0]?.title);

  if (!artworks) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <h2>Result Page Placeholder</h2>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <h3>{artwork.title}</h3>
            <RenderImage id={artwork.id} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResultPage;
