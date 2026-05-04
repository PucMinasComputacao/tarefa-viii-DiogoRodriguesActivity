// Lista
const catalogo = [
  {
    id: 1,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 2,
    titulo: "Homem de Ferro",
    tipo: "filme",
    ano: 2008,
    generos: ["ação", "aventura"],
    nota: 9.0,
    assistido: true
  },
  {
    id: 3,
    titulo: "Vingadores: Era de Ultron",
    tipo: "filme",
    ano: 2014,
    generos: ["ação", "aventura"],
    nota: 8.6,
    assistido: false
  },
  {
    id: 4,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["terror", "drama"],
    nota: 8.7,
    assistido: true
  },
  {
    id: 5,
    titulo: "The Witcher",
    tipo: "serie",
    ano: 2019,
    generos: ["fantasia"],
    nota: 8.2,
    assistido: false
  },
  {
    id: 6,
    titulo: "Batman",
    tipo: "filme",
    ano: 2008,
    generos: ["ação", "drama"],
    nota: 9.3,
    assistido: true
  }
];

console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item não possui segundo gênero.");
}

console.log("Lista de títulos:");
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em maiúsculo:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Não assistidos:", naoAssistidos.length);

const topItem = catalogo.find(item => item.nota >= 9);
if (topItem) {
  console.log(`Top encontrado: ${topItem.titulo} (${topItem.nota})`);
} else {
  console.log("Nenhum item com nota >= 9");
}

const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));


// Saida
const output = document.getElementById("output");


const total = catalogo.length;
const filmes = catalogo.filter(i => i.tipo === "filme").length;
const series = catalogo.filter(i => i.tipo === "serie").length;


const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

output.innerHTML = `
  <h4>Resumo do Catálogo</h4>
  <p>Total de itens: ${total}</p>
  <p>Filmes: ${filmes} | Séries: ${series}</p>
  <p>Não assistidos: ${naoAssistidos.length}</p>
  <p>Média geral: ${mediaGeral.toFixed(2)}</p>

  <h5>Top 3</h5>
  <ul>
    ${ranking.map(item => `<li>${item.titulo} (${item.nota})</li>`).join("")}
  </ul>
`;