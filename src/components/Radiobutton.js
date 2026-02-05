import React, { useState } from 'react';
function Radiobutton() {
    const [selected, setSelected] = useState('');   
    const options = ['MCA', 'MBA', 'Msc CS', 'BCA', 'BBA', 'Bsc CS'];
    const handleChange = (e) => {
        setSelected(e.target.value);
    };      
    return (
        <div>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={option}
                        name="course"
                        value={option}
                        checked={selected === option}
                        onChange={handleChange}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
}
export default Radiobutton;