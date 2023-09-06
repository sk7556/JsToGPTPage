

function checkInput(event) {
    const checkCity = document.querySelector(".city");
    const checkDays = document.querySelector(".numberOfDays");
    console.log('check');
    console.log(evnet)
    if (checkCity === '') {
        alert("여행하고 싶은 도시 이름을 입력해주세요! ");
        event.preventDefault();
        console.log(1)
    }

    if (checkDays === '') {
        alert("여행 목표일수를 적어주세요! ");
        event.preventDefault();
        console.log(1)
    }
}
