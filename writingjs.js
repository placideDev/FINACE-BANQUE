const title = document.querySelector("h1");
const text = "bonjour";


function typer(word, index) {
    if (index < word.length ) {
        setTimeout(() => {
            title.innerHTML += '<span>'${word[index]}'</span>'

            typer(text, index + 1)
        }, 300);
    }
}
setTimeout(()=>{
    typer(text, 0)
}, 500);




//typerwriter(word, index){
//     if(index < word.length){
//         setTimeout(()=>{
//             title.innerHTML += '<span>${word[index]} </span>'
//             typerwriter, index + 1
//         }, 300)
//     }
// }
// setTimeout(()=>{
//     typerwriter(text, 0)
// })