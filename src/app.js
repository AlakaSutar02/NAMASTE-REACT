import React from 'react';
import ReactDom from 'react-dom/client';
import "../index.css"; // Assuming you have a CSS file for styles
import Header from './components/Header';
import Body from './components/Body';

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);