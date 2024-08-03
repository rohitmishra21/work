// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main-page-contaner"),
//   smooth: true,
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main-page-contaner", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },

//   pinType: document.querySelector(".main-page-contaner").style.transform
//     ? "transform"
//     : "fixed",
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();

var elems = document.querySelectorAll(".elem");

var page = document.querySelector("#page-2");

elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var img = e.getAttribute("data-img");
    page.style.backgroundImage = `url(${img})`;
  });
  e.addEventListener("mouseleave", function () {
    page.style.backgroundColor = "black";
    page.style.backgroundImage = "";
  });
});


function createDiv(width, height,imgurl) {
  const div = document.createElement("div");
  div.style.width = width + "px";
  div.style.height = height + "px";
  div.style.backgroundImage= `url(${imgurl})`
  div.style.backgroundPosition = "center"
  div.style.backgroundSize = "cover";

  div.className = "dynamic-div";
  return div;
}

async function addDivs() {
  const imgurl = [
  ]
  let data =  await fetch('https://api.unsplash.com/photos/?client_id=iGmvavLKSEOp__kzkYP6N6Z5-T_PQfBlnikcEHfmeSY')
  let json = await data.json()
  
  json.forEach(element => {
  let arrList = element.urls.full
  imgurl.push(arrList)
});

  const sizes = [
    {width: 300, height: 400  },
    {  width: 350, height: 400 },
    { width: 250, height: 380 },
    {width: 300, height: 400  },
    {  width: 350, height: 400 },
    {  width: 350, height: 400 },
    { width: 250, height: 380  },
    { width: 250, height: 380 },
    {width: 300, height: 400  },
    {  width: 350, height: 400 },
    {width: 300, height: 400  },
    {width: 300, height: 400  }, 
    {  width: 350, height: 400 },
    {width: 300, height: 400  },
    {width: 300, height: 400  },
    {  width: 350, height: 450 },
    { width: 350, height: 450 },
    {  width: 350, height: 400 },
    {width: 300, height: 400  },
    { width: 250, height: 380 },
    {width: 300, height: 400  },
    {  width: 350, height: 400 },
    { width: 250, height: 380 },
    {width: 300, height: 400  },

  ];

console.log(imgurl.length) 

  const container = document.querySelector(".dynamic-div");

  sizes.forEach(size => {
    const randomIndex = Math.floor(Math.random() * imgurl.length);
    const div = createDiv(size.width, size.height,imgurl[randomIndex]);
    container.appendChild(div);
  });
}

addDivs();

var btn = document.getElementById("btn")
var isClicked = false;

function cross() {
   btn.addEventListener("click", () => {
                if (isClicked) {
                    gsap.to(".left ul li", {
                        x: 0,
                        stagger: 0.4,
                        ease: "circ.out",
                        duration: 0.5,
                        delay: 0.5,
                        opacity: 0
                    });
                    gsap.to("#btn", {
                        rotate: 0
                    });
                } else {
                    gsap.to(".left ul li", {
                        x: -40,
                        stagger: 0.4,
                        ease: "circ.out",
                        duration: 0.5,
                        delay: 0.5,
                        opacity: 1
                    });
                    gsap.to("#btn", {
                        rotate: 45
                    });
                }
                isClicked = !isClicked;
            });
        }



cross()