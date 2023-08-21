import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackIdState",
  default: null,
});

export const isPlayingstate = atom({
  key: "isPlayingState",
  default: false,
});