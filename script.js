const xhr = new XMLHttpRequest();
xhr.open("GET", "http://worldtimeapi.org/api/timezone")

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const objeto = JSON.parse(this.responseText)
        for (var i = 1; i <= 12; i++) {
            var al = Math.floor(Math.random() * objeto.length)
            var objetoal = objeto[al]
            al_cap(i, objetoal)
        }

    }
}

xhr.send()

function al_cap(i, objetoal) {
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://worldtimeapi.org/api/timezone/" + objetoal)
    xhr2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objeto2 = JSON.parse(this.responseText)
            var local = objeto2.timezone
            var datetime = objeto2.datetime.split('T')
            var hora = datetime[1].split('.')[0]
            var data = datetime[0]
            var fz = objeto2.utc_offset
            console.log(String(i))
            document.getElementById(String(i)).innerHTML += `<table><tr><td>${local}</td></tr>
                        <tr><td>${data + '<br>' + hora}</td></tr>
                        <tr> <td>${fz}</td></tr>
                        </table>`
        }

    }
    xhr2.send()
}