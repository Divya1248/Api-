import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
// import Player from "./Player";
import "./Vedio.css";

const Videoplayer = prop => {
  let { id, video } = prop.demo;
  let Handlevideo = prop.Handlevideo;

  let [state, setstate] = useState("");
  //   let { vedioID } = state;

  let handlestate = e => {
    setstate(video);
    Handlevideo(state);
  };
  //console.log(state);

  return (
    <section>
      <div>
        {/* <Player pro={vedioID} /> */}
        <div className="Thumbnails" onClick={handlestate}>
          <video className="vid" width="300px" height="300px" src={video} />
        </div>
      </div>
    </section>
  );
};

export default Videoplayer;
