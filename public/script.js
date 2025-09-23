// window loading after animation and intractive
window.addEventListener("load", () => {

    
// Gsap animation for mobile responisve menu-bar
function menu() {
    var tl = gsap.timeline()

    tl.to("#menu-bar", {
        right: 0,
        duration: 0.4,
    })

    tl.from("#menu-bar h3", {
        x: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.3,
    })

    tl.from("#menu-bar i", {
        opacity: 0
    }, "=-1")

    tl.pause()

    // Dom js
    // menu button
    const menu = document.getElementById("#menu")
    // elements button
    const elements = document.querySelectorAll("#menu-bar, #cross, h3, a")

    menu.addEventListener("click", () => {
        tl.play()
    })

    elements.forEach(el => {
        el.addEventListener("click", () => {
            tl.reverse()
        })
    })

}
menu()

// changing the roles
function changing_role() {
    var typed = new Typed(".role", {
        strings: ["UI & UX Designer", "Frontend Developer", "Backend Developer", "Fullstack Developer"],
        typedSpeed: 100,
        backSpeed: 150,
        loop: true,
        delay: 100
    })
}
changing_role()


// Gsap animation
// home
function home() {
    function navbar() {
        var tl = gsap.timeline()

        tl.from(".header-section h1", {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: 0.2,
        })

        tl.from(".nav-bar h3", {
            opacity: 0,
            y: 30,
            duration: 0.3,
            stagger: 0.2
        })
    }

    navbar()

    function content() {
        var tl1 = gsap.timeline()

        tl1.from(".intro", {
            y: -30,
            opacity: 0,
            duration: 0.4,
            delay: 1
        }, "anime")

        tl1.from("#up", {
            y: 30,
            opacity: 0,
            duration: 0.4,
            delay: 1
        }, "anime")

        tl1.from(".introdution h2", {
            opacity: 0,
            x: 50,
            duration: 0.5
        }, "left")


        tl1.from(".introdution p", {
            x: -50,
            opacity: 0,
            duration: 0.5
        }, "left")

        tl1.from(".social-links a", {
            opacity: 0,
            duration: 0.2,
            stagger: 0.2
        })

        tl1.from(".btns a", {
            opacity: 0,
            duration: 0.3,
        })
    }

    content()

    function leftimage() {
        var tl2 = gsap.timeline()

        tl2.from(".hero-bottom-bar", {
            opacity: 0,
            x: -100,
            duration: 0.5,
            delay: 0.8
        })

        tl2.from(".hero img", {
            opacity: 0,
            y: 100,
            duration: 1,
        })

    }

    leftimage()

}
home()


// about
function about() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            scroller: "body",
            start: "top 70%",
            // end:"top 11%",
            // scrub:4,
        }
    })

    tl.from(".page2-left li .para", {
        opacity: 0,
        y: 50,
        stagger: 0.5,
    })

    tl.from(".social-img a", {
        y: 30,
        opacity: 0,
        stagger: 0.3,
    })

    tl.from(".page2-right img", {
        x: 100,
        opacity: 0,
        duration: 1,
    }, "-=2")
}
about()


// skills
function skills() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills",
            scroller: "body",
            start: "top 50%",
        }
    })

    tl.from(".page3-left h3", {
        x: -50,
        opacity: 0,
        stagger: 0.3
    })

    tl.from(".page3-left ul li", {
        opacity: 0,
        y: 20,
        stagger: 0.4,
    })

    tl.from(".cards .image img", {
        opacity: 0,
        stagger: 0.2
    }, "=-2.5")

    document.querySelectorAll(".bar-fill").forEach(bar => {
        let percent = bar.getAttribute("data-percent");
        tl.to(bar, {
            width: percent + "%",
            duration: 1.5,
            ease: "power2.out"
        }, "=-1.5");
    });
}
skills()


// contact
function contact() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact",
            scroller: "body",
            start: "top 65%",
        }
    })

    tl.from(".page4-left img", {
        opacity: 0,
        duration: 2,
    })
}
contact()


// service
function service() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".service",
            scoller: "body",
            start: "top 50%"
        }
    })

    tl.from(".card", {
        opacity: 0,
        y: 20,
        stagger: 0.5
    })

    gsap.from(".greetings", {
        scrollTrigger: {
            trigger: ".greetings",
            scroller: "body",
            start: "top 80%",
        },
        opacity: 0,
        duration: 1
    })

}
service()


// activate nav bar
function activate() {

    // select all nav links and sections
    const sections = document.querySelectorAll("main");
    const navLinks = document.querySelectorAll(".nav-bar a");

    // click part
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Highlight on scroll
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // adjust for navbar height
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
}
activate()

})


// sendMail
function sendMail() {
    // take inputs
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // validation
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill all input fields before submit the form !!!")
        return
    }

    // parms for EmailJS
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

    // send Email using EmailJS
    emailjs.send("service_vnyaf6o", "template_c0ss1wt", parms).then(() => {
        alert("Message Sent Successfully.")
        document.getElementById("mailBox").reset()  //clear inputs
    })
        .catch((error) => {
            alert("Failed to send!" + JSON.stringify(error))
        })
}   















