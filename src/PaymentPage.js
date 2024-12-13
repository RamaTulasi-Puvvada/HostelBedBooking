import React from 'react';
import { useLocation } from 'react-router-dom';
const PaymentPage = () => {
  const location = useLocation();
  const { hostel, beds, roomType, washroom, selectedRoom, availableBeds, name, course, branch, mobileNumber, yearOfStudy } = location.state || {};

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#add8e6', padding: '10px' }}>
        <img src="/CollegeLogo.png" alt="Logo" style={{ height: "100px", marginRight: "20px" }} />
        <h1 style={{ margin: '0', flex: '1', textAlign: "center", fontSize: "50px" }}>Hostel Room Booking</h1>
      </div>
      <p><strong>Name           :</strong> {name}</p>
      <p><strong>Course         :</strong> {course}</p>
      <p><strong>Branch         :</strong> {branch}</p>
      <p><strong>Mobile Number  :</strong> {mobileNumber}</p>
      <p><strong>Year of Study  :</strong> {yearOfStudy}</p>
      <p><strong>Hostel         :</strong> {hostel}</p>
      <p><strong>Number of Beds :</strong> {beds}</p>
      <p><strong>Type of Room   :</strong> {roomType}</p>
      <p><strong>Washroom       :</strong> {washroom}</p>
      <p><strong>Selected Room  :</strong> {selectedRoom}</p>
      <p><strong>Beds Available :</strong> {availableBeds}</p>
      <button
        onClick={() => alert('Payment process initiated')}
        style={{ padding: '10px', backgroundColor: '#add8e6', border: 'none', cursor: 'pointer', fontSize: '16px' }}
      >
        Proceed with Payment
      </button>
    </div>
  );
};

export default PaymentPage;