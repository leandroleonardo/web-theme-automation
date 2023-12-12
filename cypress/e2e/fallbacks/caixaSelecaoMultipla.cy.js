import {activeFallBack, cores, temaFormatado} from '../../support/helper-functions';
const component = 'Caixa de seleção múltipla';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
        activeFallBack('gradient');
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.caixaDeSelecaoMultipla(cor.id, cor.id_grad);
        });
    });
});