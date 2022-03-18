import React, { useState } from "react";
import Welcome from './Welcome';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import validator from "validator";
import profileImg from '../img/revan.jpg'

const Data_Name = ({ nextStep, handleFormData, values }) => {

    const { firstName, secondName, lastName1, lastName2 } = values;

    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if (validator.isEmpty(values.firstName) || validator.isEmpty(values.secondName) || validator.isEmpty(values.lastName1) || validator.isEmpty(values.lastName2)) {
            setError(true);
        } else {
            nextStep();
        }
    };

    return (
        <div className="Data_Name">
            <Welcome/>
            <div className="style-image-card">
                <div className="section-icon">
                    <Image fluid src={profileImg} roundedCircle className='icon-profile' style={{border:'solid purple 4px'}}></Image>
                </div>
                <div className="card-forms">
                    <Card className='card-style'>
                        <Card.Body>
                            <Card.Title style={{color: 'black', fontSize: '24px', fontWeight: 'bolder'}}>¿Cuál es tu nombre?</Card.Title>
                            <Form onSubmit={submitFormData}>
                                <Form.Group style={{marginTop: '40px'}} className="mb-3">
                                    <Form.Control name="firstName" defaultValue={values.firstName} onChange={handleFormData("firstName")} type="text" placeholder="Nombre"/>
                                    {error ? (
                                        <Form.Text style={{ color: "red", fontSize: "15px" }}>Por favor, complete este campo</Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control name="secondName" defaultValue={values.secondName} onChange={handleFormData("secondName")} type="text" placeholder="Segundo nombre"/>
                                    {error ? (
                                        <Form.Text style={{ color: "red", fontSize: "15px"}}>Por favor, complete este campo</Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control name="lastName1" defaultValue={values.lastName1} onChange={handleFormData("lastName1")} type="text" placeholder="Apellido paterno"/>
                                    {error ? (
                                        <Form.Text style={{ color: "red", fontSize: "15px" }}>Por favor, complete este campo</Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control name="lastName2" defaultValue={values.lastName2} onChange={handleFormData("lastName2")} type="text" placeholder="Apellido materno"/>
                                    {error ? (
                                        <Form.Text style={{ color: "red", fontSize: "15px" }}>Por favor, complete este campo</Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Form.Group>
                                <div className='buttons-steps'>
                                    <Button style={{color: 'white', backgroundColor: ' rgb(223, 3, 212)'}} type='submit'>Siguiente</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="section-previous-data">
                <Card style={{backgroundColor: 'darkorchid', width: 'auto', height: 'auto', marginTop: '40px'}}>
                    <Card.Body>
                        <p>Nombre: {firstName} {secondName} {lastName1} {lastName2}</p> 
                    </Card.Body>
                </Card>                      
            </div>
        </div>
    );
};

export default Data_Name;