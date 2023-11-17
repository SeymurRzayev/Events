// Ev Tapsirigi:  4 eded img box var. Biri merkezde esas. 3 asagida kicik. Kicik img uzerine klik edende merkezde eks olunsun. bu formada her birine klik edende eks olunsun

const img = document.querySelector("#sea");
const img1 = document.querySelector("#sea1");
const img2 = document.querySelector("#sea2");
const img3 = document.querySelector("#seaSea");

img1.addEventListener("click", () => {
  const first = img.getAttribute("src");
  const second = img1.getAttribute("src");
  console.log(first);
  console.log(second);
  img.setAttribute("src", second);
  img1.setAttribute("src", second);

  //   img.setAttribute("src", second);
  //   img1.setAttribute("src", first);
});

img2.addEventListener("click", () => {
  const first = img.getAttribute("src");
  const third = img2.getAttribute("src");
  console.log(first);
  console.log(third);
  img.setAttribute("src", third);
  img2.setAttribute("src", third);

  //   img.setAttribute("src", third);
  //   img2.setAttribute("src", first);
});

img3.addEventListener("click", () => {
  const first = img.getAttribute("src");
  const fourth = img3.getAttribute("src");
  console.log(first);
  console.log(fourth);
  img.setAttribute("src", fourth);
  img3.setAttribute("src", fourth);

  //   img.setAttribute("src", fourth);
  //   img3.setAttribute("src", first);
});
