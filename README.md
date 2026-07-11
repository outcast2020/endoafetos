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

### 🌐 Domínio próprio — www.endoafetos.com.br

Todo o SEO já aponta para `https://www.endoafetos.com.br/`. Para ativar o domínio
faça **nesta ordem** — não adicione o arquivo `CNAME` antes do DNS, senão o endereço
`github.io` para de responder até o domínio propagar:

1. **DNS** (painel do registrador do `.com.br`):
   - `CNAME`  `www`  →  `outcast2020.github.io`
   - Apex (`endoafetos.com.br`, sem www): 4 registros `A` → `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (o GitHub redireciona o apex para o `www`).
2. **GitHub → Settings → Pages → Custom domain**: digite `www.endoafetos.com.br` e salve
   (isso cria o arquivo `CNAME` na raiz). Marque **Enforce HTTPS** quando ficar disponível.
3. Aguarde a propagação do DNS e a emissão do certificado (minutos a algumas horas).

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

## 🔎 SEO & aparecer no Google

Já configurado no `index.html` (tudo apontando para `https://www.endoafetos.com.br/`):
`title` e `meta description` otimizados (com "endometriose" e "Salvador"), `canonical`,
Open Graph / Twitter Card, meta tags de geolocalização (**Salvador → Bahia → Brasil**),
`robots.txt`, `sitemap.xml` e dados estruturados JSON-LD (`Organization`/`MedicalOrganization`,
com telefone e ponto de contato).

**O que aparece no resultado do Google é o `title` + a `meta description`** — não o texto
oculto da página. Para o site ser indexado (só acontece depois de o domínio entrar no ar):

1. **Google Search Console** (search.google.com/search-console): adicione a propriedade
   do tipo **Domínio** (`endoafetos.com.br`) e verifique pelo **registro DNS TXT** fornecido.
2. Em **Sitemaps**, envie `https://www.endoafetos.com.br/sitemap.xml`.
3. Em **Inspeção de URL**, teste a home e clique em **Solicitar indexação**.
4. A indexação costuma levar de alguns dias a ~2 semanas.

> Melhorias opcionais: criar uma imagem de compartilhamento dedicada `1200×630`
> (hoje o preview social usa `assets/logo.jpg`) e remover o bloco oculto
> `visually-hidden` do `index.html` — texto oculto não ajuda o ranqueamento.

## 🔗 Links oficiais

- Instagram: https://www.instagram.com/endoafetos
- Grupo de WhatsApp: botão "Grupo no WhatsApp" na página
- E-mail: endoafetos@gmail.com

## 📄 Licença

Projeto **privado** e proprietário. Todos os direitos reservados. Veja [`LICENSE`](LICENSE).
