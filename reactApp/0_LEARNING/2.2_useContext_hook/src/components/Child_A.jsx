import React from 'react'; // Importing React
import Child_B from "./Child_B"; // Correctly importing Child_B

function Child_A() {
  return (
    <div>
      <Child_B /> {/* Corrected the component name to Child_B */}
    </div>
  );
}

export default Child_A; // Exporting Child_A
