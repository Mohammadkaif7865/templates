let x = 0;

function like() {
    x++;
    if (x % 2 == 0) {
        document.getElementById('like').style.color = "black";
    } else {
        document.getElementById('like').style.color = "red";
    }
    // document.getElementById('counts').innerHTML = `${x}`;
}