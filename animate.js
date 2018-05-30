function moveObj() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
           //clearInterval(id);
           pos--;
           elem.style.bottom = pos - 'px';
           elem.style.right = pos - 'px';
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px'; 
        }
    }
  }
