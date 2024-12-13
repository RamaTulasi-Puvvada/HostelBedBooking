import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const FormDetails = () => {
  const [hostel, setHostel] = useState('');
  const [beds, setBeds] = useState('');
  const [roomType, setRoomType] = useState('');
  const [washroom, setWashroom] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [availableBeds, setAvailableBeds] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [branch, setBranch] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');

 const navigate= useNavigate();
  const hostels = {
    Sindhu: {
      '2-bedded': {
        nonAc: { attached: [{ room: '101', beds: 2 }, { room: '102', beds: 2 }], notAttached: [{ room: '103', beds: 2 }, { room: '104', beds: 2 }] },
        ac: { attached: [{ room: '201', beds: 2 }, { room: '202', beds: 2 }], notAttached: [{ room: '203', beds: 2 }, { room: '204', beds: 2 }] },
      },
      '3-bedded': {
        nonAc: { attached: [{ room: '301', beds: 3 }, { room: '302', beds: 3 }], notAttached: [{ room: '303', beds: 3 }, { room: '304', beds: 3 }] },
        ac: { attached: [{ room: '401', beds: 3 }, { room: '402', beds: 3 }], notAttached: [{ room: '403', beds: 3 }, { room: '404', beds: 3 }] },
      },
    },
    Ganga: {
      '2-bedded': {
        nonAc: { attached: [{ room: '105', beds: 2 }, { room: '106', beds: 2 }], notAttached: [{ room: '107', beds: 2 }, { room: '108', beds: 2 }] },
        ac: { attached: [{ room: '205', beds: 2 }, { room: '206', beds: 2 }], notAttached: [{ room: '207', beds: 2 }, { room: '208', beds: 2 }] },
      },
      '3-bedded': {
        nonAc: { attached: [{ room: '305', beds: 3 }, { room: '306', beds: 3 }], notAttached: [{ room: '307', beds: 3 }, { room: '308', beds: 3 }] },
        ac: { attached: [{ room: '405', beds: 3 }, { room: '406', beds: 3 }], notAttached: [{ room: '407', beds: 3 }, { room: '408', beds: 3 }] },
      },
      '4-bedded': {
        nonAc: { attached: [{ room: '505', beds: 4 }, { room: '506', beds: 4 }], notAttached: [{ room: '507', beds: 4 }, { room: '508', beds: 4 }] },
        ac: { attached: [{ room: '605', beds: 4 }, { room: '606', beds: 4 }], notAttached: [{ room: '607', beds: 4 }, { room: '608', beds: 4 }] },
      },
      '5-bedded': {
        nonAc: { attached: [{ room: '705', beds: 5 }, { room: '706', beds: 5 }], notAttached: [{ room: '707', beds: 5 }, { room: '708', beds: 5 }] },
        ac: { attached: [{ room: '805', beds: 5 }, { room: '806', beds: 5 }], notAttached: [{ room: '807', beds: 5 }, { room: '808', beds: 5 }] },
      },
    },
    Narmada: {
      '2-bedded': {
        nonAc: { attached: [{ room: '109', beds: 2 }, { room: '110', beds: 2 }], notAttached: [{ room: '111', beds: 2 }, { room: '112', beds: 2 }] },
        ac: { attached: [{ room: '209', beds: 2 }, { room: '210', beds: 2 }], notAttached: [{ room: '211', beds: 2 }, { room: '212', beds: 2 }] },
      },
      '3-bedded': {
        nonAc: { attached: [{ room: '309', beds: 3 }, { room: '310', beds: 3 }], notAttached: [{ room: '311', beds: 3 }, { room: '312', beds: 3 }] },
        ac: { attached: [{ room: '409', beds: 3 }, { room: '410', beds: 3 }], notAttached: [{ room: '411', beds: 3 }, { room: '412', beds: 3 }] },
      },
    },
  };

  const handleHostelChange = (e) => {
    setHostel(e.target.value);
    setBeds('');
    setRoomType('');
    setWashroom('');
    setAvailableRooms([]);
    setSelectedRoom('');
    setAvailableBeds('');
  };

  const handleBedsChange = (e) => {
    setBeds(e.target.value);
    setRoomType('');
    setWashroom('');
    setAvailableRooms([]);
    setSelectedRoom('');
    setAvailableBeds('');
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
    setWashroom('');
    setAvailableRooms([]);
    setSelectedRoom('');
    setAvailableBeds('');
  };

  const handleWashroomChange = (e) => {
    setWashroom(e.target.value);
    const rooms = hostels[hostel][beds][roomType][e.target.value];
    setAvailableRooms(rooms);
    setSelectedRoom('');
    setAvailableBeds('');
  };

  const handleRoomSelection = (e) => {
    const room = availableRooms.find(r => r.room === e.target.value);
    setSelectedRoom(room.room);
    setAvailableBeds(room.beds);
  };

  const handleProceedToPayment = () => {
    navigate('/payment', {
      state: { hostel, beds, roomType, washroom, selectedRoom, availableBeds, name, course, branch, mobileNumber, yearOfStudy },
   });
  };

  const getBedOptions = () => {
    if (!hostel) return [];
    return Object.keys(hostels[hostel]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#add8e6', padding: '10px' }}>
        <img src="/CollegeLogo.png" alt="Logo" style={{ height: "100px", marginRight: "20px" }} />
        <h1 style={{ margin: '0', flex: '1', textAlign: "center", fontSize: "50px" }}>Hostel Room Booking</h1>
      </div>
      <div style={{ marginTop: '20px', backgroundColor: '#f0f8ff', padding: '20px' }}>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }} />
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Course:
              <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }} />
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Branch:
              <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }} />
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Mobile Number:
              <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }} />
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Year of Study:
              <select value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }}>
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Hostel:
              <select value={hostel} onChange={handleHostelChange} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }}>
                <option value="">Select Hostel</option>
                <option value="Sindhu">Sindhu</option>
                <option value="Ganga">Ganga</option>
                <option value="Narmada">Narmada</option>
              </select>
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Number of Beds:
              <select value={beds} onChange={handleBedsChange} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }} disabled={!hostel}>
                <option value="">Select Number of Beds</option>
                {getBedOptions().map((bedOption) => (
                  <option key={bedOption} value={bedOption}>
                    {bedOption}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Type of Room:
              <select value={roomType} onChange={handleRoomTypeChange} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }} disabled={!beds}>
                <option value="">Select Room Type</option>
                <option value="nonAc">Non AC</option>
                <option value="ac">AC</option>
              </select>
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: "25px" }}>
              Washroom:
              <select value={washroom} onChange={handleWashroomChange} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }} disabled={!roomType}>
                <option value="">Select Washroom</option>
                <option value="attached">Attached</option>
                <option value="notAttached">Not Attached</option>
              </select>
            </label>
          </div>
          {availableRooms.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: "25px" }}>
                Available Rooms:
                <select value={selectedRoom} onChange={handleRoomSelection} style={{ width: '200px', height: '25px', fontSize: '14px', padding: '5px', marginLeft: '10px' }}>
                  <option value="">Select Room</option>
                  {availableRooms.map((room) => (
                    <option key={room.room} value={room.room}>
                      {room.room} ({room.beds} beds available)
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </form>
        <button
          onClick={handleProceedToPayment}
          disabled={!selectedRoom}
          style={{ padding: '10px', backgroundColor: '#add8e6', border: 'none', cursor: 'pointer', fontSize: '16px' }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default FormDetails;