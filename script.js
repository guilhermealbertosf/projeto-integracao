// Cole aqui o link que termina com output=csv

const URL_PLANILHA = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhzGePpP8IPU94aMUDC_-yDLPnMeeqklrh1NHB4pxQReMJIbckMgtR5S8ww3VQhAM7MT_gGoePe3X8/pub?gid=0&single=true&output=csv';
const cardapio = document.getElementById('cardapio');
async function carregarCardapio() {
const resposta = await fetch(URL_PLANILHA);
const texto = await resposta.text();
const linhas = texto.trim().split('\n'); // cada linha da planilha
linhas.shift(); // remove o cabeçalho (nome, preco, categoria)
cardapio.innerHTML = '';
linhas.forEach((linha) => {
const [nome, preco, categoria] = linha.split(',');
const item = document.createElement('div');
item.className = 'item';
item.innerHTML = `
<div>
<div>${nome}</div>
<div class="categoria">${categoria}</div>
</div>
<div class="preco">R$ ${Number(preco).toFixed(2).replace('.', ',')}
</div>
`;
cardapio.appendChild(item);
});
}
carregarCardapio();