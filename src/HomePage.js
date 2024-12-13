import React from 'react';
import logo from './path-to-your-logo.png'; // Update with your logo path
import background from './path-to-your-background.jpg'; // Update with your background image path

const HomePage = () => {
  const containerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const headerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px'
  };

  const buttonStyle = {
    marginLeft: '20px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const logoStyle = {
    width: '150px',
    height: '150px'
  };

  const welcomeMessageStyle = {
    marginTop: '20px',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={buttonStyle}>Login</button>
        <button style={buttonStyle}>Register</button>
      </div>
      <div style={contentStyle}>
        <img src={logo} alt="College Logo" style={logoStyle} />
        <h1 style={welcomeMessageStyle}>Welcome to Our College Hostel Booking System</h1>
      </div>
    </div>
  );
};

export default HomePage;
