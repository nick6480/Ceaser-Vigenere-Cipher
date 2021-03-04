document.getElementById("cBtn").addEventListener("click", ceaserCipher);
document.getElementById("vBtn").addEventListener("click", vigenereCipher);

const a = "abcdefghijklmnopqrstuvwxyzæøå"

// Ceaser
function ceaserCipher() {
  const pt = document.getElementById("cPT").value.toLowerCase();
  const arr = pt.split(/(?!$)/u);
  let ct = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      ct.push(" ")
    } else {
      let index = a.indexOf(arr[i]) + 3;
       ct.push(a[index]);
    }
  }

  document.getElementById("cCT").innerHTML = ct.join("");
}




// Vigenère 
function vigenereCipher() {
  const pt = document.getElementById("vPT").value.toLowerCase();
  const key = document.getElementById("vKey").value.toLowerCase();


  const ptArr = pt.split(/(?!$)/u); // Splits string to array, with each character
  const keyArr = key.split(/(?!$)/u);


  let ct = [];
  let indexArr = [];


  for (var i = 0; i < keyArr.length; i++) { //Pushes index of each letter to array
    indexArr.push(a.indexOf(keyArr[i]))
  }



  let currentKey = 0;

  for (var i = 0; i < ptArr.length; i++) {

    if (ptArr[i] == " ") { //Adds space to array
      ct.push(" ")

    } else {
      let index = a.indexOf(ptArr[i]) + indexArr[currentKey];
       ct.push(a[index]);

       if (currentKey == indexArr.length-1) {
         currentKey = 0;
       } else
       currentKey++;
    }
  }

  document.getElementById("vCT").innerHTML = ct.join("");
}
