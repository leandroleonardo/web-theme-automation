import * as func from './helper-functions';
import chaiColors from 'chai-colors'

const tema = Cypress.env('tema');

chai.use(chaiColors)

Cypress.Commands.addAll({

  login() {
    cy.visit(Cypress.env('url'));

    cy.get('input[id="input-login-username"]').type('admin');
    cy.get('input[id="input-login-password"]').type('admin');
    cy.contains('button', 'Entrar').click();

    cy.contains('h1', 'Cronapp Temas').should('be.visible');
  },

  acesso(pagina) {

    cy.login()

    cy.contains('a', 'Views').click()

    if (func.getViewByComponent(pagina) === 1) {
      cy.contains('span', 'TesteParte1').click()
      cy.contains('h1', 'Painel').should('be.visible');
      cy.wait(1000)
    }
    else if (func.getViewByComponent(pagina) === 2) {
      cy.contains('span', 'TesteParte2').click()
      cy.contains('h1', 'Caixa de checagem').should('be.visible');
      cy.wait(1000)
    }

  },

  envioDeArquivo(cor, cor_grad) {
    if (func.gradientes.includes(tema)) {

      if (tema === 'aquamarine' && ['claro', 'informacao'].includes(cor)) {
        func.singleGet(`#upload-${cor}`)
          .should('have.css', 'color')
          .and('be.colored', func.getHexadecimal(cor));
      }
      else {
        func.singleGet(`[id="upload-${cor}"]`)
          .should('have.css', 'background')
          .then($attr => {
            let colors = func.getCSSColors($attr), colorsJson = [cor, cor_grad];
            colors.forEach((color, index) => colors[index] = 'rgb' + color.substring(0, func.endOfString(color, ')')));

            if (tema === 'cerulean' || tema === 'spacelab')
              expetedColor = colors[1];

            for (let i = 0; i < colors.length; i++) {
              expect(func.ConvertRGBtoHex(colors[i])).to.eq(func.getHexadecimal(colorsJson[i]));
            }
          });
      }
    } else {
      let property = 'background-color';
      if (tema === 'dsgov' && cor === 'secundario')
        property = 'color';

      func.singleGet(`[id="upload-${cor}"]`)
        .should('have.css', property)
        .and('be.colored', func.getHexadecimal(cor));
    }
  },

  botao(cor, cor_grad) {
    if (func.gradientes.includes(tema)) {
      if (tema === 'aquamarine' && ['claro', 'informacao'].includes(cor)) {
        func.singleGet(`#button-${cor}`)
          .should('have.css', 'color')
          .and('be.colored', func.getHexadecimal(cor));
      } else {
        func.singleGet(`#button-${cor} > button`)
          .should('have.css', 'background')
          .then($attr => {
            let colors = func.getCSSColors($attr), colorsJson = [cor, cor_grad];

            if (tema === 'cerulean' || tema === 'spacelab')
              expetedColor = colors[1];

            for (let i = 0; i < colors.length; i++) {
              expect(func.ConvertRGBtoHex(colors[i])).to.eq(func.getHexadecimal(colorsJson[i]));
            }
          });
      }
    } else {
      let property = 'background-color';
      if (tema === 'dsgov' && cor === 'secundario')
        property = 'color';

      func.singleGet(`#button-${cor} > button`)
        .should('have.css', property)
        .and('be.colored', func.getHexadecimal(cor));
    }
  },

  caixaDeSelecaoMultipla(cor, cor_grad) {

    if (tema === 'dsgov' && cor === 'padrao-do-tema')
      property = 'color';

    cy.get('#m-combobox-' + cor).click();
    let taglist = 'taglist-' + cor;

    cy.get(`#${taglist + '-list'} > div > ul > li.k-item.k-state-focused`).click({ force: true });

    if (func.gradientes.includes(tema)) {
      cy.get(`#${taglist}_taglist > li`)
        .should('have.css', 'background')
        .then($attr => {
          let colors = func.getCSSColors($attr), colorsJson = [cor, cor_grad];

          if (tema === 'cerulean' || tema === 'spacelab')
            expetedColor = colors[1];

          for (let i = 0; i < colors.length; i++) {
            expect(func.ConvertRGBtoHex(colors[i])).to.eq(func.getHexadecimal(colorsJson[i]));
          }
        });
    } else {
      cy.get(`#${taglist}_taglist > li`)
        .should('have.css', 'background-color')
        .and('be.colored', func.getHexadecimal(cor));
    }
  },

  checkbox(cor) {
    let property = 'background-color';
    if (tema === 'aquamarine')
      property = 'color';
    else if (tema === 'dsgov')
      property = 'border-color';

    //cy.get('#crn-enterprise-checkbox-741759 > .form-group > .k-checkbox-label')
    //.then($els => {
    //  const win = $els[0].ownerDocument.defaultView
    //  const before = win.getComputedStyle($els[0], 'before')
    //  const color = before.getPropertyValue(property)
    //  expect(func.ConvertRGBtoHex(color)).to.eq(func.getHexadecimal(cor));
    //});

    cy.get(`#checkbox-${cor} > div > label`)
      .then($els => {
        const win = $els[0].ownerDocument.defaultView
        const before = win.getComputedStyle($els[0], 'before')
        const color = before.getPropertyValue(property)
        expect(func.ConvertRGBtoHex(color)).to.eq(func.getHexadecimal(cor));
      });
  },

  avaliacao(cor) {
    const estrela = func.singleGet(`[id="rating-${cor}"]`);
    estrela.should("have.css", "color").and("be.colored", func.getHexadecimal(cor));
  },

  listaDeOpcoes(cor) {
    cy.get(`[for="option-${cor}"]`).click()
      .then($els => {
        const win = $els[0].ownerDocument.defaultView
        const after = win.getComputedStyle($els[0], 'after')
        const color = after.getPropertyValue('background-color')
        expect(func.ConvertRGBtoHex(color)).to.eq(func.getHexadecimal(cor));
      })
  },

  link(cor) {
    func.singleGet(`[id="link-${cor}"]`)
      .should('have.css', 'color')
      .and('be.colored', func.getHexadecimal(cor));
  },

  painel(cor, cor_grad) {

    if (func.gradientes.includes(tema)) {
      cy.get(`#painel-${cor}`)
        .should('have.css', 'Background')
        .then($attr => {
          let colors = func.getCSSColors($attr), colorsJson = [cor, cor_grad];

          if (tema === 'cerulean' || tema === 'spacelab')
            expetedColor = colors[1];

          for (let i = 0; i < colors.length; i++) {
            expect(func.ConvertRGBtoHex(colors[i])).to.eq(func.getHexadecimal(colorsJson[i]));
          }
        });
    } else {
      func.singleGet(`[id="painel-${cor}"]`)
        .should('have.css', 'background-color')
        .and('be.colored', func.getHexadecimal(cor));
    }
  },

  icone(cor) {
    const icone = func.singleGet(`[id="icone-${cor}"] > i`);
    icone.should("have.css", "color").and("be.colored", func.getHexadecimal(cor));
  },

})
