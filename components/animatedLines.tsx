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
          className={`w-14 h-1 bg-black transition-all duration-300 ${
            isX ? '-rotate-45 translate-y-2': ''
          }`}
        ></div>
        <div
          className={`w-14 h-1 bg-black transition-all duration-300 ${
            isX ? 'rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </div>
    </div>
  );
}