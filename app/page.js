"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import rooms from "@/data/rooms.json";

export default async function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {rooms.length > 0 ? (
        rooms.map((room) => <h3>{room.name}</h3>)
      ) : (
        <p>No rooms available at the moment</p>
      )}
    </>
  );
}
