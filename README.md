# Gerador de Certificados

Aplicação web feita em Angular para criar, visualizar e listar certificados gerados. O projeto foi organizado para separar a interface em componentes reutilizáveis e manter as páginas principais isoladas por responsabilidade.

## O que o projeto faz

A aplicação permite:

- Gerar certificados por meio de um formulário dedicado
- Visualizar o histórico de certificados já criados
- Visualizar individualmente um certificado
- Fazer download dos certificados

## Links de acesso

- GitHub Pages: https://juan-ferreirax.github.io/gerador-certificado/
- Netlify: https://certificado-generator.netlify.app/

## Tecnologias utilizadas

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [TypeScript](https://www.typescriptlang.org/)
- [Framework Angular (v21)](https://angular.dev/)
- [Framework Bootstrap (v5)](https://getbootstrap.com/)
- [Biblioteca Phosphor Icons](https://phosphoricons.com/)

## Como executar localmente

```bash
npm install
ng serve
```

Depois, acesse `http://localhost:4200/`.

### Outros comandos úteis

```bash
ng test (testa os componentes da aplicação)
ng build (constrói os arquivos de build para deploy)
```

## Estrutura modular

O projeto segue uma organização modular para facilitar manutenção e reuso:

- `src/app/_components`: Componentes reutilizáveis da interface.
- `src/app/pages`: Páginas principais da aplicação.
- `src/app/_services`: Serviços responsáveis por regras de negócio e comunicação interna.
- `src/app/interfaces`: Contratos de tipos usados na aplicação.
- `public`: Arquivos estáticos, como imagens e ícones.

### Componentes reutilizáveis

- `base-ui`: Estrutura visual base da aplicação.
- `navbar`: Barra de navegação principal.
- `primary-button` e `secondary-button`: Botões padronizados.
- `item-certificado`: Card/listagem de um certificado na tela de histórico.

### Páginas principais

- `certificados`: Lista/histórico de certificados gerados.
- `certificado-form`: Formulário para gerar um novo certificado.
- `certificado`: Visualização individual de um certificado.

### Rotas da aplicação

- `/` → Lista de certificados.
- `/certificados/novo` → Tela de geração.
- `/certificados/:id` → Visualização de um certificado específico.

## Observação sobre armazenamento local

Atualmente a aplicação **não possui banco de dados**: Os dados são armazenados no Local Storage do navegador. O Local Storage é uma área de armazenamento chave/valor disponível para scripts do lado do cliente, ele persiste entre sessões e normalmente tem limite em torno de alguns megabytes. Os valores são salvos como texto (strings) e não são criptografados.

Como consequência, **não use Local Storage para dados sensíveis** (dados pessoais protegidos, tokens de autenticação, segredos, etc.), pois qualquer script que rode no mesmo domínio pode ler esses dados e eles ficam expostos em texto puro. O Local Storage foi utilizado nessa aplicação apenas para facilitar o desenvolvimento.

Como limpar os dados do Local Storage (duas formas simples):

- Pelo console do navegador (DevTools → Console ou pelo atalho F12), execute:

```javascript
localStorage.clear()
```

- Pelo painel de aplicações do navegador (DevTools → Application → Storage → Clear site data) ou pelas configurações de privacidade do navegador.

Este armazenamento foi adotado apenas para acelerar o desenvolvimento local. Em produção, recomenda-se integrar um backend com armazenamento seguro e protegido principalmente se estiver lidando com dados sensíveis.
