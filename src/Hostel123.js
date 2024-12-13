import React from 'react';

const hostels = [
  {
    name: 'Sindhu Hostel',
    imgSrc: '/Hostel1.jpg',
    detailsLink: '#',
    availabilityLink: '#',
    nonACPrice: '85,000/-',
    acPrice: '1,00,000/-',
  },
  {
    name: 'Ganga Hostel',
    imgSrc: '/Hostel2.jpg',
    detailsLink: '#',
    availabilityLink: '#',
    nonACPrice: '85,000/-',
    acPrice: '1,00,000/-',
  },
  {
    name: 'Narmada Hostel',
    imgSrc: '/Hostel3.jpg',
    detailsLink: '#',
    availabilityLink: '#',
    nonACPrice: '85,000/-',
    acPrice: '1,00,000/-',
  },
];

function Hostel123() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header style={{
        backgroundColor: '#add8e6',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <img src="/CollegeLogo.png" alt="College Logo" style={{ height: '100px', marginRight: '20px' }} />
        <h2 style={{ margin: '0', flex: '1', textAlign: 'center', fontSize:"50px" }}>Home away from Home</h2>
        <button style={{
          backgroundColor: '#add8e6',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize:'20px`'
        }}>Log out</button>
      </header>
      <main style={{ padding: '20px' }}>
        {hostels.map((hostel, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '20px',
            padding: '20px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center'
          
            
          }}>
            <img src={hostel.imgSrc} alt={`${hostel.name}`} style={{
              width: '30%',
              marginRight: '20px',
              borderRadius: '5px',
              height:'200px'
            }} />
            <div style={{ flex: '1' }}>
              <h2 style={{ fontSize: '30px'  }}>{hostel.name}</h2>
              <p style={{ fontSize: '20px'  }}>Non AC: {hostel.nonACPrice}</p>
              <p style={{ fontSize: '20px' }}>AC: {hostel.acPrice}</p>
              <button style={{
                backgroundColor: '#add8e6',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                margin: '10px 0',
                cursor: 'pointer',
                fontSize: '16px',
                
                
              }}   onClick={() => window.location.href = hostel.detailsLink }>
                View Details
              </button>
              <button style={{
                backgroundColor: '#add8e6',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                margin: '10px 0',
                cursor: 'pointer',
                fontSize: '16px'
              }} onClick={() => window.location.href = hostel.availabilityLink}>
                Check Bed availability
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Hostel123;


