function startSort() {
  const container = document.getElementById("array-container");
  container.innerHTML = "";

  const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
  arr.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = value * 3 + "px";
    container.appendChild(bar);
  });

  // Add sorting animation logic here later
}
