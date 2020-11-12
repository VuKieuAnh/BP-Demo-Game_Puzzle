function changeImg(e) {
    let idOfElement = e.getAttribute("id");
    //Lấy random 1 - 3
    let nameImg = Math.floor(Math.random()*3 +1);
    // lấy đường dẫn ảnh
    let partImg = "a"+ nameImg+"/a"+ nameImg + "_"+ idOfElement+".jpeg";
    // gán lại đường dẫn
    e.setAttribute("src", partImg);
    checkWin();
}
function checkWin() {
    let p1 = document.getElementById("p1").getAttribute("src").substr(0, 2);
    let p2 = document.getElementById("p2").getAttribute("src").substr(0, 2);
    let p3 = document.getElementById("p3").getAttribute("src").substr(0, 2);
    if (p1==p2 && p2==p3) alert("Thắng rồi");

}
