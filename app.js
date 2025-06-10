import React from 'react';
import ReactDom from 'react-dom/client';

const Title = ()=>(
    <h1 className='heading' tabIndex="5">
        Namste react using jsx
    </h1>
);
function Greeting({user}) {
  const date = new Date();
  //JSX
  return (
    <h1> Namaste 
      {user}, How are you!!! @{date.getFullYear()}
    </h1>
  );
}

const HeadingComponent = ()=>(
    <div id="container">
        <Title></Title>
        <Greeting user="Alka" />
        <h1 className='head'>
            Namste react functional component
        </h1>
    </div>
);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);