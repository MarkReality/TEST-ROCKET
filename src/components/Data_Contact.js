import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import validator from "validator";
import profileImg from '../img/revan.jpg'

const Data_Contact = ({ nextStep, previousStep, handleFormData, values }) => {

    const { mail, mobile } = values;
    
    const [error, setError] = useState(false);
    
    const submitFormData = (e) => {
        e.preventDefault();

        if (validator.isEmpty(values.mail) || validator.isEmpty(values.mobile)) {
            setError(true);
        } else {
            nextStep();
        }
    };
    return (
        <div className="Data_Contact">
            <div className="style-image-card">
                <div className="section-icon">
                    <Image fluid src={profileImg} roundedCircle className='icon-profile' style={{border:'solid purple 4px'}}></Image>
                </div>
                <div className="card-forms">
                    <Card className='card-style'>
                        <Card.Body>
                            <Card.Title style={{color: 'black', fontSize: '24px', fontWeight: 'bolder'}}>Datos de contacto</Card.Title>
                            <Form onSubmit={submitFormData}>
                                <Form.Group style={{marginTop: '40px'}} className="mb-3">
                                    <Form.Control  onChange={handleFormData("mail")} type="email" placeholder="Correo electrónico"/>
                                    {error ? (
                                        <Form.Text style={{ color: "red", fontSize: "15px" }}>Por favor, complete este campo</Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control onChange={handleFormData("mobile")} type="number" placeholder="Teléfono celular" />
                                    {error ? (
                                        <Form.Text style={{ color: "red", fontSize: "15px"}}>Por favor, complete este campo</Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Form.Group>
                                <div className='buttons-steps'>
                                    <Button style={{color: 'white', backgroundColor: ' rgb(223, 3, 212)'}} onClick={previousStep}>Anterior</Button>
                                    <Button style={{color: 'white', backgroundColor: ' rgb(223, 3, 212)', marginLeft: '40px'}} type='submit'>Iniciar</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="section-previous-data">
                <Card style={{backgroundColor: 'darkorchid', width: 'auto', height: 'auto', marginTop: '40px'}}>
                    <Card.Body>
                        <p>Correo electrónico: {mail}</p> 
                        <p>Teléfono celular: {mobile}</p> 
                    </Card.Body>
                </Card>                      
            </div>
        </div>
    );
};

export default Data_Contact;