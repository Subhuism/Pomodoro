"use client";
import { React, useState } from 'react';

const Preset = ({ setTime, setIsRunning, protocol, setProtocol, setProtocolStarted, setMode, setCurrentSession, themeColor }) => {

    const [customMinutes, setCustomMinutes] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [focusDuration, setFocusDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);
    const [totalSessions, setTotalSessions] = useState(8);
    const [longBreakEvery, setLongBreakEvery] = useState(4);
    const [longBreakDuration, setLongBreakDuration] = useState(15);
    const [autoStart, setAutoStart] = useState(false);

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

        setTotalSessions(totalSessions);

        setTime(focusDuration * 60);

        setIsRunning(false);

        setShowModal(false);

        setCurrentSession(1);

        setProtocolStarted(true);
    }


    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
            <div className="brutal-card dark:bg-green-500 hover:!bg-[#06B6D4] hover:cursor-pointer p-6 mt-6 font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all" onClick={() => {

                console.log("Before");
                setProtocol({
                    focus: 25,
                    break: 0,
                    sessions: 1,
                    longBreakEvery: 1,
                    longBreak: 0,
                    autoStart: false,
                });

                setCurrentSession(1);

                setMode("focus");

                setTime(25 * 60);

                console.log("After");

                setIsRunning(false);

                setProtocolStarted(false);
            }} style={{ backgroundColor: themeColor, }}>
                <button className='cursor-pointer'>
                    25m Focus
                </button>
            </div>
            <div className="brutal-card hover:!bg-[#06B6D4] hover:cursor-pointer p-6 mt-6 font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all" onClick={() => {
                setProtocol({
                    focus: 0,
                    break: 5,
                    sessions: 1,
                    longBreakEvery: 0,
                    longBreak: 0,
                    autoStart: false,
                });

                setCurrentSession(1);

                setMode("break");

                setTime(5 * 60);

                setIsRunning(false);

                setProtocolStarted(false);
            }} style={{ backgroundColor: themeColor, }}>
                <button className='cursor-pointer'>
                    5m Break
                </button>
            </div>
            <div className="brutal-card hover:!bg-[#06B6D4] hover:cursor-pointer p-6 mt-6 font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all" onClick={() => {
                setProtocol({
                    focus: 0,
                    break: 15,
                    sessions: 1,
                    longBreakEvery: 0,
                    longBreak: 0,
                    autoStart: false,
                });

                setCurrentSession(1);

                setMode("break");

                setTime(15 * 60);

                setIsRunning(false);

                setProtocolStarted(false);
            }} style={{ backgroundColor: themeColor, }}>
                <button className='cursor-pointer'>
                    15m Break
                </button>
            </div>
            <div className="brutal-card hover:cursor-pointer hover:!bg-[#FDC700] p-6 mt-6 font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all" onClick={() => setShowModal(true)} style={{ backgroundColor: themeColor, }}>
                <button className='cursor-pointer' >
                    Custom
                </button>
            </div>
            <>

                {showModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center " onClick={() => setShowModal(false)}>
                        <div className=" brutal-card bg-white md:p-8 p-4 w-[70%] max-h-[90vh] max-w-2xl overflow-y-auto " onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center">

                                <h2 className="text-3xl font-black">
                                    CUSTOM PROTOCOL
                                </h2>

                                <button onClick={() => setShowModal(false)} className="border-4 border-black px-3 py-1 font-bold hover:!bg-red-500 cursor-pointer">
                                    X
                                </button>
                            </div>


                            <div className='grid md:grid-cols-2 gap-5 mt-1 '>
                                <div className="mt-1">
                                    <label className="font-bold">
                                        Focus Duration
                                    </label>
                                    <input type="number" value={focusDuration} onChange={(e) => setFocusDuration(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1" />
                                </div>

                                <div className="mt-1">
                                    <label className="font-bold">
                                        Break Duration
                                    </label>
                                    <input type="number" value={breakDuration} onChange={(e) => setBreakDuration(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1" />
                                </div>

                                <div className="">
                                    <label className="font-bold block">
                                        Total Sessions
                                    </label>
                                    <input type="number" value={totalSessions} onChange={(e) => setTotalSessions(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1" />
                                </div>

                                <div className="">
                                    <label className="font-bold block">
                                        Long Break Duration
                                    </label>
                                    <input type="number" value={longBreakDuration} onChange={(e) => setLongBreakDuration(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1" />
                                </div>

                                <div className="">
                                    <label className="font-bold block">
                                        Long Break Every
                                    </label>
                                    <input type="number" value={longBreakEvery} onChange={(e) => setLongBreakEvery(Number(e.target.value))} placeholder="25" className="w-full border-4 border-black p-3 mt-1" />
                                </div>


                            </div>

                            <div className="mt-2">
                                <label className="font-bold flex items-center gap-2">
                                    <input type="checkbox" value={autoStart} onChange={(e) => setAutoStart(e.target.checked)} className="w-5 h-5 border-2 border-black" />
                                    Auto-start next session?
                                </label>
                            </div>
                            <div>
                                <button className="mt-8 w-full border-4 border-black bg-[#FDC700] py-4 font-black text-lg" onClick={saveProtocol}>
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
