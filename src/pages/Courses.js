import React from "react";
import Listbox from "../components/Listbox";
import Dropdown from "../components/Dropdown";
import Radiobutton from "../components/Radiobutton";

function Courses() {
  return (
    <div>
      <h1>Courses Page</h1>
      <p>Select your course options below:</p>

      <Listbox />   {/* Your ListBox appears here */}

        <Dropdown />  {/* Your Dropdown appears here */}
        <Radiobutton />  {/* Your Radiobutton appears here */}
    </div>
  );
}

export default Courses;
