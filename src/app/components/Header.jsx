import React from 'react'
import { PaintbrushVertical } from 'lucide-react';

const Header = ({ themeIndex, setThemeIndex, totalThemes, themeColor }) => {
  return (
    <div className="w-full brutal-card p-6 mb-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all " style={{ backgroundColor: themeColor, }}>
      <div className="flex flex-row justify-between items-start gap-2">
        <h1 className="min-w-0 text-4xl sm:text-5xl md:text-7xl font-black text-pink-500 break-words cursor-pointer">
          POMODORO PROTOCOL ⚡
        </h1>
        <button
          className="shrink-0 px-3 py-2 cursor-pointer"
          onClick={() =>
            setThemeIndex(
              (prev) => (prev + 1) % totalThemes
            )
          }
        >
          <PaintbrushVertical size={50} />
        </button></div>

      <p className="text-lg font-medium text-gray-600">
        Focus. Plan. Execute.
      </p>
    </div>
  );
}

export default Header
