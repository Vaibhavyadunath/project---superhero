canvas = document.getElementById("myCanvas");
var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "";
function player_update()
{
    fabric.Image.fromURL("avenger_bg.jpg",function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set ({
         top:player_y,
         left:player_x       
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == '65')
    {
        console.log("a and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if (keyPressed == '70')
{
    new_image('ironman_face.png');
    console.log("f")
}

    if (keyPressed == '66')
    {
        new_image('ironman_body.png');
        console.log("b");
    }
    if (keyPressed == '76')
    {
        new_image('ironman_legs.png');
        console.log("l");
    }
    if (keyPressed == '72')
    {
        new_image('ironman_left_hand.png');
        console.log("h");
    }
    if (keyPressed == '82')
    {
        new_image('ironman_right_hand.png');
        console.log("r");
    }
    if (keyPressed == '79'){
        new_image('hulk_face.png');
        console.log("o");
    }                   
    if (keyPressed == '66')
    {
        new_image('hulk_left_hand.png');
        console.log("b")
    }
    if (keyPressed == '67')
    {
        new_image('hulk_right_hand.png');
        console.log("c");
    }
    if (keyPressed == '68')
    {
        new_image('hulk_legs.png');
        console.log("d")
    }
    if (keyPressed == '69')
    {
        new_image('hulkd_body.png');
        console.log("e")
    }
    if (keyPressed == '85'){
        new_image('spiderman_face.png');
        console.log("u");
    }
    if (keyPressed == '86')
    {
        new_image('spiderman_left_hand.png');
        console.log("v")
    }
    if (keyPressed == '87')
    {
        new_image('spiderman_right_hand.png');
        console.log("w");
    }
    if (keyPressed == '88')
    {
        new_image('spiderman_legs.png');
        console.log("x")
    }
    if (keyPressed == '89')
    {
        new_image('spiderman_body.png');
        console.log("y")
    }
}
//fblh//