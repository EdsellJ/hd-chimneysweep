'use client';
import { useState } from 'react';

export default function AnimatedLines() {
  const [isX, setIsX] = useState(false);

  const handleClick = () => {
    setIsX(!isX);
  };


  return (
    <div className="flex items-center justify-center">
      <div className="relative space-y-3 cursor-pointer" onClick={handleClick}>
        <div
          className={`w-8 h-0.5 bg-gray-400 transition-all duration-300 ${
            isX ? '-rotate-45 translate-y-cu': ''
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-gray-400 transition-all duration-300 ${
            isX ? 'rotate-45 -translate-y-cu' : ''
          }`}
        ></div>
      </div>
    </div>
  );
}