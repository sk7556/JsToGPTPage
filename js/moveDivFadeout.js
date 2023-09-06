// nextArrow 버튼 fade 및 다음 페이지 이동 처리
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".placeCard");
    let nextArrows = document.querySelectorAll(".nextArrow");

    for (let i = 0; i < 15; i++) {
        nextArrows[i].addEventListener("click", function () {
            let temp = i;

            cards[temp].classList.remove("fade-in");
            cards[temp].classList.add("fade-out");
            cards[temp].style.display = "none";

            if (temp % 3 == 2) {
                temp = temp - 2;
                console.log('check' + temp);
                cards[temp].style.display = "block";
                cards[temp].classList.remove("fade-out");
                cards[temp].classList.add("fade-in");
            } else {
                cards[temp + 1].style.display = "block";
                cards[temp + 1].classList.remove("fade-out");
                cards[temp + 1].classList.add("fade-in");
            }
        });
    }
});