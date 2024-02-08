import NavLinks from "./nav-links";
import AnimatedLines from "./animatedLines";

const Navbar = () => {
    return (
        <nav className="flex justify-end gap-1">
            <NavLinks />
            <div className="flex mr-2 ml-2">
                <AnimatedLines />
            </div>
        </nav>
    );
};

export default Navbar;
