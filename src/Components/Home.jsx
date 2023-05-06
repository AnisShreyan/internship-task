import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import axios from "axios";
import CircularProgress from "@mui/joy/CircularProgress";

function Home() {
  const [showsData, setShowsData] = useState(null);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((data) => {
      setShowsData(data.data);
    });
  }, []);

  if (showsData === null) {
    return (
      <div className="circle-progress-bar">
        <CircularProgress color="primary" size="lg" />
      </div>
    );
  }

  return (
    <div className="container">
      {showsData.map((show, key) => {
        return (
          <ShowCard
            title={show.show.name}
            image={show.show.image?.original}
            key={key}
            rating={show.show.rating?.average}
            genre={show.show.genres[0]}
            summary={show.show.summary}
            id={show.show.id}
          />
        );
      })}
    </div>
  );
}

export default Home;