// localstorage 에서 { 검색결과 n가지, history 이력 가져오기 }
const cityName = localStorage.getItem('city');  // 
const numberOfDays = localStorage.getItem('days');
const city = cityName;
// LocalStorage의 도시가 있다면 이걸로 구글맵 핀 5개 + 각각 사진 3개 ( API )
const cityPlace1 = localStorage.getItem('cityPlace' + cityName + 0); // cityPlace도시이름1
const cityPlace2 = localStorage.getItem('cityPlace' + cityName + 1);
const cityPlace3 = localStorage.getItem('cityPlace' + cityName + 2);
const cityPlace4 = localStorage.getItem('cityPlace' + cityName + 3);
const cityPlace5 = localStorage.getItem('cityPlace' + cityName + 4);
const cityPlaceArr = [cityPlace1, cityPlace2, cityPlace3, cityPlace4, cityPlace5]
const placeNumArr = ['place1', 'place2', 'place3', 'place4', 'place5'];

const topCity = document.getElementsByClassName('city');
topCity[0].textContent = cityName + "  / ";
const topDay = document.getElementsByClassName('days');
topDay[0].textContent = numberOfDays + "일 여행";
const cityContentName = document.getElementsByClassName('cityName');
cityContentName[0].textContent = cityName;

// placeButton
function placeToClass() {
    const placeButton = document.getElementsByClassName('placeButton');
    const ul = document.getElementsByClassName('placeList');
    for (i = 0; i < numberOfDays; i++) {
        let li = document.createElement('li');
        li.className = 'cityList';
        ul[0].appendChild(li)

    }
    const cityContentList = document.getElementsByClassName('cityList');

    for (i = 0; i < numberOfDays; i++) {
        placeButton[i].textContent = cityPlaceArr[i].slice(0, 1);
        placeButton[i].style.display = 'block';
        placeButton[i].title = cityPlaceArr[i];
        cityContentList[i].textContent = cityPlaceArr[i];

    }
}
placeToClass();

// cardCommet 메세지 담기
for (i = 0; i < numberOfDays * 3; i++) {
    const cardComment = document.getElementsByClassName('cardComment');
    const placeCard = document.getElementsByClassName('placeCard');
    cardComment[i].textContent = cityPlaceArr[i / 3];

    if (i % 3 == 1 || i % 3 == 2) {
        placeCard[i].style.display = 'none';
    }
}
