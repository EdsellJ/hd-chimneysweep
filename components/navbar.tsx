'use client';
import NavLinks from "./nav-links";
import AnimatedLines from "./animatedLines";
import { useState } from 'react';

const Navbar = () => {
    const [isX, setIsX] = useState(false);

  const handleClick = () => {
    setIsX(!isX);
  };
    return (
        <nav className="flex justify-center gap-1">
            <div className="flex justify-center">
                <NavLinks />
            </div>
        </nav>
    );
};

export default Navbar;
