# EndoAfetos

Landing page da **EndoAfetos** — rede de apoio e educação em saúde da mulher
(endometriose, infertilidade e reprodução humana), com atuação em **Salvador, Bahia, Brasil**.

> _Porque nenhuma mulher deveria enfrentar essa jornada sozinha._

## 📁 Estrutura

O site (HTML/CSS/JS estático, sem dependências de build) está na pasta [`Web/`](Web/):

```
Web/
├── index.html      Página (conteúdo + SEO)
├── styles.css      Estilos e paleta da marca
├── app.js          Menu, animações, modais e vídeos
├── assets/         Logotipo, fotos da equipe e QR Code
├── robots.txt · sitemap.xml
└── README.md       Guia detalhado de personalização
```

## ▶️ Pré-visualizar

Abra `Web/index.html` no navegador, ou rode um servidor local:

```bash
cd Web
python -m http.server 8000
# depois acesse http://localhost:8000
```

## 🚀 Publicação (GitHub Pages)

O GitHub Pages serve a partir da **raiz** ou de **`/docs`**. Como o site está em `Web/`,
para publicar automaticamente é preciso mover o conteúdo de `Web/` para a raiz ou para `/docs`
(posso fazer isso a pedido). Alternativa: hospedar em Netlify/Vercel apontando a pasta `Web/`.

## ✅ Pendências antes de publicar em produção

- Definir o domínio real e atualizar `canonical`, `og:url` e o `url`/`logo` do JSON-LD (hoje: `endoafetos.com.br`).
- Adicionar os vídeos do YouTube (iframes já posicionados — ver `Web/README.md`).
- (Opcional) Criar imagem de compartilhamento dedicada 1200×630.

## 📄 Licença

Projeto **privado** e proprietário. Todos os direitos reservados. Veja [`Web/LICENSE`](Web/LICENSE).
