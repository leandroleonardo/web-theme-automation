import {cores, temaFormatado, gradientes} from '../support/helper-functions';
const component = 'Envio de arquivo';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.envioDeArquivo(cor.id, cor.id_grad);
        });
    });
});