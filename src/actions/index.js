import fetch from 'isomorphic-fetch'

export const TESTE = 'TESTE';

export function teste(gastos) {
  console.log(gastos);
  return {
    type: TESTE,
    payload: gastos
  };
}

export function fetchDebitos() {
  // http://localhost:3000/v1/debitos
  return dispatch => {
    return fetch('http://localhost:3000/v1/debitos')
            .then(response => dispatch(teste(response)));
  }
}