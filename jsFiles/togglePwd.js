const emailPass = document.getElementById('emailPwd');
const showMailPass = document.getElementById('showEmailPwd');
const confPass = document.getElementById('emailConfPwd');
const showConfPass = document.getElementById('showConfPwd');

showMailPass.addEventListener('click', () => {
(showMailPass.checked === true) ? emailPass.type = 'text' : emailPass.type ='password' })

showConfPass.addEventListener('click', () => {
  (showConfPass.checked === true) ? confPass.type = 'text' : confPass.type ='password' })