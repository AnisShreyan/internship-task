import { Button, CircularProgress, Stack } from "@mui/joy";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MovieIcon from "@mui/icons-material/Movie";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function ShowDetails() {
  const param = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/` + param.id).then((data) => {
      setShow(data.data);
    });
  }, [param]);

  show?.genres.map((genre) => {
    console.log(genre);
  });

  if (show === null) {
    return (
      <div className="circle-progress-bar">
        <CircularProgress color="primary" size="lg" />
      </div>
    );
  }

  return (
    <div className="show-details">
      <img src={show.image?.original} />
      <div className="show-details-bar">
        <h1>{show.name}</h1>
        <p className="genres">
          <strong>
            <span>Genre: </span>
          </strong>
          {show?.genres.map((genre) => {
            return <span>{genre}, </span>;
          })}
        </p>
        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        <br />
        <strong style={{ display: "flex", alignContent: "center", gap: 5 }}>
          <MovieIcon />
          <span>{show.language}</span>
        </strong>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px 0",
            gap: 1,
            color: "#EAC54F",
          }}
        >
          <StarIcon />
          {show.rating.average}
        </Typography>
        <Typography variant="h6">
          <span>Started from: </span>
          {show.premiered}
        </Typography>
        <div>
          <Button
            sx={{ margin: "10px 0", fontSize: 20, padding: "12px 20px" }}
            href=""
          >
            <a
              href={`${show.officialSite}`}
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5
              }}
            >
              <PlayCircleIcon />
              Watch Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
