# EndoAfetos — Landing Page

Site institucional de página única (landing page) da **EndoAfetos**, uma rede de apoio e
educação em saúde da mulher — endometriose, infertilidade e reprodução humana.

> _Porque nenhuma mulher deveria enfrentar essa jornada sozinha._

## 🗂️ Estrutura

```
Web/
├── index.html          Página principal (todo o conteúdo + SEO)
├── styles.css          Estilos e design system
├── app.js              Menu, animações, modais e vídeos
├── assets/
│   ├── logo.png                Marca oficial (borboleta, fundo transparente) — usada no site
│   ├── logo-full.png           Marca completa transparente (borboleta + palavra "EndoAfetos")
│   ├── logo.jpg                Marca original (fundo preto) — usada no compartilhamento social
│   ├── LilianeCarmen.jpg       Foto — Liliane Carmen
│   ├── FernandaAlmeida.jpg     Foto — Fernanda Almeida
│   ├── JoelmaBomfim.jpg        Foto — Joelma Bomfim
│   └── qr-code.jpg             QR Code do grupo de WhatsApp
├── robots.txt · sitemap.xml    SEO
├── info-geral-site.txt         Conteúdo de referência (texto-fonte)
├── README.md
└── LICENSE
```

## 🚀 Como usar

É um site estático — basta abrir o `index.html` no navegador.
Para desenvolvimento local com um servidor simples (a partir da pasta `Web/`):

```bash
# Python 3
python -m http.server 8000
# depois acesse http://localhost:8000
```

## ✏️ Como personalizar

### Fotos da equipe
Estão em `assets/` como `LilianeCarmen.jpg`, `FernandaAlmeida.jpg` e `JoelmaBomfim.jpg`.
Para trocar, substitua o arquivo mantendo o mesmo nome. Formato ideal: quadrado (ex.: 400×400 px).
Se um arquivo faltar, o site mostra automaticamente as iniciais da profissional.

### QR Code
O grupo de WhatsApp usa `assets/qr-code.jpg`. Para trocar, substitua o arquivo com o mesmo nome.

### Vídeos do YouTube
Em `index.html`, localize os blocos `<div class="video__frame" data-embed="">`.
Basta preencher o `data-embed` com o link **embed** do YouTube:

```html
<div class="video__frame" data-embed="https://www.youtube.com/embed/ID_DO_VIDEO">
```

> O `ID_DO_VIDEO` é o trecho final da URL. Ex.: para
> `https://youtu.be/AbC123xyz`, use `https://www.youtube.com/embed/AbC123xyz`.
> O iframe já está posicionado; ao preencher o `data-embed`, o vídeo é carregado automaticamente.

### Imagem de compartilhamento (Open Graph)
Atualmente o compartilhamento usa `assets/logo.jpg`. Para uma prévia ideal, crie uma imagem
`1200×630 px` (paisagem) e atualize as tags `og:image` e `twitter:image` no `index.html`.

## 🔎 SEO & Localização

O `index.html` já inclui:
- Título, descrição e palavras-chave (ordenadas da mais relevante à menos).
- Meta tags de geolocalização priorizando **Salvador → Bahia → Brasil**
  (`geo.region`, `geo.placename`, `geo.position`, `ICBM`).
- Open Graph / Twitter Card para compartilhamento.
- Dados estruturados (JSON-LD) do tipo `Organization` / `MedicalOrganization`.

Antes de publicar, ajuste o domínio real nas URLs (`https://endoafetos.com.br/`) dentro
das tags `canonical`, `og:url` e do bloco JSON-LD.

## 🔗 Links oficiais

- Instagram: https://www.instagram.com/endoafetos
- Grupo de WhatsApp: link no botão "Grupo no WhatsApp"
- E-mail: endoafetos@gmail.com

## 📄 Licença

Projeto **privado**. Todos os direitos reservados. Veja o arquivo [LICENSE](LICENSE).
