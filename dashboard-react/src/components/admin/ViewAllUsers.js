import AddUser from "./AddUser";
import Col from "react-bootstrap/Col";
import LeftNavBarAdmin from "./LeftNavBarAdmin/LeftNavBarAdmin";
import Row from "react-bootstrap/Row";
import {Form, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import axios from "axios";
import NavBarLoggedInAdmin from "./NavbarAdmin/NavBarLoggedInAdmin";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
//import './MyTable.css';
function  ViewAllUsers(){

    const val=[];

    const [data,setData] = useState(val);

    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");

            let userData = await axios.get('http://localhost:4000/getAllUsers');
            console.log(userData);

            userData = userData.data.data;


            setData([...userData]);
        }  
        call()


    }, []);

    return <>
        <NavBarLoggedInAdmin/>

        <Row>
            <Col lg={2}> <LeftNavBarAdmin/> </Col>
            <Col lg={10}>
                <h4 style={{textAlign:'center',marginTop:'5%'}}> Current Campus Security Officers </h4>
                {/* <Table striped bordered hover style={{marginTop:'5%'}} className="my-table">
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        data.map(el=>{
                           return <tr>
                                <td>{el.id}</td>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                 <td>{el.email}</td>
                                <td>{el.dateCreated}</td>
                                <td>{el.dateCreated}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table> */}

                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Campus Security Officer</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Phone Number</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    {data.map((item) => (
                        <tr>
                        <td>
                            <p className='fw-normal mb-1'>{item.id}</p>
                        </td>  
                        <td>
                            <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>{item.firstName} {item.lastName}</p>
                                <p className='text-muted mb-0'>{item.campusName}</p>
                            </div>
                            </div>
                        </td>
                        <td><a href="#!" class={item.status === 'Active' ? 'label theme-bg text-white f-12' : 'label theme-bg2 text-white f-12'}>{item.status}</a></td>
                        {/* <td>
                            <MDBBadge color='success' pill>
                            {item.status}
                            </MDBBadge>
                        </td> */}
                        <td>
                            <p className='fw-normal mb-1'>{item.email}</p>
                        </td> 
                        <td>
                            <p className='fw-normal mb-1'>{item.phoneNumber}</p>
                        </td> 
                        </tr>
                        ))}
                    </MDBTableBody>
                    </MDBTable>

            </Col>
        </Row>



    </>

}


export default ViewAllUsers;
