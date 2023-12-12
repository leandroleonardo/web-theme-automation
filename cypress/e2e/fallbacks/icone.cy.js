import {cores, temaFormatado, activeFallBack} from '../../support/helper-functions';
const component = 'Ícone';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
        activeFallBack();
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.icone(cor.id);
        });
    });
});