let audios = [
    { path: 'audio/ai.mp3', title: 'Ai' },
    { path: 'audio/aiaiai.mp3', title: 'Ai Ai Ai' },
    { path: 'audio/aopotencia.mp3', title: 'Aooo Potência' },
    { path: 'audio/cavalo.mp3', title: 'Cavalo' },
    { path: 'audio/chega.mp3', title: 'Chegaaa' },
    { path: 'audio/dancagatinho.mp3', title: 'Dança gatinho, dança' },
    { path: 'audio/demais.mp3', title: 'Demais' },
    { path: 'audio/ebrincadeirahein.mp3', title: 'É brincadeira hein' },
    { path: 'audio/elegosta.mp3', title: 'Ele gosta' },
    { path: 'audio/ficoubaonaohein.mp3', title: 'Ficou bão não hein' },
    { path: 'audio/hummeapaixonei.mp3', title: 'Humm, me apaixonei' },
    { path: 'audio/ihaaa.mp3', title: 'Ihaa' },
    { path: 'audio/nao.mp3', title: 'Não' },
    { path: 'audio/nharnharnhar.mp3', title: 'Nhar Nhar Nhar' },
    { path: 'audio/olhaeleae.mp3', title: 'OLha ele ae' },
    { path: 'audio/pare.mp3', title: 'Pare' },
    { path: 'audio/queissomeufilhocalma.mp3', title: 'Que isso meu filho, calma' },
    { path: 'audio/quepapelaohein.mp3', title: 'Que papelão hein' },
    { path: 'audio/risadaatumalaca.mp3', title: 'Risada Tumalaca' },
    { path: 'audio/tome.mp3', title: 'Tome' },
    { path: 'audio/uepa.mp3', title: 'Uepaa' },
    { path: 'audio/ui.mp3', title: 'Uuui' },
    { path: 'audio/vaidarnamoro.mp3', title: 'Vai dar namoro' },
    { path: 'audio/xiii.mp3', title: 'Xiii' }
];

let btnsAudio = document.querySelectorAll('.btnAudio');
let titles = document.querySelectorAll('p');

for (let i = 0; i < audios.length; i++) {
    titles[i].textContent = audios[i].title;
    btnsAudio[i].setAttribute('data-item', i);
};

let audioTag = document.querySelector('audio');

btnsAudio.forEach(btnAudio => {
    btnAudio.addEventListener('click', () => {
        //btnsAudio.setAttribute('scr', 'btnpressed.png');
        let sound = audios[btnAudio.getAttribute('data-item')];
        audioTag.setAttribute('src', sound.path);
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});