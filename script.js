const cursor = document.getElementById("cursor");
const L = document.getElementById("BIG");
cursor.style.position = 'absolute';
function mousemove(event){
    cursor.style.left = event.pageX - 25 + 'px';
    cursor.style.top = event.pageY - 25 + 'px';
    console.log(
    "X: ", parseInt(cursor.style.left), 
    "Y", parseInt(cursor.style.top));

    let cursorX = parseInt(cursor.style.left);
    let cursorY = parseInt(cursor.style.top)
    // X < 540
    // X > 50
    // Y < 300
    // Y > 50
    
    
    if ((cursorX < 540 && cursorY > 50 && cursorX > 50 && cursorY < 300)){
        console.log("INTERSECTION DETECTED")
        L.style.visibility = 'visible';

    }
}

window.addEventListener('mousemove', mousemove);
