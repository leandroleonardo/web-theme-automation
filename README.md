# cy-theme-automation

Automação de tema web.

### 📓 Pré-requisitos

 <a href="https://nodejs.org/en/download">Nodejs</a><br>
 <a href="https://code.visualstudio.com/Download">VsCode</a>

<hr>

### 📃 Dependências
Comando para instalar as depedências:

```
npm i
```


### 🖥️ Configurações
---
<br><b>| Passo 1: 
Importação do projeto de tema</b>

Importe o seguinte projeto para IDE: <a href="https://github.com/leandroleonardo/cron-themes">cron-theme</a>. Após importá-lo, selecione o tema que será testado e execute-o. 


<b>| Passo 2: Configrações para rodar o projeto </b>

Com o projeto Cypress aberto no <a href="https://code.visualstudio.com/Download">VsCode</a>, execute o comando ``` npm i ``` no terminal e configure o arquivo <a>cypress.env.json</a> com a URL do projeto em execução e o tema que será testado.

<b>| Passo 3: Rode o projeto </b><br><br>
Comando para o rodar no terminal: 
```
npx cypress run
```

Comando para abrir a interface do Cypress: 
```
npx cypress open
```

Comando para gerar mochawesome separados:
```
npx cypress run --spec "cypress/e2e/cores" --reporter-options "reportDir=cypress/reports/cores"; 
npx cypress run --spec "cypress/e2e/fallbacks" --reporter-options "reportDir=cypress/reports/fallbacks"
```
