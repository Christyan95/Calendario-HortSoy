<div align="center">

# HortSoy Calendar 2026 🌱

**Portal Corporativo de Gestão de Eventos e Calendário Agrícola**

[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red)]()

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Gestão de Dados](#-gestão-de-dados)
- [Design e UI/UX](#-design-e-uiux)
- [Performance](#-performance)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **Calendário Corporativo HortSoy** é uma ferramenta estratégica centralizada para a organização de eventos, reuniões e acompanhamento do ciclo agrícola de 2026. Desenvolvido para unificar a comunicação interna, o portal permite que colaboradores visualizem desde feriados corporativos até períodos críticos de plantio e colheita.

O projeto foi refatorado sob rigorosas metodologias de *Clean Code*, garantindo uma base de código modular, leve e de fácil manutenção.

### Destaques

- 📅 **Calendário Interativo** — Visualização fluida de eventos mensais com navegação inteligente.
- 🌾 **Timeline Agrícola (Safras)** — Monitoramento visual de culturas como Soja, Milho, Café e Batata.
- 🔍 **Filtros Avançados** — Sistema de filtragem em tempo real por categoria (Pagamentos, Reuniões, Campanhas).
- 🎨 **Temas Sazonais** — Suporte visual automático para campanhas como Setembro Amarelo e Outubro Rosa.
- 📱 **Fully Responsive** — Interface otimizada para desktops e dispositivos mobile, garantindo acesso em campo ou no escritório.
- ✨ **Feedback Visual** — Modais detalhados e estados de interação refinados para uma experiência imersiva.

---

## 🛠 Tecnologias

### Core
| Tecnologia | Versão | Uso |
|---|---|---|
| [Vite](https://vitejs.dev/) | 6.x | Ferramenta de build ultra-rápida e servidor de desenvolvimento |
| [React](https://react.dev/) | 18.x | Biblioteca para construção de interfaces reativas |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipagem estática para robustez e segurança do código |

### Styling e UI
| Tecnologia | Uso |
|---|---|
| [Tailwind CSS](https://tailwindcss.com/) v4 | Estilização moderna com variáveis CSS e performance otimizada |
| [Lucide React](https://lucide.dev/) | Set de ícones leves e consistentes |
| [Date-fns](https://date-fns.org/) | Manipulação precisa de datas e internacionalização |

---

## 🏗 Arquitetura

```text
Browser Request → Vite HMR (Dev mode)
    → src/main.tsx (Ponto de entrada)
        → src/App.tsx (Orquestrador de Estado e Layout)
            → src/components/ (Views Modulares: Calendário, Timeline, Filtros)
            → src/utils/ (Drivers de lógica e cálculos de datas)
            → src/data/ (Data Store estático e tipado)
```

### Padrões Implementados

* **Component-Based Architecture:** UI dividida em componentes pequenos, especializados e independentes.
* **Separation of Concerns:** A lógica de negócio (cálculos de datas) é isolada nos `utils`, separada dos componentes visuais.
* **Type-Driven Development:** Interfaces TypeScript definem o contrato de dados desde a origem (`data/`) até o componente final.

---

## 📂 Estrutura de Arquivos

```text
📦 calendario-hortsoy/
├── 📂 src/
│   ├── 📂 assets/         # Logotipos e recursos visuais estáticos
│   ├── 📂 components/     # Componentes React (MonthCalendar, CropTimeline, etc.)
│   ├── 📂 data/           # Configurações de eventos e ciclos de safras
│   ├── 📂 styles/         # Configuração Tailwind v4 e variáveis de tema
│   ├── 📂 utils/          # Auxiliares de calendário e mapeamento de ícones
│   │
│   ├── App.tsx            # Componente raiz e gestão de estado global
│   └── main.tsx           # Inicialização da aplicação React
│
├── index.html             # Template HTML principal
├── package.json           # Manifesto de dependências e scripts
├── tsconfig.json          # Configuração rigorosa do TypeScript
└── vite.config.ts         # Configurações de build e aliases de caminho
```

---

## 🗄️ Gestão de Dados

Diferente de aplicações tradicionais dependentes de banco de dados externo, este projeto utiliza um **Static Data Store** tipado para máxima velocidade:

* **`calendar-events.ts`**: Centraliza todos os compromissos, feriados e campanhas administrativas.
* **`crop-seasons.ts`**: Define os parâmetros técnicos das safras (meses de plantio, colheita e cores temáticas).

> **Vantagem:** Carregamento instantâneo (*Zero Latency*) e funcionamento offline completo após o primeiro carregamento.

---

## 🎨 Design e UI/UX

A estética foi projetada seguindo a identidade visual do **Grupo Hortsoy**:

* **Paleta Agrícola:** Tons de verde e terra que remetem à natureza e ao campo.
* **Foco em Legibilidade:** Grids limpos e tipografia moderna para rápida identificação de datas.
* **Acessibilidade:** Cores contrastantes para diferentes tipos de eventos, facilitando a navegação de usuários com diferentes perfis.

---

## ⚡ Performance

Otimizado para ser leve e eficiente:

* **Zero Bloat:** Dependências desnecessárias foram removidas para manter o bundle final extremamente reduzido.
* **Vite Optimization:** Pré-build de dependências e HMR (Hot Module Replacement) instantâneo.
* **Tree Shaking:** Apenas os ícones e funções efetivamente utilizados são incluídos no build final.

---

## 🚀 Instalação

### Pré-requisitos

* **Node.js** ≥ 18.x
* **npm** ou **yarn**

### Setup Local

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
| --- | --- | --- |
| `dev` | `npm run dev` | Inicia o servidor em ambiente de desenvolvimento |
| `build` | `npm run build` | Compila a aplicação para produção (Pasta dist) |
| `preview` | `npm run preview` | Visualiza localmente o build gerado para produção |

---

## 📄 Licença

Projeto corporativo privado — © 2026 Hortsoy Agronegócio. Todos os direitos reservados.