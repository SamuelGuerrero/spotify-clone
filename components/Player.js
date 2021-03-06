import {
  RewindIcon,
  SwitchHorizontalIcon,
  VolumeUpIcon,
  ReplyIcon,
  PlayIcon,
  PauseIcon,
  FastForwardIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon,
  VolumeUpIcon as VolumeDownIcon,
} from "@heroicons/react/outline";

import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";

import useSongInfo from "../hooks/useSongInfo";
import { useRecoilState } from "recoil";
import { debounce } from "lodash";
import { millisToMinutesAndSeconds } from "../lib/time";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volumen, setVolumen] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log("Now playing; ", data.body?.item);
        setCurrentTrackId(data.body?.item.id);
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };

  const handlePlayPause = () => {
    console.log("Cambiando estado de la canción");
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
        
      //console.log(millisToMinutesAndSeconds(data.body.progress_ms))
      if (data.body.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };


  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolumen(50);
    }
  }, [currentTrackIdState, spotifyApi, session]);

  useEffect(() => {
    if (volumen > 0 && volumen < 100) {
      debouncedAdjustVolume(volumen);
    }
  }, [volumen]);

  const debouncedAdjustVolume = useCallback(
    debounce((volumen) => {
      spotifyApi.setVolume(volumen).catch((err) => {});
    }, 100),
    []
  );

  return (
    <div className="grid h-24 grid-cols-3 bg-gradient-to-b from-black to-gray-900 px-2 text-xs text-white md:px-8 md:text-base">
      {/* Left */}
      <div className="item-center flex space-x-4">
        <img
          className="hidden h-10 w-10 md:inline"
          src={songInfo?.album.images?.[0]?.url}
          alt=""
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <SwitchHorizontalIcon className="button" />
        <RewindIcon className="button" />

        {isPlaying ? (
          <PauseIcon onClick={handlePlayPause} className="button h-10 w-10" />
        ) : (
          <PlayIcon onClick={handlePlayPause} className="button h-10 w-10" />
        )}

        <FastForwardIcon className="button" />

        <ReplyIcon className="button" />

        {/* Right */}
        <div className="flex items-center justify-end space-x-3 pr-5 md:space-x-4">
          <VolumeDownIcon
            onClick={() => volumen > 0 && setVolumen(volumen - 10)}
            className="button"
          />
          <input
            className="w-14 md:w-28"
            type="range"
            value={volumen}
            onChange={(e) => {
              //console.log(Number(e.target.value))
              setVolumen(Number(e.target.value));
            }}
            min={0}
            max={100}
          />
          <VolumeUpIcon
            onClick={() => volumen < 100 && setVolumen(volumen + 10)}
            className="button"
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
