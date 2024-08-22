// screen width and height
let availH = window.screen.availHeight;
let availW = window.screen.availWidth;

// creating a main element, the default navigation bar
const mainEl = document.querySelector("main")
//background color for main bar
mainEl.style.backgroundColor = "red";
// adding the main heading element
mainEl.innerHTML = "<h1> Boba Tea </h1>";
// setting the height of the element
mainEl.style.height ="100px";
// text alignment
mainEl.style.textAlign = "center";
mainEl.setAttribute("class", "flex-ctr");

// creating a main element, the default navigation bar
const topEl = document.getElementById("sub-menu");
//background color for main bar
topEl.style.backgroundColor = "pink";

// setting the height of the element
topEl.style.height ="50px";
// text alignment
topEl.style.textAlign = "center";
topEl.setAttribute("class", "flex-around");

// choosing flex as we need about, menu, contactus, accounts
var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "/about",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "menu",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
]

menuLinks.forEach(item => {
    const a = document.createElement("a");
    a.setAttribute("href", item.href);
    a.textContent = item.text;
    topEl.appendChild(a);
});

// Adding interactivity of sub sub menus

const subEl = document.getElementById("sub- sub-menu");
subEl.style.height = "100%";
subEl.style.backgroundColor = "pink";
subEl.setAttribute("class", "flex-around");
subEl.style.position = "absolute";
subEl.style.top = 0;// Grabbing all topMenuEl <a> elements
const topMenuLinks = document.querySelectorAll("a");


