import {cores, temaFormatado, gradientes} from '../../support/helper-functions';
const component = 'Botão';

describe(`${temaFormatado} - Cor do componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.botao(cor.id, cor.id_grad);
        });
    });
});