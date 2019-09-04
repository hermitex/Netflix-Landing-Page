let paraOpen = document.querySelectorAll(".menu-icon");
//console.log(paraOpen);

let showpara = false;
let btn = document.querySelectorAll(".menu-icon")
btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (!showpara) {
            let currentbtn = e.target;
            let currentPara = currentbtn.parentElement.nextElementSibling;
            currentPara.classList.add("openPara");
            btn.classList.add("rotate");
            //
            showpara = true
        } else {
            let currentbtn = e.target;
            let currentPara = currentbtn.parentElement.nextElementSibling;
            currentPara.classList.remove("openPara");
            btn.classList.remove("rotate");
            //
            showpara = false;
        }


    });
});

;

let dates = document.querySelector(".grid1");
const showCountDown = setInterval(() => {
    let today = new Date();
    let month = today.getMonth() + 2;
    let date = today.getDate() - 1;

    function check(n) {

        return (parseInt(n, 10) < 10 ? "0" : " ") + n;
    }

    document.getElementById("date").innerHTML = `
	${check(date)}/${check(month)}`;


    document.getElementById("date1").innerHTML = `${check(date)}/${check(month + 1)}`;


}, (1000));
