function colorGenerator() {
  let colorCode = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let hash = "#";

  for (i = 0; i < 6; i++) {
    let number = Math.round(Math.random() * 15);
    let number2 = colorCode[number];
    hash += number2;
  }

  document.querySelector("#container").style.backgroundColor = hash;
  document.querySelector("#output").style.color = hash;
  document.querySelector("#output").textContent = hash;
}
