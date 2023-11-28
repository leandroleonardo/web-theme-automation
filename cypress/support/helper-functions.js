const temas = require("../fixtures/temas.json");
const temaAtual = Cypress.env("tema");
export const temaFormatado = Cypress.env('tema').charAt(0).toUpperCase() + Cypress.env('tema').slice(1);

export const gradientes = ['slate', 'spacelab','simplex','aquamarine','cerulean'];

export const cores = [
  {nome: 'Padrão do tema', id: 'padrao-do-tema'},
  {nome: 'Secundário', id: 'secundario'},
  {nome: 'Sucesso', id: 'sucesso'},
  {nome: 'Informação', id: 'informacao'},
  {nome: 'Aviso', id: 'aviso'},
  {nome: 'Perigo', id: 'perigo'},
  {nome: 'Claro', id: 'claro'},
  {nome: 'Real', id: 'real'},
  {nome: 'Escuro', id: 'escuro'},
  {nome: 'Estável', id: 'estavel'},
];

export function getHexadecimal(cor) {
  var variavelCSS = temas[temaAtual][cor];
  return temas[temaAtual][variavelCSS];
}

export function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

export function ConvertRGBtoHex(rgb) {
  let obj = RGBtoOBJ(rgb.toString())
  return "#" + ColorToHex(obj.r) + ColorToHex(obj.g) + ColorToHex(obj.b);
}

export function RGBtoOBJ(rgb) {
  let cores = ["r", "g", "b"];

  let colorArr = rgb.slice(rgb.indexOf("(") + 1, rgb.indexOf(")")).split(", ");

  let obj = new Object();

  colorArr.forEach((valor, cor) => {
    obj[cores[cor]] = parseInt(valor);
  });

  return obj;
}

export function singleGet(get) {

  return cy.get(get, { timeout: 0 }); 
}

export function getViewByComponent(component) {
  let cenario1 = ['Link', 'Avaliação', 'Ícone', 'Botão', 'Envio de arquivo', 'Caixa de checagem'];
  let cenario2 = ['Caixa de seleção múltipla', 'Lista de opções', 'Painel'];

  if (cenario1.includes(component)) return 1;
  else if (cenario2.includes(component)) return 2;
}

export function endOfString(string, substring) {
  return string.indexOf(substring) + substring.length
}

export function getOcurrence(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

export function getCSSColors(string) {
  let start = endOfString(string, 'linear-gradient(');
  let end = string.indexOf(') repeat');
  let final = string.substring(start, end).split('rgb');
  final.splice(0, 1);
  return final;
}
