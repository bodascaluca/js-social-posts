// Descrizione**
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// ****BONUS**

//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Olga Demina > OD).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

// **Consigli del giorno:**
//  :freccia_destra: Ragioniamo come sempre a step.
//  :freccia_destra: Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
//  console.log() è nostro amico.
//  :freccia_destra: Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
//  Buon lavoro! :paperella::muscolo:

const posts = [
    {
        "id": 1,
        "content": "Salve.",
        "media": "https://unsplash.it/600/300?image=172",
        "author": {
            "name": "Giovanni Salve",
            "image": "https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png"
        },
        "likes": 80,
        "created": "04-30-2022"
    },
    {
        "id": 2,
        "content": "Sarà così?",
        "media": "https://unsplash.it/600/300?image=165",
        "author": {
            "name": "Sarah Temea",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 45,
        "created": "05-25-2022"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Noemi Rebecchi",
            "image": "https://www.clipartmax.com/png/small/167-1677660_podcast-logo-300-x-300.png"
        },
        "likes": 89,
        "created": "02-12-2022"
    },
    {
        "id": 4,
        "content": "Mannagia hai il Mac",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Alberto Bodasca",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 112,
        "created": "03-01-2023"
    }
];







const container = document.querySelector('#container');

for (let i = 0; i < posts.length; i++) {

    let {id, content, media, author, likes, created} = posts[i];

    container.innerHTML += `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author.image}" alt="${author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div> `;
            const takeButton = document.querySelector(".like-button").addEventListener(`click`,elementClicked);
            console.log(takeButton);
}



function elementClicked(){
    
    return  this.classList.add("blue");
    
}










// const post = document.querySelector(".posts-list");
// const structor = createDomElement(posts);
// post.append(structor);
// console.log(post);

// function createDomElement(elementPost, ahthorName, ahthorImage){
//     const containerInfoPost = document.createElement("div");
//     containerInfoPost.classList.add("post");
//     containerInfoPost.innerHTML = `
//     <div class="post__header">
//     <div class="post-meta">                    
//         <div class="post-meta__icon">
//             <img class="profile-pic" src="${elementPost.author.image}" alt="${ahthorName}">                    
//         </div>
//         <div class="post-meta__data">
//             <div class="post-meta__author">${elementPost.author[0]}</div>
//             <div class="post-meta__time">${elementPost.created}</div>
//         </div>                    
//     </div>
// </div>
// <div class="post__text">${elementPost.content}</div>
// <div class="post__image">
//     <img src="${elementPost.media}" alt="">
// </div>
// <div class="post__footer">
//     <div class="likes js-likes">
//         <div class="likes__cta">
//             <a class="like-button  js-like-button" href="#" data-postid="1">
//                 <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
//                 <span class="like-button__label">Mi Piace</span>
//             </a>
//         </div>
//         <div class="likes__counter">
//             Piace a <b id="like-counter-1" class="js-likes-counter">${elementPost.likes}</b> persone
//         </div>
//     </div> 
// </div> 
//     `;
// //     // console.log(containerInfoPost);
// }