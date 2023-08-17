//Изменение картинки при нажатии на неё
var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Hoshino_R34_Ch394.png") {
    myImage.setAttribute("src", "images/I-JnKq6Dx8k.jpg");
  } else {
    myImage.setAttribute("src", "images/Hoshino_R34_Ch394.png");
  }
};

//Изменение подзаголовка страницы
var myButton = document.querySelector("button");
var myHeading = document.querySelector(".car");

function setUserName () {
    var myName = prompt("Вводи своё имечко бро: ");
    localStorage.setItem("name", myName);

    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        var storedName = localStorage.getItem("name");
        myHeading.textContent = "Приветик, " + storedName + " теперь ты один из нас :)";
      }
}

myButton.onclick = function () {
    setUserName();
};
