import React from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/sidebar';

function App() {
  return (
    <div>
      <NavBar />
      <SideBar/>
    </div>
  );
}

export default App; // This line ensures App is the default export
