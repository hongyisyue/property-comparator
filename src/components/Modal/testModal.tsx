import React, { useEffect, useState } from 'react'
import { Property } from '../../utils/interface/interface';

interface props {
  open: boolean;
  onClose: () => void;
  onSubmit: (v: Property) => void;
}

export default function TestModal({ open, onClose, onSubmit }: props) {
  const [detail, setDetail] = useState<Property>({
    location: undefined,
    type: undefined,
    year: undefined,
    size: undefined,
    room: undefined,
    bathroom: undefined,
    den: false,
    ac: false,
    parking: undefined,
    MOA: undefined,
    price: undefined,
    openHouse: undefined
  });

  const typeOptions = [
    'Condo',
    'Townhouse',
    'Duplex',
    'Single-family home'
  ];

  function clearData() {
    setDetail({
      location: undefined,
      type: undefined,
      year: undefined,
      size: undefined,
      room: undefined,
      bathroom: undefined,
      den: false,
      ac: false,
      parking: undefined,
      MOA: undefined,
      price: undefined,
      openHouse: undefined
    });
  }

  useEffect(() => {
    if (open) {
      // Reset detail state when modal is closed
      clearData();
    }
  }, [open]);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetail((prev) => { return { ...prev, [name]: value } })
  }

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(detail);
    onClose();
  }

  return (
    <dialog id='myModal' className='modal' open={open}>
      <div className="row col header">
        New place to watch
      </div>
      <form onSubmit={handleSumbit}>
        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="col" style={{ width: 'fit-content' }}>
            <h3>Location: </h3>
            <input name='location' type='text' value={detail.location} onChange={handleChange} />
            <h3>Property Type: </h3>
            <select name='type' value={detail.type} onChange={handleChange}>
              <option value='Please select'></option>
              {typeOptions.map(option => (
                <option value={option}>{option}</option>
              ))}
            </select>
            <h3>Year: </h3>
            <input name='year' type='number' value={detail.year} onChange={handleChange} />
            <h3>Size: </h3>
            <input name='size' type='number' value={detail.size} onChange={handleChange} />
            <h3>Room: </h3>
            <input name='room' type='number' value={detail.room} onChange={handleChange} />
            <h3>Bathroom: </h3>
            <input name='bathroom' type='number' value={detail.bathroom} onChange={handleChange} />
          </div>
          <div className="col" style={{ width: 'fit-content' }}>
            <h3>Den: </h3>
            <input name='den' type='checkbox' checked={detail.den} onChange={handleChange} />
            <h3>AC: </h3>
            <input name='ac' type='checkbox' checked={detail.ac} onChange={handleChange} />
            <h3>Parking: </h3>
            <input name='parking' type='number' value={detail.parking} onChange={handleChange} />
            <h3>MOA: </h3>
            <input name='moa' type='number' value={detail.MOA} onChange={handleChange} />
            <h3>Price: </h3>
            <input name='price' type='number' value={detail.price} onChange={handleChange} />
            <h3>Open House: </h3>
            <input name='openHouse' type='datetime-local' value={detail.openHouse} onChange={handleChange} />
          </div>
        </div>
        <div className="footer col">
          <button className="button left-button" type="button" onClick={onClose}>X</button>
          <button className="button right-button" type="submit">Submit</button>
        </div>
      </form>
    </dialog>
  )
}
