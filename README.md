# EndoAfetos

Landing page da **EndoAfetos** — rede de apoio e educação em saúde da mulher
(endometriose, infertilidade e reprodução humana), com atuação em **Salvador, Bahia, Brasil**.

> _Porque nenhuma mulher deveria enfrentar essa jornada sozinha._

Site estático (HTML/CSS/JS, sem build) servido a partir da **raiz** do repositório — pronto para GitHub Pages.

## 🗂️ Estrutura

```
.
├── index.html          Página (conteúdo + SEO)
├── styles.css          Estilos e paleta da marca
├── app.js              Menu, animações, modais e vídeos
├── favicon.ico
├── robots.txt · sitemap.xml
├── assets/
│   ├── logo.png                Marca oficial (borboleta, fundo transparente) — usada no site
│   ├── logo-full.png           Marca completa transparente (borboleta + palavra "EndoAfetos")
│   ├── logo.jpg                Marca original (fundo preto) — usada no compartilhamento social
│   ├── LilianeCarmen.jpg · FernandaAlmeida.jpg · JoelmaBomfim.jpg   Fotos da equipe
│   └── qr-code.jpg             QR Code do grupo de WhatsApp
├── info-geral-site.txt         Conteúdo de referência (texto-fonte)
└── LICENSE
```

## ▶️ Pré-visualizar localmente

Abra `index.html` no navegador, ou rode um servidor simples:

```bash
python -m http.server 8000
# depois acesse http://localhost:8000
```

## 🚀 Deploy — GitHub Pages

O site está na raiz, então o Pages publica direto:

1. No GitHub: **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Selecione a branch **`main`** e a pasta **`/ (root)`**. Salve.
4. Em ~1 min o site fica no ar em `https://outcast2020.github.io/endoafetos/`.

> Como é um site de projeto, ele é servido no subcaminho `/endoafetos/`. Todos os
> caminhos de assets são relativos, então funcionam normalmente nesse subcaminho.
> Para um domínio próprio, configure-o em Settings → Pages → Custom domain.

## ✏️ Personalizar

- **Fotos da equipe** — substitua os arquivos em `assets/` mantendo os nomes
  (`LilianeCarmen.jpg`, `FernandaAlmeida.jpg`, `JoelmaBomfim.jpg`). Formato ideal: quadrado.
  Se um arquivo faltar, o site mostra as iniciais da profissional.
- **QR Code** — troque `assets/qr-code.jpg` (mantendo o nome).
- **Vídeos do YouTube** — em `index.html`, preencha o atributo `data-embed` dos blocos
  `<div class="video__frame" data-embed="">` com o link *embed*
  (ex.: `https://www.youtube.com/embed/ID_DO_VIDEO`). O iframe carrega automaticamente.
- **Imagem de compartilhamento** — hoje usa `assets/logo.jpg`. Para uma prévia ideal,
  crie uma arte `1200×630 px` e atualize `og:image`/`twitter:image` no `index.html`.

## 🔎 SEO & Localização

Já incluído no `index.html`: título, descrição e palavras-chave (da mais à menos relevante);
meta tags de geolocalização priorizando **Salvador → Bahia → Brasil**; Open Graph / Twitter Card;
e dados estruturados JSON-LD (`Organization` / `MedicalOrganization`).

> **Antes de publicar em produção:** defina o domínio real e atualize as URLs
> (`endoafetos.com.br`) em `canonical`, `og:url`, `twitter:image`, o `url`/`logo` do
> JSON-LD, `sitemap.xml` e `robots.txt`.

## 🔗 Links oficiais

- Instagram: https://www.instagram.com/endoafetos
- Grupo de WhatsApp: botão "Grupo no WhatsApp" na página
- E-mail: endoafetos@gmail.com

## 📄 Licença

Projeto **privado** e proprietário. Todos os direitos reservados. Veja [`LICENSE`](LICENSE).
