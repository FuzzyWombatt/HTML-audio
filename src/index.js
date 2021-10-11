const sounds = ['Applause', 'Boo', 'Gasp', 'Tada', 'Victory', 'Wrong'];

sounds.forEach( (sound) => {
    console.log(sound);
    const btn = document.createElement('button')
    btn.classList.add('btn');
     

    btn.innerText = sound;

    btn.addEventListener( 'click', ()=>{
        stop()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
    console.log(btn)
})

function stop(){
    sounds.forEach((sound) => {
        //console.log(sound)
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}