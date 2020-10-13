function unit3() {
    let num = +document.getElementById("int3").value;
    let text = "";
    let count = 0, countJ = 0;

    for (let i = num; i > 0; i--) {
        for (let j = i - 1; j > 0; j--) {
            text = text + "&nbsp;&nbsp;";
            // count=count+j;
            // alert("count    "+count);
        }
        for (let j = 1; j <= num + 1 - i; j++) {
            text = text + "*";
            // alert("j: "+j)
        }
        text = text + "<br>"
        // alert(count);
    }
    document.write(text);
}

function unit4() {
    let a = +prompt("lenght");
    let b = +prompt("hight");
    let text = "";
    for (let i = 1; i < b + 1; i++) {
        if (i == 1 || i == b) {
            for (let j = 1; j < a + 1; j++) {
                text = text + "*";
            }
        } else {
            text = text + "*";
            for (let j = 0; j < a - 2; j++) {
                text = text + "&nbsp;&nbsp"
            }
            text = text + "*";
        }
        text = text + "<br>";
    }
    document.write(text);
}

function unit5() {
    let money = +document.getElementById("money").value;
    let rate = +document.getElementById("Rate").value;
    let month = +document.getElementById("Month").value;
    for (let i = 1; i <= month; i++) {
        money = money + money * rate / 100;
    }
    document.getElementById("sumMoney").innerHTML = money + " USD";
}

function unit6() {
    let num = +document.getElementById("int6").value;
    let text = "";
    let count = 0, countJ = 0;

    for (let i = num; i > 0; i--) {
        for (let j = i - 1; j > 0; j--) {
            text = text + "&nbsp;";
            // count=count+j;
            // alert("count    "+count);
        }
        if (i <= num * 2 / 3) {
            for (let j = 1; j <= num + 1 - i; j++) {
                text = text + "*";
            }
            // alert("j: "+j)
        } else {

        }
        for (let j = 2 * i - 2; j > 0; j--) {
            text = text + "&nbsp;";
        }
        if (i <= num * 2 / 3) {
            for (let j = 1; j <= num + 1 - i; j++) {
                text = text + "*";
            }
        }else {
        }
        // alert("j: "+j)}
        text = text + "<br>";
        // alert(count);
    }
    // text=text+"&nbsp;"
    for (let i = num; i >= 0; i--) {
        for (let j = 0; j < 2 * (num - i); j++) {
            text = text + "&nbsp;";
        }
        for (let j = 1; j <= 2 * i; j++) {

            text = text + "*";
        }
        // text=text+"<br>"+"&nbsp;&nbsp;"
        text = text + "<br>";
        // for (let j = 0; j <num-2 ; j++) {
        //     text=text+"&nbsp;";
        // }
    }
    document.write(text);
}
