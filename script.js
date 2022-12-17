/* Получаем классы */
var prev = document.querySelector('.sliderPrev');
var next = document.querySelector('.sliderNext');
var justSwitch1 = document.querySelectorAll('.justSwitch1');
var justSwitch2 = document.querySelectorAll('.justSwitch2');
var justSwitch3 = document.querySelectorAll('.justSwitch3');
var textOne = document.querySelectorAll('.text_one');
var textTwo = document.querySelectorAll('.text_two');
var textThree = document.querySelectorAll('.text_three');
var switchOne = document.querySelector('.switchOne');
var switchTwo = document.querySelector('.switchTwo');
var switchThree = document.querySelector('.switchThree');
var info1 = document.querySelector('.info1');
var info2 = document.querySelector('.info2');
var info3 = document.querySelector('.info3');
var creek = document.querySelector('.creek');
var hills = document.querySelector('.hills');
var south = document.querySelector('.south');
var imageChange = document.querySelector('.mainColumnRight');
var imageChangeAlternate = document.querySelector('.sliderImage')
var pointBg1 = document.querySelector('.pointBg1');
var pointBg2 = document.querySelector('.pointBg2');
var pointBg3 = document.querySelector('.pointBg3');
var switchText1 = document.querySelector('.switchText1');
var switchText2 = document.querySelector('.switchText2');
var switchText3 = document.querySelector('.switchText3');
var switchTextT1 = document.querySelector('.switchText11');
var switchTextT2 = document.querySelector('.switchText12');
var switchTextT3 = document.querySelector('.switchText13');
var tT1 = document.querySelector('.switchText111');
var tT2 = document.querySelector('.switchText112');
var tT3 = document.querySelector('.switchText113');
var mini_one = document.querySelector('.mini_one');
var mini_two = document.querySelector('.mini_two');
var mini_three = document.querySelector('.mini_three');

/* Объявляем переменную */
var itterationCount = 1;
/* Зацикливаем */
	function changeCount(){
		if (itterationCount < 1) {
			itterationCount = 3;
		}
		else if (itterationCount > 3) {
			itterationCount = 1;
		}
		else {
			itterationCount = itterationCount;
		}
		count();
	}
/* Меняем слайды, тексты, стили и т.д. */
function count(){
	if (itterationCount == 1) {
		mini_one.style = 'background: url("img/Ellipsefinal.png") center / cover no-repeat;';
		mini_two.style = 'background: url("img/Ellipse 1.png") center / cover no-repeat;';
		mini_three.style = 'background: url("img/Ellipse 1.png") center / cover no-repeat;';
		imageChange.style = 'background: url("img/creekHarbour.png") center / cover no-repeat;';
		imageChangeAlternate.style = 'background: url("img/rise.png") center / cover no-repeat;';
		switchText1.style = "display: inline;";
		switchText2.style = "display: none;";
		switchText3.style = "display: none;";
		switchTextT1.style = "display: inline;";
		switchTextT2.style = "display: none;";
		switchTextT3.style = "display: none;";
		tT1.style = "display: inline;";
		tT2.style = "display: none;";
		tT3.style = "display: none;";
		pointBg1.style = "opacity: 1;";
		pointBg2.style = "opacity: 0;";
		pointBg3.style = "opacity: 0;";
		creek.style.border = "1px solid rgba(0, 0, 0, 0.05)";
		creek.style.boxShadow = "0px 0px 14px 3px rgba(0, 0, 0, 0.03)";
		hills.style.border = "1px solid rgba(0, 0, 0, 0.0)";
		hills.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.0)";
		south.style.border = "1px solid rgba(0, 0, 0, 0.0)";
		south.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.0)";
		info1.style = "background: rgba(255,255,255,1);";
		info2.style = "background: rgba(255,255,255,0);";
		info3.style = "background: rgba(255,255,255,0);";
		textOne.forEach((item)=>{
      	item.classList.add('_active');
  		});
  		textTwo.forEach((item)=>{
      	item.classList.remove('_active');
  		});
  		textThree.forEach((item)=>{
      	item.classList.remove('_active');
  		});
  		justSwitch1.forEach((item)=>{
      	item.style = "display: inline;";
  		});
  		justSwitch2.forEach((item)=>{
      	item.style = "display: none;";
  		});
  		justSwitch3.forEach((item)=>{
      	item.style = "display: none;";
  		});
	}
	else if (itterationCount == 2) {
		mini_one.style = 'background: url("img/Ellipse 1.png") center / cover no-repeat;';
		mini_two.style = 'background: url("img/Ellipsefinal.png") center / cover no-repeat;';
		mini_three.style = 'background: url("img/Ellipse 1.png") center / cover no-repeat;';
		imageChange.style = 'background: url("img/hillsEstate.png") center / cover no-repeat;';
		imageChangeAlternate.style = 'background: url("img/park.png") center / cover no-repeat;';
		switchText1.style = "display: none;";
		switchText2.style = "display: inline;";
		switchText3.style = "display: none;";
		switchTextT1.style = "display: none;";
		switchTextT2.style = "display: inline;";
		switchTextT3.style = "display: none;";
		tT1.style = "display: none;";
		tT2.style = "display: inline;";
		tT3.style = "display: none;";
		pointBg1.style = "opacity: 0;";
		pointBg2.style = "opacity: 1;";
		pointBg3.style = "opacity: 0;";
		creek.style.border = "1px solid rgba(0, 0, 0, 0.0)";
		creek.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.0)";
		hills.style.border = "1px solid rgba(0, 0, 0, 0.05)";
		hills.style.boxShadow = "0px 0px 14px 3px rgba(0, 0, 0, 0.03)";
		south.style.border = "1px solid rgba(0, 0, 0, 0.0)";
		south.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.0)";
		info1.style = "background: rgba(255,255,255,0);";
		info2.style = "background: rgba(255,255,255,1);";
		info3.style = "background: rgba(255,255,255,0);";
		textOne.forEach((item)=>{
      	item.classList.remove('_active');
  		});
  		textTwo.forEach((item)=>{
      	item.classList.add('_active');
  		});
  		textThree.forEach((item)=>{
      	item.classList.remove('_active');
  		});
  		justSwitch1.forEach((item)=>{
      	item.style = "display: none;";
  		});
  		justSwitch2.forEach((item)=>{
      	item.style = "display: inline;";
  		});
  		justSwitch3.forEach((item)=>{
      	item.style = "display: none;";
  		});
	}
	else if (itterationCount == 3) {
		mini_one.style = 'background: url("img/Ellipse 1.png") center / cover no-repeat;';
		mini_two.style = 'background: url("img/Ellipse 1.png") center / cover no-repeat;';
		mini_three.style = 'background: url("img/Ellipsefinal.png") center / cover no-repeat;';
		imageChange.style = 'background: url("img/emaarSouth.png") center / cover no-repeat;';
		imageChangeAlternate.style = 'background: url("img/urbana.png") center / cover no-repeat;';
		switchText1.style = "display: none;";
		switchText2.style = "display: none;";
		switchText3.style = "display: inline;";	
		switchTextT1.style = "display: none;";
		switchTextT2.style = "display: none;";
		switchTextT3.style = "display: inline;";
		tT1.style = "display: none;";
		tT2.style = "display: none;";
		tT3.style = "display: inline;";
		pointBg1.style = "opacity: 0;";
		pointBg2.style = "opacity: 0;";
		pointBg3.style = "opacity: 1;";
		creek.style.border = "1px solid rgba(0, 0, 0, 0.0)";
		creek.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.0)";
		hills.style.border = "1px solid rgba(0, 0, 0, 0.0)";
		hills.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.0)";
		south.style.border = "1px solid rgba(0, 0, 0, 0.05)";
		south.style.boxShadow = "0px 0px 14px 3px rgba(0, 0, 0, 0.03)";
		info1.style = "background: rgba(255,255,255,0);";
		info2.style = "background: rgba(255,255,255,0);";
		info3.style = "background: rgba(255,255,255,1);";
		textOne.forEach((item)=>{
      	item.classList.remove('_active');
  		});
  		textTwo.forEach((item)=>{
      	item.classList.remove('_active');
  		});
  		textThree.forEach((item)=>{
      	item.classList.add('_active');
  		});
  		justSwitch1.forEach((item)=>{
      	item.style = "display: none;";
  		});
  		justSwitch2.forEach((item)=>{
      	item.style = "display: none;";
  		});
  		justSwitch3.forEach((item)=>{
      	item.style = "display: inline;";
  		});
	}
}
/* Задаем функции переключения вперед - назад */
function previousSlide(){
	itterationCount = itterationCount -1;
	changeCount();
}	
function nextSlide(){
	itterationCount = itterationCount +1;
	changeCount();
}
/* Вешаем обработчики */
prev.addEventListener('click', function () {
	previousSlide();
}
);
next.addEventListener('click', function () {
	nextSlide();
}
);
switchOne.addEventListener('click', function () {
	itterationCount = 1;
	changeCount();
}
);
switchTwo.addEventListener('click', function () {
	itterationCount = 2;
	changeCount();
}
);
switchThree.addEventListener('click', function () {
	itterationCount = 3;
	changeCount();
}
);
textOne.forEach((item)=>{
item.addEventListener('click', function () {
	itterationCount = 1;
	changeCount();
}
);
 });
textTwo.forEach((item)=>{
item.addEventListener('click', function () {
	itterationCount = 2;
	changeCount();
}
);
 });
textThree.forEach((item)=>{
item.addEventListener('click', function () {
	itterationCount = 3;
	changeCount();
}
);
 });
/* Пускаем магию в дело */
count();