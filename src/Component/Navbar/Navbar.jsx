import React from 'react'
import logo from '../../assets/images/street suite logo-04-2.png'
export default function Navbar() {
  return <>
  <nav id="menu" className="d-flex position-fixed">
      <div className="menu-header d-flex align-items-center justify-content-between flex-column text-white">
        <ul className='d-flex align-items-center ps-0 flex-column links'>
          <img src={logo} alt="logo"/>
          <li>
             <i className="fa-solid fa-bell mt-5 mb-4 text-white"></i>
             <span className='ms-3 nav-item fw-bold text-white'>Alerts</span>
          </li>
          <li>
             <i className="fa-solid fa-graduation-cap mb-4 text-white"></i>
             <span className='ms-3 nav-item text-white'>Training</span>
          </li>
          <li className=' position-relative'>
              <i className="fa-solid fa-gears mb-4"></i>
              <span className='ms-3 nav-item'>Automation</span>
              <span className='coming-soon position-absolute'>coming soon</span>
          </li>
          <li className=' position-relative'>
              <i className="fa-solid fa-folder-open mb-4"></i>
              <span className='ms-3 nav-item '>Portfolio</span>
              <span className='coming-soon position-absolute'>coming soon</span>
          </li>
          <li className=' position-relative'>
              <i className="fa-solid fa-arrow-trend-up mb-4"></i>
              <span className='ms-3 nav-item '>Trading</span>
              <span className='coming-soon position-absolute'>coming soon</span>
          </li>
        </ul>
        
        <div className="acc">
          <div className="user d-flex">
          <div className="user-acc">
            <i className="fa-solid fa-user fa-2x"></i>        
          </div>
          <div className="user-info d-flex flex-column">
            <span className='ms-3 nav-item fw-bold text-white'>Moni Roy</span>
            <span className='ms-3 nav-item level'>Beginner</span>
          </div>
          </div>
          <div className="rights">
          <span className='ms-3 mt-3 nav-item copy'>Street Suite.2.0</span>
        </div>
        </div>
        
      </div>
   </nav>
  </>
}
