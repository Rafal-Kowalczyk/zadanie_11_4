function Phone(brand, price, color, model, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.model = model;
	this.camera = camera;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", model " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.cameraInfo = function() {
	console.log("The camera reolution is " + this.camera + ".");
}

var samsungGalaxyS6 = new Phone ("Samsung", 1850, "white", "Galaxy S6", "12 Mpx");
var iPhone6S = new Phone ("Apple", 2250, "silver", "iPhone 6S", "10 Mpx");
var onePlusOne = new Phone ("OnePlus", 1600, "black", "One", " 13 Mpx");

	iPhone6S.printInfo();
	iPhone6S.cameraInfo();

	samsungGalaxyS6.printInfo();
	samsungGalaxyS6.cameraInfo();

	onePlusOne.printInfo();
	onePlusOne.cameraInfo();