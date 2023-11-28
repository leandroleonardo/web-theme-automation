import {cores, temaFormatado} from '../support/helper-functions';
const component = 'Lista de opções';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.listaDeOpcoes(cor.id);
        });
    });
});