import React, { useState } from 'react';

function List({ href, onClick, children }) {
    return (<li><a href={href} onClick={onClick}>{children}</a></li>);
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }

        setMenuOpen(false);
    };

    function handleToogle() {
        setMenuOpen(prev => {
            const next = !prev;

            if (next) {
                // adaugă ascultător când deschidem meniul
                document.addEventListener("click", closeMenuOutside, true);
            } else {
                document.removeEventListener("click", closeMenuOutside, true);
            }

            return next;
        });
    }

    function closeMenuOutside(e) {
        const navLinks = document.querySelector(".nav-links");
        const menuButton = document.getElementById("rwd-span");

        if (
            navLinks &&
            !navLinks.contains(e.target) &&
            menuButton &&
            !menuButton.contains(e.target)
        ) {
            setMenuOpen(false);
            document.removeEventListener("click", closeMenuOutside, true);
        }
    }

    return (
        <header>
            <nav className="nav">
                <div className="logo">MMA | Gedo Fight Club</div>

                <span
                    id='rwd-span'
                    style={{ fontSize: '30px', cursor: 'pointer' }}
                    onClick={handleToogle}
                >
                    ☰
                </span>

                <ul className={`nav-links ${menuOpen ? '' : 'hide'}`}>
                    <List href="#home" onClick={handleScroll} children="Acasa" />
                    <List href="#about" onClick={handleScroll} children="Despre" />
                    <List href="#training" onClick={handleScroll} children="Preturi" />
                    <List href="#primulantrenament" onClick={handleScroll} children="Inscrie-te" />
                    <List href="#locatie" onClick={handleScroll} children="Locatie" />
                    <List href="#contact" onClick={handleScroll} children="Contact" />
                </ul>
            </nav>
        </header>
    );
}