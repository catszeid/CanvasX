window.onload = function() {
	var canvas = new CanvasX("canvas");
	canvas.rotate(10*Math.PI/180);
	var arr1 = new Array();
	arr1.push(new Point(100,100));
	arr1.push(new Point(100,200));
	arr1.push(new Point(200,200));
	canvas.drawPolygon(arr1);
	canvas.rotate(-10*Math.PI/180);
	canvas.save();
	var arr2 = new  Array();
	arr2.push(new Point(50,50));
	arr2.push(new Point(100,100));
	arr2.push(new Point(100,50));
	arr2.push(new Point(150,70));
	arr2.push(new Point(60,50));
	canvas.fillPolygon(arr2);
	canvas.drawPolygon(arr1);
	canvas.rotate(-10*Math.PI/180);
	canvas.drawPolygon(arr1);
	canvas.restore();
	var cx = new CanvasX("canvas");
	cx.drawRect(100,100,50,50);
}