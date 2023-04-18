function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById('myDropdown');
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
};

// Chat

const dropdown = document.querySelector('.dropdown');
const dropdownBtn = dropdown.querySelector('.dropdown-btn');
const dropdownContent = dropdown.querySelector('.dropdown-content');

dropdown.addEventListener('mouseover', function () {
    dropdownContent.classList.add('show');
});

dropdown.addEventListener('mouseout', function (event) {
    if (!dropdown.contains(event.relatedTarget)) {
        dropdownContent.classList.remove('show');
    }
});
