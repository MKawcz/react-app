import React from 'react';

function NavBar({ title, list }) {
    return (
      <nav>
        <p>{title}</p>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </nav>
    );
  };

  export default NavBar;