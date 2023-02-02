const playliste = ["Forevigt - Hans Phillip", "Complexion ft. Rapsody - Kendrick Lamar", "Make It Better (feat. Smokey Robinson) - Anderson .Paak", "Hånd I Hånd - Benal", "Dem vi plejede at være - Guldimund", "Superstition", "Freedom! '90 - George Michael", "Rock with you - Michael Jackson", "Kiss - Prince"]




playliste.forEach(liste);

function liste(enSang){

    console.log(enSang)
document.querySelector("#array").innerHTML += `<li> ${enSang} </li>`;

}