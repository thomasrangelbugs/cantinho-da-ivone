# Cantinho da Ivone e do Osvaldo — versão completa

Site pessoal e responsivo criado especialmente para **Ivone e Osvaldo**, pais do Thomas.

## Como usar

Abra `index.html` no navegador ou sirva a pasta:

```powershell
python -m http.server 8080
```

No celular, instale como PWA. Há saudação por horário, mensagens do dia, preces, modo dormir, tema claro/noturno e áudio (oração / Luz Serena). Dados pessoais ficam só no aparelho.

## Linguagem e tecnologias

- **HTML5 / CSS3 / JavaScript**
- **PWA** — `manifest.webmanifest` + `sw.js`

## Estrutura do projeto

```
cantinho-da-ivone/
├── index.html
├── style.css
├── script.js
├── manifest.webmanifest
├── sw.js
└── assets/          # imagens, ícones e áudio
```

## Publicar no Netlify

1. Extraia o ZIP.
2. Entre no Netlify.
3. Clique em **Add new site** → **Deploy manually**.
4. Arraste a pasta `cantinho_da_ivone_completo`.
5. Aguarde a publicação.

## Recursos

- Saudação conforme o horário
- Mensagem e afirmação diferentes a cada dia
- Preces e reflexões espíritas
- Temporizador de silêncio
- Caixinha com mensagens do Thomas
- Diário de gratidão e intenção de oração
- Exercício visual de respiração
- Fundo com movimento
- Modo claro e noturno
- Som ambiente gerado pelo navegador
- Uso offline e instalação no celular
- Layout responsivo

## Personalizar mensagens

Abra `script.js` e edite as listas:
- `dailyMessages`
- `prayers`
- `spiritReadings`
- `sonMessages`

As anotações pessoais ficam apenas no navegador do aparelho utilizado.

## Música incluída

O botão musical agora reproduz **Luz Serena**, uma composição instrumental original
criada especialmente para este site. Ela possui melodia, acordes, piano suave e sinos,
é reproduzida em loop e funciona offline.

Por regra dos navegadores, a música começa somente depois que a pessoa toca no botão ♫.
