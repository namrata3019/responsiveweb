import React, { useState,useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './Toggle.css';

function Toggle(props) {
 
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Learner', value: '1' },
    { name: 'Mentor', value: '2' },
   
  ];
  useEffect(() => {
    console.log("update",radioValue);
  }, [radioValue])
  

  return (
    <div className='Toggle'>
     
    
      
     
      <ButtonGroup >
        {radios.map((radio, idx) => (
          <ToggleButton
         
          
                      key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx ==1? 'outline-success ' : 'outline-danger '}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              e.preventDefault();
              setRadioValue(e.currentTarget.value);
            props.toggleData(radios[radio.value-1].name)}}
          >
            {radio.name}
       
          </ToggleButton>
        ))}
      </ButtonGroup>
    
    </div>
  );
}

export default Toggle;