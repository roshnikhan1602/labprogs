import React, { useState } from 'react';

function ListBox() {
  const [selected, setSelected] = useState([]);

  const options = ['MCA', 'MBA', 'Msc CS', 'BCA', 'BBA', 'Bsc CS'];

  const handleChange = (e) => {
    const values = Array.from(e.target.selectedOptions, option => option.value);
    setSelected(values);
  };

  return (
    <select multiple value={selected} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default ListBox;
