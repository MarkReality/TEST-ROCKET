import './App.css';
import { useState } from 'react';
import FormName from './components/Data_Name';
import FormDate from './components/Data_Date';
import FormContact from './components/Data_Contact';
import Register from './components/Register';

function App() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    lastName1: "",
    lastName2: "",
    day: "",
    month: "",
    year: "",
    mail: "",
    mobile: ""
  })

  const nextStep = () => {
    setStep(step + 1);
  }

  const previousStep = () => {
    setStep(step - 1);
  }

  const handleInputData = input => e => {
    const { value } = e.target;

    setFormData(previousStep => ({
      ...previousStep,
      [input]: value
    }));
  }

  switch(step) {
    case 1:
      return(
        <div className="App">
          <div className='body-background'>
            <FormName nextStep={nextStep} handleFormData={handleInputData} values={formData}/>
          </div>
        </div>
      )
    case 2:
      return(
        <div className="App">
          <div className='body-background'>
            <FormDate nextStep={nextStep} previousStep={previousStep} handleFormData={handleInputData} values={formData}/>
          </div>
        </div>
      )
    case 3:
      return(
        <div className="App">
          <div className='body-background'>
            <FormContact nextStep={nextStep} previousStep={previousStep} handleFormData={handleInputData} values={formData}/>
          </div>
        </div>
      )
    case 4:
      return(
        <div className="App">
          <div className='body-background'>
            <Register values={formData}/>
          </div>
        </div>
      )
    default:
      return(
        alert("NO PODEMOS REGISTRAR LOS DATOS")
      )
  }
}

export default App;
