import { useContext, useState } from 'react'
import { BiBrightness } from 'react-icons/bi'
import { IoSunnySharp } from 'react-icons/io5'
import { BiMenu } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { ThemeContext } from './contexts/Theme' 
import { projects, skills, contact } from '../portafolio' 
import './Css/Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
            <a
              href='signupform'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Sign up
            </a>
          </li>
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <IoSunnySharp /> : <BiBrightness />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CgClose /> : <BiMenu />}
      </button>
    </nav>
  )
}

export default Navbar
