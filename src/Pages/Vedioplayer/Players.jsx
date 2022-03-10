import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { VideoContext } from './../../Component/API/ContextApi';


const Player = props => {
  let { selectvid } = useContext(VideoContext);
  console.log(selectvid.x);
  return (
    <section id="MusicPlayer">
      <article>
        <ReactPlayer url={selectvid.x} controls playing />
      </article>
    </section>
  );
};

export default Player;
