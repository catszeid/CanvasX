/*****
 * Author: Keith Maitland
 * Version 1.3
*****/

/**
 * CanvasX(id)
 * Purpose: set up a CanvasX object
 * Input: id - id of a canvas
 * Output: None
 */
function CanvasX(id) {
	var self = { };
	self.canvas = document.getElementById(id);
	self.ctx = canvas.getContext("2d");

	// Circles

	/**
	 * drawCircle(x,y,radius)
	 * Purpose: Draw a circle onto the canvas at the specified location with given radius
	 * Input: x - x position of center of circle
	 * 		  y - y position of center of circle
	 * 		  radius - radius of the circle
	 * Output: Circle on canvas
	 */
	self.drawCircle = function (x,y,radius) {
		self.ctx.beginPath();
		self.ctx.arc(x,y,radius,0,2*Math.PI);
		self.ctx.closePath();
		self.ctx.stroke();
	}
	 
	 /**
	 * fillCircle(x,y,radius)
	 * Purpose: Draw a circle onto the canvas at the specified location with given radius
	 * Input: x - x position of center of circle
	 * 		  y - y position of center of circle
	 * 		  radius - radius of the circle
	 * Output: Circle on canvas
	 */
	self.fillCircle = function (x,y,radius) {
		self.ctx.beginPath();
		self.ctx.arc(x,y,radius,0,2*Math.PI);
		self.ctx.closePath();
		self.ctx.stroke();
		self.ctx.fill();
	}

	// Polygons

	/**
	 * drawPolygon(vert)
	 * Purpose: Draw a polygon onto the canvas at the specified location
	 * Input: vert - array of points of all vertices
	 * Output: Polygon on canvas
	 */
	self.drawPolygon = function(vert) {
		if (vert.length > 1) {
			self.ctx.beginPath();
			self.ctx.moveTo(vert[0].x,vert[0].y);
			for(var i = 1; i < vert.length ; i++) {
				self.ctx.lineTo(vert[i].x,vert[i].y);
				self.ctx.stroke();
				self.ctx.beginPath();
				self.ctx.moveTo(vert[i].x,vert[i].y);
			}
			self.ctx.lineTo(vert[0].x,vert[0].y);
			self.ctx.closePath();
			self.ctx.stroke();
		}
		else {
			console.log("Not enough points for a polygon.");
		}
	}

	/**
	 * fillPolygon(vert)
	 * Purpose: Fill a polygon onto the canvas at the specified location
	 * Input: vert - array of points of all vertices
	 * Output: Polygon on canvas
	 */
	self.fillPolygon = function(vert) {
		if (vert.length > 1) {
			self.ctx.beginPath();
			self.ctx.moveTo(vert[0].x,vert[0].y);
			for(var i = 1; i < vert.length ; i++) {
				self.ctx.lineTo(vert[i].x,vert[i].y);
			}
			self.ctx.lineTo(vert[0].x,vert[0].y);
			self.ctx.closePath();
			self.ctx.fill();
		}
		else {
			console.log("Not enough points for a polygon.");
		}
	}

	// Rectangles

	/**
	 * drawRect(x,y,w,h)
	 * Purpose: Draw a rectangle
	 * Input: x - x position
	 * 		  y - y position
	 *		  w - width
	 * 		  h - height
	 * Output: Rectangle on canvas
	 */
	self.drawRect = function(x,y,w,h) {
		self.ctx.strokeRect(x,y,w,h);
	}

	/**
	 * fillRect(x,y,w,h)
	 * Purpose: Fill a rectangle
	 * Input: x - x position
	 * 		  y - y position
	 *		  w - width
	 * 		  h - height
	 * Output: Rectangle on canvas
	 */
	self.fillRect = function(x,y,w,h) {
		self.ctx.fillRect(x,y,w,h);
	}

	/**
	 * clearRect(x,y,w,h)
	 * Purpose: Clear a rectangle
	 * Input: x - x position
	 * 		  y - y position
	 *		  w - width
	 * 		  h - height
	 * Output: Rectangle on canvas
	 */
	self.clearRect = function(x,y,w,h) {
		self.ctx.clearRect(x,y,w,h);
	}

	// Arcs
	
	/**
	 * drawCurve(sx,sy,x1,y1,x2,y2,radius)
	 */
	
	/** 
	 * drawQuadratic(sx,sy,px,py,x1,y1)
	 * Purpose: Draw a quadratic curve
	 * Input: sx - start x position
	 *		  sy - start y position
	 *		  px - control point x position
	 *		  py - control point y position
	 *		  x1 - end point x position
	 *		  y1 - end point y position
	 * Output: Quadratic curve on canvas
	 */
	self.drawQuadratic(sx,sy,px,py,x1,y1) {
		self.ctx.beginPath();
		self.ctx.moveTo(sx,sy);
		self.ctx.quadraticCurveTo(px,py,x1,y1);
		self.ctx.stroke();
	}
	
	/** 
	 * fillQuadratic(sx,sy,px,py,x1,y1)
	 * Purpose: Fill a quadratic curve
	 * Input: sx - start x position
	 *		  sy - start y position
	 *		  px - control point x position
	 *		  py - control point y position
	 *		  x1 - end point x position
	 *		  y1 - end point y position
	 * Output: Quadratic curve on canvas
	 */
	self.fillQuadratic(sx,sy,px,py,x1,y1) {
		self.ctx.beginPath();
		self.ctx.moveTo(sx,sy);
		self.ctx.quadraticCurveTo(px,py,x1,y1);
		self.ctx.fill();
	}
	
	/** 
	 * drawCubic(sx,sy,px,py,x1,y1)
	 * Purpose: Draw a cubic curve
	 * Input: sx - start x position
	 *		  sy - start y position
	 *		  px1 - control point 1 x position
	 *		  py1 - control point 1 y position
	 *		  px2 - control point 2 x position
	 *		  py2 - control point 2 y position
	 *		  x1 - end point x position
	 *		  y1 - end point y position
	 * Output: Cubic curve on canvas
	 */
	self.drawCubic(sx,sy,px1,py1,px2,py2,x1,y1) {
		self.ctx.beginPath();
		self.ctx.moveTo(sx,sy);
		self.ctx.bezierCurveTo(px1,py1,px2,py2,x1,y1);
		self.ctx.stroke();
	}
	
	/** 
	 * fillCubic(sx,sy,px,py,x1,y1)
	 * Purpose: Fill a cubic curve
	 * Input: sx - start x position
	 *		  sy - start y position
	 *		  px1 - control point 1 x position
	 *		  py1 - control point 1 y position
	 *		  px2 - control point 2 x position
	 *		  py2 - control point 2 y position
	 *		  x1 - end point x position
	 *		  y1 - end point y position
	 * Output: Cubic curve on canvas
	 */
	self.fillCubic(sx,sy,px1,py1,px2,py2,x1,y1) {
		self.ctx.beginPath();
		self.ctx.moveTo(sx,sy);
		self.ctx.bezierCurveTo(px1,py1,px2,py2,x1,y1);
		self.ctx.fill();
	}
	
	// Line

	/**
	 * drawLine(x1,y1,x2,y2)
	 * Purpose: Draw a line
	 * Input: x1 - x position of first point
	 * 		  y1 - y position of first point
	 *		  x2 - x position of second point
	 *		  y2 - y position of second point
	 * Output: Line on canvas
	 */
	self.drawLine = function(x1,y1,x2,y2) {
		self.ctx.beginPath();
		self.ctx.moveTo(x1,y1);
		self.ctx.lineTo(x2,y2);
		self.ctx.closePath();
		self.ctx.stroke();
	}

	// Line styles

	/**
	 * lineCap(type)
	 * Purpose: Set or return the lineCap style
	 * Input: type - string of style
	 * Output: May return lineCap
	 * Note: implemetation of ctx.lineCap
	 */
	self.lineCap = function(type) {
		switch(type) {
			case "round":
				self.ctx.lineCap = "round";
				break;
			case "butt":
				self.ctx.lineCap = "butt";
				break;
			case "square":
				self.ctx.lineCap = "square";
				break;
			default:
				return self.ctx.lineCap;
		}
	}

	/**
	 * lineJoin(type)
	 * Purpose: Set or return the lineJoin style
	 * Input: type - string of style
	 * Output: May return lineJoin
	 * Note: implemetation of ctx.lineJoin
	 */
	self.lineJoin = function(type) {
		switch(type) {
			case "bevel":
				self.ctx.lineJoin = "bevel";
				break;
			case "round":
				self.ctx.lineJoin = "round";
				break;
			case "miter":
				self.ctx.lineJoin = "miter";
				break;
			default:
				return self.ctx.lineJoin;
		}
	}

	/**
	 * lineWidth(width)
	 * Purpose: Set or return the line width
	 * Input: width - number for width of lines
	 * Output: may return lineWidth
	 * Note: implementation of ctx.lineWidth
	 */
	self.lineWidth = function(width) {
		if (typeof width === "number") {
			self.ctx.lineWidth = width;
		}
		else {
			return self.ctx.lineWidth;
		}
	}

	/**
	 * miterLimit(length)
	 * Purpose: Set or return the miter length
	 * Input: length - number for maximum miter length
	 * Output: may return miterLength
	 * Note: implementation of ctx.miterLength
	 */
	self.miterLimit = function(length) {
		if (typeof width === "number") {
			self.ctx.miterLimit = length;
		}
		else {
			return self.ctx.miterLimit;
		}
	}

	// Transformations

	/**
	 * scale(sw,sh)
	 * Purpose: Scale a drawing bigger or smaller
	 * Input: sw - scale width
	 *		  sh - scale height
	 * Output: scaled drawing
	 */
	self.scale = function(sw,sh) {
		self.ctx.scale(sw,sh);
	}
	
	/**
	 * rotate(angle)
	 * Purpose: Rotate the drawing
	 * Input: angle - amount to rotate in radians
	 * Output: None
	 * Note: rad = degrees *Math.PI/180
	 */
	self.rotate = function(angle) {
		self.ctx.rotate(angle);
	}
	
	/**
	 * translate(x,y)
	 * Purpose: Set a new origin on the canvas
	 * Input: x - x position of new origin
	 *		  y - y position of new origin
	 * Output: None
	 */
	self.translate = function(x,y) {
		self.ctx.translate(x,y);
	}
	
	/**
	 * transform(a,b,c,d,e,f)
	 * Purpose: Scale, rotate, move, and skew context
	 * Input: a - Horizontal scaling
	 *		  b - Horizontal skewing
	 *		  c - Vertical skewing
	 *		  d - Vertical scaling
	 *		  e - Horizontal moving
	 *		  f - Vertical Moving
	 * Output: None
	 */
	self.transform = function(a,b,c,d,e,f) {
		self.ctx.transform(a,b,c,d,e,f);
	}
	
	/**
	 * setTransform(a,b,c,d,e,f)
	 * Purpose: Scale, rotate, move, and skew context
	 * Input: a - Horizontal scaling
	 *		  b - Horizontal skewing
	 *		  c - Vertical skewing
	 *		  d - Vertical scaling
	 *		  e - Horizontal moving
	 *		  f - Vertical Moving
	 * Output: None
	 */
	self.setTransform = function(a,b,c,d,e,f) {
		self.ctx.setTransform(a,b,c,d,e,f);
	}
	
	/**
	 * save()
	 * Purpose: Save the state of the current context
	 */
	self.save = function() {
		self.ctx.save();
	}
	
	/**
	 * restore()
	 * Purpose: Returns previously saved path state and attributes
	 */
	self.restore = function() {
		self.ctx.restore();
	}
	
	return self;
}

/**
 * Point(x,y)
 * Purpose: set up a CanvasX object
 * Input: x - x position
 *		  y - y position
 * Output: None
 * Note: Used to with drawing polgon verices
 */
function Point(x,y) {
	this.x = x || 0;
	this.y = y || 0;
}

/**
 * Point.toString()
 * Purpose: return the value of the point as a string
 * Input: None
 * Output: Coordinate string
 */
Point.prototype.toString = function() {
	return "("+this.x+","+this.y+")";
}