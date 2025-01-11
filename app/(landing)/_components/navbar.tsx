"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`z-50 bg-background fixed top-0 flex items-center w-full p-6 transition-all duration-300 ${
                scrolled ? "border-b shadow-md" : ""
            }`}
        >
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <Button variant="ghost">Request a Demo</Button>
                <Button variant="default">Login</Button>
            </div>
        </div>
    );
};

export default Navbar;
