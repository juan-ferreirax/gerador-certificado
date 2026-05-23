# Estrutura base de um projeto Angular

1. ```ng new nome-do-projeto ```
2. Escolher o estilo de CSS usado: CSS, Sass (SCSS), Sass (Indented) ou Less
3. Escolher se vai habilitar SSR (Server-Side Render)
4. Escolher se vai configurar agente de IA no projeto
### Descrição da estrutura do projeto
* **.vscode:** Configurações do VS Code para o projeto
* **node_modules:** Local onde ficam instaladas as bibliotecas e dependências
* **public:** Onde costumam ficar os arquivos de mídia como ícones, imagens, vídeos etc
* **src:** Diretório de recursos onde ficam os principais arquivos do projeto
	* **app:** Pasta central do projeto onde ficam os arquivos mais importantes do projeto
		* app.config.ts: Onde configura os provedores
		* app.css: CSS do componente app
		* app.html: HTML do componente app
		* app.routes.ts: Onde configura as rotas da aplicação como /home e /login
		* app.specs.ts: Arquivo de testes unitários do componente
		* app.ts: TS que concentra toda a lógica do componente
	* **index.html:** Arquivo onde o Angular injeta todo o JavaScript da aplicação
	* **main.ts:** Especifica o componente principal que vai carregar todas as páginas, por padrão é o App, appConfig
	* **styles.css:** CSS global da aplicação, configura estilos globais
* **.editorconfig:** Configura a indentação do projeto
* **.gitignore:** Pastas e arquivos a serem ignorados ao subir o projeto
* **prettierrc:** Define as configurações do formatador de código prettierrc
* **angular.json:** Toda a configuração do projeto
	Principais configurações do arquivo ```angular.json```:
	* ```projects:``` Especifica a configuração dos projetos, por padrão ```ng new``` cria apenas um projeto de nome especificado na hora da criação.
	* ```projectType:``` Especifica o tipo da aplicação, ex: application, library.
	* ```root:``` Define o diretório raiz do projeto, ```""``` significa que está na raiz do workspace.
	* ```sourceRoot:``` Indica onde o código-fonte do projeto está, por padrão ```src```.
	* ```prefix:``` Utilizado nas tags quando precisa chamar um componente.
	* ```architect/build/options/```
		* ```outputPath:``` Especifica onde ficarão os arquivos de publicação após finalizar o projeto, normalmente ```dist/nome-do-projeto```
		* ```index:``` Arquivo HTML principal do projeto onde o Angular vai injetar o JavaScript. Normalmente em ```src/index.html```.
		* ```browser:``` Define o arquivo de entrada da aplicação, que é também onde define o componente principal ```App, appConfig``` da aplicação.
		* ```assets:``` Define a lista de arquivos ou diretórios que serão incluídos na sua build. Normalmente a pasta ```public``` que contém ```assets```.
		* ```styles:``` Define as estilizações que serão aplicadas em todo o projeto.
		* ```scripts:``` Assim como o styles, define os scripts JavaScript que serão aplicados globalmente.
	* ```configurations/production/budgets/```
		* ```maximumWarning:``` Define o tamanho dos arquivos de publicação para que o CLI do Angular exiba um aviso. Normalmente ```500kb```.
		* ```maximumError:``` Exibe um erro e impede a build se o tamanho dos arquivos de publicação ultrapassarem o valor especificado, normalmente ```1MB```.
* **package-lock.json:** Garante a versão exata das dependências que foram instaladas
* **package.json:** Lista as bibliotecas que foram/serão instaladas com ```npm install```
*  **README.md:** Especificar e falar sobre o projeto
*  **tsconfig.app.json:** Configurações relacionadas ao TypeScript
*  **tsconfig.json:** Configurações relacionadas ao TypeScript
*  **tsconfig.spec.json:** Configurações relacionadas ao TypeScript

- **OBS:** Lembrar de adicionar ```"rootDir": "./src",``` em **tsconfig.app.json** e **tsconfig.spec.json**.
### Observações sobre o Angular 21+ no angular.json

Nas versões mais recentes do Angular, algumas propriedades não aparecem por padrão no `angular.json` porque o framework adota valores automáticos para limpar o arquivo:

- **`outputPath`:** Omitido porque o Angular já assume o padrão de gerar a build na pasta `dist/nome-do-projeto`.
- **`index`:** Omitido porque o framework já entende que o arquivo de entrada é o `src/index.html`.
- **`scripts`:** Omitido em projetos novos por não haver dependências globais. Caso precise importar algum JavaScript externo depois, basta adicionar `"scripts": []` dentro do bloco `"options"`.

### Compreensão da estrutura
1. **Compreensão**
	* Compreender como os componentes se relacionam com o ```App Component``` .
	* Como cada arquivo interage e sua devida importância.
	* Como exportar e importar os componentes para uso em outros lugares.
	* Como o JavaScript é injetado no index.html pelas tags de prefixo ```app``` definido no angular.json.
2. Identificação do que será componente e o que será construído na própria página.
3. Construção da estrutura (Templates HTML).
