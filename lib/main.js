lo = "- Work hard, Have Fun, No Drama!";

// celeri'yi dahil ediyoruz
var celeri = require('celeri');

// mysql'i dahil ediyoruz
var mysql = require('mysql');

// fonksiyon UZAKTAN ÇAĞIRILACAK ŞEKİLDE nasıl yazılır?
exports.insanyukle = function(){
	var i = 0;

	var interval = setInterval(function()
	{
	    celeri.progress('İnsanlık yükleniyor: ', i++);

	    if(i == 100) clearInterval(interval);
	}, 10);
}


//gizli fonksiyonlar nasıl yazılır
var birdur = function durbiraz(){
	var spinner = celeri.loading('Biraz duruluyor: ');

	setTimeout(function()
	{
	    spinner.done(true);//undefined = done, true = success, false = fail
	}, 1000);
}

//nasıl require edilen javascript dosyalarında kullanılır
module.exports.durunbiraz = birdur;