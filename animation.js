const section = document.querySelector('.page02');

function bgChange() {
    console.log(section);
    if (this.scrollY > this.innerHeight / 2) {
        section.classList.add('bg-active');
    } else {
        section.classList.remove('bg-active');
    }
}

module.exports.bgChange = BGChange;