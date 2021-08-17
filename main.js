canvas = new fabric.Canvas('myCanvas')

block_img_width = 30;
block_img_height = 30;

playerX = 10;
playerY = 10;

player_object = ""
block_img_object = ""


function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img

        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top: playerY,
            left: playerX
        })
        canvas.add(player_object)
    })
}

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_img_object = Img

        block_img_object.scaleToWidth(block_img_width)
        block_img_object.scaleToHeight(block_img_height)
        block_img_object.set({
            top: playerY,
            left: playerX
        })
        canvas.add(block_img_object)
    })
}
window.addEventListener("keydown", mykeydown)

function mykeydown(e) {
    keypressed = e.keyCode
    if (e.shiftKey == true && keypressed == '80') {
        block_img_width = block_img_width + 10
        block_img_height = block_img_height + 10
        document.getElementById("current_width").innerHTML = block_img_width
        document.getElementById("current_height").innerHTML = block_img_height
    }

    if (e.shiftKey == true && keypressed == '77') {
        block_img_width = block_img_width - 10
        block_img_height = block_img_height - 10
        document.getElementById("current_width").innerHTML = block_img_width
        document.getElementById("current_height").innerHTML = block_img_height
    }
    if (keypressed == '37') {
        left()
    }

    if (keypressed == '38') {
        up()
    }

    if (keypressed == '39') {
        right()
    }

    if (keypressed == '40') {
        down()
    }

    if (keypressed == '87') {
        newImage("wall.jpg")
    }

    if (keypressed == '67') {
        newImage("cloud.jpg")
    }

    if (keypressed == '68') {
        newImage("dark_green.png")
    }

    if (keypressed == '71') {
        newImage("ground.png")
    }

    if (keypressed == '76') {
        newImage("light_green.png")
    }

    if (keypressed == '82') {
        newImage("roof.jpg")
    }

    if (keypressed == '84') {
        newImage("trunk.jpg")
    }

    if (keypressed == '85') {
        newImage("unique.png")
    }

    if (keypressed == '89') {
        newImage("yellow_wall.png")
    }
}

function left(){
    if(playerX>0){
        playerX=playerX-10;
        canvas.remove(player_object)
        player_update()
    }
}

function right(){
    if(playerX<750){
        playerX=playerX+10;
        canvas.remove(player_object)
        player_update()
    }
}

function up(){
    if(playerY>0){
        playerY=playerY-10;
        canvas.remove(player_object)
        player_update()
    }
}

function down(){
    if(playerY<550){
        playerY=playerY+10;
        canvas.remove(player_object)
        player_update()
    }
}

