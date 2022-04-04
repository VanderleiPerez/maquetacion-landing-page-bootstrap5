//SOLUCIÓN DEL NAVBAR: CIERRE AUTOMÁTICO EN PANTALLA MOBILE
//Li: btb1
    const btb1 = document.getElementById('btb1');
    btb1.addEventListener('click', () => {
    const myCollapse = document.getElementById('navbarSupportedContent');
    const bsCollapse = new bootstrap.Collapse(myCollapse);
     bsCollapse.hide();
     console.log('Presionaste click');
    });
 //Li: btb2
 const btb2 = document.getElementById('btb2');
 btb2.addEventListener('click', () => {
const myCollapse = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(myCollapse);
 bsCollapse.hide();
 console.log('Presionaste click');
});
//Li: btb3
const btb3 = document.getElementById('btb3');
btb3.addEventListener('click', () => {
const myCollapse = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(myCollapse);
bsCollapse.hide();
console.log('Presionaste click');
});
//Li: btb4
const btb4 = document.getElementById('btb4');
btb4.addEventListener('click', () => {
const myCollapse = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(myCollapse);
bsCollapse.hide();
console.log('Presionaste click');
});
