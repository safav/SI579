/*
I am using anime.js to create an animated text effect when the page loads as a intro.
I also used moment.js to help figure out when a cake would arrive if a order were placed on a certain day.
In addition I use bootstrap to help style the website.
*/

let textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    })
let input = document.getElementById("exampleFormControlInput1");
input.addEventListener("change", (e) => {
    document.getElementById("result").innerText = "It will arrive " + moment(e.target.value).add(10, 'days').calendar();
})

