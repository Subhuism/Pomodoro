"use client";
import {React, useState} from 'react';
import Timer from './Timer';
import TaskPanel from './TaskPanel';
import SessionTracker from './SessionTracker';
import Preset from './Preset';
import Header from './Header';

const Pomodoro = () => {

    const [time, setTime] = useState(25 * 60); const [isRunning, setIsRunning] = useState(false);
  const [protocol, setProtocol] = useState({
    focus: 50,
    break: 5,
    sessions: 8,
    longBreakEvery: 4,
    longBreak: 15,
    autoStart:false,
    ProtocolStarted: true,
  });

  const [currentSession, setCurrentSession] = useState(1);
  const [mode, setMode] = useState("focus");
  const [isComplete, setIsComplete] = useState(false);
  const [protocolStarted, setProtocolStarted] = useState(false);



  return (
    <>
    <Header />
  
  <div className="grid lg:grid-cols-10 gap-6">

    

        <div className="lg:col-span-7">
        {/* <Timer time={time} setTime={setTime} isRunning={isRunning} setIsRunning={setIsRunning} currentSession={currentSession} protocol={protocol} mode={mode} setMode={setMode} setCurrentSession={setCurrentSession} isComplete={isComplete} setIsComplete={setIsComplete}/>  */}
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
/>
        </div>

        <div className="lg:col-span-3">
          <TaskPanel />
        </div>
      </div>
      <SessionTracker
  currentSession={currentSession}
  totalSessions={protocol.sessions}
  protocolStarted={protocolStarted}
/>

      <div>
        <Preset setTime={setTime} setIsRunning={setIsRunning} protocol={protocol} setProtocol={setProtocol} setProtocolStarted={setProtocolStarted} setMode={setMode} setCurrentSession={setCurrentSession} />
      </div>

    </>
  )
}

export default Pomodoro;
