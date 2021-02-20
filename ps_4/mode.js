const st=document.getElementById("St")

st.addEventListener('mouseenter', (e) =>{
    let p=document.getElementById("placeholder");
    let cantonMap=document.getElementById("canton");
    if(cantonMap){
        p.removeChild(cantonMap);
    }
    let el = document.createElement('img');
    el.setAttribute("src", 'canton.png');
    el.setAttribute("id", 'canton');
    p.append(el);
});

st.addEventListener('mouseleave', (e) =>{
    let p=document.getElementById("placeholder");
    let cantonMap=document.getElementById("canton");
    if(cantonMap){
        p.removeChild(cantonMap);
    }
});

document.getElementById("Normal").addEventListener('click', (e) =>
{
    for(let element of document.getElementsByTagName("header")){
        element.classList.remove('mode2', 'mode3');
    }
    for(let element of document.getElementsByTagName("h1")){
        element.classList.remove('mode2', 'mode3');
    }
    for(let element of document.getElementsByTagName("h2")){
        element.classList.remove('mode2', 'mode3');
    }
    for(let element of document.getElementsByTagName("h3")){
        element.classList.remove('mode2', 'mode3');
    }
    for(let element of document.getElementsByTagName("p")){
        element.classList.remove('mode2', 'mode3');
    }
    for(let element of document.getElementsByTagName("li")){
        element.classList.remove('mode2', 'mode3');
    }
    for(let element of document.getElementsByTagName("body")){
        element.classList.remove('mode2', 'mode3');
    }
    for(let element of document.getElementsByTagName("footer")){
        element.classList.remove('mode2', 'mode3');
    }
});

document.getElementById("Dark").addEventListener('click', (e) =>
{
    for(let element of document.getElementsByTagName("header")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode3');
    }
    for(let element of document.getElementsByTagName("h1")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode3');
    }
    for(let element of document.getElementsByTagName("h2")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode3');
    }
    for(let element of document.getElementsByTagName("h3")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode3');
    }
    for(let element of document.getElementsByTagName("p")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode3');
    }
    for(let element of document.getElementsByTagName("li")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode3');
    }
    for(let element of document.getElementsByTagName("body")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode3');
    }
    for(let element of document.getElementsByTagName("footer")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode3');
    }
});

document.getElementById("Light").addEventListener('click', (e) =>
{
    for(let element of document.getElementsByTagName("header")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode2');
    }
    for(let element of document.getElementsByTagName("h1")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode2');
    }
    for(let element of document.getElementsByTagName("h2")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode2');
    }
    for(let element of document.getElementsByTagName("h3")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode2');
    }
    for(let element of document.getElementsByTagName("p")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode2');
    }
    for(let element of document.getElementsByTagName("li")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode2');
    }
    for(let element of document.getElementsByTagName("body")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode2');
    }
    for(let element of document.getElementsByTagName("footer")){
        element.classList.remove('mode2', 'mode3');
        element.classList.add('mode2');
    }
});