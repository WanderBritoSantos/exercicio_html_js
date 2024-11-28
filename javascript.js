const valor_A = document.getElementById("val_A");
let valor_B = document.getElementById("val_B");
let btn = document.getElementById("calcular");
let res = document.getElementById("res");

btn.addEventListener("click", (evt) => {
  const n_1 = Number(valor_A.value);
  const n_2 = Number(valor_B.value);

  if (n_1 > n_2) {
    res.innerHTML = `Infelismente o valor de B "${n_2}" é menor que  A "${n_1}"`;
  } else if (n_1 < n_2) {
    res.innerHTML = `Bom o valor de  B "${n_2}" é maior que A "${n_1}"`;
  } else if (n_1 == n_2) {
    res.innerHTML = `Os valores são de A "${n_1}" é  B "${n_2}" são iguais`;
  }
  res.style.display = "block";
});
