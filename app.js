gamburgerBtn.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });

function burgerMenu(icon) {
    icon.classList.toggle("change");
}