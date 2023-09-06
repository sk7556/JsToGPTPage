function scrollToTarget(Id) {
    const targetElement = document.getElementById(Id);
    const rect = targetElement.getBoundingClientRect();
    const offsetTop = window.pageYOffset + rect.top - 270;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}
// 페이지 초기화에 사용 
scrollToTarget('mapField');