function createArray(length) {
			var arr = new Array(length || 0),
				i = length;

			if (arguments.length > 1) {
				var args = Array.prototype.slice.call(arguments, 1);
				while(i--) arr[length-1 - i] = createArray.apply(this, args);
			}
    		return arr;
		}
	
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		var random;
		var cha;
		var list = [[],[]];
		var str;
		var str2;
		var extra = 0;
		for(var i=0;i<20;i++){
			if(i > 15) extra = 1;
			cha = String.fromCharCode(i/4+97+extra);
			str = "f" + ((i%4)+1) + cha + "V";
			str2 =  "f" + ((i%4)+1) + cha;
			list[0][i] = document.getElementById(str);
			list[1][i] = document.getElementById(str2);
		}
	draw();
	function draw(){
		var x = 0;
		var y = 0;
		var count  = 1;
		var v;
		for(var j=0;j<20;j++){
			if(j>15){
				v = 10.0;
			}
			else {
				v = 100.0;
			}
			list[0][j].innerHTML = list[1][j].value/v;
		}
		ctx.clearRect(0, 0, c.width, c.height);
		for (var i = 0; i < 10000; i++) {
			ctx.fillStyle="rgb(0,255,0)";
			ctx.fillRect(50 * x + 300, 600 - 50 * y, 1, 1);
			random = Math.random();
			if (random <= 0.01) {
				x = parseFloat(list[0][0].innerHTML) + parseFloat(list[0][4].innerHTML) * y;
				y = parseFloat(list[0][8].innerHTML) * x + parseFloat(list[0][12].innerHTML) * y + parseFloat(list[0][16].innerHTML);
			} else if (random <= 0.85) {
				x = parseFloat(list[0][1].innerHTML) * x + parseFloat(list[0][5].innerHTML) * y;
				y = parseFloat(list[0][9].innerHTML) * x + parseFloat(list[0][13].innerHTML) * y + parseFloat(list[0][17].innerHTML);
			} else if (random <= 0.92) {
				x = parseFloat(list[0][2].innerHTML) * x + parseFloat(list[0][6].innerHTML) * y;
				y = parseFloat(list[0][10].innerHTML) * x + parseFloat(list[0][14].innerHTML) * y + parseFloat(list[0][18].innerHTML);
			} else {
				x = parseFloat(list[0][3].innerHTML) * x + parseFloat(list[0][7].innerHTML) * y;
				y = parseFloat(list[0][11].innerHTML) * x + parseFloat(list[0][15].innerHTML) * y + parseFloat(list[0][19].innerHTML);
			}
		}
	} 