"use client";
import {React, useState} from 'react';

const Preset = ({setTime,setIsRunning,protocol,setProtocol,}) => {

    const [customMinutes, setCustomMinutes] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [focusDuration, setFocusDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);
    const [totalSessions, setTotalSessions] = useState(8);
    const [longBreakEvery, setLongBreakEvery] = useState(4);
    const [longBreakDuration, setLongBreakDuration] = useState(15);
    const [autoStart, setAutoStart] = useState(false);
    const [currentSession, setCurrentSession] = useState(1);

    function saveProtocol() {

        const newProtocol = {
            focus: focusDuration,
            break: breakDuration,
            sessions: totalSessions,
            longBreakEvery,
            longBreak: longBreakDuration,
            autoStart,
        };

        setProtocol(newProtocol);

        setTime(focusDuration * 60);

        setIsRunning(false);

        setShowModal(false);
    }
    

  return (
    <div className="grid md:grid-cols-4 gap-5">
    <div className="brutal-card p-6 mt-6 font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all">
          <button onClick={() => { setTime(25 * 60); setIsRunning(false); }}>
                25 Focus
          </button>
    </div>
    <div className="brutal-card p-6 mt-6 font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all">
          <button onClick={() => {setTime(5 * 60); setIsRunning(false);}}>
                5 Break
          </button>
    </div>
    <div className="brutal-card p-6 mt-6 font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all">
          <button onClick={() => {setTime(15 * 60); setIsRunning(false);}}>
                15 Break
          </button>
    </div>
    <div className="brutal-card p-6 mt-6 font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all">
        <button onClick={() => setShowModal(true)}>
                Custom
            </button>
    </div>
    <>

  {showModal && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={()=> setShowModal(false)}> 
        <div className=" brutal-card bg-white md:p-8 p-4 w-[70%] max-h-[90vh] max-w-2xl overflow-y-auto " onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center">

                <h2 className="text-3xl font-black">
                    CUSTOM PROTOCOL
                </h2>

                <button onClick={() => setShowModal(false)} className="border-4 border-black px-3 py-1 font-bold">
                    X
                </button>
                </div>

                
                <div className='grid md:grid-cols-2 gap-5 mt-1 '>
                <div className="mt-1">
                    <label className="font-bold">
                        Focus Duration
                    </label>
                    <input type="number" value={focusDuration} onChange={(e) =>setFocusDuration(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1"/>
                </div>

                <div className="mt-1">
                    <label className="font-bold">
                        Break Duration
                    </label>
                    <input type="number" value={breakDuration} onChange={(e) =>setBreakDuration(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1"/>
                </div>

                <div className="">
                    <label className="font-bold block">
                        Total Sessions
                    </label>
                    <input type="number" value={totalSessions} onChange={(e) =>setTotalSessions(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1"/>
                </div>

                <div className="">
                    <label className="font-bold block">
                        Long Break Duration
                    </label>
                    <input type="number" value={longBreakDuration} onChange={(e) =>setLongBreakDuration(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1"/>
                </div>

                <div className="">
                    <label className="font-bold block">
                        Long Break Every
                    </label>
                    <input type="number" value={longBreakEvery} onChange={(e) =>setLongBreakEvery(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1"/>
                </div>

                
                </div>

                <div className="mt-2">
                    <label className="font-bold flex items-center gap-2">
                    <input type="checkbox" value={autoStart} onChange={(e) =>setAutoStart(e.target.checked)} className="w-5 h-5 border-2 border-black" />
                    Auto-start next session?
                    </label>
                </div>
                <div>
                    <button className="mt-8 w-full border-4 border-black bg-pink-400 py-4 font-black text-lg" onClick={saveProtocol}>
                        START PROTOCOL
                    </button>
                </div>
                </div>
        </div>
  )}
</>
    </div>
  );
}

export default Preset;
