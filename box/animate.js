function moveObj() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
           clearInterval(id);
           pos--;
           elem.style.bottom = pos - 'px';
           elem.style.right = pos - 'px';
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px'; 
        }
    }
  };

//Function to move the second Canvas element
function Moves() {
    var elem2 = document.getElementById("animate2");
    var pos = 250;
    var id = setInterval(frame, 10);
    function rFrame() {
        if (pos == 0){
            clearInterval(id);
        }else{ 
            pos++;
            elem.style.top = pos + 'px';
            elem.style.right = pos + 'px';
        }
        }
    }

