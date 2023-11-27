window.onload = function () {
    var s = Snap("#guitarDiv");
    Snap.load("..\Imgs\Guitar.svg", function(f) {
    //Add strings               
    string1 = f.select("#string1");
    string2 = f.select("#string2");
    string3 = f.select("#string3");
    string4 = f.select("#string4");
    string5 = f.select("#string5");
    string6 = f.select("#string6");
    //Add string hover boxes                    
    string1box = f.select("#string1box");
    string2box = f.select("#string2box");
    string3box = f.select("#string3box");
    string4box = f.select("#string4box");
    string5box = f.select("#string5box");
    string6box = f.select("#string6box");
    //Add audio tracks                   
    var audio1 = new Audio('audio/string1.mp3');
    var audio2 = new Audio('audio/string2.mp3');
    var audio3 = new Audio('audio/string3.mp3');
    var audio4 = new Audio('audio/string4.mp3');
    var audio5 = new Audio('audio/string5.mp3');
    var audio6 = new Audio('audio/string6.mp3');
    //All string box hover functions                    
    string1box.hover(function() {
        string1.animate({d: 'm -9.375,57.458333 c 214.42587,-15 420.27836,-13 620.83333,0'}, 200, mina.elastic);
        audio1.pause();
        audio1.currentTime = 0;
    },
        function(){
        string1.animate({d: 'm -9.375,57.458333 c 214.42587,0 420.27836,0 620.83333,0'}, 400, mina.elastic);
        audio1.play();
    }
    );
    string2box.hover(function() {
        string2.animate({d: 'm -9.375,96 c 214.42587,-15 420.27836,-13 620.83333,0'}, 200, mina.elastic);
        audio2.pause();
        audio2.currentTime = 0;
    },
                function() {
        string2.animate({d: 'm -9.375,96 c 214.42587,0 420.27836,0 620.83333,0'}, 400, mina.elastic);
        audio2.play();
    }
    );
    string3box.hover(function() {
        string3.animate({d: 'm -9.375,131.41666 c 214.42587,-15 420.27836,-13 620.83333,0'}, 200, mina.elastic);
        audio3.pause();
        audio3.currentTime = 0;
    },
                function() {
        string3.animate({d: 'm -9.375,131.41666 c 214.42587,0 420.27836,0 620.83333,0'}, 400, mina.elastic);
        audio3.play();
    }
    );
    string4box.hover(function() {
        string4.animate({d: 'm -9.375,166.83333 c 214.42587,-15 420.27836,-13 620.83333,0'}, 200, mina.elastic);
        audio4.pause();
        audio4.currentTime = 0;
    },
                function() {
        string4.animate({d: 'm -9.375,166.83333 c 214.42587,0 420.27836,0 620.83333,0'}, 400, mina.elastic);
        audio4.play();
    }
    );
    string5box.hover(function() {
        string5.animate({d: 'm -9.375,203.29166 c 214.42587,-15 420.27836,-13 620.83333,0'}, 200, mina.elastic);
        audio5.pause();
        audio5.currentTime = 0;
    },
                function() {
        string5.animate({d: 'm -9.375,203.29166 c 214.42587,0 420.27836,0 620.83333,0'}, 400, mina.elastic);
        audio5.play();
    }
    );
    string6box.hover(function() {
        string6.animate({d: 'm -9.375,240.79166 c 214.42587,-15 420.27836,-13 620.83333,0'}, 200, mina.elastic);
        audio6.pause();
        audio6.currentTime = 0;
    },
                function() {
        string6.animate({d: 'm -9.375,240.79166 c 214.42587,0 420.27836,0 620.83333,0'}, 400, mina.elastic);
        audio6.play();
    }
    );                            
s.append(f);
});		     
};