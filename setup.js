var upisPressed;
var downisPressed;
var leftisPressed;
var rightisPressed;

var upSetupVal= 38;
var downSetupVal= 40;
var leftSetupVal= 37;
var rightSetupVal= 39;

var keysDivClone;
function upUpdate(){
    upisPressed=false;
    addEventListener('keydown', function f(e) {
        if (e != undefined && !upisPressed){
            Key=e.key;
            document.getElementById('UpSetup').value=Key;
            upSetupVal=e.keyCode;
            upisPressed=true;
        }
    });
}

function downUpdate(){
    downisPressed=false;
    addEventListener('keydown', function f(e) {
        if (e != undefined && !downisPressed){
            Key=e.key;
            document.getElementById('DownSetup').value=Key;
            downSetupVal=e.keyCode;
            downisPressed=true;
        }
    });
}

function leftUpdate(){
    leftisPressed=false;
    addEventListener('keydown', function f(e) {
        if (e != undefined && !leftisPressed){
            Key=e.key;
            document.getElementById('LeftSetup').value=Key;
            leftSetupVal=e.keyCode;
            leftisPressed=true;
        }
    });
}

function rightUpdate(){
    rightisPressed=false;
    addEventListener('keydown', function f(e) {
        if (e != undefined && !rightisPressed){
            Key=e.key;
            document.getElementById('RightSetup').value=Key;
            rightSetupVal=e.keyCode;
            rightisPressed=true;
        }
    });
}

function startGameSetup(){
    var lunchGame=true;
    var balls = parseInt($('#ballsNum').val());
    var time = parseInt($('#timeNum').val());
    var ghostsNum = parseInt($('#monsterNum').val());

    $(".error").remove();
    //no blank field check.
    if($('#ballsNum').val().length<1){
        $('#ballsNum').after('<span class="error">This field is required</span>');
        lunchGame=false;
    }
    if($('#timeNum').val().length<1){
        $('#timeNum').after('<span class="error">This field is required</span>');
        lunchGame=false;
    }
    if($('#monsterNum').val().length<1){
        $('#monsterNum').after('<span class="error">This field is required</span>');
        lunchGame=false;
    }
    //range fits checks.
    if (balls < 50 | balls > 90) {
        $('#ballsNum').after('<span class="error">Enter 50-90 balls</span>');
        lunchGame=false;
    }
    if (time < 60) {
        $('#timeNum').after('<span class="error">Enter 60 or more seconds</span>');
        lunchGame=false;
    }
    if (ghostsNum < 1 | ghostsNum > 4) {
        $('#monsterNum').after('<span class="error">Enter 1-4 ghosts</span>');
        lunchGame=false;
    }
    //if all is set correctly start game.
    if (lunchGame){
        up=upSetupVal;
        down=downSetupVal;
        left=leftSetupVal;
        right=rightSetupVal;
        food_color_5p=$('#5p').val();
        food_color_15p=$('#15p').val();
        food_color_25p=$('#25p').val();
        game_time=time;
        food_remain=balls;
        num_of_ghosts=ghostsNum;
        handleSetupSide();
        ShowSection('gameScreen');
        Start();
    }
}

function handleSetupSide(){
    $("#ballsNumSide").value= $("#ballsNum").value;
    document.getElementById("#ballsNumSide").setAttribute("readonly", true);
}

function randomGameSetup(){
    //random keys
    $("#keysDiv").replaceWith(keysDivClone.clone());
    //random colors.
    var randColor1='#'+Math.floor(Math.random()*16777215).toString(16);
    var randColor2='#'+Math.floor(Math.random()*16777215).toString(16);
    var randColor3='#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('5p').value=randColor1;
    document.getElementById('15p').value=randColor2;
    document.getElementById('25p').value=randColor3;
    //random time.
    var randTime=randomInteger(60,500);
    document.getElementById('timeNum').value=randTime;
    //random balls.
    var randBalls = randomInteger(50,90);
    document.getElementById('ballsNum').value=randBalls;
    //random ghosts.
    var randGhosts = randomInteger(1,4);
    document.getElementById('monsterNum').value=randGhosts;
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}