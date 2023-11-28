import {cores, temaFormatado} from '../support/helper-functions';
const component = 'Caixa de checagem';
const simplificado = true;

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        //cy.login()
        cy.acesso(component)
        cy.wait(2500)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.checkbox(cor.id);
        });
    });
});