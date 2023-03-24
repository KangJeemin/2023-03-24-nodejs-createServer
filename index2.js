const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=3017063000');
xhr.send();
xhr.addEventListener('load', function () {
  const a = JSON.parse(xhr.response);
  console.log(a)
})