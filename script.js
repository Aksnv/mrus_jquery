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


/*В поля формы вводится ширина, высота и цвет фона блока.
При нажатии кнопки Добавить проводится валидация формы (все поля должны быть заполнены).
Если валидация прошла удачно, блок добавляется на страницу под формой.
Всего можно добавить не более 5 блоков (при добавлении 6-го выводится сообщение об ошибке и блок не добавляется).*/

/*$("input[type='button']").click(function() {

  if (validateForm()) {
    $(".error").remove();
    var block = $("<div></div>");
    var error = $("<p class='error'>Не может быть больше 5 блоков на странице!</p>");
    block.css("width", $("#width").val() + "");
    block.css("height", $("#height").val() + "");
    block.css("backgroundColor", $("#bgcolor").val());
    block.css("marginTop", "20px");
    error.css("color", "red");
    
    if ($("div").length >= 5) {
      $("form").append(error);
    } else {
      $("body").append(block);
    }  
  }
  
})

function validateForm() {
  var count = 0;
  for (var i = 0; i < $("input[type='text']").length; i++) {
    if (($("input[type='text']")[i].value == '') || ($("input[type='text']")[i].value == '#')) {
      count++;
    }
  }
  if (count > 0) {
    alert("Вы не заполнили все поля!");
    return false;
  }
  return true;
}*/


/*В предложенной форме пользователь отмечает нужные поля (radio, checkbox) и добавляет комментарий.
После нажатия кнопки Добавить, получаем данные из формы с помощью метода val() и выводим введенную пользователем информацию
в отдельном блоке на странице.*/

/*$("input[type='button']").click(function() {
  var gender = $("input[name='gender']:checked").val();
  var country = [];
  for (var i = 0; i < $("input[type='checkbox']:checked").length; i++) {
    country.push($("input[type='checkbox']:checked")[i].value);
  }
  var comment = $("textarea").val();

  $("form").after("<div></div>");
  $("div").css("float", "left");
  $("div").css("paddingLeft", "10px");
  $("div").css("paddingRight", "10px");
  $("div").css("backgroundColor", "#ddd");

  $("div").append("<p class='gender'><b>Ваш пол: </b></p>");
  if (gender == undefined) {
    $(".gender").append("Не выбран");
  } else {
    $(".gender").append(gender);
  }
  
  $("div").append("<p class='country'><b>Ваши любимые страны: </b></p>");
  if (country.length == 0) {
    $(".country").append("Не выбраны");
  } else {
    for (var i = 0; i < country.length; i++) {
      if (i == country.length - 1) {
        $(".country").append(country[i] + "");
      } else {
        $(".country").append(country[i] + ", ");
      }
    }
  }

  $("div").append("<p class='comment'><b>Ваш комментарий: </b></p>");
  if (comment == "") {
    $(".comment").append("Отсутствует");
  } else {
    $(".comment").append(comment);
  }
})*/


/*При первом клике по картинке ее ширина увеличивается до 300px, при повторном - картинка исчезает.*/

/*$("img").bind("click", resize);

function resize() {
  $(this).css("width", "300px");
  $(this).bind("click", dissapear);
}

function dissapear() {
  $(this).remove();
}*/


/*При двойном клике по абзацу с текстом, текст добавляется в конец содержимого текстового поля*/

/*$(document).ready(function() {
  $(document).on("dblclick", "p", function(event) {
    $("textarea").val($("textarea").val() + $(event.target).html());
  });
})*/


/*При клике по крестику блок с текстом плавно исчезает (анимация jQuery, метод hide()), 
потом удаляется из документа и выводится сообщение, что блок удален. 
Крестик сделан при помощи псевдоэлемента. Чтобы событие click срабатывало на псевдоэлементе, 
но не срабатывало на самом блоке с текстом для блока используется CSS свойство pointer-events: none;
а для псевдоэлемента pointer-events: all;*/

/*$(document).ready(function() {
  $("div").click(function() {
    $(this).hide(500, function() {
      $(this).remove();
      alert("Блок удален!");
    });
  });
});*/


/*При клике по крестику блок с текстом плавно исчезает (анимация jQuery, метод slideUp()), 
потом удаляется из документа и выводится сообщение, что блок удален. 
Крестик сделан при помощи псевдоэлемента. Чтобы событие click срабатывало на псевдоэлементе, 
но не срабатывало на самом блоке с текстом для блока используется CSS свойство pointer-events: none;
а для псевдоэлемента pointer-events: all;*/

/*$(document).ready(function() {
  $("div").click(function() {
    $(this).slideUp(500, function() {
      $(this).remove();
      alert("Блок удален!");
    });
  });
});*/


/*При наведении на картинку курсором мышки она плавно становится НЕ прозрачной, а при последующем клике по картинке
она плавно перемещается точно в центр окна браузера (по вертикали и горизонтали).
При этом независимо от порядка следования в html-коде, картинка по которой кликнули последней отображается по центру экрана
поверх других картинок.*/

/*$(document).ready(function() {
  var i = 0;

  $("img").hover(function() {
    
    $(this).animate(
      {
        opacity: "1"
      },
    1000);

    $(this).click(function(event) {
      var mLeft = window.innerWidth / 2 - 250;
      var mTop = window.innerHeight / 2 - 250;

      $(event.target).css("position", "absolute");

      $(event.target).animate(
      {
        width: "500px",
        marginLeft: mLeft,
        top: mTop
      },
      1000);

      $(event.target).css("z-index", ++i);
    });

  });

});*/
