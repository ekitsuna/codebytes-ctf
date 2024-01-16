var objPeople = [
    {
        username : "SAKURAJIMA",
        password : "theprincessdog"
    },
    {
        username : "ADMINARTHUR",
        password : "PASSWORD"
    }
]
function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var n = 0; n < objPeople.length; n++) {
        if (username == objPeople[n].username && password == objPeople[n].password) {
            window.location.href = 'https://drive.google.com/file/d/17esaH8NsgATipUWSAOhJWoZRmGfDc7xB/view?usp=sharing'
            return
        }
    }
    console.log("WEOYVENMQE, 4")
}