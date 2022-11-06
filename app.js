function login(){
    let active = document.getElementById('active').checked;
    let link = 'https://xhamsterlive.com/girls/vietnamese';
    let username = 'takinchecked';
    let password = 'Aloalo123';
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    if (active == true && user == username && pass == password){
        window.open(link)
    }
}