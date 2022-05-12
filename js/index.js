//변수
const hdrH2 =  document.querySelector('.hdrWrap header h2');
const hdrTexts = '안녕하세요. \n웹\u00A0퍼블리셔\u00A0이재성입니다.\u00A0\u00A0\u00A0\u00A0';
let hdrI = 0;
let txt = '';
const article = document.querySelectorAll('.content a');
//함수
function typing(){
    txt = hdrTexts[hdrI++];
    hdrH2.innerText += txt;
    if(hdrI > hdrTexts.length){
        hdrI = 0;
        hdrH2.innerText = '';
    }
}
//실행
setInterval(typing, 125);
//헤더 타이핑 애니메이션
article.forEach(art => art.addEventListener('mouseover', function(e){
    this.querySelector('.image').animate([{backgroundPositionY : '0%'},{backgroundPositionY : '100%'}], 3000);
}));
//컨텐츠 마우스오버 시 스크롤 애니메이션