import { useState } from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';
import Search from "@mui/icons-material/Search";
import Notifications from "@mui/icons-material/Notifications";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

const logo =require ('../../asset/picturelogo.png')
const profilepic =require ('../../asset/headshot.jpg')


const Navbar = () => {
const [isScrolled, setIsScrolled]= useState(false);

window.onscroll = () => {
  setIsScrolled(window.pageYOffset === 0 ? false : true)
  return() => (window.onscroll = null)
}

  return (
    <div className = {isScrolled? 'navbar scrolled' : 'navbar'}>
            <div className='container'>
            <div className='left'>
                <img src= {logo} alt='lg'/>
                <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Movies</Link></li>
        <li><Link to="/watch">Shows</Link></li>
        <li><Link to="/login">Popular</Link></li>
        <li><Link to="/register">Login/Register</Link></li>
      </ul>

                {/* <span>Home</span>
                <span>Movies</span>
                <span>Shows</span>
                <span>Popular</span>
                <span>List</span> */}
            </div>
            <div className='right'>
              <Search className='icons'/>
              <span>KID</span>
              <Notifications className='icons'/>
              <img src={profilepic} alt='ppic'/>
              <div className="profile">
              <ArrowDropDown  className='icons'/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
              </div>


            </div>
            </div>

        
        </div>
      
  )

  }
export default Navbar