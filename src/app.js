/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";



let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// Función para generar todas las combinaciones de nombres de dominio

function generateDomainNames(pronoun, adj, noun) {
  let domainNames = [];

  for (var i = 0; i < pronoun.length; i++) {
    for (var x = 0; x < adj.length; x++) {
      for (var y = 0; y < noun.length; y++) {
        let domainName = pronoun[i] + adj[x] + noun[y];
        domainNames.push(domainName);
      }
    }
  }

  return domainNames;
}


var domainNames = generateDomainNames(pronoun, adj, noun);
for (var i = 0; i < domainNames.length; i++) {
  console.log(domainNames[i] + ".com");
}
