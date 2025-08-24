# 🔎 BuscaCEP

Um site simples para **consulta de CEPs**, com autenticação de usuário (login e cadastro), desenvolvido em **HTML, CSS e TypeScript**, e rodando com **Vite**.

---

## 🚀 Funcionalidades

- 📌 **Tela de Login** – Acesso com autenticação.
- 📝 **Tela de Cadastro** – Registro de novos usuários.
- 🔑 **Tela de Recuperação de Senha** – Redefinição de credenciais.
- 🏠 **Tela de Busca de CEP** – Consulta de informações de endereço a partir do CEP digitado, consumindo uma API externa.

---
## 📸 Pré-visualização das Telas

### 🔑 Tela de Login
![Tela de Login](/public/pagelogin.png)

### 📝 Tela de Cadastro
![Tela de Cadastro](/public/pagecadastro.png)

### ❓ Tela de Recuperação de Senha
![Tela de Recuperação](/public/pageforget.png)

### 🏠 Tela de Busca de CEP
![Tela de BuscaCEP](/public/pagebuscacep.png)

---


## 📂 Estrutura do Projeto

```
├── public/ # Imagens e arquivos estáticos
│ ├── fundoLogin.png
│ ├── fundoRegister.png
│ ├── lupa.png
│ └── ...
│
├── src/ # Código-fonte
│ ├── scripts/
│ │ ├── buscaCep/ # Lógica da tela de busca CEP
│ │ ├── login/ # Lógica da tela de login
│ │ ├── register/ # Lógica da tela de cadastro
│ │ ├── esqueceuSenha # Lógica da tela de recuperação de senha
│ │ └── shared/ # Funções reutilizáveis
│ │
│ ├── styles/ # Estilizações em CSS
│ │ ├── styleLogin.css
│ │ ├── styleRegister.css
│ │ └── ...
│ │
│ └── vite-env.d.ts
│
├── index.html # Ponto de entrada do app
├── package.json
├── tsconfig.json
├── vite.config.ts # Configuração do Vite
├── vercel.json # Configuração para deploy
└── README.md

```


---

## 🛠️ Tecnologias Utilizadas


<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" alt="HTML5 logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" alt="CSS3 logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" alt="TypeScript logo"/>
<img width="48" height="48" src="https://img.icons8.com/fluency/48/vite.png" alt="vite"/>
</p>



---

## ⚙️ Como Rodar o Projeto

1. Clone este repositório:

```
git clone https://github.com/joaobatistamedeiroscf/BuscaCep.git
```

2.Acesse a pasta do projeto

```
cd seu-repositorio
```

3.Instale as dependências:

```
npm install
```

4.Rode o servidor de desenvolvimento:
```
npm run dev
```
5.Abra no navegador:
```
http://localhost:5173
```





