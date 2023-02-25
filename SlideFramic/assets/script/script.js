class Carrosel{
    constructor(carroselElement,photosContainer,photos,buttonNext,buttonPrev,timeSlide){
        this.carroselElement = carroselElement;
        this.photosContainer = photosContainer;
        this.photos = photos;
        this.prev = buttonPrev;
        this.next = buttonNext;
        this.idx = 0;
        this.started;
        this.timeOut;
        this.width;
        this.transform;
        this.timeSlide = timeSlide;
        this._config()
    }
    start(direction){
        this.width = this.carroselElement.clientWidth;
        if(direction == true){
            this.idx++
            this.check()
        }else if(direction == false){
            this.idx--
            this.check()
        }else{
            this.start(true)
        }
        this.transform = this.width * this.idx;
        this.photosContainer.style.transform = `translateX(${-this.transform}px)`
    }
    nextSlide(){
        this.timeOutSet()
        clearInterval(this.started)
        this.start(true)
    }
    prevSlide(){
        this.timeOutSet()
        clearInterval(this.started)
        this.start(false)
    }
    timeOutSet(){
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(()=>{this._init()}, 30000)
    }
    check(){
        this.idx > this.photos.length - 1 ? this.idx = 0 : this.idx = this.idx
        this.idx < 0 ? this.idx = 0 : this.idx = this.idx
    }
    
    _init(){
        clearInterval(this.started)
        this.started = setInterval(()=>{
            this.start(true)
        },this.timeSlide)
    }
    _config(){
        this.next.addEventListener("click",()=> this.nextSlide())
        this.prev.addEventListener("click",()=> this.prevSlide())
    }
}
const resize = (carroseis)=>{
    window.addEventListener("resize",()=>{
        for(let i=0;i<carroseis.length;i++){
            carroseis[i]._init()
        }
    })
}
const gerarCarrosel = (n)=>{
    let cont = 0;
    while(cont<n){
        cont++
        let carroselElement = document.querySelector(`#carrosel${cont}.carrosel`)
        let photosContainer = document.querySelector(`#carrosel${cont} .container`)
        let photos = document.querySelectorAll(`#carrosel${cont} .container img`)
        let buttonPrev = document.querySelector(`#carrosel${cont} .prev`)
        let buttonNext = document.querySelector(`#carrosel${cont} .next`)
        let timeSlide = document.querySelector(`#carrosel${cont} .timeSlide`)
        let timeInt = parseInt(timeSlide.value)
        new Carrosel(carroselElement,photosContainer,photos,buttonNext,buttonPrev,timeInt)._init();
    }
}
window.addEventListener("load",()=>{
    if(document.querySelectorAll(".carrosel").length > 1){
        let qntd = document.querySelectorAll(".carrosel").length;
        gerarCarrosel(qntd)
    }else{
        let carroseis = []
        const carroselElement1 = document.querySelector("#carrosel1.carrosel")
        const photosContainer1 = document.querySelector("#carrosel1 .container")
        const photos1 = document.querySelectorAll("#carrosel1 .container img")
        const buttonPrev1 = document.querySelector("#carrosel1 .prev")
        const buttonNext1 = document.querySelector("#carrosel1 .next")
        const timeSlide1 = document.querySelector(`#carrosel1 .timeSlide`)
        const timeInt = parseInt(timeSlide1.value)
        const carrosel1 = new Carrosel(carroselElement1,photosContainer1,photos1,buttonNext1,buttonPrev1,timeInt);
        carrosel1._init()
        carroseis.push(carrosel1)
        resize(carroseis)
    }
})

