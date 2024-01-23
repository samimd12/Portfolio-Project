document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    if (e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.parentNode.tagName === 'BUTTON') {

    } else {
        circle.classList.remove('big');
    }

    setTimeout(() => {
        circle.style.left = `${e.pageX - width / 2}px`;
        circle.style.top = `${e.pageY - height / 2}px`;
    }, 20);
})


const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'

})

let divPro = document.querySelector('.pro')

async function fetchAppData() {
    let response = await fetch('project.json')
    let data = await response.json();
    data.projects.forEach(value => {
        // Creting maindiv
        let projectphoto = document.createElement('div')
        projectphoto.classList.add('projectphoto')
        divPro.appendChild(projectphoto)

        // Creating image tag
        let img = document.createElement('img')
        img.src = value.img;
        projectphoto.appendChild(img)

        // sub div
        let innerDiv = document.createElement('div')
        innerDiv.classList.add('innerDiv')
        projectphoto.appendChild(innerDiv)

        //Project name
        let project_name = document.createElement('h3')
        project_name.innerHTML = value.project_name
        innerDiv.appendChild(project_name)

        // link div
        let link = document.createElement('div')
        link.classList.add('link')
        innerDiv.appendChild(link)

        // Links
        let btn = document.createElement('button')
        btn.classList.add('btn')
        link.appendChild(btn)
        let btn2 = document.createElement('button')
        btn2.classList.add('btn')
        link.appendChild(btn2)

        let ancher = document.createElement('a')
        ancher.href = value.Gitlink
        ancher.target = "_blanks"
        btn.appendChild(ancher)

        let ancher2 = document.createElement('a')
        ancher2.href = value.NetlifyLink
        ancher2.target = "_blanks"
        btn2.appendChild(ancher2)
        // img Git
        let gitimg = document.createElement('img')
        gitimg.src = value.Gitimg
        ancher.appendChild(gitimg)

        let netimg = document.createElement('img')
        netimg.src = value.Netimg
        ancher2.appendChild(netimg)


        // let gitIcon= document.createElement('i')
        // gitIcon.classList.add('fa-brands', 'fa-github')
        // ancher.appendChild(gitIcon)

    });

}
fetchAppData()

let ham = document.querySelector('.hamburger')
let input = document.querySelector('#check')
let navham = document.querySelector('.nav-ham')

ham.addEventListener('click',()=>{
    if(input.checked){
        navham.style.top = "12%"
    }
    else{
        navham.style.top = "-112%"
    }
})
let preloader = document.querySelector('.preloader')
window.addEventListener('load', function (){
    preloader.style.display = "none"
})