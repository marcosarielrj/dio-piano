const teclasdopiano = document.querySelectorAll(".teclasdopiano .tecla");

const volume = document.querySelector(".volume input");
let teclasmapeadas = [];
let audio = new Audio("src/tunes/a.wav");
const keysChek = document.querySelector(".keys-check input");

const playTune = (tecla) => {

    audio.src = `src/tunes/${tecla}.wav`;
    audio.play();

    const teclapressionada = document.querySelector(`[data-key="${tecla}"]`);
    teclapressionada.classList.add("active");
    setTimeout(() => {
        teclapressionada.classList.remove("active");
    }, 150);
    

};

teclasdopiano.forEach((tecla)=>{

    tecla.addEventListener("click", () => playTune(tecla.dataset.key));
    teclasmapeadas.push(tecla.dataset.key);

})

document.addEventListener("keydown", (e) => {
    
    if (teclasmapeadas.includes(e.key)){
        
        playTune(e.key);
    }
});

const handleVolume = (e) => {

    audio.volume = e.target.value;
};
const showHideKeys = () =>{

    teclasdopiano.forEach(key => key.classList.toggle("hide"));
}

volume.addEventListener("input", handleVolume);
keysChek.addEventListener("click", showHideKeys);