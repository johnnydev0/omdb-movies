# OMDB Search

Pode ser acessado através de: https://omdb-movies-blue.vercel.app/

## Como rodar

O projeto usa ES Modules nativos do browser, então **não funciona abrindo o `index.html` diretamente** — é necessário servir os arquivos por um servidor HTTP.

### Pré-requisitos

- Node.js

### Passo a passo

1. Clone o repositório e entre na pasta:

git clone https://github.com/johnnydev0/omdb-movies
cd omdb-search


2. Suba um servidor local:

npx serve .

3. Acesse no navegador o endereço exibido no terminal — geralmente `http://localhost:3000`.

## Decisões técnicas

Debounce na busca — o input aguarda 400ms após o usuário parar de digitar antes de fazer a requisição. Isso evita disparar uma chamada à API a cada tecla pressionada.

AbortController — cada nova busca cancela a requisição anterior ainda em andamento, prevenindo que resultados de uma busca antiga sobrescrevam os de uma mais recente (race condition).

Cache de detalhes — os dados do painel de hover ficam em memória depois da primeira requisição. Se você passar o mouse sobre o mesmo filme duas vezes, não há uma segunda chamada à API.

Sem innerHTML com dados externos — campos vindos da API (título, tipo, pôster) são atribuídos via `textContent` e propriedades do DOM, nunca interpolados em strings HTML, evitando XSS.
