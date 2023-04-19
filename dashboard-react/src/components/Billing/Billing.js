import React, { useState } from "react"
import "./Billing.css"
import Routing from "./Invoice"
import { Route, Routes, useNavigate } from "react-router-dom"
import Invoice from "./Invoice"
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import LeftNavBar from "../LeftNavBar/LeftNavBar"
import Home from "../home"
import axios from "axios"

const Billing = () => {
  const [data, setData] = useState({})

  const navigate = useNavigate()

  const goToInvoice = () => {
    // 👇️ navigate to /contacts
    navigate("/invoice")
  }

  React.useEffect(() => {
    const call = async () => {
      const id = sessionStorage.getItem("userId")
      console.log(id)
      const bill = await axios.post("http://localhost:4000/bill", {
        data: {
          userId: id,
        },
      })
      console.log(bill)

      setData({ ...bill.data })
    }

    call()
  }, [])

  return (
    <>
      <NavBarLoggedIn />
      <Row>
        <Col lg={2}>
          {" "}
          <LeftNavBar />{" "}
        </Col>
        <Col lg={10} style={{ paddingLeft: 80, paddingRight: 80 }}>
          {/* <main>
                <h1 className="main--title">Pending Bills</h1>
                <div className="main--facts" >
                    <p>Name : {data.name}</p>
                    <p>Bill ID : 110ec58a-a0f2-4ac4-8393-c866d813b8d1</p>
                    <p>Due Date : 11-24-2022</p>
                    <p>Water Usage : {Math.round((data.waterUtilization) * 100) / 100} Gallons</p>
                    <p>Electricity Usage : {Math.round((data.electricityUtilization) * 100) / 100} KWH</p>
                    <p>Total Amount : {Math.round((data.electricityCost+data.waterCost) * 100) / 100} $</p>
                </div>
                <button className="button-invoice" type="button" onClick={goToInvoice} style={{marginLeft:'40%'}}>Generate Invoice</button>
                <Routes>
                    <Route path="/invoice" element={<Invoice />} />
                </Routes>
            </main> */}

          <div class='col-xl-4 col-md-6'>
            <div class='card card-event'>
              <div class='card-block'>
                <div class='row align-items-center justify-content-center'>
                  <div class='col'>
                    <h5 class='m-0'>Total Due</h5>
                  </div>
                  <div class='col-auto'>
                    <label class='label theme-bg2 text-white f-14 f-w-400 float-right'>
                      $ 2500
                    </label>
                  </div>
                </div>
                <h2 class='mt-3 f-w-300'>
                  <sub class='text-muted f-14'>
                    Premium Plus Subscription Plan
                  </sub>
                </h2>
                <h6 class='text-muted mt-4 mb-0'>
                  Statement is generated first of every month{" "}
                </h6>
                <i class='fab fa-angellist text-c-purple f-50'></i>
              </div>
            </div>
            {/* <div class='card'>
              <div class='card-block border-bottom'>
                <div class='row d-flex align-items-center'>
                  <div class='col-auto'>
                    <i class='feather icon-zap f-30 text-c-green'></i>
                  </div>
                  <div class='col'>
                    <h3 class='f-w-300'>100</h3>
                    <span class='d-block text-uppercase'>TOTAL ALERTS</span>
                  </div>
                </div>
              </div>
              <div class="card-block">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-auto">
                                                    <i class="feather icon-map-pin f-30 text-c-blue"></i>
                                                </div>
                                                <div class="col">
                                                    <h3 class="f-w-300">26</h3>
                                                    <span class="d-block text-uppercase">TOTAL LOCATIONS</span>
                                                </div>
                                            </div>
                                        </div>
            </div> */}
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Billing
