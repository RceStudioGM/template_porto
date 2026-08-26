/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navigation =
    document.getElementById("navigation");


menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            navigation.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


/*
    Tutup menu setelah memilih
    navigation pada mobile.
*/

document
    .querySelectorAll(".navigation a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "visible"
                );

                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12,
            rootMargin:
                "0px 0px -45px 0px"
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.getElementById("cursor");

const cursorRing =
    document.getElementById("cursorRing");


let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left =
            `${mouseX}px`;

        cursor.style.top =
            `${mouseY}px`;

    }
);


/*
    Cursor ring bergerak sedikit
    lebih lambat sehingga terasa
    lebih smooth.
*/

function animateCursorRing() {

    ringX +=
        (mouseX - ringX) * 0.14;

    ringY +=
        (mouseY - ringY) * 0.14;

    cursorRing.style.left =
        `${ringX}px`;

    cursorRing.style.top =
        `${ringY}px`;

    requestAnimationFrame(
        animateCursorRing
    );

}


animateCursorRing();



/* =========================================================
   HOVER CURSOR
========================================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .interactive"
    );


interactiveElements.forEach(
    element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursor.classList.add(
                    "is-hover"
                );

                cursorRing.classList.add(
                    "is-hover"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursor.classList.remove(
                    "is-hover"
                );

                cursorRing.classList.remove(
                    "is-hover"
                );

            }
        );

    }
);



/* =========================================================
   MAGNETIC INTERACTION
========================================================= */

const magneticElements =
    document.querySelectorAll(
        ".magnetic"
    );


magneticElements.forEach(
    element => {

        element.addEventListener(
            "mousemove",
            event => {

                const rect =
                    element.getBoundingClientRect();

                const offsetX =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const offsetY =
                    event.clientY -
                    rect.top -
                    rect.height / 2;

                element.style.transform =
                    `translate(
                        ${offsetX * 0.10}px,
                        ${offsetY * 0.10}px
                    )`;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform = "";

            }
        );

    }
);



/* =========================================================
   BROKEN IMAGE FALLBACK
========================================================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.opacity = "0";

            }
        );

    });
