import React, { useContext } from "react";

import Player from './Players';
import "./Vedio.css"
import Videoplayer from './VedioPlayer';
import { VideoContext } from './../../Component/API/ContextApi';



const VideoList = () => {
  let vid = useContext(VideoContext);
  let video = vid.state;
  let Handlevideo = vid.Handlevideo;
  //   console.log("kdk",video);
  return (
    <section>
      <div id="videoBlock">
        {video.map(val => {
          return (
            <Videoplayer key={val.id} demo={val} Handlevideo={Handlevideo} />
          );
        })}
      </div>
      <Player />
    </section>
  );
};

export default VideoList;
