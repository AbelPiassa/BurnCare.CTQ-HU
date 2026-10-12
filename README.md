# BurnCare — CTQ HU

Sistema de apoio à gestão de malhas compressivas do Centro de Tratamento de Queimados (CTQ) do Hospital Universitário de Londrina.

## Objetivo

Digitalizar e acompanhar o fluxo de solicitação, medição, confecção, recebimento, entrega e ajustes de malhas compressivas, proporcionando maior rastreabilidade das etapas e centralização das informações.

## Situação do projeto

**Fase atual:** desenvolvimento da estrutura inicial.

O protótipo visual HTML v2 foi validado com o CTQ. A aplicação está sendo desenvolvida progressivamente com arquitetura MVC.

## Tecnologias

- Node.js
- Express
- EJS
- JavaScript
- HTML e CSS
- PostgreSQL (previsto)
- PWA (prevista)

## Arquitetura

O projeto utiliza o padrão Model-View-Controller (MVC).

- **Models:** acesso e regras relacionadas aos dados.
- **Views:** páginas EJS apresentadas ao usuário.
- **Controllers:** processamento das requisições e integração entre rotas, regras e visualizações.
- **Routes:** definição dos endpoints da aplicação.
- **Public:** arquivos estáticos, como CSS, imagens e JavaScript do navegador.

## Como executar localmente

Requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para iniciar sem Nodemon:

```bash
npm start
```

## Funcionalidades previstas

- Cadastro e consulta de pacientes.
- Solicitações de malhas compressivas.
- Registro de medidas antropométricas.
- Registro de imagens e documentos, sujeito à aprovação das políticas de segurança do HU.
- Acompanhamento das etapas de confecção.
- Acompanhamento de transporte, recebimento e entrega.
- Registro de ajustes e solicitações adicionais.
- Histórico de eventos e rastreabilidade.
- Controle de acesso por perfil.

## Limites do escopo

O BurnCare não substitui o sistema administrativo já utilizado pelo Hospital Universitário para os procedimentos ESTHOS/OPM e pagamentos.

O sistema deverá registrar os encaminhamentos e eventos pertinentes ao fluxo administrativo, sem duplicar esses processos.

## Segurança

O projeto envolve informações pessoais e dados de saúde sensíveis. Não utilizar dados reais de pacientes em testes ou arquivos públicos do GitHub.

As regras de autenticação, autorização, armazenamento de documentos e implantação deverão ser validadas antes do uso institucional.

## Equipe

Projeto acadêmico desenvolvido pela EQ-10, em colaboração com o CTQ do Hospital Universitário de Londrina.

## Links

- [Repositório GitHub](https://github.com/LuccaFelipeR/BurnCare.CTQ-HU)
- [Planejamento no Trello](https://trello.com/b/tF8cHTDq/burncare-eq-10-desenvolvimento)