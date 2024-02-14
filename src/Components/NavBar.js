import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../CSS/NavBar.css';
import logo from '../Images/ClubLogo.png'

export default function NavBar() {
  return (
    <nav className="navBar">
      <a className='clubLogo' href='/Home'>
        <img src={logo} alt="Club logo" width='25%'/>
      </a>
      <h1>TPC Chico</h1>
      <h2>Technical Projects Club</h2>
      <ul>
        <CustomLink href="/Home">Home</CustomLink>
        <CustomLink href="/About">About</CustomLink>
        <CustomLink href="/Events">Events</CustomLink>
        <CustomLink href="/Projects">Projects</CustomLink>
        <CustomLink href="/Contact">Contact Us</CustomLink>
      </ul>
      <a href="https://discord.gg/gZb7q8S7JY" target='_blank' rel="noopener noreferrer" className="cta-button">Join Our Discord</a>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </li>
  );
}
