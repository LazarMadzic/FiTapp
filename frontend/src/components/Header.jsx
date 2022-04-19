import React, { useState ,useEffect,useRef} from 'react';
import './Header.css';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FaSignInAlt, FaSignOutAlt, FaUser ,FaBars} from 'react-icons/fa'
import { FiAlignJustify } from "react-icons/fi";
import { BiUserCircle } from 'react-icons/bi'
import { GoChevronDown } from "react-icons/go";

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { SidebarItems } from './SidebarItems';
import { UserSidebarItems } from './UserSidebarItems';
import { IconContext } from 'react-icons';
import BackToTop from './BackToTop';



function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const node1 = useRef();
  const node2 = useRef();
  const node3 = useRef();
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const handleClickOutside = e => {
    console.log("clicking anywhere");
    if (node1.current.contains(e.target)) {
      // inside click
      return;
    }
    if (node2.current.contains(e.target)) {
      // inside click
      return;
    }
    if (node3.current.contains(e.target)) {
      // inside click
      if(sidebar)setSidebar(false);
      return;
    }
    // outside click
    setSidebar(false);
    setUserbar(false);
  };

  useEffect(()=>{
    if(sidebar){
      document.addEventListener("mousedown", handleClickOutside);
    }
    if(userbar){document.addEventListener("mousedown", handleClickOutside);}
    if(userbar){
      document.addEventListener('scroll',()=>{
        if(window.scrollY>0){
          setUserbar(false);

      }

      },[])

    }
  })



  
  const [sidebar, setSidebar] = useState(false);
  const [userbar, setUserbar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showUserbar=() => setUserbar(!userbar);

  const closeRBar=()=>{
    onLogout()
    setUserbar(false)


  }

  return (
    <header >
     <IconContext.Provider value={{ color: '#fff' }}>
        <div  className='navbar'>
        <ul>
        {user ? (
          <>
          <ul className='left-collection'>
            {/*Open button/bars*/}
          <li >
            
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>




            </li>
            {/*Open button/bars*/}
            <li className='logo' >
          <Link to='/' >
          <img padding="0"  src={require('..\\frontend\\src\\images\\logo.png')} alt='FiT app' />
          </Link>

        </li>
          </ul>
          {/*User button*/}
          <li>
              <button ref={node3}  className='user-btn' onClick={showUserbar}>
              <BiUserCircle style={{
                      marginRight: '10px',
                      fontSize:'30px',
                  }} /> <p >{user.name}</p><GoChevronDown style={{
                    marginLeft: '10px',

                }}/>
              </button>    
          </li>
          
          </>
        ) : (
          <>
          {/*Logo button*/}
          <ul>
            <li className='logo'>
              <Link to='/'>
              <img padding="0" src={require('..\\frontend\\src\\images\\logo.png')} alt='FiT app' />
              </Link>
            </li>
            <li>
            {/*About button*/}
            <button className='user-btn'>
                <Link to='/about'>
                  <IoIcons.IoMdHelpCircle style={{
                      marginRight: '10px',
                      fontSize:'30px',
                  }}/> About
                </Link>
              </button>

            </li>
            </ul>
          <ul  >

            {/*Login button*/}
            <li>
            <button className='user-btn'>
                <Link to='/login'>
                  <FaSignInAlt style={{
                      marginRight: '10px',
                      fontSize:'30px',
                  }}/> Login
                </Link>
              </button>
            </li>
            {/*Register button*/}
            <li>
              <button className='user-btn'>
                <Link to='/register'>
                  <FaUser style={{
                      marginRight: '10px',
                      fontSize:'30px',
                  }}/> Register
                </Link>
              </button>
            </li>
            </ul>
          </>
        )}
      </ul>
        </div>
        {/*Left navigation side bar */}
        <nav ref={node1} className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <ul className='left-collection'>
              {/*Close icon/button*/}
              <li className='navbar-toggle'>
                <Link to='#' className='menu-x'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {/*Logo button */}
              <li className='logo' >
                <Link to='/' >
                <img padding="0"  src={require('..\\frontend\\src\\images\\logo.png')} alt='FiT app' />
                </Link>

              </li>
            </ul>
            {/*Sidebar buttons form SidebarItems.jsx*/}
            {SidebarItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
        {/*Right user side bar */}
        <nav ref={node2} className={userbar ? 'userbar-menu active' : 'userbar-menu'}>
            <ul className='right-nav-items' >
              {/*Profile button*/}
              <li className='nav-text' onClick={showUserbar}>
              <Link to='/profile'>
              <AiIcons.AiOutlineUser style={{
                      marginRight: '10px',
                      fontSize:'30px',
                  }}/><p>
                Profile
              </p>
              </Link>

              </li>
              {/*Log out button*/}
              <li  className='nav-text'onClick={closeRBar}>
              <Link to='/'>
              <FiIcons.FiLogOut style={{
                      marginRight: '10px',
                      fontSize:'30px',
                  }}/><p>Log out</p>
              </Link>
              </li>

            </ul>
        </nav>
         
      </IconContext.Provider>      
     
      
    </header>
    
  )
}

export default Header