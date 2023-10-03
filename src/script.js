const input = document.getElementById("input");
const button = document.getElementById("btn");
const boxColor = document.getElementById("boxColor");

const validateInput = () => {
  const inputvalue = input.value;
  inputvalue === "" ? (btn.disabled = true) : (btn.disabled = false);
};

window.addEventListener("load", validateInput);

btn.addEventListener("click", () => {
  const inputColor = input.value;
  const colorRegex =
    /^#([0-9A-Fa-f]{3}){1,2}$|^(rgb|rgba)\(\s*\d+\s*(,\s*\d+\s*){2,3}(,\s*\d+(\.\d+)?)?\s*\)$|^(red|green|blue|yellow|magenta|cyan|black|white|orange|pink|purple|brown|gray|grey)$/i;
  const colorTest = colorRegex.test(inputColor);
  if (!colorTest) {
    alert(`Code ${inputColor} bukan warna tolol, input kembali...`);
    return;
  }

  boxColor.style.backgroundColor = `${inputColor}`;
  input.value = "";
  btn.disabled = true;
});

input.addEventListener("input", validateInput);
