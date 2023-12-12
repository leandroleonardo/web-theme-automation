const temas = require("../fixtures/temas.json");
const temaAtual = Cypress.env("tema");
export const temaFormatado = Cypress.env('tema').charAt(0).toUpperCase() + Cypress.env('tema').slice(1);

export const gradientes = ['slate', 'spacelab','simplex','aquamarine','cerulean','krypton'];

export const cores = [
  { nome: 'Padrão do tema', id: 'padrao-do-tema', id_grad: 'sc-padrao-do-tema', fallback:'--colorDefault40', fallback_grad:'--colorDefault', },
  { nome: 'Secundário', id: 'secundario', id_grad: 'sc-secundario', fallback:'--colorPrimary40' ,fallback_grad: '--colorPrimary'},
  { nome: 'Sucesso', id: 'sucesso', id_grad: 'sc-sucesso', fallback:'--colorSuccess40',fallback_grad:'--colorSuccess'},
  { nome: 'Informação', id: 'informacao', id_grad: 'sc-informacao',fallback:'--colorCalm40', fallback_grad:'--colorCalm' },
  { nome: 'Aviso', id: 'aviso', id_grad: 'sc-aviso', fallback:'--colorWarning40', fallback_grad:'--colorWarning'},
  { nome: 'Perigo', id: 'perigo', id_grad: 'sc-perigo', fallback:'--colorDanger40', fallback_grad: '--colorDanger'},
  { nome: 'Claro', id: 'claro', id_grad: 'sc-claro', fallback:'--colorLight40',fallback_grad:'--colorLight'},
  { nome: 'Real', id: 'real', id_grad: 'sc-real', fallback:'--colorRoyal40',fallback_grad: '--colorRoyal'},
  { nome: 'Escuro', id: 'escuro', id_grad: 'sc-escuro', fallback:'--colorDark40', fallback_grad:'--colorDark'},
  { nome: 'Estável', id: 'estavel', id_grad: 'sc-estavel', fallback:'--colorStable40', fallback_grad:'--colorEstable'}
];

export function activeFallBack(type) {
  type = type === 'gradient' &&  gradientes.includes(temaAtual) ? 'gradient' : ''
  cores.forEach(cor => {
    cy.window().then((win) => {
      win.document.documentElement.style.setProperty(type === 'gradient' ? cor.fallback_grad : cor.fallback, 'initial');
    });
  })
  cy.wait(1000)
}

export function getHexadecimal(cor) {
  let variavelCSS = temas[temaAtual][cor];
  
  if (cor.includes("sc-")) {
    return temas[temaAtual][cor];
  } else {
    return temas[temaAtual][variavelCSS]; 
  }
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
