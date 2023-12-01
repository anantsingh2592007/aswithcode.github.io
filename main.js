const text = document.querySelector('textarea');

text.addEventListener('input', function (e) {
    var a = 0;
    window.localStorage.setItem('data', e.target.value);
    window.localStorage.setItem('userdevice', a);
    a++;
});

// var a = 5;
// this.addEventListener('load', function () {
//     if (a != 5) {
//         this.location.assign('http://127.0.0.1:5500/page.html');
//     }
// });