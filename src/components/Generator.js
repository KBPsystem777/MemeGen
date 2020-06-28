import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MeMeUrl = "https://api.imgflip.com/get_memes";

function Generator() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMeme = async () => {
      const response = await axios.get(MeMeUrl);
      setMemes(response.data.data.memes);
    };
    fetchMeme();
  }, []);

  return (
    <div>
      {memes.map((meme) => (
        <ol>
          <div className="container">
            <LazyLoadImage
              effect="blur"
              key={meme.id}
              src={meme.url}
              className="img-fluid"
              alt={meme.name}
            />
          </div>
        </ol>
      ))}
    </div>
  );
}

export default Generator;
