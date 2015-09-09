var img = document.getElementsByTagName("img");
img2 = img[1];
img2.setAttribute("class", "hide");
img3 = img[2];
img3.setAttribute("class", "hide");
img4 = img[3];
img4.setAttribute("class", "hide");
img5 = img[4];
img5.setAttribute("class", "hide");
img6 = img[5];
img6.setAttribute("class", "hide");
img7 = img[6];
img7.setAttribute("class", "hide");
img8 = img[7];
img8.setAttribute("class", "hide");
img9 = img[8];
img9.setAttribute("class", "hide");
img10 = img[9];
img10.setAttribute("class", "hide");
img11 = img[10];
img11.setAttribute("class", "hide");

var words = document.getElementsByTagName("li");
cappucccino = words[0];
latte = words[1];
mocha = words[2];
breve = words[3];
americano = words[4];
scones = words[5];
muffins = words[6];
brownies = words[7];
chocolate = words[8];
strawberry = words[9];


cappucccino.onclick = function() {
    img2.removeAttribute("class");
};

latte.onclick = function() {
    img3.removeAttribute("class");
};
mocha.onclick = function() {
    img4.removeAttribute("class");
};
breve.onclick = function() {
    img5.removeAttribute("class");
};
americano.onclick = function() {
    img6.removeAttribute("class");
};
scones.onclick = function() {
    img7.removeAttribute("class");
};
muffins.onclick = function() {
    img8.removeAttribute("class");
};
brownies.onclick = function() {
    img9.removeAttribute("class");
};
chocolate.onclick = function() {
    img10.removeAttribute("class");
};
strawberry.onclick = function() {
    img11.removeAttribute("class");
};