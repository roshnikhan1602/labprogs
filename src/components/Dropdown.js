import React, { useState } from "react";

function Dropdown() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">-- Select a course --</option>
        <option value="MCA">MCA</option>
        <option value="BCA">BCA</option>
        <option value="MBA">MBA</option>
        <option value="BSc CS">BSc Computer Science</option>
      </select>
    </div>
  );
}

export default Dropdown;
