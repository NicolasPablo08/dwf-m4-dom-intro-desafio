const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const etiquetaUl = document.querySelector(".lista");
  const etiquetasLi = etiquetaUl.querySelectorAll("li");
  etiquetasLi.forEach((rem) => rem.remove());
  //console.log(etiquetasLi);
  cosasQueAprendimos.forEach((i) => {
    const nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = i.tema;
    if (i.class !== "") {
      nuevoLi.classList.add(i.class);
    }
    //console.log(nuevoLi);
    document.querySelector(".lista").appendChild(nuevoLi);
  });
}

main();
