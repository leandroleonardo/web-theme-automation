import {cores, temaFormatado, activeFallBack} from '../../support/helper-functions';
const component = 'Link';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
        activeFallBack();
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.link(cor.id);
        });
    });
});