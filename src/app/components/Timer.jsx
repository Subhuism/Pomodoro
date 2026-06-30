"use client";
import { useState, useEffect } from "react";
import { useRef } from "react";

import React from 'react'

const Timer = ({ time, setTime, isRunning, setIsRunning, currentSession, setCurrentSession, protocol, mode, setMode, isComplete,setIsComplete, })=>{

    const handledRef = useRef(false);
    function handleSessionEnd() {

  if (
    mode === "focus" &&
    currentSession === protocol.sessions
  ) {

    setIsComplete(true);

    setIsRunning(false);

    setTime(0);

    return;
  }

  // Focus -> Break
  if (mode === "focus") {

    const shouldTakeLongBreak =
      currentSession %
        protocol.longBreakEvery ===
      0;

    if (shouldTakeLongBreak) {

      setMode("longBreak");

      setTime(protocol.longBreak * 60);

    } else {

      setMode("break");

      setTime(protocol.break * 60);

    }

    if (!protocol.autoStart) {
      setIsRunning(false);
    }

    return;
  }

  // Break -> Focus
  if (
    mode === "break" ||
    mode === "longBreak"
  ) {

    setCurrentSession(
      (prev) => prev + 1
    );

    setMode("focus");

    setTime(
      protocol.focus * 60
    );

    if (!protocol.autoStart) {
      setIsRunning(false);
    }
  }
}

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    useEffect(() => {
  if (!isRunning) return;

  const interval = setInterval(() => {

    setTime((prev) => {

      if (prev <= 1) {

        if (!handledRef.current) {

          handledRef.current = true;

          setTimeout(() => {
            handleSessionEnd();
            handledRef.current = false;
          }, 0);

        }

        return 0;
      }

      return prev - 1;
    });

  }, 1000);

  return () => clearInterval(interval);

}, [isRunning,mode,currentSession,protocol,]);

    



  return (
    <div className="brutal-card p-8 min-h-105 flex flex-col lg:flex-row gap-8">
    <div className="flex flex-col justify-center">

    <div>
        <p className="font-bold text-lg">
            {mode === "focus" && "FOCUS MODE"}
            {mode === "break" && "BREAK MODE"}
            {mode === "longBreak" && "LONG BREAK"}
        </p>

            {!isRunning && (
                <p className="text-sm text-gray-500">
                    PAUSED
                </p>)}

</div>

      <h2 className="text-7xl md:text-8xl font-black mt-4">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </h2>

        <div className="mt-8 flex gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                  <div
                      key={i}
                      className={`h-3 w-6 border border-pink-500 ${i < 8 ? "bg-pink-500" : ""}`}
                  />
              ))}
          </div>

      <div className="flex gap-3 mt-8">
        <button className="border-4 border-black px-6 py-3 font-bold bg-pink-400" onClick={() => setIsRunning(true)}>
          START
        </button>

        <button className="border-4 border-black px-6 py-3 font-bold" onClick={() => setIsRunning(false)}>
          PAUSE
        </button>

              <button className="border-4 border-black px-6 py-3 font-bold" onClick={() => {
                  setIsRunning(false);
                  setTime(25 * 60);
              }}>
          RESET
        </button>
      </div>

    </div>

    <div className="lg:w-64 lg:border-l-2 lg:border-black lg:pl-6 min-[1150px]:ml-auto">
        <div>

  <p className="font-bold">
    SESSION
  </p>

  <p className="text-4xl font-black text-pink-500">
    {currentSession} / {protocol.sessions}
  </p>

  <hr className="border-black my-4" />

  <p className="font-bold mb-3">
    CURRENT POMODORO
  </p>

  <div className="flex justify-between">
    <div>
      <p className="font-bold text-pink-500">
        FOCUS
      </p>

      <p>
        {protocol.focus} min
      </p>
    </div>

    <div>
      <p className="font-bold">
        BREAK
      </p>

      <p>
        {protocol.break} min
      </p>
    </div>
  </div>

</div>
        
    </div>
    </div>
  )
}

export default Timer;
