let btn_comenzar = document.getElementById('btn-comenzar')
let btn_start = document.getElementById('btn-start')
let btn_stop = document.getElementById('btn-stop')
let btn_subirGifo = document.getElementById('btn-subir-gif')
let btn_conteo_1 = document.getElementById('btn-conteo-1')
let btn_conteo_2 = document.getElementById('btn-conteo-2')
let btn_conteo_3 = document.getElementById('btn-conteo-3')
let menu_1 = document.getElementsByClassName('menu-1')
let menu_2 = document.getElementsByClassName('menu-2')
let displayCronom = document.getElementById('tiempoGif')
let apiKey = 'AuYmopLfYzaoGcfeZOjrDllHgzV1ZhSQ' // API key personal
let form = new FormData(); // formato para subir a gify 
let urlGif = ''
let cronometro
let recorder

displayCronom.textContent = ''

// https://giphy.com/channel/nicolas_ar96

const ocultarH1 = (menu) => {
    for (let item of menu) {
        item.style = 'display: none'
    }
}

const Iniciotempor = () => {
    let con_seg = 0
    let con_min = 0
    let con_hor = 0

    cronometro = setInterval(() => {
        let seg = 0
        let min = 0
        let hor = 0

        if (con_seg == 60) {
            con_min++
            con_seg = 0

            if (con_min == 60) {
                con_min = 0
                con_hor++
            }
        }

        if (con_seg < 10) { seg = '0' + con_seg } else { seg = con_seg }
        if (con_min < 10) { min = '0' + con_min } else { min = con_min }
        if (con_hor < 10) { hor = '0' + con_hor } else { hor = con_hor }

        displayCronom.textContent = `${hor}:${min}:${seg}`
        con_seg++
    }, 1000)
}

const finTempor = () => {
    clearInterval(cronometro)
    console.log('cronometro stop')
}


const descargarGif = (idGif) => {
    const endPoint = 'https://api.giphy.com/v1/gifs/'
    const peticion = endPoint + idGif + '?' + 'api_key=' + apiKey

    fetch(peticion)
        .then(response => response.json())
        .then(data => {
            let urlGif = data.data.images.original.url
            // console.log(urlGif)

            if (!localStorage.getItem('misGifos')) {
                let misGifos = []// almacena URLs gifos guardados 
                misGifos.push(urlGif)
                localStorage.setItem('misGifos', JSON.stringify(misGifos))
                console.log('no hay gifs que mostrar')
            } else {
                let vectorGifs = JSON.parse(localStorage.getItem('misGifos'))
                vectorGifs.push(urlGif)
                localStorage.setItem('misGifos', JSON.stringify(vectorGifs))
            }
        })
        .catch(err => console.log('no funciona', err))
}

const subirGif = () => {
    let divVideo = document.querySelector('.divVideo') // maquetado hover gif
    let divHoverCrear = document.createElement('div')
    divHoverCrear.className = 'hoverCrearGif'
    btn_conteo_2.style = 'background-color: white; color : #572EE5'
    btn_conteo_3.style = 'background-color: #572EE5; color : white'
    displayCronom.innerHTML = ''

    divVideo.insertAdjacentElement('beforeend', divHoverCrear)
    divHoverCrear.innerHTML = `
        <img class = 'img-subir-gifo' src = "../assets/loader.svg" alt = "cargando"></img>
        <div class = 'div-subir-gifo'> Estamos subiendo tu GIFO</div> `

    fetch(`https://upload.giphy.com/v1/gifs`, {
        method: 'POST',
        body: form,
    })
        .then(response => {
            return response.json();
        })
        .then(objeto => {
            let gifID = objeto.data.id;
            let video = document.getElementById('video')
            let gifSave = document.getElementById('gifSave')
            let divSubirGif = document.getElementsByClassName('div-subir-gifo')
            let imgSubirGif = document.getElementsByClassName('img-subir-gifo')

            descargarGif(gifID)

            console.log('Gif descargado')

            setTimeout(() => {
                btn_subirGifo.style = 'display: none'
                btn_comenzar.style = 'display: inline'
                gifSave.style = 'display: none'
                video.style = 'display: inline'
                divHoverCrear.style = 'display: none'
                btn_conteo_1.style = 'background-color: white; color : #572EE5'
                btn_conteo_2.style = 'background-color: white; color : #572EE5'
                btn_conteo_3.style = 'background-color: white; color : #572EE5'

            }, 3000)

            divSubirGif[0].textContent = 'GIFO subido con éxito'
            imgSubirGif[0].src = '../assets/check.svg'
            recorder = 0
            form = new FormData()

        })
        .catch(err => console.log('error al subir gifo', err))
}

btn_comenzar.addEventListener('click', () => {

    ocultarH1(menu_1)
    document.querySelector('.cuadro-busqueda').innerHTML = `
        <h1 class="text-1 menu-2">¿Nos das acceso</h1>
        <h1 class="text-1 menu-2"> a tu cámara?</h1>
        <h1 class="text-2 menu-2">El acceso a tu cámara será válido sólo</h1>
        <h1 class="text-2 menu-2">por el tiempo en el que estés creando el GIFO</h1>
    `

    btn_comenzar.style = 'display: none'
    btn_conteo_1.style = 'background-color: #572EE5; color : white'

    navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 480, height: 320 } })
        .then(function (stream) {

            ocultarH1(menu_2)
            document.querySelector('.cuadro-busqueda').innerHTML = `
                <div class = 'divVideo'>
                    <video id = "video" class = "video" ></video>
                    <br>
                    <img id = "gifSave" class = "video" alt = "gifSave"></img>
                </div>
            `
            let video = document.getElementById('video')
            let gifSave = document.getElementById('gifSave')

            video.srcObject = stream
            gifSave.style = 'display: none'

            video.onloadedmetadata = function (e) {
                video.play(); // habilita la img de video en pantalla
            };

            btn_start.style = 'display: inline'
            btn_conteo_1.style = 'background-color: white; color : #572EE5'
            btn_conteo_2.style = 'background-color: #572EE5; color : white'

            // -----------------------------------------inicio grabar video----------------------------------
            recorder = new RecordRTCPromisesHandler(stream, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 480,
                hidden: 240,
                onGifRecordingStarted: function () {
                    console.log('started')
                },
            });


            // // -----------------------------------------fin grabar video-------------------------------------------- 

        })
        .catch(function (err) { console.log(err.name + ": " + err.message); });

})


btn_start.addEventListener('click', (ev) => {

    recorder.startRecording()
    displayCronom.style = 'color: #572EE5'

    Iniciotempor()
    btn_start.style = 'display: none'
    btn_stop.style = 'display: inline'
})

btn_stop.addEventListener('click', (ev) => {
    finTempor()

    // console.log('fin temporizador')
    displayCronom.textContent = 'REPETIR CAPTURA'
    displayCronom.style = 'text-decoration: underline; text-decoration-color:aqua; cursor: pointer'

    displayCronom.addEventListener('click', () => {
        recorder = 0

        btn_subirGifo.style = 'display: none'
        btn_comenzar.style = 'display: inline'
        gifSave.style = 'display: none'
        video.style = 'display: inline'

        // divHoverCrear.style = 'display: none'
        btn_conteo_1.style = 'background-color: white; color : #572EE5'
        btn_conteo_2.style = 'background-color: white; color : #572EE5'
        btn_conteo_3.style = 'background-color: white; color : #572EE5'
        displayCronom.textContent = ''
    })

    recorder.stopRecording()
        .then(() => {
            recorder.getBlob()
                .then((blob) => {
                    form.append('file', blob, 'myGif.gif')
                    form.append('api_key', apiKey)
                    urlGif = window.URL.createObjectURL(blob)

                    gifSave.src = urlGif // mostrar gif grabado 
                    video.style = 'display : none'
                    gifSave.style = 'display : inline'
                    recorder = 0
                    blob = 0

                })
                .catch('error')
        })

    btn_stop.style = 'display: none'
    btn_subirGifo.style = 'display: inline'
})

btn_subirGifo.addEventListener('click', () => {
    subirGif()
})