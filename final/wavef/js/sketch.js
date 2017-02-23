var mic, fft;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
   createCanvas(windowWidth,200);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(0);

   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
}
   fill(255, 0, 208);
   endShape();
}



