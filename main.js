var btnB1 = document.getElementById("btnB1");
btnB1.onclick = function () {
    var b1Songay = document.getElementById("b1Songay").value * 1;
    var luong1ngay = 100000;
    var luongnv = b1Songay * luong1ngay;
    var rsB1 = document.getElementById("rsB1");
    rsB1.innerHTML = luongnv + " VND";
}

var btnB2 = document.getElementById("btnB2");
btnB2.onclick = function () {
    var b2So1 = document.getElementById("b2So1").value * 1;
    var b2So2 = document.getElementById("b2So2").value * 1;
    var b2So3 = document.getElementById("b2So3").value * 1;
    var b2So4 = document.getElementById("b2So4").value * 1;
    var b2So5 = document.getElementById("b2So5").value * 1;
    var tong = b2So1 + b2So2 + b2So3 + b2So4 + b2So5;
    var tb = tong / 5;
    var rsB2 = document.getElementById("rsB2");
    rsB2.innerHTML = tb;
}

var btnB3 = document.getElementById("btnB3");
btnB3.onclick = function () {
    var b3Sotien = document.getElementById("b3Sotien").value * 1;
    rs = b3Sotien * 23500;
    var rsB3 = document.getElementById("rsB3");
    rsB3.innerHTML = new Intl.NumberFormat('vn-VN').format(rs) + " VND";
}

var btnB4 = document.getElementById("btnB4");
btnB4.onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    var chuVi = "chu vi là " + (chieuDai + chieuRong) * 2;
    var dienTich = "diện tích là " + chieuDai * chieuRong;

    var rsB4 = document.getElementById("rsB4");
    rsB4.innerHTML = chuVi + "<br/>" + dienTich;
}

var btnB5 = document.getElementById("btnB5");
btnB5.onclick = function () {
    var b5So = document.getElementById("b5So").value * 1;
    hangDv = b5So % 10;
    hangChuc = Math.floor(b5So / 10);
    var rsB5 = document.getElementById("rsB5");
    rsB5.innerHTML = hangDv + hangChuc;
}