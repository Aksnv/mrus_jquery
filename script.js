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


/*Валидация формы на jQuery перед отправкой на сервер (данные всех полей объединяются в единую выборку в переменной formData).
Осуществляется проверка всех полей на пустое значение и проверка поля "Имя" на соответствие буквенным символам (при помощи
регулярного выражения).*/

/*var error = "";
var formData = $("#name, #email, #comment");

$("form").submit(function() {
  for (var i = 0; i < formData.length; i++) {
    if (formData[i].value == "") {
      alert("Заполните все поля формы!");
      return false;
    } else if ((formData[i].name == "name") && (!formData[i].value.match(/^[a-z]+$/i))) {
      alert("Имя должно содержать только буквы!");
      return false;
    }
  }
  return true;
});*/


/*Плавная прокрутка страницы наверх (в течение 0.6s) при нажатии на кнопку с классом .button (кнопка "Наверх").*/

/*$(".button").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
});*/


/*Добавление атрибута target="_blank" ссылкам, у которых есть атрибут rel="external".

Это практическая задача, цель которой сделать возможность открытия ссылок в новом окне, а также сохранения валидности кода, 
поскольку атрибут target не поддерживается в XHTML и HTML5.*/

/*$("a[rel='external']").attr("target", "_blank");*/


/*Добавление к выборке элементов класса при помощи метода addClass()*/

/*var text = $("p").addClass("border");*/


/*Определяем текущий размер шрифта абзаца (числовое значение).
При клике на ссылку "Крупнее" размер шрифта увеличивается на 20%, при клике на ссылку "Мельче" размер шрифта уменьшается на 20%.*/

/*var fontSizeString = $("p").css("font-size");
var fontSizeNumber = "";

for (var i = 0; i < fontSizeString.length - 2; i++) {
  fontSizeNumber += fontSizeString[i];
}

fontSizeNumber = +fontSizeNumber;

$("#bigger").click(function() {
    $("p").css("font-size", function() {
      return fontSizeNumber * 1.2 + "px";
    });
});

$("#smaller").click(function() {
    $("p").css("font-size", function() {
      return fontSizeNumber * 0.8 + "px";
    });
});*/


/*При клике на кнопку "Добавить" содержимое текстового поля (выводится пользователем) добавляется как новый абзац в блок <div>,
цвет абзаца красный.*/

/*$("input[type='button']").click(function() {
  $("div").html("<p>" + $("input[type='text']").val() + "</p>").css("color", "red");
})*/


/*Копирование (клонирование) элемента <p> со всем его содержимым и добавление скопированного элемента в блоки <div>*/

/*var text = $("p").clone();
$("div").html(text);*/


/*Добавление текста в начало и в конец существующих в документе абзацев*/

/*$("p").prepend("Здравствуйте!<br>");
$("p").append("<br><i> С Уважением, Автор!</i>");*/


/*При клике по ссылке "Удалить" удаляется сама ссылка и изображение над ней.
Обработчик события click() вешаем на все ссылки, на какую конкретно кликнули и какую нужно удалить определяем при помощи this.*/

/*$("a").click(function() {
  $(this).prev().remove();
  $(this).remove();
})*/


