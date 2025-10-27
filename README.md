# Webhook Inspector

Sistema fullstack para capturar e inspecionar requisições de webhooks em tempo real.

## 🚀 Tecnologias

### Backend
- **Bun** - Runtime JavaScript/TypeScript de alta performance
- **Elysia.js** - Framework web minimalista e rápido
- **Drizzle ORM** - ORM TypeScript para PostgreSQL
- **Zod** - Validação de schemas
- **PostgreSQL** - Banco de dados

### Frontend
- **React 19** - Biblioteca para interfaces
- **TypeScript** - Superset JavaScript com tipagem
- **Vite** - Build tool e dev server

### Infraestrutura
- **Docker** - Containerização dos serviços

## 📋 Pré-requisitos

- [Bun](https://bun.sh) instalado
- [Docker](https://www.docker.com/) e Docker Compose instalados

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd webhook-inpector
```

2. Suba os containers Docker:
```bash
bun run compose:up
```

3. Acesse o container:
```bash
bun run compose:exec
```

4. Instale as dependências do backend:
```bash
cd backend
bun install
```

5. Configure as variáveis de ambiente do backend:
```bash
cp .env.example .env
```

6. Execute as migrações do banco de dados:
```bash
bun run db:migrate
```

7. Instale as dependências do frontend:
```bash
cd ../frontend
bun install
```

## 🏃 Uso

### Desenvolvimento

Com os containers Docker em execução, acesse o container e inicie os serviços:

**Backend** (porta 3000):
```bash
cd backend
bun run dev
```

**Frontend** (porta 5173):
```bash
cd frontend
bun run dev
```

### Acessar a aplicação

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Documentação API**: http://localhost:3000/docs
- **Drizzle Studio**: Execute `bun run db:studio` no backend (porta 4983)

## 📝 Scripts Disponíveis

### Root
- `bun run compose:up` - Sobe os containers Docker
- `bun run compose:down` - Para e remove os containers
- `bun run compose:exec` - Acessa o container principal

### Backend
- `bun run dev` - Inicia servidor de desenvolvimento
- `bun run lint` - Formata código com Biome
- `bun run db:generate` - Gera migrações do banco
- `bun run db:migrate` - Executa migrações
- `bun run db:studio` - Abre Drizzle Studio

### Frontend
- `bun run dev` - Inicia servidor de desenvolvimento
- `bun run build` - Build para produção
- `bun run lint` - Lint com ESLint
- `bun run preview` - Preview do build

## 🏗️ Estrutura do Projeto

```
webhook-inpector/
├── backend/          # API Elysia.js
│   ├── src/
│   │   ├── db/       # Schemas e migrations
│   │   ├── routes/   # Rotas da API
│   │   ├── lib/      # Utilitários
│   │   └── index.ts  # Entry point
│   └── package.json
├── frontend/         # App React
│   ├── src/
│   └── package.json
├── docker/           # Configurações Docker
│   └── docker-compose.yaml
└── package.json      # Scripts gerais
```

## 🗃️ Banco de Dados

O PostgreSQL está configurado no Docker com:
- **Host**: localhost
- **Porta**: 5432
- **Database**: app
- **User**: postgres
- **Password**: 123456
