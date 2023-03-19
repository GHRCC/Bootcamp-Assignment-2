const btn = document.getElementById("load-data");
const testimonials = document.querySelector(".testimonials");

btn.onclick = async () => {
  const userData = await fetch("https://reqres.in/api/users/");
  const { data, support } = await userData.json();
  console.log(data);

  //criando os elementos
  data.forEach((item) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const idSpan = document.createElement("span");
    const h1 = document.createElement("h1");
    const h1Span = document.createElement("span");
    const p = document.createElement("p");
    const a = document.createElement("a");

    //atribuindo os filhos ao body/div

    testimonials.appendChild(div);
    div.appendChild(img);
    div.appendChild(idSpan);
    div.appendChild(h1);
    div.appendChild(h1Span);
    div.appendChild(p);
    div.appendChild(a);

    //colocando os dados nos elementos
    img.setAttribute("src", `${item.avatar}`);
    idSpan.textContent = item.id;
    h1.textContent = `${item.first_name} ${item.last_name}`;
    h1Span.textContent = item.email;
    p.textContent = support.text;
    a.textContent = support.url;
  });
};
