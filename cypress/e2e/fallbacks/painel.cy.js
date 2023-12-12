import {activeFallBack, cores, temaFormatado} from '../../support/helper-functions';
const component = 'Painel';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
        activeFallBack('gradient');
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.painel(cor.id, cor.id_grad);
        });
    });
});