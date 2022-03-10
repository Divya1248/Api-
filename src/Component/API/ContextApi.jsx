import React, { createContext, useState } from "react";
import JSON from "../../Vedio.json";
export let VideoContext = createContext("");

let VideoContextProvider = ({ children }) => {
  let [state, setstate] = useState(JSON);
  let [selectvid, setselectvid] = useState({ x: "" });

  let Handlevideo = videosong => {
    setselectvid({ ...selectvid, x: videosong });
  };
  return (
    <VideoContext.Provider value={{ state, Handlevideo, selectvid }}>
      {children}
    </VideoContext.Provider>
  );
};
export default VideoContextProvider;
