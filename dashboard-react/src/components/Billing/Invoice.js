import React, {useState} from "react";
import { render } from "react-dom";

import { Col, Divider, Row, Table } from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";

import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBTypography,
  } from "mdb-react-ui-kit";

const Invoice=()=> {


    const [data,setData] = useState({});


    const navigate = useNavigate();

    const goToInvoice = () => {
        // 👇️ navigate to /contacts
        navigate('/invoice');
    };

    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");
            console.log(id);
            const bill = await axios.post('http://localhost:4000/bill',{
                data:{
                    userId:id
                }
            });
            console.log(bill);

            setData({...bill.data})

        }

        call();
    }, []);




    return (
        <>
            <NavBarLoggedIn/>
            {/*style={{marginLeft:'20%' , color : path ==='fan'?'#009ACD':'inherit'} }*/}
            {/*, background :'black',color:'white' */}
            {/* <div style={{ padding: 20  }}>
                <Row>
                    <Col>
                        <h1 >Invoice</h1>
                    </Col>
                </Row>

                <Row gutter={24} style={{ marginTop: 32 }}>
                    <Col span={8}>
                        <h4>{data.name}</h4>
                        <div>San Jose State University,</div>
                        <div>1 washington square</div>
                        <div>San Jose,</div>
                        <div>California - 95112</div>
                    </Col>
                    <Col span={8} offset={8}>
                        <table>
                            <tr>
                                <th>Invoice # :</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Invoice Date :</th>
                                <td>11-15-2022</td>
                            </tr>
                            <tr>
                                <th>Due Date :</th>
                                <td>11-23-2022</td>
                            </tr>
                        </table>
                    </Col>
                </Row>

                <Row style={{ marginTop: 48 }}>
                    <div>
                        Bill To: <strong>{data.name}</strong>
                    </div>
                    <div>756 The alameda,</div>
                    <div>San Jose - 95126</div>
                </Row>

                <br/>
                <br/>
                <table>

                <thead>
                <tr>
                    <th>
                        Items
                    </th>
                    <th>
                        Utilization
                    </th>
                    <th>
                        Rate per item
                    </th>
                    <th>
                        Price
                    </th>



                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        Water Usage
                    </td>
                    <td>
                        {Math.round(data.waterUtilization * 100) / 100} Gallons

                    </td>
                    <td>
                        {data.water_metric} $

                    </td>
                    <td>
                        {Math.round(data.waterCost * 100) / 100} $
                    </td>
                </tr>

                <tr>
                    <td>
                        Power Usage
                    </td>
                    <td>

                        {Math.round(data.electricityUtilization * 100) / 100} KWH
                    </td>
                    <td>

                        {Math.round(data.electric_metric * 100) / 100} $
                    </td>
                    <td>

                        {Math.round(data.electricityCost * 100) / 100} $

                    </td>
                </tr>


                <tr>
                    <td>
                        -----------------------
                    </td>
                    <td>
                        -----------------------

                    </td>
                    <td>
                        -----------------------

                    </td>
                    <td>
                        -----------------------
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>


                    </td>
                    <td>


                    </td>
                    <td>
                        NetTotal: {Math.round((data.electricityCost+data.waterCost) * 100) / 100} $
                    </td>
                </tr>
                </tbody>
                </table>
            </div> */}

<MDBContainer className="py-5">
      <MDBCard>
        <MDBCardHeader className="bg-dark"> </MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol xl="12">
                <MDBIcon
                  far
                  icon="building"
                  color="danger"
                  size="6x"
                  className="float-start"
                />
                <MDBTypography listUnStyled className="float-end">
                  <li style={{ fontSize: "30px", color: "red" }}>Company</li>
                  <li>123, Elm Street</li>
                  <li>123-456-789</li>
                  <li>mail@mail.com</li>
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
              <h3
                className="text-uppercase text-center mt-3"
                style={{ fontSize: "40px" }}
              >
                Invoice
              </h3>
              <p>123456789</p>
            </MDBRow>
            <MDBRow className="mx-3">
              <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>Samsung TV</td>
                    <td>
                      <MDBIcon fas icon="dollar-sign" /> 500,00
                    </td>
                  </tr>
                  <tr>
                    <td>JBL Speaker</td>
                    <td>
                      <MDBIcon fas icon="dollar-sign" /> 300,00
                    </td>
                  </tr>
                  <tr>
                    <td>Macbook Air</td>
                    <td>
                      <MDBIcon fas icon="dollar-sign" /> 1000,00
                    </td>
                  </tr>
                  <tr>
                    <td>Iphone 11 PRO</td>
                    <td>
                      <MDBIcon fas icon="dollar-sign" /> 5000,00
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBRow>
            <MDBRow>
              <MDBCol xl="8">
                <MDBTypography listUnStyled className="float-end me-0">
                  <li>
                    <span className="me-3 float-start">Total Amount:</span>
                    <MDBIcon fas icon="dollar-sign" /> 6850,00
                  </li>
                  <li>
                    <span className="me-5">Discount:</span>
                    <MDBIcon fas icon="dollar-sign" /> 500,00
                  </li>
                  <li>
                    <span
                      className="float-start"
                      style={{ marginRight: "35px" }}
                    >
                      Shippment:
                    </span>
                    <MDBIcon fas icon="dollar-sign" /> 500,00
                  </li>
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol xl="8" style={{ marginLeft: "20px" }}>
                <p
                  className="float-end"
                  style={{
                    fontSize: "30px",
                    color: "red",
                    fontWeight: "400",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  Total:
                  <span>
                    <MDBIcon fas icon="dollar-sign" className="ms-2" /> 6350,00
                  </span>
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-2 mb-5">
              <p className="fw-bold">
                Date: <span className="text-muted">23 June 20221</span>
              </p>
              <p className="fw-bold mt-3">Signature:</p>
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>
        <MDBCardFooter className="bg-dark"></MDBCardFooter>
      </MDBCard>
    </MDBContainer>

        </>

    );
}

export default Invoice;
