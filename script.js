const french = document.querySelector('.french');
const english = document.querySelector('.english');
const slider = document.querySelector('.slider .circle');


// if(french.classList.contains('active')) {
//     document.getElementById('btn').textContent = 'Telecharger le CV';
    
// }

slider.addEventListener('click', () => {

    french.classList.toggle('active');
    english.classList.toggle('active');
    slider.classList.toggle('active');

    if(english.classList.contains('active')) {
        document.getElementById('btn').textContent = 'Download the CV';
        
    } else {
        document.getElementById('btn').textContent = 'Télécharger le CV';
    }

});

document.getElementById("downloadCvBtn").addEventListener("click", function() {
    // Sélectionner le div contenant ton CV
    const element = document.getElementById("cvContent");

    // Utiliser html2pdf pour convertir cet élément en PDF
    html2pdf()
        .from(element)  // Sélectionne l'élément à convertir
        .set({
            margin: [5, 5, 0, 5]  // Marge de 2px pour chaque côté (haut, droite, bas, gauche)
        })
        .save("Nourdine Kientega.pdf");  // Nom du fichier PDF
});