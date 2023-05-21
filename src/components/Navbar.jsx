import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants'
import { logo, menu, close } from '../assets' 
import { styles } from '../styles'

const Navbar = () => {
  const [active, setactive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [activeid, setactiveid] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionOffsets = {};
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          sectionOffsets[link.id] = section.offsetTop;
        }
      });
      let newActive = '';
      for (const [id, offset] of Object.entries(sectionOffsets)) {
        if (scrollY >= offset) {
          newActive = id;
        } else {
          break;
        }
      }

      setactiveid(newActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      setactiveid(id);
    }
  };

  return (
    <nav className={`${styles.paddingX} w-[100vw] flex items-center py-5 top-0 z-50 fixed ${activeid===''?"bg-transparent": "bg-primary"}`}>
      <div className='w-full items-center justify-between flex mx-auto max-w-7xl'>
        <Link
        to="/"
        className='flex items-center gap-2'
        onClick={()=>{setactive(""); window.scrollTo(0,0);}}>
          <img src={logo} alt="" className='h-10 w-10'/>
          <p>Jayanti <span className='sm:block hidden'>Goswami</span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row justify-between gap-10'>
          {navLinks.map((link)=>(
            <li
              key={link.id}
              className={`${active===link.title?"text-white":"text-gray-300"} hover:text-white`}
              onClick={(e)=>{
                e.preventDefault();
                setactive(link.title);
                handleScrollTo(link.id)}
              }
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img src={toggle?menu:close} alt="menu" 
          onClick={()=>{
            setToggle(!toggle);
          }}
        />

      </div>
    </nav>
  )
}

export default Navbar