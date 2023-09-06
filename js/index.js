const $goTravle = document.querySelector('#goTravle')
var $tempCity = ''
var $city = document.querySelector('.city');
var $numberOfDays = document.querySelector('.numberOfDays');
var $cityData = [];
const $loadingScreen = document.querySelector('.loadingScreen');
const $loadingAlert = document.querySelector('.loadingAlert');
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
const data = [];

// 이벤트 리스너 발동 시 json 작성 및 fetch 수행
$goTravle.addEventListener('click', e => {
    e.preventDefault()
    // 입력 값을 활용하여 질문 생성 
    const contents = $city.value;
    const numberOfDays = $numberOfDays.value;
    data.push({
        "role": "system",
        "content": "입력된 관광지의 추천장소" + numberOfDays + "군데 { cityPlace : 이름(영문) } Json형식으로 출력. 설명은 뺄 것. "
    })
    data.push({
        "role": "user",
        "content": contents
    })
    $tempCity = $city.value;
    // $city.value = ''
    // $numberOfDays.value = ''
    $cityDataName = 'cityData' + $city.value; // cityData도쿄
    chatGPTAPI();
    // for문으로 반복하여 JSON의 배열을 변수에 입력 
    // 변수 사용시 localStorage에 담은 후 사용하도록 변경  

    setInterval(moveNextpage, 2000);
    loadingScreen();
})

var $cityDataName = '';
var $responseChoice = '';
var $numberOfDaysLog = '';
var $cityLog = '';
var $cityDataOriginal = '';
var $cityPlaceNameLS = '';
function chatGPTAPI() {
    // 페치를 시작하면 바로 로딩스크린 출력

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
        .then(res => res.json())
        .then(res => {
            // 로컬 스토리지에 저장 ( city, numberOfDays )
            $responseChoice = `${res.choices[0].message.content}`;

            $numberOfDaysLog = 'numberOfDays' + $city.value;
            $cityLog = 'city' + $city.value;
            localStorage.setItem($cityDataName, $responseChoice); // Log 저장용
            localStorage.setItem($cityLog, $city.value); // Log저장용
            localStorage.setItem($numberOfDaysLog, $numberOfDays.value); // Log 저장용
            localStorage.setItem('city', $city.value); // Log저장용
            localStorage.setItem('days', $numberOfDays.value); // Log 저장용


            // 저장된 값을 파싱 
            // 문자열을 개별 JSON 문자열로 분리하여 배열로 변환

            $cityDataOriginal = localStorage.getItem($cityDataName);
            // 이걸로 넘어가서 지도를 만들고 메뉴를 만들고 하면됨 
            // $cityData = $cityDataOriginal.split('\n').map(item => JSON.parse(item)); // JsonStyle로 변경               
            $cityData = JSON.parse($cityDataOriginal);
            for (let i = 0; i < 5; i++) {
                const city = $city.value;
                var tempPlaceName = 'cityPlace' + city + i;
                var count = i + 1;
                localStorage.setItem(tempPlaceName, $cityData['cityPlace' + count]) // ex 변수명 cityPlace도쿄1, 시부야
            }
        })
}  