import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import IconForm from '../img/icon_form.png'
import '../App.css'

function Welcome(){
    return(
        <div className='Welcome'>
            <Card style={{backgroundColor: 'transparent', width: 'auto', height: 'auto', marginTop: '10px', marginBottom: '50px'}}>
                <Card.Body className='body-card-style'>
                <div className='column-icon'>
                    <Image fluid src={IconForm} className='icon-form'></Image>
                </div>
                <div className='column-text'>
                    <Card.Title style={{marginBottom: '20px', fontSize: '28px'}}>Formulario Test Rocket Code</Card.Title>
                    <Card.Text style={{fontSize: '20px'}}>
                        En menos de 5 minutos.
                    </Card.Text>
                </div>
                </Card.Body>
            </Card>
         </div>
    )
}

export default Welcome;