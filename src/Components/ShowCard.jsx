import React from "react";
import { useNavigate } from "react-router-dom";

function ShowCard({ title, image, rating, genre, summary, id }) {

  const nav = useNavigate();

  return (
    <div className="show-card" onClick={()=>nav('/show/'+id)}>
      <img src={image} />
      <div className="show-card-texts">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
        <div>
          <span>{genre}</span>
          <h3>{rating == null ? "NA" : rating}</h3>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
