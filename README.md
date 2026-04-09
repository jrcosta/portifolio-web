# 🎯 Portfólio de Automação

Bem-vindo ao meu **Hub de Automação**, um monorepo que atua tanto como vitrine para meu currículo quanto como ecossistema centralizado dos meus principais de desafios de engenharia na prática. Focado nos mais altos padrões de teste e excelência de código.

## 🚀 Sobre o Projeto

Este repositório principal descreve o ambiente **Frontend Web**, construído em um design premium ("Dark Mode Glassmorphism") para melhor apresentar as qualificações técnicas dinamicamente. Ele incorpora outros repositórios completos (via *Git Submodules*) contendo aplicações de testes reais.

### 🔥 Linguagens e Tecnologias

- **Web (Este repositório):** `Next.js 16` (App Router), `TypeScript` e High-end `Vanilla CSS`.
- **Backend (Submódulo):** `Java 21`, `RestAssured`, `JUnit 5` e relatórios avançados em CI/CD baseados em automações limpas e ágeis.

## 📦 Estrutura do Monorepo

O código-fonte desse portfólio abriga, na pasta `demonstracoes`, submódulos Git atrelados a outros repositórios isolados, trazendo os projetos com seus históricos e contextos originais.

```text
portfolio-web/
 ├── src/                      # Código fonte do site (Next.js e Páginas)
 ├── public/                   # Media estática da aplicação
 └── demonstracoes/
      ├── api-restassured/     # 👉 [Submódulo Git] Automações de API em Java do SWAPI
      └── e2e-cypress/         # (Em breve) Pipeline Cypress de UI 
```

---

## 🛠️ Como Clonar e Rodar

> [!WARNING]
> Devido ao uso inteligente de **Submódulos Git** para manter o tamanho escalável e modular, o seu comando para "puxar" o repositório adequadamente é ligeiramente diferente do original!

### 1. Clonando todo o portfólio e testes acoplados:
Se pretende ter essa maravilha arquitetural completa, assegure-se de baixar com a flag recursiva:

```bash
git clone --recursive https://github.com/jrcosta/portifolio-web
```

*(Esqueceu da flag? Basta entrar na pasta clonada e rodar: `git submodule update --init --recursive`)*

### 2. Rodando o Site (Next.js):
É super simples iniciar a interface web interativa do desenvolvedor e recrutador localmente:
```bash
# 1. Entre no repositório
cd portifolio-web

# 2. Instale as dependências visuais
npm install

# 3. Rode no modo de Desenvolvimento Web
npm run dev

# 4. Acesse http://localhost:3000
```

### 3. Rodando os Testes Backend:
Para prováramos a lógica do sistema ou executarmos a automação corporativa, acesse o respectivo lab:
```bash
cd demonstracoes/api-restassured
mvn clean test
```

## 👩‍💻 Autor

Feito de forma responsiva por **Eneri Junior**.
Engenheiro de Qualidade de Software (QA Automation) apaixonado por integrações seguras, soluções limpas e automação de processos críticos.

🌐 Encontre-me no GitHub: [@jrcosta](https://github.com/jrcosta)
