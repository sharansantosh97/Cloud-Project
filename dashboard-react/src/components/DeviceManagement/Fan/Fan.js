import {Modal, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DeviceManagement from "../DeviceManagement";
import FanRow from "./FanRow";
import Form from "react-bootstrap/Form";
import DeviceTable from "../../DeviceTable";



const Fan=()=>{

    const [data, setData] = useState([]);


    const [showAddModal, setShowAddModal] = useState(false);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true)


    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");
            console.log(id);
            const fanData = await axios.post('http://localhost:4000/allDevices',{
                type:'fan',
                data:{
                    id:id
                }
            });
            console.log(fanData.data.data);
            setData([...fanData.data.data]);
        }

        call();
    }, []);



    // todo
    const deleteDevice = async(deviceData)=>{

        // deleting


        await axios.post('http://localhost:4000/deleteDevice',{
            type:'fan',
            data:{
                id:deviceData.id
            }
        })

        const newData = data.filter(d=>{
            if(d.id!=deviceData.id)
                return d;
        });

        setData([...newData]);

    }


    const onAddClickHandler = async (event)=>{
        event.preventDefault();
        const userId = sessionStorage.getItem("userId");


        //todo
        let d = event.target;
        const data =
            {
                "type": "fan",
                "data": {
                    "device_name":d.deviceName.value,
                    "userId":userId,
                    "model" : d.model.value,
                    "installation_date":d.installationDate.value,
                    "id":d.deviceId.value,
                    "dimensions":d.dimensions.value,
                    "location":d.location.value,
                    "deployment_date":d.deploymentDate.value,
                    "manufacturer":d.manufacturer.value,
                    "power":d.power.value,
                    "maxSpeed": d.maxSpeed.value,
                    "num_speeds":d.num_speeds.value,

                }


            }



        await axios.post('http://localhost:4000/addDevice',data)
        const fanData = await axios.post('http://localhost:4000/allDevices',{
            type:'fan',
            data:{
                id:userId
            }
        });
        setData([...fanData.data.data]);

        handleCloseAddModal();

    }






    const update = async()=>{

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");
            //console.log(id);
            const fanData = await axios.post('http://localhost:4000/allDevices',{
                type:'fan',
                data:{
                    id:id
                }
            });
            console.log(fanData.data.data);
            setData([...fanData.data.data]);
        }

        call()

    }



    return <Container style={{marginTop:"5%"}}>
{/* 
        <Row>
            <Col lg={10}>

            </Col>
            <Col lg={2}>
                <Button variant="success" onClick={handleShowAddModal} style={{justifySelf:'right'}}>Add Camera</Button>
            </Col>
        </Row>
        <br/>

        <Table bordered>
            <thead>
            <tr>
                <th>Device Id</th>
                <th>Device Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>

            {data.map(d=>

                <FanRow data={d} key={d.id} onDeleteHandler={deleteDevice} onUpdateHandler={update} />
            )}

            </tbody>
        </Table>



        <Modal show={showAddModal} onHide={handleCloseAddModal} size="xl">
  <Form onSubmit={onAddClickHandler}>
    <Modal.Header>
      <Modal.Title>Add Camera  Information</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
       
      </Row>
      <br />
      <Row>
       
        <Col lg={4}>
          Camera Type :
          <Form.Control type="text" id="cameraType" required={true} />
        </Col>
        <Col lg={4}>
          Camera Name :
          <Form.Control type="text" id="cameraName" required={true} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={4}>
          Resolution :
          <Form.Control type="text" id="resolution" required={true} />
        </Col>
        <Col lg={4}>
          Operation Status :
          <Form.Control type="text" id="operationStatus" required={true} />
        </Col>
        <Col lg={4}>
          Health Status :
          <Form.Control type="text" id="healthStatus" required={true} />
        </Col>
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
      <Button variant="success" type={"submit"}>
        Add
      </Button>
    </Modal.Footer>
  </Form>
</Modal>




 */}

<DeviceTable></DeviceTable>
    </Container>
}




export default Fan;
