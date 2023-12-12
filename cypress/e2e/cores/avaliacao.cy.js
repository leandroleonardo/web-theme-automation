import {cores, temaFormatado} from '../../support/helper-functions';
const component = 'Avaliação';

describe(`${temaFormatado} - Cor do componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.avaliacao(cor.id);
        });
    });
});
