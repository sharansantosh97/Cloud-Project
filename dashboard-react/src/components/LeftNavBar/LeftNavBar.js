import React from "react"

import { Nav, NavLink } from "react-bootstrap"
import { IoHome } from "react-icons/io5"
import { AiOutlineAppstoreAdd, AiFillSetting } from "react-icons/ai"
import { RiBillLine } from "react-icons/ri"
import { useLocation } from "react-router-dom"

import { GoGraph } from "react-icons/go"
const LeftMenu = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[1]

  return (
    <>
      {/* <Nav  defaultActiveKey="/home" className="flex-column"  style={{marginTop:'5%', marginLeft:'5%',  backgroundColor:'#009ACD',height:'100vh',display:'flex'}}>
                        <Nav.Link href="/home" style={{ color : path ==='home'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> <IoHome style={{fontSize:'25px'}} />{' '} Home</Nav.Link>
                        <Nav.Link href="/deviceManagement" style={{color : path ==='deviceManagement'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}><AiOutlineAppstoreAdd style={{fontSize:'25px'}}/> Device Management</Nav.Link>
                        <Nav.Link href='/monitor' style={{color : path ==='monitor'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> <GoGraph style={{fontSize:'25px'}}/> Monitor & tracking</Nav.Link>
                        <Nav.Link href='/controlConfigure' style={{color : path ==='controlConfigure'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> <AiFillSetting style={{fontSize:'25px'}}/> Control & Configure</Nav.Link>
                        <Nav.Link href='/billing' style={{color : path ==='billing'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}><RiBillLine style={{fontSize:'25px'}}/> Billing</Nav.Link>
                        <p> ----------------------------------------------</p>
                        <Nav.Link href='/service' style={{color : path ==='service'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> <AiFillSetting style={{fontSize:'20px'}}/>Service Request</Nav.Link>

                </Nav> */}

      <nav class='pcoded-navbar'>
        <div class='navbar-wrapper'>
          <div class='navbar-brand header-logo'>
            <a href='index.html' class='b-brand'>
              <div class='b-bg'>
                <i class='feather icon-video'></i>
              </div>
              <span class='b-title'>Campus Surveillance</span>
            </a>
            {/* <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a> */}
          </div>
          <div class='navbar-content scroll-div'>
            <ul class='nav pcoded-inner-navbar'>
              <li class='nav-item pcoded-menu-caption'>
                <label style={{ color: "white" }}>Navigation</label>
              </li>
              {/* <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item active">
                                        <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></a>
                                </li> */}
              <li
                data-username='Sample Page'
                class={path === "home" ? "nav-item active" : "nav-item"}
              >
                <NavLink href='/home'>
                  <span class='pcoded-micon'>
                    <i class='feather icon-home'></i>
                  </span>
                  <span class='pcoded-mtext'>Home</span>
                </NavLink>
              </li>
              <li
                data-username='Sample Page'
                class={
                  path === "deviceManagement" ? "nav-item active" : "nav-item"
                }
              >
                <NavLink href='/deviceManagement'>
                  <span class='pcoded-micon'>
                    <i class='feather icon-camera'></i>
                  </span>
                  <span class='pcoded-mtext'>Camera Management</span>
                </NavLink>
              </li>
              <li
                data-username='Sample Page'
                class={path === "monitor" ? "nav-item active" : "nav-item"}
              >
                <NavLink href='/monitor'>
                  <span class='pcoded-micon'>
                    <i class='feather icon-monitor'></i>
                  </span>
                  <span class='pcoded-mtext'>Monitor and Tracking</span>
                </NavLink>
              </li>
              <li
                data-username='Sample Page'
                class={
                  path === "controlConfigure" ? "nav-item active" : "nav-item"
                }
              >
                <NavLink href='/controlConfigure'>
                  <span class='pcoded-micon'>
                    <i class='feather icon-server'></i>
                  </span>
                  <span class='pcoded-mtext'>Control & Configure</span>
                </NavLink>
              </li>
              <li
                data-username='Sample Page'
                class={path === "billing" ? "nav-item active" : "nav-item"}
              >
                <NavLink href='/billing'>
                  <span class='pcoded-micon'>
                    <i class='feather icon-file-text'></i>
                  </span>
                  <span class='pcoded-mtext'>Billing Dashboard</span>
                </NavLink>
              </li>
              <li
                data-username='Sample Page'
                class={path === "service" ? "nav-item active" : "nav-item"}
              >
                <NavLink href='/service'>
                  <span class='pcoded-micon'>
                    <i class='feather icon-alert-triangle'></i>
                  </span>
                  <span class='pcoded-mtext'>Maintenance Request</span>
                </NavLink>
              </li>
              <li
                data-username='Sample Page'
                class={
                  path === "dataManagement" ? "nav-item active" : "nav-item"
                }
              >
                <NavLink href='/dataManagement'>
                  <span class='pcoded-micon'>
                    <i class='feather icon-play-circle'></i>
                  </span>
                  <span class='pcoded-mtext'>
                    Data Management and Retreival
                  </span>
                </NavLink>
              </li>
              <li
                data-username='Sample Page'
                class={
                  path === "alert" ? "nav-item active" : "nav-item"
                }
              >
                <NavLink href='/alert'>
                  <span class='pcoded-micon'>
                    <i class='feather icon-alert-circle'></i>
                  </span>
                  <span class='pcoded-mtext'>
                    Alert Dashboard
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default LeftMenu
