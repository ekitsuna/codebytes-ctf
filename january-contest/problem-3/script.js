var objPeople = [
    {
        username : "SAKURAJIMA",
        password : "theprincessdog"
    },
]
function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var n = 0; n < objPeople.length; n++) {
        if (username == objPeople[n].username && password == objPeople[n].password) {
            window.location.href = 'https://codebytes.codes'
            return
        }
    }
    console.log("WEOYVENMQE, 4")
}