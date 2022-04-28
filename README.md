# By-coders-test

## 💻 Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Python](https://python.org/)
- [Django](https://djangoproject.com)
- [Django-Rest-Framework](https://django-rest-framework.org/)
- [Cognito](https://aws.amazon.com/pt/cognito/)

<hr />

## 🔥 Setup

- ### **Você deverá ter em sua máquina...**

  - **[Node.js](https://nodejs.org/en/)**
  - **[Git](https://git-scm.com/)**
  - **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.
  - **[Python3](https://python.org/)**
  - **[PIP](https://pypi.org/)**
  - **[Docker](https://www.docker.com/)**

## Existem duas opções para você rodar o projeto localmente:

- Utilizando Docker
- Subindo os servidores manualmente

### Utilizando docker:

```bash
docker-compose-up
```

### Manualmente:

1 - Vá até a pasta api

```bash
cd api
```

2 - Exporte as variáveis de ambiente através de um arquivo ou utilizando export

| Nome              | Descrição                 | Obrigatoriedade |
| ----------------- | ------------------------- | --------------- |
| DATABASE_NAME     | Nome do bando de dados    | &#9745;         |
| DATABASE_USER     | Usuário do banco de dados | &#9745;         |
| DATABASE_PASSWORD | Senha do banco de dados   | &#9745;         |
| DATABASE_HOST     | Host do banco de dados    | &#9745;         |
| DATABASE_PORT     | Porta do banco de dados   | &#9745;         |
| SECRET_KEY        | Django Secret Key         | &#9745;         |

3 - Crie um ambiente virtual

```bash
python3 -m venv ./venv
```

4 - Ative seu ambiente virtual

```bash
source venv/bin/activate
```

5 - Instale as dependencias do projeto

```bash
pip install -r requirements.txt
```

6 - Para criar o banco de dados

```bash
python manage.py migrate
```

7 - Para rodar

```bash
python manage.py runserver
```

8 - agora abra outra aba em seu terminal e vá até a pasta ui

```bash
cd ui
```

9 - Instale as dependências do frontend

```bash
npm install
```

9 - Rode o frontend

```bash
npm start
```

#### Agora o seu frontend está na porta 3000 e sua api na porta 8000

## **🚧 API**

Nosso backend é constituido de 1 API (finances) e uma conexão com serviço externo (Cognito).

### **Autenticação**

Foi escolhido o Cognito para autenticação OAuth2 pois é um serviço extremamente robusto feito pela AWS, estou disponibilizando um usuário criado na minha conta da AWS com poucas permissões no Cognito para teste desta aplicação, as rotas autenticadas deverão ser acessadas com um JWT fornecido pelo serviço com préfixo Bearer.

### **API de Finances**

A Api foi feita para converter um arquivo txt em dados salvos no nosso banco de dados e para buscar os dados desse banco de dados. Não foram seguidos todos os protocolos RESTFul devido ao tempo de desenvolvimento e as necessidades.

- ### Rota para adicionar um novo documento [POST]

      url: /finances

  - Response

        data: [{
          "type": 3,
          "date": "2019-03-01",
          "value": 142.0,
          "document_number": "09620676017",
          "card_number": "4753****3153",
          "time": "15:34:53",
          "owner_name": "JOÃO MACEDO",
          "store_name": "BAR DO JOÃO"
        }],
        "total_amount": -142.0

- ### Rota para recuperar os dados do BD [GET]

      url: /finances

  - Response

          "id": "ad411901-ad95-446c-8930-baebd8de5b67",
          "data: [
              {
                  "type": 3,
                  "date": "2019-03-01",
                  "value": 142.0,
                  "document_number": "09620676017",
                  "card_number": "4753****3153",
                  "time": "15:34:53",
                  "owner_name": "JOÃO MACEDO",
                  "store_name": "BAR DO JOÃO"
              }
          ],
          "total_amount": -142.0
          "createdAt": "2022-10-29T12:24:20.830Z",
          "updatedAt": "2022-10-29T12:24:20.830Z",

## **☂️ Client**

O Frontend desta aplicação foi utilizado React e é composto de 7 telas com layout simples porém eficiente. Foi utilizado praticamente 100% de recursos nativos do próprio node e React.

Para rodar os testes

```bash
yarn test
```

## Features que agregariam muito valor ao projeto

- Criação de um Terraform para criação do Cognito e deploy do Frontend no s3 e Cloudfront
- Integração do backend com Zappa para rodar Serverless na AWS
- Aumentar cobertura de testes da API
