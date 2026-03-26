# 🐾 PetClinic API Automation - Playwright

Este projeto contém a automação de testes para a API do **Spring PetClinic**, desenvolvida como parte da minha mentoria em Qualidade de Software. O foco aqui é validar a integridade dos endpoints REST, garantindo que as regras de negócio de proprietários (Owners) e pets estejam funcionando corretamente.

## 🛠️ Tecnologias Utilizadas
* **Linguagem:** JavaScript
* **Framework de Teste:** [Playwright](https://playwright.dev/)
* **Relatórios:** Playwright HTML Reporter
* **SUT (System Under Test):** Spring PetClinic (Java/Spring Boot)

## 🏗️ Estrutura do Projeto
* `tests/api/`: Contém os scripts de teste (`.spec.js`).
* `support/api/`: Camada de Page Objects/Actions para abstrair as chamadas da API.
* `playwright.config.js`: Configurações globais do framework (BaseURL, Reporters).

## 🚀 Como Executar o Projeto Localmente

### 1. Pré-requisitos
* Node.js instalado.
* Java JDK 11+ (para rodar a API).

### 2. Subir a API (O Backend)
Navegue até a pasta do projeto Java e execute o arquivo `.jar`:
```bash
java -jar spring-petclinic-rest-4.0.2.jar```

### 3. Executar os Testes de API
Em um novo terminal, na raiz do projeto `petclinic-playwright`, execute:
```bash
npx playwright test

## 📋 Plano de Testes (Checklist)
- [x] Listar todos os proprietários (Owners) - **Cenário Positivo**
- [x] Buscar proprietário por ID inexistente (404) - **Cenário Negativo**
- [ ] Criar um novo proprietário (POST) - *Próximo passo*

---
✨ *Projeto focado em boas práticas de QA, versionamento com Git e documentação clara.*