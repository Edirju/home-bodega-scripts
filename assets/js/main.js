
// Modal Navigation
const menuIcon = document.querySelector(".menu")
const modalNavigation = document.querySelector(".navbar__navigation-modal");
let isModalVisible = false

menuIcon.addEventListener('click', () =>{
  if (!isModalVisible) {
    modalNavigation.style.display = 'block'
    isModalVisible = true
  }else{
    modalNavigation.style.display = 'none'
    isModalVisible = false
  }
})

window.addEventListener("resize", () => {
  if (window.innerWidth >= 640 && isModalVisible) {
    modalNavigation.style.display = "none"; // Ocultar el modal si está visible y el ancho es >= 640px
    isModalVisible = false; // Cambia el estado a oculto
  }
});