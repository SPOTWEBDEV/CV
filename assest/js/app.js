
// delay 
const wait = function (sec) {
    return new Promise(resolve => {
        setTimeout(resolve, 1000 * sec);
    });
};


// SKILL
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    let skill = document.querySelector('.titleone')

    let currentScrollPos = window.pageYOffset;

    let skill_point = skill.getBoundingClientRect().top


    if (currentScrollPos > 1874 && currentScrollPos < 2024) {
        new Skill()
    }
}

class Skill {

    constructor() {
        this.long = document.querySelectorAll('.long')
        this.count = 0
        this.total = 100
        this.html5()
    }
    html5() {
        let children = this.long[0].children
        let score = this.long[0].parentElement.children[0].children[1]
        let timer = setInterval(() => {
            if (this.count < 90) {
                this.count++
                children[0].style.width = this.count + '%'
                score.innerHTML = `${this.count} %`
            } else {
                clearInterval(timer)
                this.count = 0
                this.css()
            }
        }, 10);
    }
    css() {
        let children = this.long[1].children
        let score = this.long[1].parentElement.children[0].children[1]
        let timer = setInterval(() => {
            if (this.count < 95) {
                this.count++
                children[0].style.width = this.count + '%'
                score.innerHTML = `${this.count} %`
            } else {
                clearInterval(timer)
                this.count = 0
                this.javascript()
            }
        }, 10);
    }
    javascript() {
        let children = this.long[2].children
        let score = this.long[2].parentElement.children[0].children[1]
        let timer = setInterval(() => {
            if (this.count < 98) {
                this.count++
                children[0].style.width = this.count + '%'
                score.innerHTML = `${this.count} %`
            } else {
                clearInterval(timer)
                this.count = 0
                this.php()

            }
        }, 10);
    }
    php() {
        let children = this.long[3].children
        let score = this.long[3].parentElement.children[0].children[1]
        let timer = setInterval(() => {
            if (this.count < 98) {
                this.count++
                children[0].style.width = this.count + '%'
                score.innerHTML = `${this.count} %`
            } else {
                clearInterval(timer)
                this.count = 0
                this.node()

            }
        }, 10);
    }
    node() {
        let children = this.long[4].children
        let score = this.long[4].parentElement.children[0].children[1]
        let timer = setInterval(() => {
            if (this.count < 80) {
                this.count++
                children[0].style.width = this.count + '%'
                score.innerHTML = `${this.count} %`
            } else {
                clearInterval(timer)
                this.count = 0
                this.bootstrap()

            }
        }, 10);
    }
    bootstrap() {
        let children = this.long[5].children
        let score = this.long[5].parentElement.children[0].children[1]
        let timer = setInterval(() => {
            if (this.count < 80) {
                this.count++
                children[0].style.width = this.count + '%'
                score.innerHTML = `${this.count} %`
            } else {
                clearInterval(timer)
                this.count = 0
                this.react()
            }
        }, 10);
    }
    react() {
        let children = this.long[6].children
        let score = this.long[6].parentElement.children[0].children[1]
        let timer = setInterval(() => {
            if (this.count < 70) {
                this.count++
                children[0].style.width = this.count + '%'
                score.innerHTML = `${this.count} %`
            } else {
                clearInterval(timer)
            }
        }, 10);
    }
}


class Events {
    constructor() {
        // nav bar
        this.createNav()
        this.createFooter()
        this.bar = document.querySelector('.site-navbar-icon > i')
        this.bar.addEventListener('click', () => {
            this.toggel(this.bar)
        })
        // contact button

        this.contact_btn = document.querySelector('.contact_btn')
        this.contact_btn.addEventListener('click', (event) => {
            event.preventDefault()
            this.contactUs()
        })
        // blog

        this.blog = document.querySelectorAll('.blog-box')
        this.blog.forEach(elm => {
            elm.addEventListener('mouseover', () => this.addTime(elm.children[3]))
            elm.addEventListener('mouseout', () => this.removeTime(elm.children[3]))
        })

        this.service = document.querySelectorAll('.box-holder button')
        this.service.forEach(elm => {
            elm.addEventListener('click', () => this.transferingContactDetail(elm))
        })

        this.readtransferingContactDetail()
    }

    createNav() {
        const nav = document.querySelector('nav');
        nav.innerHTML = `  
        <div class="site-info">
        <div class="site-logo">
          <i class="fab fa-atlassian"></i>
        </div>
        <div class="site-menu">
          <a href="#font-page">home</a>
          <a href="#">about</a>
          <a href="#service">service</a>
          <a href="#skill">skill</a>
          <a href="#">portfolic</a>
          <a href="#blog">blog</a>
          <a href="#contact">contact</a>
        </div>
        <div class="site-navbar-icon">
          <i class="fas fa-bars"></i>
        </div>
      </div>
        `
    }
    createFooter() {
        const footer = document.querySelector('.footer')
        footer.innerHTML = `
         <p>CREATED AND  OWN BY @ SPOTWEB IN THE YEAR 2023</p>
        
        `
    }

    toggel(bar) {
        const menu = document.querySelector('.site-menu')
        const a = document.querySelectorAll('.site-menu > a')
        if (bar.classList.contains('fa-bars')) {
            bar.classList.remove('fa-bars')
            bar.classList.add('fa-times')
            menu.classList.add('active')
            a.forEach(elm => {
                elm.classList.add('active')
                elm.addEventListener('click', () => {
                    menu.classList.remove('active')
                    elm.classList.remove('active')
                    bar.classList.add('fa-bars')
                    bar.classList.remove('fa-times')
                })
            })
        } else {
            bar.classList.add('fa-bars')
            bar.classList.remove('fa-times')
            menu.classList.remove('active')
            a.forEach(elm => {
                elm.classList.remove('active')
            })
        }
    }
    contactUs() {
        const name = document.querySelector('.name').value
        const email = document.querySelector('.email').value
        const message = document.querySelector('.message').value
        const error_message = document.querySelector('.error-message')
        error_message.innerHTML = '';
        try {
            if (name != '' && name != undefined && name != null) {
                if (email != '' && email != undefined && email != null) {
                    if (message != '' && message != undefined && message != null) {
                        throw `HELLO ${name.toUpperCase()} YOUR MESSAGE WAS SENT SUCCESSFULLY`;
                    } else {
                        throw 'MESSAGE INPUT IS EMPTY';
                    }
                } else {
                    throw 'EMAIL INPUT IS EMPTY';
                }
            } else {
                throw 'NAME INPUT IS EMPTY';
            }
        }catch (error) {
            error_message.classList.add('active')
            let error_text = document.createElement('p')
            error_text.classList.add('error_text')
            error_text.innerHTML = error
            error_message.appendChild(error_text);
            setTimeout(() => {
                error_message.classList.remove('active')
            }, 3000)
        }
    }
    addTime(elm) {
        elm.classList.add('active')
    }
    removeTime(elm) {
        elm.classList.remove('active')
    }

    transferingContactDetail(elm) {
        const word = elm.previousElementSibling.previousElementSibling.innerHTML
        let url = new URLSearchParams()
        url.append('detail', word)
        let href = 'contact.html?' + url.toString()
        window.open(href, '_self')
    }
    readtransferingContactDetail() {
        let url = new URLSearchParams(location.search)
        let word = url.get('detail')
        if (word != null) {
            if (location.pathname == '/contact.html') {
                const message = document.querySelector('.message-box')
                message.innerHTML = `ASPIRED TO BUILD ${word.toUpperCase()} OR LEARN` //
            } else {
                window.open('index.html', '_self')
            }
        } else {
            if (location.pathname != '/index.html') window.open('index.html', '_self')
        }
    }
}


const clicks = new Events()
console.log(clicks);




