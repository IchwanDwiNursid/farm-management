"use client";

import { useEffect, useRef } from "react";

type Props = {
  trigger: boolean; // true saat ada notif keranjang
};

export default function SoundNotification({ trigger }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sound/notif-sound.wav");
    audioRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (!trigger || !audioRef.current) return;

    // play sound
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      console.warn("User interaction required");
    });

    // stop after 5 seconds
    timeoutRef.current = setTimeout(() => {
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [trigger]);

  return null;
}
