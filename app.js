
const buttons = document.querySelectorAll('.ratingButton');
const submitButton = document.querySelector('#submitButton')
const resultspan = document.querySelector('#result')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        e.preventDefault();
        // clear every other button color
        ClearColor();
        // change clicked button's background color to orange and text color to white
        this.classList.add('active');

    });
}
// clear every other button color
function ClearColor() {
    for (let j = 0; j < buttons.length; j++) {
        if (buttons[j].classList.contains('active')) {
            buttons[j].classList.remove('active');
        }
    }
}
//submitButton click
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    // check if any button has class active
    var active = document.querySelector(".ratingButton.active");
    if (active) {
        let btnValue = active.value;
        resultspan.append(btnValue);
        modal.classList.add("show");
        mainBox.classList.add("hidden");
    }
});