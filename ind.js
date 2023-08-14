var btn1plus = document.getElementsByClassName("btn1+");
console.log(btn1plus);
var btn1moin = document.getElementsByClassName("btn1-");
var c1 = document.getElementsByClassName("c1");
console.log(c1);
var hearts = document.getElementsByClassName("fa-solid");
var title = document.getElementsByClassName("card_title");
var prt = document.getElementById("parent");
var prx = document.getElementsByClassName("prix");
var total = document.getElementById("total");

var somme = 0;

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    if (hearts[i].style.color === "black") {
      hearts[i].style.color = "red";
    } else {
      hearts[i].style.color = "black";
    }
  });
}

for (let i = 0; i < btn1plus.length; i++) {
  let compteur1 = 0;

  btn1plus[i].addEventListener("click", function () {
    compteur1 += 1;
    c1[i].innerHTML = compteur1;
    console.log(prx[i].innerHTML);
    somme += parseInt(prx[i].innerHTML); 

    total.innerHTML = somme;

    if (compteur1 > 0) {
      var newDiv = document.createElement("li");
      var newContent = document.createTextNode(title[i].textContent);
      newDiv.appendChild(newContent);

      var removeButton = document.createElement("button");
      removeButton.textContent = "x";
      removeButton.addEventListener("click", function () {
        prt.removeChild(newDiv);



        somme -= parseInt(prx[i].innerHTML);

        total.innerHTML = somme;
        compteur1 = 0;
        c1[i].innerHTML = compteur1;
      });

      newDiv.appendChild(removeButton);
      prt.appendChild(newDiv);
    }
  });

  btn1moin[i].addEventListener("click", function () {
    if (compteur1 > 0) {
      compteur1 -= 1;
      c1[i].innerHTML = compteur1;

      somme -= parseInt(prx[i].innerHTML); 
      console.log(somme);
      total.innerHTML = somme;
    }
  });
}