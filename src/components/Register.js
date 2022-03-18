import React from 'react';
import Card from 'react-bootstrap/Card'

const Register = ({ values }) => {

    const { firstName, secondName, lastName1, lastName2, day, month, year, mail, mobile } = values;

    return (
        <div className="Register">
            <Card style={{backgroundColor: 'transparent', width: 'auto', height: 'auto'}}>
                <Card.Body className='card-register-data'>
                    <Card.Title style={{color: 'black', fontSize: '24px', fontWeight: 'bolder'}}>Estos son sus datos. <br></br> Vuelve pronto!</Card.Title>
                    <p>Nombre: {firstName}{" "} {secondName}{" "} {lastName1}{" "} {lastName2}{" "}</p> 
                    <p>Fecha de nacimiento: {day}{" "} {month}{" "} {year}{" "}</p>
                    <p>Correo electrónico:  {mail}{" "}</p>
                    <p>Telefóno celular:  {mobile}{" "}</p>
                </Card.Body>
            </Card>
        </div>
      );
};

export default Register;