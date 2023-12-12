import {cores, temaFormatado, gradientes, activeFallBack} from '../../support/helper-functions';
const component = 'Envio de arquivo';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {
    
    it('Acesso ao cenário', () => {
        cy.acesso(component);
        activeFallBack('gradient');
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.envioDeArquivo(cor.id, cor.id_grad);
        });
    });
});