// Contact 버튼 동작
const handleOnclick = () => {
  alert('발송 완료');
};

// 현재시간 타이머
const timer = document.getElementById('result');
setInterval(myWatch, 1000);

function myWatch() {
  const date = new Date();
  let time = date.toLocaleTimeString(); // 시간을 문자열로 변경해서 저장
  timer.textContent = time; // UI 출력
}
