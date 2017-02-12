import React from 'react';

const Gastos = (state, props) => (
  <div>
    {state.redux}
    <button value="click" onClick={() => props.onTodoClick()}/>
  </div>
);

export default Gastos;
