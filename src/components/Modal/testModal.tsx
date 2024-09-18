import React, { useEffect, useState } from 'react'
import { Property } from '../../utils/interface/interface';

interface props {
  open: boolean;
  onClose: () => void;
  onSubmit: (v: Property) => void;
}

export default function TestModal({ open, onClose, onSubmit }: props) {
  // const [detail, setDetail] = useState<Property>({
  //   location: "",
  //   type: "",
  //   year: "",
  //   size: "",
  //   room: "",
  //   bathroom: "",
  //   den: false,
  //   ac: false,
  //   parking: "",
  //   MOA: '',
  //   price: "",
  //   openHouse: ""
  // });

  const typeOptions = [
    'Condo',
    'Townhouse',
    'Duplex',
    'Single-family home'
  ];

  // function clearData() {
  //   setDetail({
  //     location: '',
  //     type: "",
  //     year: "", // or 0 if you'd prefer a default number
  //     size: "", // or 0
  //     room: "", // or 0
  //     bathroom: "", // or 0
  //     den: false,
  //     ac: false,
  //     parking: "", // or 0
  //     MOA: '', // or 0
  //     price: "", // or 0
  //     openHouse: "" // or new Date().toISOString().slice(0,16) for a default datetime-local value
  //   });
  // }

  // useEffect(() => {
  //   if (open) {
  //     // Reset detail state when modal gets open
  //     // clearData();
  //   }
  // }, [open]);

  // const handleChange = (e: any) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setDetail((prev) => { return { ...prev, [name]: value } })
  // }

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const detail = {
      location: formData.get('location') as string,
      type: formData.get('type') as string,
      year: formData.get('year') as string,
      size: formData.get('size') as string,
      room: formData.get('room') as string,
      bathroom: formData.get('bathroom') as string,
      den: formData.get('den') === 'on', // checkboxes return 'on' when checked
      ac: formData.get('ac') === 'on',
      parking: formData.get('parking') as string,
      MOA: formData.get('moa') as string,
      price: formData.get('price') as string,
      openHouse: formData.get('openHouse') as string,
    };

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
            <input name='location' type='text'/>
            <h3>Property Type: </h3>
            <select name='type'>
              <option value='Please select'></option>
              {typeOptions.map(option => (
                <option value={option}>{option}</option>
              ))}
            </select>
            <h3>Year: </h3>
            <input name='year' type='number'/>
            <h3>Size: </h3>
            <input name='size' type='number'/>
            <h3>Room: </h3>
            <input name='room' type='number'/>
            <h3>Bathroom: </h3>
            <input name='bathroom' type='number'/>
          </div>
          <div className="col" style={{ width: 'fit-content' }}>
            <h3>Den: </h3>
            <input name='den' type='checkbox'/>
            <h3>AC: </h3>
            <input name='ac' type='checkbox'/>
            <h3>Parking: </h3>
            <input name='parking' type='number'/>
            <h3>MOA: </h3>
            <input name='moa' type='number'/>
            <h3>Price: </h3>
            <input name='price' type='number'/>
            <h3>Open House: </h3>
            <input name='openHouse' type='datetime-local'/>
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
