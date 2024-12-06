document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();

const username =document.getElementById('username').value;
const password = document.getElementById('password').value;

localStorage.setItem('username',username);
localStorage.setItem('password',password);

document.getElementById('message').innerText ="Login Succesfully!! You can refresh the page";
})

window.onload =function(){
    const storedUsername =localStorage.getItem('username');
    if(username==storedUsername){
        document.getElementById('message').innerText=`Welcome Back,${storedUsername}!`;
    }
}
