/*При вводе пользователем числа и нажатии на кнопку скрывается полее с соответствующим номером.
Если число введено некорректно, выводится сообщение об ошибке.*/

/*document.getElementById("del").onclick = function() {

  var counter = 0;
  for (var j = 1; j < 4; j++) {
    if ($("#num").val() == j) {
      $("#id_" + j).hide();
      counter++;
    }
  }
  if (counter == 0) alert("Введено некорректное число!");
  
}*/


/*Вывод через alert() html-содержимого одного из трех абзацев на странице (абзац выбирается случайным образом).*/

/*var num = Math.random() * 3;
alert($("#id_" + Math.ceil(num)).html());*/


/*При выборе пользователем произвольной радиокнопки (состояние checked) все абзацы текста окрашиваются в цвет кнопки.
При клике по метке (label) событие click срабатывает как при нажатии на сам элемент, к которому привязана метка*/

/*var text = $(".text");
var color = $(".color");

color.click(function() {

  for (var j = 0; j < color.length; j++) {
    if (color[j].checked) {
      for (var i = 0; i < text.length; i++) {
        text[i].style.color = color[j].value;
      }
    }
  }

});*/


/*Все теги <img> со страницы помещаются в массив images[], все атрибуты alt из этих тегов - в массив alternativeText[].
Далее элементы массива выводятся с разделителем & с использованием метода join()*/

/*var images = $("img");
var alternativeText = [];

for (var i = 0; i < images.length; i++) {
  alternativeText[i] = images[i].alt;
}

console.log(alternativeText.join(" & "));*/


/*Каждую секунду ссылки меню одновременно меняют цвет с синего на красный и обратно.*/

/*var links = $(".menu a");

function linksColorRed() {
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "red";
  }
  setTimeout("linksColorBlue()", 1000);
}

function linksColorBlue() {
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "blue";
  }
  setTimeout("linksColorRed()", 1000);
}

setTimeout("linksColorRed()", 1000);*/


/*Вывод первой буквы второго абзаца текста*/

/*alert($("p:eq(1)").html().charAt(0));*/


/*Проверка наличия атрибута hidden у блока 
(если атрибут присутствует, делаем блок видимым, если отсутствует - устанавливаем атрибут и делаем невидимым).*/

/*var blocks = $(".block");

for (var i = 0; i < blocks.length; i++) {
  if (blocks[i].hidden == true) blocks[i].hidden = false;
  else blocks[i].hidden = true;
}*/


