import {activeFallBack, cores, temaFormatado} from '../../support/helper-functions';
const component = 'Lista de opções';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
        activeFallBack();
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.listaDeOpcoes(cor.id);
        });
    });
});