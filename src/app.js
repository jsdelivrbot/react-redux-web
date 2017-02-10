import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/hello';

const App = () => (
  <div>
    <Hello />
  </div>
);

ReactDom.render(<App />, document.querySelector('.container'));
