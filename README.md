<div align="center">

# HortSoy Calendar 2026 🌱

**Portal Corporativo de Gestão de Eventos e Calendário Agrícola**

[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Security](https://img.shields.io/badge/Security-Master-green?logo=shield)](https://github.com/Christyan95/Calendario-HortSoy)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [🛡️ Segurança Master](#%EF%B8%8F-segurança-master)
- [Tecnologias](#-tecnologias)
- [Arquitetura e Clean Code](#-arquitetura-e-clean-code)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Gestão de Dados](#-gestão-de-dados)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **Calendário Corporativo HortSoy** é uma ferramenta estratégica centralizada para a organização de eventos, reuniões e acompanhamento do ciclo agrícola de 2026. Desenvolvido para unificar a comunicação interna, o portal permite que colaboradores visualizem desde feriados corporativos até períodos críticos de plantio e colheita.

O projeto foi refatorado sob rigorosas metodologias de **Clean Code**, garantindo uma base de código modular, leve e de fácil manutenção.

### Destaques
- 📅 **Calendário Interativo** — Visualização fluida de eventos mensais com navegação inteligente.
- 🌾 **Timeline Agrícola (Safras)** — Monitoramento visual de culturas como Soja, Milho, Café e Batata.
- 🔍 **Filtros Avançados** — Sistema de filtragem em tempo real por categoria.
- 🎨 **Temas Sazonais** — Suporte visual automático para campanhas como Setembro Amarelo e Outubro Rosa.
- 📱 **Fully Responsive** — Interface otimizada para desktops e dispositivos mobile.

---

## 🛡️ Segurança Master

Este projeto implementa medidas de segurança de nível industrial para garantir a integridade dos dados e a privacidade dos usuários.

### Medidas Implementadas
1. **Content Security Policy (CSP)**: Implementada via Meta Tag, restringindo a execução de scripts apenas ao domínio de origem (`'self'`), prevenindo ataques de **XSS** e **Clickjacking**.
2. **Hardening de Dependências**: Auditoria completa e atualização do core para versões sem vulnerabilidades conhecidas.
3. **Cabeçalhos de Segurança**: Configurações como `nosniff` e `no-referrer-when-downgrade` via meta tags.
4. **Otimização de Build**:
   - **Source Maps Desativados**: Protege o código-fonte original de exposição pública.
   - **Remoção de Logs**: Uso do motor **OXC/Esbuild** para remover `console.log` e `debugger` automaticamente em produção.
   - **Minificação Rigorosa**: Garante que o código final seja ilegível para engenharia reversa simples.

---

## 🛠 Tecnologias

### Core
| Tecnologia | Versão | Uso |
|---|---|---|
| [Vite](https://vitejs.dev/) | 7.x | Ferramenta de build ultra-rápida e segura |
| [React](https://react.dev/) | 18.x | Biblioteca para construção de interfaces reativas |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipagem estática para robustez e segurança |

### Styling e UI
| Tecnologia | Uso |
|---|---|
| [Tailwind CSS](https://tailwindcss.com/) v4 | Estilização moderna com variáveis CSS nativas |
| [Lucide React](https://lucide.dev/) | Set de ícones leves e consistentes |
| [Date-fns](https://date-fns.org/) | Manipulação precisa de datas e internacionalização |

---

## 🏗 Arquitetura e Clean Code

O projeto segue princípios de **Clean Code** e **SOLID**:

```text
Browser Request → Vite HMR (Dev mode)
    → src/main.tsx (Ponto de entrada)
        → src/App.tsx (Orquestrador de Estado e Layout)
            → src/components/ (Views Modulares e Reutilizáveis)
            → src/utils/ (Drivers de lógica pura e transformações)
            → src/data/ (Data Store estático e tipado)
```

### Padrões Implementados
* **Component-Based Architecture:** UI dividida em componentes pequenos, especializados e independentes.
* **Separation of Concerns:** A lógica de negócio (cálculos de datas) é isolada nos `utils`.
* **DRY (Don't Repeat Yourself):** Reutilização de funções utilitárias e componentes de UI.
* **KISS (Keep It Simple, Stupid):** Implementações diretas e sem excesso de abstração.

---

## 📂 Estrutura de Arquivos

```text
📦 calendario-hortsoy/
├── 📂 src/
│   ├── 📂 assets/         # Recursos visuais e logotipos
│   ├── 📂 components/     # Componentes React modulares
│   ├── 📂 data/           # Configurações de eventos e safras (Static Store)
│   ├── 📂 styles/         # Tema CSS e Tailwind v4
│   ├── 📂 utils/          # Lógica utilitária e mapeamento de ícones
│   │
│   ├── App.tsx            # Orquestrador principal
│   └── main.tsx           # Inicialização React
│
├── index.html             # Template com cabeçalhos de segurança
├── package.json           # Dependências e scripts de automação
└── vite.config.ts         # Hardening de build e aliases
```

---

## 🗄️ Gestão de Dados

Utiliza um **Static Data Store** tipado para performance instantânea:
* **`calendar-events.ts`**: Feriados, campanhas e eventos administrativos.
* **`crop-seasons.ts`**: Calendário técnico de plantio e colheita.

---

## ⚡ Performance

* **Zero Bloat:** Sem dependências desnecessárias.
* **Fast Refresh:** Desenvolvimento ágil com Vite 8.
* **Tree Shaking:** Inclusão apenas do código necessário no bundle final.

---

## 🚀 Instalação

### Setup Local
```bash
# 1. Instale as dependências com segurança
npm install --legacy-peer-deps

# 2. Inicie o servidor de desenvolvimento
npm run dev
```

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
| --- | --- | --- |
| `dev` | `npm run dev` | Inicia o servidor de desenvolvimento |
| `build` | `npm run build` | Compila para produção com Hardening |
| `preview` | `npm run preview` | Visualiza o build de produção localmente |

---

## 📄 Licença

Projeto corporativo privado — © 2026 Hortsoy Agronegócio. Todos os direitos reservados.