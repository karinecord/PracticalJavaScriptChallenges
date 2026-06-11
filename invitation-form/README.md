# Festivite — Convite Digital

Formulário para criação de convites digitais personalizados, desenvolvido com **HTML, CSS e JavaScript puro** (sem frameworks).

🔗 [Layout no Figma](https://www.figma.com/proto/CJHK9qSWFng8wXTqFBL3Dp/Formul%C3%A1rio-de-convite--Community-?node-id=2128-1416&p=f&t=18vokp9pzTQd7AAL-0&scaling=min-zoom&content-scaling=fixed&page-id=3%3A376&starting-point-node-id=2128%3A1416)

## Funcionalidades

- **Sobre o evento**: título, data/hora de início e fim, tipo (presencial/online), local e descrição.
- **Personalização**:
  - Seleção de cor principal do convite (seleção múltipla via checkboxes estilizados, sem JavaScript).
  - Seleção do tema do evento (aniversário, infantil, formatura, casamento, chá de bebê, chá de panela, carnaval, páscoa, São João, halloween, natal, outro).
  - Alternância de estilo claro/escuro.
  - Upload de foto de capa.
- **Dados para contato**: nome, e-mail/telefone e termos de uso.
- Layout responsivo ao tamanho da janela, mantendo as proporções do design original (1280×768).

## Estrutura do projeto

```
invitation-form/
├── index.html          # Estrutura da página
├── global.css          # Reset, variáveis CSS (cores, tipografia) e estilos globais
├── index.css           # Ponto de entrada que importa os demais arquivos CSS
├── styles/
│   ├── layout.css       # Layout geral (aside, main, app)
│   ├── forms.css         # Estilos dos formulários e seções de personalização
│   └── fields/
│       ├── index.css
│       └── input.css
└── assets/              # Imagens e ícones (SVG)
```

## Tecnologias

- HTML5 semântico
- CSS3 (nesting nativo, `:has()`, Flexbox, variáveis CSS)
- JavaScript (manipulação simples do DOM)
- Fontes do Google Fonts (Baloo 2, Open Sans, Leckerli One)

## Como executar

Basta abrir o arquivo `index.html` em um navegador moderno (Chrome ou Edge recomendados, devido ao uso de `:has()` e nesting nativo de CSS).
