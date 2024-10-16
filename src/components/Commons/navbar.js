import React from "react";
import { Link } from "react-router-dom";

const NavBar= () =>{
    const activateToggle =() =>{
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
      }
    return(
        <header className="bg-amber-50">
     <nav
        className="
        flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-amber-50
          container
          mx-auto
        "
      >
       <div> 
          <a href="/Portfolio" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="32.125"
              viewBox="0 0 20 32.125"
            >
              <g
                id="Group_330"
                data-name="Group 330"
                transform="translate(-251.1 457.654)"
              >
                <g
                  id="Group_329"
                  data-name="Group 329"
                  transform="translate(251.1 -457.654)"
                >
                  <path
                    id="Path_121"
                    data-name="Path 121"
                    d="M257.887-454.034a12.084,12.084,0,0,1,3.505-3.62,11.811,11.811,0,0,1,3.46,3.549,17.887,17.887,0,0,1,3.362,11.216c.73.589,1.482,1.154,2.2,1.754a3.969,3.969,0,0,1,1.266,3.659c-.347,1.672-.679,3.347-1.045,5.015a1.393,1.393,0,0,1-2.12.7c-1.178-.946-2.326-1.925-3.5-2.872a5.373,5.373,0,0,1-3.316,1.44,5.365,5.365,0,0,1-3.882-1.4c-.844.621-1.628,1.367-2.453,2.033a6.315,6.315,0,0,1-1.2.924,1.393,1.393,0,0,1-1.839-.9c-.377-1.631-.771-3.257-1.136-4.89a3.96,3.96,0,0,1,1.335-3.81c.641-.517,1.29-1.025,1.943-1.527.182-.092.091-.3.1-.46a17.915,17.915,0,0,1,3.326-10.806m1.156,5.049a2.748,2.748,0,0,0,.24,3.641,3.024,3.024,0,0,0,4.134.085,2.75,2.75,0,0,0,.729-3.021,2.924,2.924,0,0,0-2.454-1.825,2.984,2.984,0,0,0-2.65,1.119"
                    transform="translate(-251.1 457.654)"
                    fill="#764abc"
                  />
                  <path
                    id="Path_122"
                    data-name="Path 122"
                    d="M260.3-419.746a.693.693,0,0,1,1.027-.557,6.628,6.628,0,0,0,5.77,0,.7.7,0,0,1,1.029.516q.008,1.532,0,3.064a.691.691,0,0,1-1.079.5c-.306-.26-.582-.552-.876-.825-.467.874-.905,1.76-1.375,2.631a.7.7,0,0,1-1.161.007c-.472-.873-.908-1.764-1.384-2.637-.29.275-.566.566-.873.825a.692.692,0,0,1-1.078-.506c-.008-1.007,0-2.015,0-3.022"
                    transform="translate(-253.92 446.225)"
                    fill="#764abc"
                  />
                  <path
                    id="Path_123"
                    data-name="Path 123"
                    d="M265.28-441.9a1.4,1.4,0,0,0,1.432-1.376,1.4,1.4,0,0,0-1.432-1.377,1.4,1.4,0,0,0-1.431,1.377,1.4,1.4,0,0,0,1.431,1.376"
                    transform="translate(-255.01 453.668)"
                    fill="#764abc"
                  />
                </g>
              </g>
            </svg>
            <span className="ml-3 text-4xl font-display_cursive">Kumar Gaurav Singh</span>
          </a>
          
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={activateToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/Portfolio2024">Home</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/Portfolio2024/projects">Projects</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/Portfolio2024/skills">Skills</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/Portfolio2024/journey">MyJourney</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400 text-purple-500" to="/Portfolio2024/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
    </nav>
  </header>
    );
}

export default NavBar;