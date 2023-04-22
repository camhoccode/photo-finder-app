import React, { useState } from "react";
import { createApi } from "unsplash-js";

export default function SearchPhoto() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const unsplash = new createApi({
    accessKey: "WXtyU7ysMADsN_WWrixhBk3vYwxyqcrKWw8sEcg3jqc",
  });
  const seacrhRelatedPhotos = async (event) => {
    event.preventDefault();
    unsplash.search.getPhotos({ query: query, perPage: 50 }).then((data) => {
      // console.log(data.response.results);
      setPics(data.response.results);
    });
  };

  return (
    <div>
      <form action="" onSubmit={seacrhRelatedPhotos}>
        <label>
          Search by keyword:{" "}
          <input
            className="input"
            type="text"
            name="query"
            placeholder="Try 'Tokyo' or 'Beach'"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <button className="submit" type="submit">
          Search
        </button>
      </form>
      <div className="photo-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img src={pic.urls.regular} alt="" width="350px" />;
          </div>
        ))}
      </div>
    </div>
  );
}
