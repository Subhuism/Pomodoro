import React from "react";

const SessionTracker = ({
  currentSession,
  totalSessions,
  protocolStarted,
}) => {
  
  if(!protocolStarted) {
    return null;
  }

  return (
    <div className="brutal-card p-6 mt-6">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-2xl font-black">
          SESSION PROGRESS
        </h2>
      </div>

      <div className="flex gap-3 mt-6 flex-wrap">
        {Array.from({
          length: totalSessions,
        }).map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 border-2 border-black ${
              i < currentSession
                ? "bg-pink-500"
                : "bg-white"
            }`}
          />
        ))}
        <h2 className='font-black text-xl text-pink-500'>{Math.floor((currentSession/totalSessions)*100)}%</h2>
      </div>
    </div>
  );
};

export default SessionTracker;