let getColor = () => {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let colorcode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = colorcode;
  document.getElementById("color-code").innerHTML = colorcode;
};

document.getElementById("btn").addEventListener("click", getColor);
getColor();
