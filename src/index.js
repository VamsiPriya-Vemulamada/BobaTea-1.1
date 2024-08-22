// screen width and height
// let availH = window.screen.availHeight;
// let availW = window.screen.availWidth;

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
// document.addEventListener("DOMContentLoaded", function() {
// const imageEl = document.getElementById("image");
// console.log(imageEl)
// const img = document.createElement("img")
// img.src = "";

// console.log(img.src)
// img.width = "300" ;
//  console.log(img.width)
//  img.height = "200";
// imageEl.appendChild(img);
// });
//Add EventListener
const topMenuLinks = topEl.querySelectorAll("a");
topEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.matches("a")) {
    return;
  }  
  console.log(e.target.textContent);
 topMenuLinks.forEach(item => {
      item.classList.remove("active");
    }  
  )
  e.target.classList.add("active")
}); 

// Adding Submenu Interaction
// const clickedLink = menuLinks.find(
//   (link) => link.text === e.target.textContent
// );
// if (e.target.classList.contains("active") && clickedLink.subLinks) {
//   subEl.style.top = "100%";
//   buildSubMenu(clickedLink.subLinks);
// } else {
//   if (!clickedLink.subLinks) {
//     subEl.style.top = "0";
//   }
 function buildSubMenu(subLinks) {
  //Clear the current contents of subMenuEl.
  subEl.innerHTML = "";
  //Iterate over the subLinks array, passed as an argument, and for each "link" object:
  subLinks.forEach((link) => {
    //Create an <a> element.
    const a = document.createElement("a");
    //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
    a.setAttribute("href", link.href);
    //Set the element's content to the value of the text property of the "link" object.
    a.textContent = link.text;
    //Append the new element to the subMenuEl.
    subMenuEl.appendChild(a);
  });
}



