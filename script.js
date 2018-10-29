var c = $("#myCanvas");
	var ctx = c.getContext("2d");
	var x = 0;
	var y = 0;
	var random;
	for (var i = 0; i < 1000000; i++) {
		ctx.fillStyle="00FF00";
		ctx.fillRect(30 * x + 300, 600 - 30 * y, 1, 1);
		random = Math.random();
		if (random <= 0.01) {
			x = 0;
			y = 0.16 * y;
		} else if (random <= 0.85) {
			x = 0.85 * x + 0.14 * y;
			y = -0.04 * x + 0.85 * y + 1.6;
		} else if (random <= 0.92) {
			x = 0.2 * x - 0.26 * y;
			y = 0.23 * x + 0.22 * y + 1.6;
		} else {
			x = -0.15 * x + 0.28 * y;
			y = 0.26 * x + 0.24 * y + 0.44;
		}
	} 
