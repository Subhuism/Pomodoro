import React from 'react'

const SessionTracker = () => {
  return (
    <div className="brutal-card p-6 mt-6">

      <div className="flex justify-between items-center flex-wrap">

        <h2 className="text-2xl font-black">
          SESSION PROGRESS
        </h2>

        

      </div>

      <div className="flex gap-3 mt-6">

        <div className="w-8 h-8 bg-pink-500 border-2 border-black"></div>
        <div className="w-8 h-8 bg-pink-500 border-2 border-black"></div>
        <div className="w-8 h-8 bg-pink-500 border-2 border-black"></div>

        <div className="w-8 h-8 bg-white border-2 border-black"></div>
        <div className="w-8 h-8 bg-white border-2 border-black"></div>
        <div className="w-8 h-8 bg-white border-2 border-black"></div>
        <div className="w-8 h-8 bg-white border-2 border-black"></div>
        <div className="w-8 h-8 bg-white border-2 border-black"></div>

      </div>

      

    </div>
  )
}

export default SessionTracker
