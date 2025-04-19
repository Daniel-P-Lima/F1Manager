
# 🏎️ Projeto Fullstack - Pilotos F1

Este é um projeto fullstack desenvolvido que consiste em um sistema de gerenciamento de pilotos de Fórmula 1, com cadastro, edição, exclusão e associação ao time de um usuário.

---

## 🧰 Tecnologias Utilizadas

### 📦 Backend
- Node.js
- Express
- MySQL
- Cors

### 💻 Frontend
- React (Create React App)
- Bootstrap 5
- React Router DOM

---

## 📁 Estrutura do Projeto

```
trabalho_01/
├── backend/       # Servidor Node.js com rotas e conexão com banco
├── frontend/      # Aplicação React com interface de gestão dos pilotos
├── .gitignore
└── README.md
```

---

## 🚀 Como Rodar o Projeto Localmente

> Requisitos:
> - Node.js instalado
> - MySQL rodando e com banco criado
> - Clonar este repositório
> - Criar uma database com o nome "trabalho01" e importar as queries do diretório "database"

### 📦 1. Clonar o projeto

```bash
git clone https://github.com/Daniel-P-Lima/trabalho_01.git
cd trabalho_01
```

---

### 🔧 2. Rodar o Backend

```bash
cd backend
npm install
```

📌 Configure seu arquivo `.env` com os dados de conexão MySQL, se necessário.

✅ Depois:

```bash
npm start
```

O backend ficará disponível em: [http://localhost:8800](http://localhost:8800)

---

### 💻 3. Rodar o Frontend

```bash
cd ../frontend/react-projeto
npm install
npm start
```

A aplicação React abrirá automaticamente em: [http://localhost:3000](http://localhost:3000)

---

## ✨ Funcionalidades

- [x] Listar pilotos disponíveis
- [x] Cadastrar e editar piloto
- [x] Remover piloto
- [x] Adicionar piloto ao time
- [x] Impedir mais de 2 pilotos por time
- [x] Modais de confirmação e erro
- [x] Validação de dados e mensagens ao usuário

---

## 👨‍🏫 Autor

Daniel Pereira Lima  
Aluno de Ciência da Computação - PUCPR  
[GitHub - @Daniel-P-Lima](https://github.com/Daniel-P-Lima)

---

## 📌 Observações Finais

- Este projeto utiliza `react-scripts` no frontend, então certifique-se de rodar `npm install` corretamente.
- O `.gitignore` já está configurado para ignorar `node_modules`, `.env` e arquivos de build.
- Em caso de erro ao deletar pilotos, o backend bloqueia se o piloto estiver vinculado ao time.

---
