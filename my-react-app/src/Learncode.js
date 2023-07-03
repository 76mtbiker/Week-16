import React from 'react'



export default function LearnCode() {
  const tableData = [
    { Installations: 'React Boilerplate', Components: 'Navbar', Reactframeworks: 'Material UI' },
    { Installations: 'Bootstrap', Components: 'Footer', Reactframeworks: 'React Router' },
    // Add more objects for additional rows
  ];

  return (
    <div>
      <h1>Resources to Learn Front End Software Development</h1>
      <Footer />
      <Navigation />
      <Table data={tableData} />
    </div>
  );
}

function Table({ data }) {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Installations</th>
          <th style={tableHeaderStyle}>Components</th>
          <th style={tableHeaderStyle}>Reactframeworks</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td style={tableCellStyle}>{row.Installations}</td>
            <td style={tableCellStyle}>{row.Components}</td>
            <td style={tableCellStyle}>{row.Reactframeworks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const tableHeaderStyle = {
  backgroundColor: 'green',
  padding: '9px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: 'green',
};



function Navigation() {
  return (
    <nav>
      <nav className="navbar">
        <a href="https://www.freecodecamp.org/">Great Resource</a>
        <br />
        <a href="https://www.youtube.com//">Watch Youtube Tutorials</a>
        <br />
        <a href="https://www.w3schools.com/">W3 Schools</a>
        <br />
      </nav>
      <img
        src="https://i.pinimg.com/originals/36/e9/8b/36e98bd97ad59953da4c7474b95529bc.jpg"
        alt="Example Image"
        className="small-image"
      />
    </nav>
  );
}

function Footer() {
    return (
      <footer className="footer1">
        <p>&copy; 2023 Baby Steps Created.</p>
        <nav>
          <h1>Lets Learn some Code...</h1>
        </nav>
      </footer>
    );
  }

  