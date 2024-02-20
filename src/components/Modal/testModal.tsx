import React, { useState } from 'react'
import { Property } from '../../utils/interface/interface';

interface props {
    open: boolean;
    onClose: () => void,
    onSubmit: (v: Property) => void;
}


const MODAL_STYLES = {
  Position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  border: 'solid'
}

export default function TestModal({open, onClose, onSubmit}: props) {
  
  const [detail, setDetail] = useState<Property>({
    location: '',
    type: undefined,
    year: undefined,
    size: undefined,
    room: undefined,
    bathroom: undefined,
    den: undefined,
    ac: undefined,
    parking: undefined,
    MOA: undefined,
    price: undefined
  });
  
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setDetail((prev) => {return {...prev, [name]: value}})
  }
  
  const sumbit = () => {
    onSubmit(detail) 
  }
  if (!open) return null

  return (
    <div style={MODAL_STYLES}>
        <form onSubmit={sumbit}>
          <h3>Location: </h3>
          <input name='location' type='text' onChange={handleChange}/>
          <h3>Property Type: </h3>
          <input name='type' type='text' onChange={handleChange}/>
          <h3>Year: </h3>
          <input name='year' type='number' onChange={handleChange}/>
          <h3>Size: </h3>
          <input name='size' type='number' onChange={handleChange}/>
          <h3>Room: </h3>
          <input name='room' type='number' onChange={handleChange}/>
          <h3>Bathroom: </h3>
          <input name='bathroom' type='number' onChange={handleChange}/>
          <h3>Den: </h3>
          <input name='den' type='checkbox' onChange={handleChange}/>
          <h3>AC: </h3>
          <input name='ac' type='checkbox' onChange={handleChange}/>
          <h3>Parking: </h3>
          <input name='parking' type='number' onChange={handleChange}/>
          <h3>MOA: </h3>
          <input name='moa' type='number' onChange={handleChange}/>
          <h3>Price: </h3>
          <input name='price' type='number' onChange={handleChange}/>
        </form>
        <button onClick={sumbit}>Submit</button>
        <button onClick={onClose}>X</button>
      </div>
    )
}
