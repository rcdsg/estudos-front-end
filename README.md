**Estudos Front-End - Cursos Front-End - COFFEE CODED AGENCY**

**O que você vai precisar**

Para desenvolver e rodar o projeto "Portal do Município de Itajaí", você precisará das seguintes ferramentas instaladas no seu computador:

1. **Git**: Utilizado para baixar o código do projeto.
2. **Node.js 20**: Utilizado para executar scripts de desenvolvimento.
3. **npm ou yarn**: Gerenciadores de pacotes para instalar as dependências do projeto.

### Instalação do Git

1. **Windows**:
   - Baixe o instalador do Git no [site oficial](https://git-scm.com/downloads) e siga as instruções para instalar.

2. **macOS**:
   - Abra o terminal e digite: `brew install git`.

3. **Linux**:
   - Abra o terminal e digite: `sudo apt-get install git`.

Depois de instalar o Git, verifique se a instalação foi bem-sucedida digitando `git --version` no terminal. Se tudo estiver certo, você verá a versão do Git instalada.

### Instalação do Node.js 20

1. Baixe o Node.js 20 no [site oficial do Node.js](https://nodejs.org/en/download/) e siga as instruções de instalação.

2. Verifique a instalação digitando `node -v` no terminal. Deve aparecer algo como `v20.x.x`.

### Como Baixar e Rodar o Projeto

1. **Baixar o código do projeto**:
   - Abra o terminal e execute o seguinte comando para clonar o repositório do projeto:
     ```bash
     git clone <URL-do-repositório>
     ```

2. **Entrar na pasta do projeto**:
   - Navegue até a pasta do projeto:
     ```bash
     cd portal-itajai
     ```

3. **Instalar as dependências**:
   - Execute o comando abaixo para instalar as dependências necessárias:
     ```bash
     npm install
     ```
     ou, se estiver usando `yarn`:
     ```bash
     yarn install
     ```

### Como Rodar o Projeto

1. **Iniciar o servidor de desenvolvimento**:
   - No terminal, dentro da pasta do projeto, execute:
     ```bash
     npm start
     ```
     ou, se estiver usando `yarn`:
     ```bash
     yarn start
     ```

2. **Acessar o projeto no navegador**:
   - Após iniciar o servidor de desenvolvimento, abra o navegador e acesse `http://localhost:3000` para visualizar o projeto de esttudos front-end.

### Como Gerar uma Build para Produção

1. **Gerar o build de produção**:
   - No terminal, dentro da pasta do projeto, execute:
     ```bash
     npm run build
     ```
     ou, se estiver usando `yarn`:
     ```bash
     yarn build
     ```

2. **Encontrar os arquivos de build**:
   - Após a conclusão do comando anterior, os arquivos de build estarão na pasta `build` dentro do diretório do projeto. Esses arquivos são os que você vai usar para hospedar o site em um servidor web.


### Deploy

1. **Firebase**:
   - Recomendado sincronizar todo o projeto dentro do Firebase para o deploy.