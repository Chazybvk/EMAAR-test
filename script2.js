var popup3 = document.querySelector('.popup3');
var popup_content3 = document.querySelector('.popup_content3');
var popup_close3 = document.querySelector('.popup_close3');

function showPopUp(){

popup3.style.opacity = "1";
popup3.style.visibility = "visible";
popup3.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
popup_content3.style.opacity = "1";
popup_content3.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
};


function closePopUp(){
popup3.style.opacity = "0";
popup3.style.visibility = "hidden";
popup3.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
popup_content3.style.opacity = "0";
popup_content3.style.transform = "matrix(-1, 0, 0, 1, 0, 0)";	
};


popup_close3.addEventListener('click', function () {
	closePopUp();
}
);

setTimeout(() => showPopUp(), 30000);
