const imgHeader = document.querySelector('.img-header')
const txtLi = document.getElementsByClassName('txtLi') // nav - header 
const locacion = window.location.origin // puerto 

window.addEventListener('resize', () => {
    if (window.innerWidth < 760) {
        imgHeader.src = '../assets/logo-mobile.svg'
        imgHeader.className = 'logo'

        txtLi[0].textContent = 'Modo Nocturno'
        //txtLi[1].textContent = 'Favoritos'
        //txtLi[2].textContent = 'Mis gifos'
    } else {
        imgHeader.src = '../assets/logo-desktop.svg'
        imgHeader.className = 'img-header'
    }
});


//Modo nocturno-diurno mobile

if (screen.width < 769) {

    const nightMode = document.getElementById('mod-noc')
    const imgSearch = document.getElementById('icono-buscar')
    const logo = document.querySelector('.img-header')
    const txtMod = document.querySelector('.let-mod-noc')
    const iconFace = document.getElementById('icon-face')
    const iconTwit = document.getElementById('icon-twi')
    const iconInst = document.getElementById('icon-inst')

    logo.src = '/assets/logo-mobile.svg'

    const srcFace = '/assets/icon_facebook.svg'
    let srcHoverFace = '/assets/icon_facebook_hover.svg'
    const srcTwit = '/assets/icon-twitter.svg'
    let srcHoverTwit = '/assets/icon-twitter-hover.svg'
    const srcInst = '/assets/icon_instagram.svg'
    let srcHoverInst = '/assets/icon_instagram-hover.svg'

    iconFace.onmouseout = (() => iconFace.src = iconFace.src === srcFace ? srcHoverFace : srcFace)
    iconFace.onmouseover = (() => iconFace.src = iconFace.src === srcHoverFace ? srcFace : srcHoverFace)
    iconTwit.onmouseout = (() => iconTwit.src = iconTwit.src === srcTwit ? srcHoverTwit : srcTwit)
    iconTwit.onmouseover = (() => iconTwit.src = iconTwit.src === srcHoverTwit ? srcTwit : srcHoverTwit)
    iconInst.onmouseout = (() => iconInst.src = iconInst.src === srcInst ? srcHoverInst : srcInst)
    iconInst.onmouseover = (() => iconInst.src = iconInst.src === srcHoverInst ? srcInst : srcHoverInst)

    nightMode.addEventListener('click', () => {
        const body = document.querySelector('body')
        const bodyDark = body.classList.toggle('body-dark')

        if (body.classList.contains('body-dark')) {

            if (document.title === 'Main') {
                imgSearch.src = '/assets/icon-search-modo-noct.svg'
            }

            logo.src = '/assets/logo-mobile-modo-noct.svg'

            txtMod.textContent = txtMod.textContent === 'Modo Diurno' ? 'Modo Nocturno' : 'Modo Diurno'

            let srcHoverFace = '/assets/icon_facebook_noc.svg'
            let srcHoverTwit = '/assets/icon_twitter_noc.svg'
            let srcHoverInst = '/assets/icon_instagram_noc.svg'

            iconFace.onmouseout = (() => iconFace.src = iconFace.src === srcFace ? srcHoverFace : srcFace)
            iconFace.onmouseover = (() => iconFace.src = iconFace.src === srcHoverFace ? srcFace : srcHoverFace)
            iconTwit.onmouseout = (() => iconTwit.src = iconTwit.src === srcTwit ? srcHoverTwit : srcTwit)
            iconTwit.onmouseover = (() => iconTwit.src = iconTwit.src === srcHoverTwit ? srcTwit : srcHoverTwit)
            iconInst.onmouseout = (() => iconInst.src = iconInst.src === srcInst ? srcHoverInst : srcInst)
            iconInst.onmouseover = (() => iconInst.src = iconInst.src === srcHoverInst ? srcInst : srcHoverInst)
        } else {
            imgSearch.src = '/assets/icon-search.svg'
            logo.src = '/assets/logo-mobile.svg'

            txtMod.textContent = txtMod.textContent === 'Modo Diurno' ? 'Modo Nocturno' : 'Modo Diurno'

            iconFace.onmouseout = (() => iconFace.src = iconFace.src === srcFace ? srcHoverFace : srcFace)
            iconFace.onmouseover = (() => iconFace.src = iconFace.src === srcHoverFace ? srcFace : srcHoverFace)
            iconTwit.onmouseout = (() => iconTwit.src = iconTwit.src === srcTwit ? srcHoverTwit : srcTwit)
            iconTwit.onmouseover = (() => iconTwit.src = iconTwit.src === srcHoverTwit ? srcTwit : srcHoverTwit)
            iconInst.onmouseout = (() => iconInst.src = iconInst.src === srcInst ? srcHoverInst : srcInst)
            iconInst.onmouseover = (() => iconInst.src = iconInst.src === srcHoverInst ? srcInst : srcHoverInst)
        }
    })

    let urlsMobile = [] // almacena url de las imagenes 
    let nombresGifsMobile = [] // almacena nombres de gifs 
    let usuarioGifsMobile = [] // almacena los usuario de gifs
    let conteoGifsMobile = 0

    //API GIPHY
    const apiKey = '?api_key=JPJaSbeJ82DFNPDMrj6BS3MfDFcyg3tr'
    const endpoint = 'https://api.giphy.com/v1/gifs/'

    fetch(`${endpoint}trending${apiKey}&limit=15`)
        .then(response => response.json())
        .then(giphy => {

            for (gif of giphy.data) {
                const tendencias = document.querySelector('.tendencias')
                tendencias.insertAdjacentHTML('beforeend', `

            <div class="gif">
                <img class="img-gif-tend" id="img-gif-hover" src="${gif.images.original.url}" alt="${gif.username || 'undefined'}">
            </div>
            `)

                urlsMobile.push(gif.images.original.url)
                nombresGifsMobile.push(gif.title || 'undefined')
                usuarioGifsMobile.push(gif.username || 'undefined')
            }

            const expandirGifosMobile = () => {
                const expandirGifMobile = document.getElementsByClassName('img-gif-tend')
                const expandirGifoMobile = document.querySelector('.expandir')

                for (let j = 0; j < expandirGifMobile.length; j++) {
                    expandirGifMobile[j].addEventListener('click', () => {

                        expandirGifoMobile.style = 'visibility: visible'

                        const imgExpGigo = document.querySelector('#img-eg')
                        const tituloGif = document.querySelector('.title-expandir')
                        const creadorGif = document.querySelector('.user-eg')

                        imgExpGigo.src = urlsMobile[j]
                        tituloGif.textContent = nombresGifsMobile[j]
                        creadorGif.textContent = usuarioGifsMobile[j]
                        conteoGifsMobile = j // variable que almacena el # del gif mostrado No es necesario

                        urlGifDes = urlsMobile[conteoGifs]
                        nombreGif = nombresGifsMobile[conteoGifs]

                        expandirGifoMobile.style = 'visibility: visible'

                    })
                }

                const btnCerrar = document.querySelector('#icono-cerrar-eg')
                btnCerrar.addEventListener('click', () => {
                    expandirGifoMobile.style = 'visibility: hidden'
                })

                const descargar = document.querySelector('#download-ex')

                descargar.addEventListener('click', () => descaGif(urlGifDes, nombreGif))

                const gifFav = document.querySelector('#favoritos-ex')

                gifFav.addEventListener('click', () => {
                    gifFav.src = '../assets/icon-fav-active.svg'
                    localStorage.setItem(nombreGif, urlGifDes)

                })
            }

            expandirGifosMobile()
        })
        .catch(error => console.log(error))
}

// -----------------------versión desktop interactividad-----------------------

// -----------------------modo nocturno versión desktop-------------------------
let varBtnCG = true
let varSearch = false
let varModoNocturno = false;

let urlsGif = []
let nombresGif = []
let ulrsGifMisGifos = []
let nombresMisGifos = []
let favSinResult = false

let urls = [] // almacena url de las imagenes 
let nombresGifs = [] // almacena nombres de gifs 
let usuarioGifs = [] // almacena los usuario de gifs

// -------------------------------------buscador---------------------------------
const buscador = document.getElementById('buscador')
const div = document.createElement("div");
const maqueta = document.querySelector('.search')
const iconoBarraBus = document.querySelector('#icono-buscar')
const imgBusqueda = document.querySelector('#icono-buscar')
let pagBtnMas = 0
let aux = true
let src1ImgBusqueda = './assets/icon-search.svg'
let src2ImgBusqueda = './assets/close.svg'

// ------------------------------------carrusel expandir GIFS--------------------
const egFlechaIzq = document.querySelector('#btn-slider-left-eg')
const egFlechaDer = document.querySelector('#btn-slider-right-eg')
const imgExpGigo = document.querySelector('#img-eg')
const tituloGif = document.querySelector('.titulo-eg')
const creadorGif = document.querySelector('.user-eg')
const btnDescarga = document.querySelector('.eg-img2') // btn descarga 
const expGifav = document.querySelector('.eg-fav') // btn favorito 

let varExpandirGifo = false // variable para señalar que carrusel se debe abrir (busqueda o tendencias)
let conteoGifs = 0 // conteo de gifs para carrusel de busqueda 
let conteoGifsTend = 0 // conteo de gifs para carrusel de tendencia
let urlGifDes = ''
let nombreGif = ''

// ------------------------------Tendencias------------------------------------
let conteoCarrusel = 0


if (screen.width >= 769) {

    // ---------------------------------------- INICIO MODO NOCTURNO ---------------------------------------- 
    imgHeader.src = '../assets/logo-desktop.svg'
    imgHeader.className = 'img-header'

    let btnNoc = document.getElementById('mod-noc')
    btnNoc.addEventListener('click', () => {
        varModoNocturno = varModoNocturno === false ? true : false

        const txtMod = document.querySelector('.let-mod-noc')
        txtMod.textContent = varModoNocturno ? 'MODO DIURNO' : 'MODO NOCTURNO'

        const body = document.querySelector('body')
        body.className = body.className === '' ? 'body-dark' : ''

        // ---------------------------------------logo superior derecho---------------------------------------
        const srcLogDiur = locacion + '/assets/logo-desktop.svg'
        const srcLogNoct = locacion + '/assets/logo-modo-noc.svg'
        const logo = document.querySelector('.img-header')
        logo.src = logo.src === srcLogDiur ? srcLogNoct : srcLogDiur

        // -------------------------------------Toogle para hover de redes-------------------------------------
        if (varModoNocturno) {
            srcHoverFace = srcFace
            srcHoverTwit = srcTwit
            srcHoverInst = srcInst
        } else {
            srcHoverFace = locacion + '/assets/icon_facebook_hover.svg'
            srcHoverTwit = locacion + '/assets/icon-twitter-hover.svg'
            srcHoverInst = locacion + '/assets/icon_instagram-hover.svg'
        }

        // ----------------------------------titulos de las paginas modo oscuro----------------------------------  
        varSearch = varSearch === true ? false : true // variable para manipular buscador 

        // -----------------------------------sutitulo busqueda sin resultado------------------------------------
        const titulosSinResul = () => {
            let tituloFavSR = document.querySelector('#tit-fav-sin-r')
            if (tituloFavSR && varModoNocturno) {
                tituloFavSR.style = 'color: white'
            } else {
                tituloFavSR.style = 'color: #50E3C2'
                console.log('inserta-fav')
            }
        }

        // -------------------------------------------flechas carrusel------------------------------------------- 
        const modNocFlechas = () => {
            const fleMainIzq = document.querySelector('#btn-slider-left')
            const fleMainDer = document.querySelector('#btn-slider-right')

            const src1_Flec_Der = locacion + '/assets/button-slider-right.svg'
            const src2_Flec_Der = locacion + '/assets/button-slider-right-md-noct.svg'
            const src1_Flec_Izq = locacion + '/assets/button-slider-left.svg'
            const src2_Flec_Izq = locacion + '/assets/button-slider-left-md-noct.svg'

            fleMainDer.src = fleMainDer.src === src1_Flec_Der ? src2_Flec_Der : src1_Flec_Der
            fleMainIzq.src = fleMainIzq.src === src1_Flec_Izq ? src2_Flec_Izq : src1_Flec_Izq
        }

        const cerrarExpGif = () => {
            const src1_Icon_Cerrar_Eg = locacion + '/assets/close.svg'
            const src2_Icon_Cerrar_Eg = locacion + '/assets/close-modo-noct.svg'
            const cerrarEg = document.querySelector('#icono-cerrar-eg')
            if (!favSinResult) {
                cerrarEg.src = cerrarEg.src === src1_Icon_Cerrar_Eg ? src2_Icon_Cerrar_Eg : src1_Icon_Cerrar_Eg
            }
        }

        // --------------------------------estilos modo oscuro por documento html--------------------------------
        if (window.document.title === 'Main') {
            const titleIndex = document.querySelector('#main1-title') // titulo 
            titleIndex.className = titleIndex.className === 'main1-title-index' ? 'title-main-dark-1' : 'main1-title-index'

            const search = document.querySelector('.search') // buscador 
            const input = document.querySelector('#buscador')

            const iconoBuscar = document.querySelector('#buscar')
            src1Busq = './assets/icon-search.svg'
            src2Busq = './assets/icon-search-modo-noct.svg'
            src1Close1 = './assets/close.svg'
            src1Close2 = './assets/close-modo-noct.svg'

            src1ImgBusqueda = src1ImgBusqueda === src1Busq ? src2Busq : src1Busq
            src2ImgBusqueda = src2ImgBusqueda === src1Close1 ? src1Close2 : src1Close1

            if (varSearch) {
                search.style = 'border : 1px solid #FFFFFF; background: #37383C;'
                input.style = 'background: #37383C;'

            } else {
                search.style = 'border : 1px solid #572EE5; background: #FFFFFF;'
                input.style = 'background: white'
            }

            // -------------------------------------icono derecho buscador------------------------------------- 
            const icono = document.querySelector('#icono-buscar')
            const srcIcon1 = locacion + '/assets/icon-search.svg'
            const srcIcon2 = locacion + '/assets/icon-search-mod-noc.svg'
            icono.src = icono.src === srcIcon1 ? srcIcon2 : srcIcon1

            const btnVerMas = document.querySelector('#see_more')
            btnVerMas.className = btnVerMas.className === 'see_more_bus' ? 'see_more_dark' : 'see_more_bus'

            modNocFlechas() // flechas carrusel 
            cerrarExpGif() // icono cerrar - expandir gifo

        }

        if (window.document.title === 'Favoritos') {
            const titleFav = document.querySelector('#main1-title')
            titleFav.className = titleFav.className === 'main1-title-fav' ? 'title-main-dark-2' : 'main1-title-fav'

            const btnVerMas = document.querySelector('#see_more')
            btnVerMas.className = btnVerMas.className === 'see_more' ? 'see_more_dark' : 'see_more'

            modNocFlechas() // flechas carrusel 
            cerrarExpGif() // icono cerrar - expandir gifo 

            if (urlsGif.length === 0) {
                titulosSinResul() // titulos para busqueda 'sin resultados'
            }

        }

        if (window.document.title === 'Mis GIFOS') {
            const titleMisGif = document.querySelector('#main1-title')
            titleMisGif.className = titleMisGif.className === 'main1-title-MisGif' ? 'title-main-dark-2' : 'main1-title-MisGif'

            const btnVerMas = document.querySelector('#see_more')
            btnVerMas.className = btnVerMas.className === 'see_more' ? 'see_more_dark' : 'see_more'

            modNocFlechas() // flechas carrusel 
            cerrarExpGif() // icono cerrar - expandir gifo

            if (ulrsGifMisGifos.length === 0) {
                titulosSinResul() // titulos para busqueda 'sin resultados'
            }

        }

        if (window.document.title === 'crearGifos') {
            // imagenes 
            let srcCamaraMN = locacion + '/assets/camara-modo-noc.svg'
            let srcCamaraMD = locacion + '/assets/camara.svg'
            let srcLuzCamMN = locacion + '/assets/Path 2.svg'
            let srcLuzCamMD = locacion + '/assets/element-luz-camara.svg'
            let srcPeliculaMN = locacion + '/assets/pelicula-modo-noc.svg'
            let srcPeliculaMD = locacion + '/assets/pelicula.svg'

            // elementos imagenes 
            let camara = document.querySelector('#img-camara')
            let luzCamara = document.querySelector('#img-luz-camara')
            let pelicula = document.querySelector('#img-pelicula')

            // botones conteo 
            let btn1 = document.querySelector('#btn-conteo-1')
            let btn2 = document.querySelector('#btn-conteo-2')
            let btn3 = document.querySelector('#btn-conteo-3')

            // botones crear gifos 
            let btnComenzar = document.querySelector('#btn-comenzar')
            let btnStart = document.querySelector('#btn-start')
            let btnStop = document.querySelector('#btn-stop')
            let btnSubirGif = document.querySelector('#btn-subir-gif')
            let botones = [btnComenzar, btnStart, btnStop, btnSubirGif]

            // lineas y contornos 
            let cuadroGif = document.querySelector('#cuadro-busqueda')
            let lineaVert = document.querySelector('#line-conteo-gifos')

            if (varModoNocturno) {
                botones.forEach(boton => {
                    boton.className = 'btns_crear_gifos'
                })

                camara.src = srcCamaraMN
                luzCamara.src = srcLuzCamMN
                pelicula.src = srcPeliculaMN

                btn1.className = 'btn-conteo-dark'
                btn2.className = 'btn-conteo-dark'
                btn3.className = 'btn-conteo-dark'

                cuadroGif.style = 'border : 1px solid white'
                lineaVert.style = 'background-color: white'

            } else {
                botones.forEach(boton => {
                    boton.className = 'btn-line-conteo-gifos'
                })
                camara.src = srcCamaraMD
                luzCamara.src = srcLuzCamMD
                pelicula.src = srcPeliculaMD

                btn1.className = 'btn-conteo'
                btn2.className = 'btn-conteo'
                btn3.className = 'btn-conteo'

                cuadroGif.style = 'border :1px solid #572ee5'
                lineaVert.style = 'background-color : #572ee5'

            }
        }

        const header = document.querySelector('header')
        header.className = body.className === '' ? '' : 'header-dark'

        // -----------------------------Botón crear gifo-----------------------------
        const srcBtnCGNoc = '../assets/CTA-crear-gifo-modo-noc.svg'
        const srcBtnCGDiur = '../assets/button-crear-gifo.svg'
        let btnCrearGifo = document.querySelector('.img-list')
        varModoNocturno === true ? btnCrearGifo.src = srcBtnCGNoc : btnCrearGifo.src = srcBtnCGDiur

        varBtnCG = varBtnCG === true ? false : true  // toogle btn 'crear gifo' 

        // ----------------------------------header----------------------------------- 
        const letras = document.getElementsByClassName('let-mod-noc')
        for (letra of letras) {
            letra.style.color = letra.style.color === 'white' ? '#572EE5' : 'white'
        }

        if (window.document.title !== 'crearGifos') {
            const subtitle = document.querySelector('.subtitle')
            if (!varModoNocturno) {
                subtitle.style = 'color: black'
            } else {
                subtitle.style = 'color: white'
            }

            // ------------------------------main-2---------------------------------
            const menu2 = document.querySelector('.main-2-main')
            menu2.style.background = menu2.style.background === '' ? '#222326' : ''

            // -------------------------flechas carrusel---------------------------- 
            const flechaDer = document.querySelector('.flecha-der')
            const flechaIzq = document.querySelector('.flecha-izq')
            // console.log(flechaDer.src)

            const src1_Flec_Der = locacion + '/assets/button-slider-right.svg'
            const src2_Flec_Der = locacion + '/assets/button-slider-right-md-noct.svg'
            const src1_Flec_Izq = locacion + '/assets/button-slider-left.svg'
            const src2_Flec_Izq = locacion + '/assets/button-slider-left-md-noct.svg'

            flechaDer.src = flechaDer.src === src1_Flec_Der ? src2_Flec_Der : src1_Flec_Der
            flechaIzq.src = flechaIzq.src === src1_Flec_Izq ? src2_Flec_Izq : src1_Flec_Izq

        }

        const letrasFooter = document.getElementsByClassName('let-footer')
        for (letF of letrasFooter) {
            if (varModoNocturno) {
                letF.style = 'color: white'
            } else {
                letF.style = 'color: black'
            }
        }
    })

    // --------------------------------hover sobre el boton crear Gifo------------------------
    const srcBtnCG = '/assets/button-crear-gifo.svg' // modo diurno
    const srcBtnCGHov = '/assets/CTA-crear-gifo-hover.svg'
    const srcBtnCGAct = '/assets/CTA-crear-gifo-active.svg'
    const srcBtnCGNoc = '/assets/CTA-crear-gifo-modo-noc.svg'  // modo nocturno
    const srcBtnCGNocHov = '/assets/CTA-crear-gifo-hover-modo-noc.svg'
    const btnCrearGifo = document.querySelector('.img-list')

    btnCrearGifo.onmouseover = (() => {
        if (varBtnCG) {
            btnCrearGifo.src = btnCrearGifo.src === locacion + srcBtnCG ? locacion + srcBtnCGHov : locacion + srcBtnCG
        } else {
            btnCrearGifo.src = btnCrearGifo.src === locacion + srcBtnCGNoc ? locacion + srcBtnCGNocHov : locacion + srcBtnCGNoc
        }
    })

    btnCrearGifo.onmouseout = (() => {
        if (varBtnCG) {
            btnCrearGifo.src = btnCrearGifo.src === locacion + srcBtnCGHov ? locacion + srcBtnCG : locacion + srcBtnCGHov
        } else {
            btnCrearGifo.src = btnCrearGifo.src === locacion + srcBtnCGNocHov ? locacion + srcBtnCGNoc : locacion + srcBtnCGNocHov
        }

    })

    btnCrearGifo.addEventListener('click', () => { // estado 'active' 
        btnCrearGifo.src = btnCrearGifo.src === locacion + srcBtnCGHov ? locacion + srcBtnCGAct : locacion + srcBtnCGHov
        btnCrearGifo.src = btnCrearGifo.src === locacion + srcBtnCG ? locacion + srcBtnCGAct : locacion + srcBtnCG
    })

    // --------------------------------hover sobre el footer --------------------------------------------
    let iconFace = document.getElementById('icon-face')
    let iconTwit = document.getElementById('icon-twi')
    let iconInst = document.getElementById('icon-inst')

    const srcFace = locacion + '/assets/icon_facebook.svg'
    let srcHoverFace = locacion + '/assets/icon_facebook_hover.svg'
    const srcTwit = locacion + '/assets/icon-twitter.svg'
    let srcHoverTwit = locacion + '/assets/icon-twitter-hover.svg'
    const srcInst = locacion + '/assets/icon_instagram.svg'
    let srcHoverInst = locacion + '/assets/icon_instagram-hover.svg'

    function iconosFooter() {
        iconFace.onmouseover = (() => iconFace.src = iconFace.src === srcFace ? srcHoverFace : srcFace)
        iconFace.onmouseout = (() => iconFace.src = iconFace.src === srcHoverFace ? srcFace : srcHoverFace)
        iconTwit.onmouseover = (() => iconTwit.src = iconTwit.src === srcTwit ? srcHoverTwit : srcTwit)
        iconTwit.onmouseout = (() => iconTwit.src = iconTwit.src === srcHoverTwit ? srcTwit : srcHoverTwit)
        iconInst.onmouseover = (() => iconInst.src = iconInst.src === srcInst ? srcHoverInst : srcInst)
        iconInst.onmouseout = (() => iconInst.src = iconInst.src === srcHoverInst ? srcInst : srcHoverInst)
    }
    iconosFooter()

    // --------------------------------------FIN MODO NOCTURNO---------------------------------------

    // evento que detecta una recarga de página 
    window.onload = () => {
        if (window.document.title === 'Favoritos') {
            maquetaGifs() // maquetado favoritos
            console.log('recargada favoritos')
        }
        if (window.document.title === 'Mis GIFOS') {
            maquetaGifs() // maquetado mis gifos 
            console.log('crear gifos cargada')
        }
    }

    // -------------------------------- scroll ---------------------------------
    // window.addEventListener('scroll', ()=>{
    //     let main = document.querySelector('main')
    //     let buscadorCentral = document.getElementById('search-header')
    //     let botonBuscar = document.getElementById('btnHeader')

    //     // console.log(main.getBoundingClientRect().top);
    //     if (main.getBoundingClientRect().top < 175){
    //         buscadorCentral.style = 'display: flex';
    //         botonBuscar.style = 'display: none'
    //     }else{
    //         buscadorCentral.style = 'display: none';
    //         botonBuscar.style = 'display: flex'
    //     }

    // })

    // -------------------interacciones para carrusel (favoritos, mis gifos, tendencias)-------------------
    if (window.document.title !== 'crearGifos') {
        egFlechaIzq.addEventListener('click', () => {

            if (varExpandirGifo) { // carrusel busqueda 
                conteoGifs = conteoGifs > 0 ? conteoGifs -= 1 : conteoGifs = 0

                if (window.document.title === 'Main') {
                    imgExpGigo.src = urls[conteoGifs]
                    tituloGif.textContent = nombresGifs[conteoGifs]
                    creadorGif.textContent = usuarioGifs[conteoGifs]

                    urlGifDes = urls[conteoGifs]
                    nombreGif = nombresGifs[conteoGifs]
                    console.log(conteoGifs)
                }

                if (window.document.title === 'Favoritos') {
                    imgExpGigo.src = urlsGif[conteoGifs]
                    tituloGif.textContent = nombresGif[conteoGifs]
                    creadorGif.textContent = nombresGif[conteoGifs]

                    urlGifDes = urlsGif[conteoGifs]
                    nombreGif = nombresGif[conteoGifs]
                }

                if (window.document.title === 'Mis GIFOS') {
                    imgExpGigo.src = ulrsGifMisGifos[conteoGifs]
                    tituloGif.textContent = nombresMisGifos[conteoGifs]
                    creadorGif.textContent = nombresMisGifos[conteoGifs]

                    urlGifDes = ulrsGifMisGifos[conteoGifs]
                    nombreGif = nombresMisGifos[conteoGifs]

                }

            } else { // carrusel tendencias 
                conteoGifsTend = conteoGifsTend > 0 ? conteoGifsTend -= 1 : conteoGifsTend = 0
                imgExpGigo.src = urlsTend[conteoGifsTend]
                tituloGif.textContent = nombresGifsTend[conteoGifsTend]
                creadorGif.textContent = usuarioGifsTend[conteoGifsTend]

                urlGifDes = urlsTend[conteoGifsTend]
                nombreGif = nombresGifsTend[conteoGifsTend]
            }

        })

        egFlechaDer.addEventListener('click', () => {
            if (varExpandirGifo) { // carrusel busqueda

                if (window.document.title === 'Main') {
                    conteoGifs = conteoGifs < urls.length - 1 ? conteoGifs += 1 : conteoGifs = urls.length - 1

                    imgExpGigo.src = urls[conteoGifs]
                    tituloGif.textContent = nombresGifs[conteoGifs]
                    creadorGif.textContent = usuarioGifs[conteoGifs]
                    urlGifDes = urls[conteoGifs]
                    nombreGif = nombresGifs[conteoGifs]
                    console.log(conteoGifs)
                }

                if (window.document.title === 'Favoritos') {
                    conteoGifs = conteoGifs < urlsGif.length - 1 ? conteoGifs += 1 : conteoGifs = urlsGif.length - 1

                    imgExpGigo.src = urlsGif[conteoGifs]
                    tituloGif.textContent = nombresGif[conteoGifs]
                    creadorGif.textContent = nombresGif[conteoGifs]

                    urlGifDes = urlsGif[conteoGifs]
                    nombreGif = nombresGif[conteoGifs]
                    console.log(conteoGifs)
                }

                if (window.document.title === 'Mis GIFOS') {
                    conteoGifs = conteoGifs < ulrsGifMisGifos.length - 1 ? conteoGifs += 1 : conteoGifs = ulrsGifMisGifos.length - 1

                    imgExpGigo.src = ulrsGifMisGifos[conteoGifs]
                    tituloGif.textContent = nombresMisGifos[conteoGifs]
                    creadorGif.textContent = nombresMisGifos[conteoGifs]

                    urlGifDes = ulrsGifMisGifos[conteoGifs]
                    nombreGif = nombresMisGifos[conteoGifs]
                }

            } else { // carrusel tendencia 
                conteoGifsTend = conteoGifsTend < urlsTend.length - 1 ? conteoGifsTend += 1 : conteoGifsTend = urlsTend.length - 1
                imgExpGigo.src = urlsTend[conteoGifsTend]
                tituloGif.textContent = nombresGifsTend[conteoGifsTend]
                creadorGif.textContent = usuarioGifsTend[conteoGifsTend]

                urlGifDes = urlsTend[conteoGifsTend]
                nombreGif = nombresGifsTend[conteoGifsTend]
            }
        })

        btnDescarga.addEventListener('click', () => descaGif(urlGifDes, nombreGif)) // descarga gif
        expGifav.addEventListener('click', () => localStorage.setItem(nombreGif, urlGifDes)) // gif favorito 

        // ----------------------------- actualizar Tendencias ------------------------------------------------
        urlsTend = []
        nombresGifsTend = []
        usuarioGifsTend = []
        tendencias(0)

        let flechaIzq = document.querySelector('#btn-slider-left')
        let flechaDer = document.querySelector('#btn-slider-right')
        let conteoCarrusel = 0

        flechaIzq.addEventListener('click', () => {
            conteoCarrusel = conteoCarrusel > 0 ? conteoCarrusel -= 1 : conteoCarrusel
            tendencias(conteoCarrusel)
        })

        flechaDer.addEventListener('click', () => {
            conteoCarrusel += 1
            tendencias(conteoCarrusel)
        })

    }

}

// ---------------------------interacciones para el buscador - pág principal---------------------------
if (window.document.title === 'Main') {
    iconoBarraBus.addEventListener('click', () => {
        buscador.value = ''
        div.style = 'display: none' // se ocultan las sugerencias 
        document.querySelector('.hr').style = 'display: none' // se oculta linea de busqueda
    })
}

// ---------------------------interacciones para el buscador - pág principal ----

if (buscador) {
    buscador.addEventListener('keyup', (ev) => {
        if (ev.key === 'Enter') {
            obtenerGif(ev.key)
            busqConResult()
        } else {

            if (ev.key) {
                document.querySelector('.hr').style = 'display: flex'
            }
            let template = ''

            if (buscador.value.length === 0) {
                //div.style = 'display: none'
                document.querySelector('.hr').style = 'display: none'
                document.querySelector('#img-search-izq').style = 'display: none'
                imgBusqueda.src = src1ImgBusqueda // icono lupa

            } else {
                document.querySelector('.hr').style = 'display: flex'
                document.querySelector('#img-search-izq').style = 'display: flex'
                imgBusqueda.src = src2ImgBusqueda // icono close 
                div.style = 'display: '

                // petición para sugerencias 
                const requestParameter = 'api_key=' // parametros de la petición 
                const apiKey = 'AuYmopLfYzaoGcfeZOjrDllHgzV1ZhSQ' // API key personal
                const url2 = 'https://api.giphy.com/v1/tags/related/'
                const parameterType = '{term='
                const valueParameter = buscador.value
                const peticion2 = url2 + parameterType + valueParameter + '}' + '?' + requestParameter + apiKey
                fetch(peticion2)
                    .then(response => response.json())
                    .then(datos => {
                        // console.log(datos)
                        for (let dato of datos.data) {
                            template += `
                            <div class = 'linea-1-busc searchNew'>
                                <div class = 'search-input' id ='search-input'>
                                    <img class = "img-izq-suggestion" src="http://127.0.0.1:5500/assets/icon-search-mod-noc.svg" alt="icon-search">
                                    <p class="input-search d">${dato.name}</p> 
                                </div>
                            </div> 
                        `
                        }

                        div.innerHTML = `${template}`
                        maqueta.insertAdjacentElement('beforeend', div)
                        let suggestions = document.getElementsByClassName('d')

                        for (suggestion of suggestions) {
                            suggestion.addEventListener('click', () => {
                                buscador.value = suggestion.innerHTML // cambiar el valor del input 
                                obtenerGif(suggestion.innerHTML) // petición fetch 
                                busqConResult() // estilos del buscador 
                            })
                        }

                        let btnMasBusq = document.querySelector('#see_more')
                        btnMasBusq.addEventListener('click', () => {
                            pagBtnMas += 12 // offset de la petición 
                            obtenerGif(buscador.value, pagBtnMas, false)
                        })

                    })
                    .catch(err => console.log(err))
            }
        }
    })
}

// -----------------------------------------------------------------------------------------------------
// ----------------------------------------------FUNCIONES----------------------------------------------

// ---------------------------------------descargar gifs------------------------------------------------
const descaGif = async (url, name) => {
    let a = document.createElement('a');  //create new a element
    let response = await fetch(url);
    let file = await response.blob(); // get image as blob

    a.download = name; // download name 
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');//store download url in javascript
    a.click(); //click on element to start download
}


// -------------------------------Maquetar gifs 'favoritos' y 'mis gifos'------------------------------- 
function templateMaqueta(urls, nombres, srcIcono) {

    let clases = ''
    if (srcIcono === '/assets/icon-fav-active.svg') {
        clases = "icon-fav far-fav fa-heart favoritos"
        // clases = "icon far fa-heart favoritos"
    } else {
        clases = 'icon misGifos'
    }

    template = ''
    for (let i = 0; i < urls.length; i++) {
        template += `
        <div class="gif">
            <img class="img-gif" src="${urls[i]}" alt="cat">
            <div class="gif-hover gif-hover-fav">
            
                <div class="icon-gif">
                   <!-- <i class="icon far fa-heart favoritos"></i> -->
                    <img src = ${srcIcono} class = '${clases}' alt = 'favorito'>
                    <img class="icon download-fav" src="/assets/icon-download.svg" alt="download">
                    <i class="icon fas fa-expand-alt btns-expandir"></i>
                </div>
                <div class="text-gif">
                    
                    <p class="user">${nombres[i] || 'undefined'}</p>
                    <p class="title-GIFO">${nombres[i] || 'undefined'}</p>
                </div>
            </div>
        </div>
        `
    }

    return template
}

// --------------------------------------Maquetar gifs de busqueda-------------------------------------- 
function maquetaGifs() {
    let template = ''
    urlsGif = [] // urls gifs favoritos 
    nombresGif = [] // nombres gis favoritos 
    ulrsGifMisGifos = []
    nombresMisGifos = []

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'misGifos') {
            urlsGif.push(localStorage.getItem(localStorage.key(i)))
            nombresGif.push(localStorage.key(i))
        } else {
            let vectorGifs = JSON.parse(localStorage.getItem('misGifos'))
            // console.log(vectorGifs)
            vectorGifs.forEach(element => {
                ulrsGifMisGifos.push(element)
                nombresMisGifos.push('misGifos')
            });
        }
    }

    if (window.document.title === 'Favoritos') {
        let grillaGifsFav = document.querySelector('.grilla-gifs') // maquetado favoritos 
        grillaGifsFav.innerHTML = templateMaqueta(urlsGif, nombresGif, '/assets/icon-fav-active.svg')

        let descargar = document.getElementsByClassName('download-fav') // descarga de gifs
        for (let j = 0; j < urlsGif.length; j++) {
            descargar[j].addEventListener('click', () => descaGif(urlsGif[j], nombresGif[j]))
        }

        // configuración para eliminar GIF marcado favorito 
        let keysFavoritos = []
        let eliminarFav = document.getElementsByClassName('icon-fav')

        if (eliminarFav.length > 0) {
            for (let j = 0; j < localStorage.length; j++) {
                if (localStorage.key(j) !== 'misGifos') {
                    keysFavoritos.push(j)
                }
            }

            for (let k = 0; k < keysFavoritos.length; k++) {
                eliminarFav[k].addEventListener('click', () => {
                    localStorage.removeItem(localStorage.key(keysFavoritos[k]))
                })
            }
        }

        if (urlsGif.length === 0) { // maquetado 'favoritos sin resultados' 
            favSinResult = true
            template = `
            <div class = "fav-sin-resul">
                <img src="../assets/icon-fav-sin-contenido.svg" alt="logo-no-fav">
                <h1 class = "inserta-fav" id = "tit-fav-sin-r">"¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!"</h1>
            </div>
        `
            grillaGifsFav.innerHTML = template
        } else {
            favSinResult = false
        }
    }

    if (window.document.title === 'Mis GIFOS') {
        let grillaGifsMisGif = document.querySelector('.grilla-gifs-misGifos') // maquetado mis gifos
        grillaGifsMisGif.innerHTML = templateMaqueta(ulrsGifMisGifos, nombresMisGifos, '/assets/icon-trash-normal.svg')

        // configuración para eliminar gif
        let btnBorrar = document.getElementsByClassName('misGifos')
        let vectorGifs = JSON.parse(localStorage.getItem('misGifos'))

        console.log(btnBorrar.length)
        if (btnBorrar.length > 0) {
            for (let i = 0; i < btnBorrar.length; i++) {
                btnBorrar[i].addEventListener('click', () => {
                    vectorGifs.splice(i, 1)
                    localStorage.setItem('misGifos', JSON.stringify(vectorGifs))
                })
            }
        }

        let descargar = document.getElementsByClassName('download-fav') // descarga de gifs
        for (let j = 0; j < ulrsGifMisGifos.length; j++) {
            descargar[j].addEventListener('click', () => descaGif(ulrsGifMisGifos[j], nombresMisGifos[j]))
        }

        if (ulrsGifMisGifos.length === 0) { // maquetado 'Mis Gifos' sin resultado 
            template = `
            <div class = "fav-sin-resul ">
                <img src="../assets/icon-mis-gifos-sin-contenido.svg" alt="logo-no-fav">
                <h1 class = "inserta-fav" id = "tit-fav-sin-r">¡Anímate a crear tu primer GIFO!</h1>
             </div>
            `
            grillaGifsMisGif.innerHTML = template;
        }
    }

    // tendencias 
    let flechaIzqFav = document.querySelector('#btn-slider-left')
    let flechaDerFav = document.querySelector('#btn-slider-right')
    let conteoCarruselFav = 0
    tendencias(0)

    // conteo carrusel 
    flechaIzqFav.addEventListener('click', () => {
        conteoCarruselFav = conteoCarruselFav > 0 ? conteoCarruselFav -= 1 : conteoCarruselFav
        tendencias(conteoCarruselFav)
    })

    flechaDerFav.addEventListener('click', () => {
        conteoCarruselFav += 1
        tendencias(conteoCarruselFav)
    })

    // llamado a la función para expandir gifos
    if (screen.width >= 769) {
        expandirGifos()
    } else {
        expandirGifosMobileBuscado()
    }
}


// --------------------------------------------Expandir gifs-------------------------------------------- 
function expandirGifos() {
    const expandirGifos = document.getElementsByClassName('btns-expandir')
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const trending = document.querySelector('.trending-gifos')
    const expandir = document.querySelector('.expandir-gifos')
    const main1 = document.querySelector('.main-1-main') // maquetado main 
    const grillaFav = document.querySelector('.grilla-gifs') // maquetdo favoritos 
    const titleFav = document.querySelector('#main1-title')
    const imgFav = document.querySelector('.fav')
    const misGifos = document.querySelector('.intro_2')

    for (let j = 0; j < expandirGifos.length; j++) {

        expandirGifos[j].addEventListener('click', () => {
            varExpandirGifo = true
            body.style = 'border: none'
            header.style = 'display: none'
            footer.style = 'display: none'
            trending.style = 'display: none'
            expandir.style = 'display: flex'

            const imgExpGigo = document.querySelector('#img-eg')
            const tituloGif = document.querySelector('.titulo-eg')
            const creadorGif = document.querySelector('.user-eg')

            if (window.document.title === 'Main') {
                main1.style = 'display: none'

                imgExpGigo.src = urls[j]
                tituloGif.textContent = nombresGifs[j]
                creadorGif.textContent = usuarioGifs[j]

                conteoGifs = j // variable que almacena el # del gif mostrado 
                console.log(conteoGifs)

                urlGifDes = urls[conteoGifs] // valor inicial para variable que descarga gif 
                nombreGif = nombresGifs[conteoGifs]
            }

            if (window.document.title === 'Favoritos') {
                grillaFav.style = 'display: none'
                titleFav.style = 'display: none'
                imgFav.style = 'display: none'

                imgExpGigo.src = urlsGif[j]
                tituloGif.textContent = nombresGif[j]
                creadorGif.textContent = nombresGif[j]

                conteoGifs = j // variable que almacena el # del gif mostrado 

                urlGifDes = urlsGif[conteoGifs] // valor inicial para variable que descarga gif 
                nombreGif = nombresGif[conteoGifs]
            }

            if (window.document.title === 'Mis GIFOS') {
                misGifos.style = 'display: none'

                imgExpGigo.src = ulrsGifMisGifos[j]
                tituloGif.textContent = nombresMisGifos[j]
                creadorGif.textContent = nombresMisGifos[j]

                conteoGifs = j // variable que almacena el # del gif mostrado 

                urlGifDes = ulrsGifMisGifos[conteoGifs] // valor inicial para variable que descarga gif 
                nombreGif = nombresMisGifos[conteoGifs]
            }

        })

    }
    const btnCerrar = document.querySelector('#icono-cerrar-eg')
    btnCerrar.addEventListener('click', () => {
        body.style = 'border : '
        header.style = 'display: '
        footer.style = 'display: '
        trending.style = 'display: '
        expandir.style = 'display: none'

        const srcLogDiur = locacion + '/assets/logo-desktop.svg'
        const srcLogNoct = locacion + '/assets/logo-modo-noc.svg'
        const logo = document.querySelector('.img-header')

        if (window.document.title === 'Main') {
            main1.style = 'display: '
        }

        // background tendencias 
        if (varModoNocturno) {
            const menu2 = document.querySelector('.main-2-main')
            menu2.style.background = menu2.style.background === '' ? '#222326' : ''
            logo.src = srcLogNoct
        } else {
            logo.src = srcLogDiur
        }

    })
}


// ---------------------------------------Expandir gifs tend--------------------------------------------- 
function expandirGifoTendencias() {

    const expandirGifos = document.getElementsByClassName('btns-expandir-tend') // maquetado general 
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const trending = document.querySelector('.trending-gifos')
    const expandir = document.querySelector('.expandir-gifos')
    const main1 = document.querySelector('.main-1-main') // maquetado main 
    const grillaFav = document.querySelector('.grilla-gifs') // maquetdo favoritos 
    const titleFav = document.querySelector('#main1-title')
    const imgFav = document.querySelector('.fav')
    const menuIntroMG = document.querySelector('.intro_2') // maquetado Mis GIFOS

    for (let j = 0; j < expandirGifos.length; j++) {
        expandirGifos[j].addEventListener('click', () => {
            varExpandirGifo = false
            console.log(varExpandirGifo)

            body.style = 'border: none'
            header.style = 'display: none'
            footer.style = 'display: none'
            trending.style = 'display: none'
            expandir.style = 'display: flex'

            if (window.document.title === 'Main') {
                main1.style = 'display: none'
            }
            if (window.document.title === 'Favoritos') {
                grillaFav.style = 'display: none'
                titleFav.style = 'display: none'
                imgFav.style = 'display: none'
            }
            if (window.document.title === 'Mis GIFOS') {
                menuIntroMG.style = 'display : none'
            }

            const imgExpGigo = document.querySelector('#img-eg')
            const tituloGif = document.querySelector('.titulo-eg')
            const creadorGif = document.querySelector('.user-eg')

            imgExpGigo.src = urlsTend[j]
            tituloGif.textContent = nombresGifsTend[j]
            creadorGif.textContent = usuarioGifsTend[j]
            console.log(tituloGif)
            conteoGifsTend = j // variable que almacena el # del gif mostrado

            urlGifDes = urlsTend[conteoGifsTend] // valor inicial para variable que descarga gif 
            nombreGif = nombresGifsTend[conteoGifsTend]
        })

    }
    const btnCerrar = document.querySelector('#icono-cerrar-eg')
    btnCerrar.addEventListener('click', () => {
        body.style = 'border : '
        header.style = 'display: '
        footer.style = 'display: '
        trending.style = 'display: '
        expandir.style = 'display: none'

        // acciones para 'Main'
        if (window.document.title === 'Main') {
            main1.style = 'display: '
        }

        // acciones para 'Favoritos'
        if (window.document.title === 'Favoritos') {
            grillaFav.style = 'display: flex'
            titleFav.style = 'display: none'
            imgFav.style = 'display: none'
        }

        if (window.document.title === 'Mis GIFOS') {
            menuIntroMG.style = 'display : '
        }

        // background tendencias 
        if (varModoNocturno) {
            const menu2 = document.querySelector('.main-2-main')
            menu2.style.background = menu2.style.background === '' ? '#222326' : ''
        }

    })

}

// ---------------------------------------Expandir gifs buscados mobile--------------------------------------------- 
const expandirGifosMobileBuscado = () => {
    const expandirGifMobileB = document.getElementsByClassName('img-gif')
    const expandirGifoMobileB = document.querySelector('.expandir')

    const titleFav = document.querySelector('#main1-title')
    const imgFav = document.querySelector('.fav')
    const misGifos = document.querySelector('.intro_2')

    for (let j = 0; j < expandirGifMobileB.length; j++) {
        expandirGifMobileB[j].addEventListener('click', () => {

            expandirGifoMobileB.style = 'visibility: visible'

            const imgExpGifo = document.querySelector('#img-eg')
            const tituloGif = document.querySelector('.titulo-eg')
            const creadorGif = document.querySelector('.user-eg')

            if (window.document.title === 'Main') {
                imgExpGifo.src = urls[j]
                tituloGif.textContent = nombresGifs[j]
                creadorGif.textContent = usuarioGifs[j]
                //conteoGifsMobileB = j // variable que almacena el # del gif mostrado 

                urlGifDes = urls[conteoGifs]
                nombreGif = nombresGifs[conteoGifs]

                expandirGifoMobileB.style = 'visibility: visible'
            }

            if (window.document.title === 'Favoritos') {
                imgExpGifo.src = urlsGif[j]
                tituloGif.textContent = nombresGif[j]
                creadorGif.textContent = nombreGif[j]
                //conteoGifsMobileB = j // variable que almacena el # del gif mostrado 

                urlGifDes = urls[conteoGifs]
                nombreGif = nombresGifs[conteoGifs]

                expandirGifoMobileB.style = 'visibility: visible'
            }

            if (window.document.title === 'Mis GIFOS') {

                imgExpGifo.src = urlsGif[j]
                tituloGif.textContent = nombresMisGigos[j]
                creadorGif.textContent = usuarioMisGifos[j]
                conteoGifs = j // variable que almacena el # del gif mostrado 

                urlGifDes = urls[conteoGif]
                nombreGif = nombresGifs[conteoGifs]

                expandirGifoMobileB.style = 'visibility: visible'
            }
        })
    }

    const btnCerrar = document.querySelector('#icono-cerrar-eg')
    btnCerrar.addEventListener('click', () => {

        expandirGifoMobileB.style = 'visibility: hidden'

    })
}


// --------------------------------------------Obtener gifs--------------------------------------------- 
function obtenerGif(gifDeseado, offset = 0, btnMas = true) {
    const url = 'https://api.giphy.com/v1/gifs/search'
    const requestParameter = 'api_key=' // parametros de la petición 
    const apiKey = 'AuYmopLfYzaoGcfeZOjrDllHgzV1ZhSQ' // API key personal            
    const peticion = url + '?' + requestParameter + apiKey + '&' + 'q=' + gifDeseado + '&' + 'limit=12' + '&' + 'offset=' + offset

    fetch(peticion)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            template = ''
            for (dat of data.data) {
                template += `

        <div class="gif">
            <img class="img-gif" src="${dat.images.original.url}" alt="cat">
            <div class="gif-hover">
              
                <div class="icon-gif">
                    <i class="icon far fa-heart favoritos"></i>
                    <img class="icon download" src="/assets/icon-download.svg" alt="download">
                    <i class="icon fas fa-expand-alt btns-expandir"></i>
                </div>
                <div class="text-gif">
                    
                    <p class="user">${dat.username || 'undefined'}</p>
                    <p class="title-GIFO">${dat.title || 'undefined'}</p>
                </div>
            </div>
        </div>
        `
                urls.push(dat.images.original.url)
                nombresGifs.push(dat.title || 'undefined')
                usuarioGifs.push(dat.username || 'undefined')
            }
            console.log(urls.length)
            console.log(nombresGifs.length)

            let grilla = document.getElementById('grilla-gifs')
            let titleGifs = document.getElementById('title')

            if (btnMas) {
                grilla.innerHTML = template
                titleGifs.textContent = buscador.value
            } else {
                let divBtn = document.createElement('div')
                divBtn.className = 'divBtnMas'
                divBtn.innerHTML = template
                grilla.insertAdjacentElement('beforeend', divBtn)
            }
            div.style = 'display: none' // se ocultan las sugerencias 
            document.querySelector('.hr').style = 'display: none' // se oculta linea de busqueda

            // almacenamiento de gifs en localStorage
            let favoritos = document.getElementsByClassName('favoritos')
            // descargar gifs 
            let descargar = document.getElementsByClassName('download')

            for (let i = 0; i < urls.length; i++) {
                favoritos[i].addEventListener('click', () => {
                    localStorage.setItem(nombresGifs[i], urls[i])
                })

                descargar[i].addEventListener('click', () => descaGif(urls[i], nombresGifs[i]))
            }

            // llamado a la función para expandir gifos
            if (screen.width >= 769) {
                expandirGifos()
            } else {
                expandirGifosMobileBuscado()
            }

        })
        .catch(err => console.log(err))
}

window.onload = () => {
    if (window.document.title === 'Favoritos') {
        maquetaGifs() // maquetado favoritos
        console.log('recargada favoritos')
    }
    if (window.document.title === 'Mis GIFOS') {
        maquetaGifs() // maquetado mis gifos 
        console.log('crear gifos cargada')
    }
}

// ----------------------------------Maquetado busqueda con--------------------------------------------
function busqConResult() {
    let lineaHor = document.getElementById('line')
    let grilla = document.getElementById('grilla-gifs')
    let titleGrilla = document.getElementById('title')
    let textTrending = document.getElementById('trending-index')
    let btnSeeMor = document.getElementById('see_more')

    lineaHor.style = 'display: '
    grilla.style = 'display: flex'

    if (varModoNocturno) {
        titleGrilla.style = 'display: flex; justify-content: center; color: white'
    } else {
        titleGrilla.style = 'display: flex; justify-content: center '
    }

    //textTrending.style = 'display: none' Debe mostrarse
    document.querySelector('#line').style.display = "block"
    btnSeeMor.style = 'display: block'
}


// ----------------------------------Busqueda de tendencias--------------------------------------------
function tendencias(offset) {

    const tendencias = document.querySelector('.tendencias')
    const apiKey = '?api_key=JPJaSbeJ82DFNPDMrj6BS3MfDFcyg3tr'
    const endpoint = 'https://api.giphy.com/v1/gifs/'

    fetch(`${endpoint}trending${apiKey}&limit=3&offset=${offset}`) // limit = 3
        .then(response => response.json())
        .then(giphy => {

            urlsTend = []
            nombresGifsTend = []
            usuarioGifsTend = []

            template = ''
            for (dat of giphy.data) {
                template += `
                    <div class = "gif">
                        <img class="img-gif" src="${dat.images.original.url}" alt="cat">
                        <div class="gif-hover">

                            <img class="icon icon-close" id ="img-1-mob" src="/assets/close.svg" alt="close">
                            <img class="img-gif2" id = "img-2-mob" src="${dat.images.original.url}" alt="${dat.title || 'undefined'}">

                            <div class="icon-gif-mob" >
                                <img class="icon icon-fav-tend" src="/assets/icon-fav.svg" alt="favorito">
                                <img class="icon icon-link" src="/assets/icon-link-normal.svg" alt="link">
                                <img class="icon icon-down-tend" src="/assets/icon-download.svg" alt="download">
                            </div>

                            <div class="icon-gif">
                                <i class="icon far fa-heart favoritos-tend"></i>
                                <i class="icon fas fa-expand-alt btns-expandir-tend"></i>
                                <img class="icon download-tend" src="/assets/icon-download.svg" alt="download">
                            </div>

                            <div class="text-gif">
                                <p class="user">${dat.username || 'undefined'}</p>
                                <p class="title-GIFO">${dat.title || 'undefined'}</p>
                            </div>

                        </div>
                    </div>

                    `
                urlsTend.push(dat.images.original.url)
                nombresGifsTend.push(dat.title || 'undefined')
                usuarioGifsTend.push(dat.username || 'undefined')
                // console.log(urlsTend)
            }

            tendencias.innerHTML = template
            let favoritos = document.getElementsByClassName('favoritos-tend')  // gif favoritos
            let descargar = document.getElementsByClassName('download-tend')  // descarga gif 

            for (let j = 0; j < urlsTend.length; j++) {
                descargar[j].addEventListener('click', () => descaGif(urlsTend[j], nombresGifsTend[j]))

                favoritos[j].addEventListener('click', () => {
                    localStorage.setItem(nombresGifsTend[j], urlsTend[j])
                })
            }
            expandirGifoTendencias() // función expandir
        })
        .catch(error => console.log(error))
}

