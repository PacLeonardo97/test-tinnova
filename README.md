### Como rodar a aplicação
Instalar o node em sua máquina utilizando este link: https://nodejs.org/en/
Abrir o projeto no terminal e utilizar o comando: npm install ou yarn.
Depois de instalado as dependências do projeto, utilizar o comando: npm start ou yarn start.

### Motivações
Foi me dado um problema para resolver utilizando o React.js, com o seguinte problema:
Criar uma listagem de dados "mockados" e registrar mais dados persistindo os dados em localStorage ou IndexedDB.

### Solução utilizada
Utilizando o ambiente Redux, peguei os dados desta url -> https://private-9d65b3-tinnova.apiary-mock.com/users utilizando o middleware redux-saga. Para persistir os dados utilizei o redux-persist e para cadastrar os dados dos inputs utilizei o redux-form.
Utilizei o ambiente redux por ser mais fácil de manipular os estados da aplicação, e principalmente porque eu estou mais familiarizado com este ambiente.
Na parte de css utilizei em algumas partes o css-inline do próprio React e na sua maioria utilizei o styled-components, já que ele faz toda a tarefa de automatizar os estilos independente do navegador.
Na parte de testes unitários realmente não consegui ter um conceito formado de como fazê-lo dentro de uma aplicação React, então não consegui fazer esta parte.
