const DOMINIO = "localhost";
const PORTA = "3333";

//const DOMINIO =  window.location.hostname;
//const PORTA = window.location.port;

export const params = Object.freeze({
  WEBSOCKET_URL: `ws://${DOMINIO}:${PORTA}/stomp`,
  API_URL: `http://${DOMINIO}:${PORTA}`,
});
