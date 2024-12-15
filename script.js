const french = document.querySelector('.french');
const english = document.querySelector('.english');
const slider = document.querySelector('.slider .circle');

slider.addEventListener('click', () => {

    french.classList.toggle('active');
    english.classList.toggle('active');
    slider.classList.toggle('active');
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
        .save("cv.pdf");  // Nom du fichier PDF
});