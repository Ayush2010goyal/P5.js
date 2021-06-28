function setup(){
    canvas=createCanvas(640 , 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    }
    
    function preload(){
    
    }
    
    function draw(){
        image(video , 180 , 100 , 300 , 300);
    
        fill('#FF0000');
        stroke('#FF0000');
        circle(50,50,60);
        circle(50,430,60);
        circle(580 ,50 ,60);
        circle(580,430,60);
    
        fill('#00FF00');
        stroke('#00FF00');
        rect( 80 , 32 , 470 , 30);
        rect( 80 , 415 , 470 , 30);
        rect( 35 , 70 , 30 , 330);
        rect( 566 , 70 , 30 , 330);
    
    }
    
    function take_snapshot(){
        save('screenshot.png');
    }
