import React, { useEffect, useRef, useState } from 'react'
import { Property } from '../../utils/interface/interface';

interface props {
  open: boolean;
  onClose: () => void;
  onSubmit: (v: Property) => void;
}

export default function TestModal({ open, onClose, onSubmit }: props) {
  const typeOptions = [
    'Condo',
    'Townhouse',
    'Duplex',
    'Single-family home'
  ];

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const detail = {
      location: formData.get('location') as string,
      link: formData.get('link') as string,
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
    } as Property;

    onSubmit(detail);
    onClose();
  }

  // const GooglePlacesAutocomplete = ({ onSelect }) => {
  //   const [inputValue, setInputValue] = useState("");
  //   const inputRef = useRef(null);
  //   const autocompleteRef = useRef(null);

  //   useEffect(() => {
  //     if (!window.google) return;

  //     const options = {
  //       types: ["address"], // restrict results to addresses
  //       componentRestrictions: { country: "us" }, // optional: limit to specific country
  //     };

  //     autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, options);

  //     autocompleteRef.current.addListener("place_changed", () => {
  //       const place = autocompleteRef.current.getPlace();
  //       if (place && place.geometry) {
  //         onSelect(place); // Callback to pass the place back to the parent component
  //       }
  //     });
  //   }, []);


  const initMap = () => {
    // Settting a defualt center
    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };

    const locationInput = document.getElementById("location-input") as HTMLInputElement;
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: ["us", "ca"] },
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
    };
    const autocomplete = new google.maps.places.Autocomplete(locationInput, options);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      let address = "";

      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
          "",
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
          "",
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
          "",
        ].join(" ");
      }
    });
  }

  window.initMap = initMap;

  return (
    <dialog id='myModal' className='modal' open={open}>
      <div className="row col header">
        New place to watch
      </div>
      <form onSubmit={handleSumbit}>
        <div className="row">
          <div className="col" style={{ width: '30em' }}>
            <h3>Location: </h3>
            <input
              id='location-input'
              name='location'
              type='text'
              style={{ width: "90%" }}
            />
          </div>
        </div>
        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="col" style={{ width: 'fit-content' }}>
            <h3>Link: </h3>
            <input name='link' type='url' />
            <h3>Property Type: </h3>
            <select name='type'>
              <option value='Please select'></option>
              {typeOptions.map(option => (
                <option value={option}>{option}</option>
              ))}
            </select>
            <h3>Year: </h3>
            <input name='year' type='number' />
            <h3>Size: </h3>
            <input name='size' type='number' />
            <h3>Room: </h3>
            <input name='room' type='number' />
            <h3>Bathroom: </h3>
            <input name='bathroom' type='number' />
          </div>
          <div className="col" style={{ width: 'fit-content' }}>
            <h3>Den: </h3>
            <input name='den' type='checkbox' />
            <h3>AC: </h3>
            <input name='ac' type='checkbox' />
            <h3>Parking: </h3>
            <input name='parking' type='number' />
            <h3>MOA: </h3>
            <input name='moa' type='number' />
            <h3>Price: </h3>
            <input name='price' type='number' />
            <h3>Open House: </h3>
            <input name='openHouse' type='datetime-local' />
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
