"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prev) => !prev);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <Button className="text-white p-5" onClick={handleVideoPlayer}>
          <IoClose size={20} />
        </Button>
        <YouTube
          videoId={youtubeId}
          onReady={(event: any) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <Button
      className="fixed bottom-5 right-5 w-32 text-white p-5 text-lg"
      onClick={handleVideoPlayer}
    >
      Watch Trailer
    </Button>
  );
};

export default VideoPlayer;
