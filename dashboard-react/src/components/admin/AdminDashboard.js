import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNavBarAdmin from "./LeftNavBarAdmin/LeftNavBarAdmin";
import axios from "axios";
import React, { useState } from "react";
import NavBarLoggedInAdmin from "./NavbarAdmin/NavBarLoggedInAdmin";
import './AddUser.css';
import { color } from "@mui/system";


function AdminDashboard() {
  return (<>
      <NavBarLoggedInAdmin />
      <Row>
            <Col lg={2}> <LeftNavBarAdmin /> </Col>
            <Col lg={10}>
            <div class="main-body">
                <div class="page-wrapper">
                    <div class="row">
                        <div class="col-md-6 col-xl-4">
                            <div class="card daily-sales">
                                <div class="card-block">
                                    <h6 class="mb-4">Officers Registered</h6>
                                    <div class="row d-flex align-items-center">
                                        <div class="col-9">
                                            <h3 class="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>5</h3>
                                        </div>
                                        <div class="col-3 text-right">
                                            <p class="m-b-0">67%</p>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{ height: "7px" }}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-xl-4">
                            <div class="card daily-sales">
                                <div class="card-block">
                                    <h6 class="mb-4">Maintenance Requests Raised</h6>
                                    <div class="row d-flex align-items-center">
                                        <div class="col-9">
                                            <h3 class="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>10</h3>
                                        </div>

                                        <div class="col-3 text-right">
                                            <p class="m-b-0">67%</p>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{ height: "7px" }}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-xl-4">
                            <div class="card daily-sales">
                                <div class="card-block">
                                    <h6 class="mb-4">Pending Maintenance Requests</h6>
                                    <div class="row d-flex align-items-center">
                                        <div class="col-9">
                                            <h3 class="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>6</h3>
                                        </div>

                                        <div class="col-3 text-right">
                                            <p class="m-b-0">67%</p>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{ height: "7px" }}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="card">
                                        <div class="card-block">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-auto">
                                                    <i class="feather icon-map-pin f-30 text-c-blue"></i>
                                                </div>
                                                <div class="col">
                                                    <h3 class="f-w-300">1</h3>
                                                    <span class="d-block text-uppercase">TOTAL LOCATIONS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
                </div>
            </Col>
        </Row>
  </>);


}

export default AdminDashboard;