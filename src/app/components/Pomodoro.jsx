"use client";
import { React, useState } from 'react';
import Timer from './Timer';
import TaskPanel from './TaskPanel';
import SessionTracker from './SessionTracker';
import Preset from './Preset';
import Header from './Header';

const Pomodoro = () => {

  const themes = [
    "#c4e99d", // final
    "#ffffff",   // final 
    "#D9B2FE",
    "#a23737", //final
    "#8d5b31",  // final
  ];
  const [themeIndex, setThemeIndex] = useState(0);
  const [time, setTime] = useState(25 * 60); const [isRunning, setIsRunning] = useState(false);
  const [protocol, setProtocol] = useState({
    focus: 50,
    break: 5,
    sessions: 8,
    longBreakEvery: 4,
    longBreak: 15,
    autoStart: false,
    ProtocolStarted: true,
  });

  const [currentSession, setCurrentSession] = useState(1);
  const [mode, setMode] = useState("focus");
  const [isComplete, setIsComplete] = useState(false);
  const [protocolStarted, setProtocolStarted] = useState(false);



  return (
    <div>
      <Header
        themeIndex={themeIndex}
        setThemeIndex={setThemeIndex}
        totalThemes={themes.length}
        themeColor={themes[themeIndex]}
      />
      <div className="grid lg:grid-cols-10 gap-6 ">



        <div className="lg:col-span-7">
          <Timer
            time={time}
            setTime={setTime}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            currentSession={currentSession}
            setCurrentSession={setCurrentSession}
            protocol={protocol}
            mode={mode}
            setMode={setMode}
            isComplete={isComplete}
            setIsComplete={setIsComplete}
            protocolStarted={protocolStarted}
            themeColor={themes[themeIndex]}
          />
        </div>

        <div className="lg:col-span-3">
          <TaskPanel themeColor={themes[themeIndex]} />
        </div>
      </div>
      <SessionTracker
        currentSession={currentSession}
        totalSessions={protocol.sessions}
        protocolStarted={protocolStarted}
        themeColor={themes[themeIndex]}
      />

      <div>
        <Preset setTime={setTime} setIsRunning={setIsRunning} protocol={protocol} setProtocol={setProtocol} setProtocolStarted={setProtocolStarted} setMode={setMode} setCurrentSession={setCurrentSession} themeColor={themes[themeIndex]} />
      </div>
    </div>
  )
}

export default Pomodoro;
