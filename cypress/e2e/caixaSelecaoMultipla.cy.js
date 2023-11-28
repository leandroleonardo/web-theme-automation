import {cores, temaFormatado} from '../support/helper-functions';
const component = 'Caixa de seleção múltipla';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.caixaDeSelecaoMultipla(cor.id);
        });
    });
});