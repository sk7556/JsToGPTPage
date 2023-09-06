// 로딩화면 함수
function loadingScreen(){
    if ( $loadingScreen.style.display != 'none' ) {
        $loadingScreen.style.display = 'block';
        $loadingAlert.style.display = 'block';
    }
    setInterval(plusDots, 500);
}
let dotsCount = 0;

// loading의 ... 을 추가하는 함수
function plusDots(){
    const dots = document.querySelector('#loadText');
    
    if (dotsCount < 5){
        dots.textContent += '.';
        dotsCount++;
    } else {
        dots.textContent = '';
        dotsCount = 0;
    }
}

// 다음 페이지로 넘어가는 함수
function moveNextpage(){
    if( localStorage.getItem($cityData) != ''){
        setTimeout(moveMainpage, 5000);
        
                      
    }
}

function moveMainpage(){
    $loadingScreen.style.display = 'none'; 
    window.location.href = "main.html";
    
}