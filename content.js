const imageUrl = chrome.runtime.getURL("./assets/bezos.jpg");
const amazonUrl = chrome.runtime.getURL("./assets/amazon.jpg");
const amazonTransparentUrl = chrome.runtime.getURL("./assets/amazon_transparent.png");

const img = document.createElement("img");
img.src = imageUrl;
img.style.position = "fixed";
img.style.top = "0";
img.style.left = "0";
img.style.height = "100%";
img.style.opacity = "15%"; 

const url = window.location.href;
if (url.includes("amazon")) {
    img.style.zIndex = "0";
    img.style.pointerEvents = "none";

    img.style.width = "75%";
    img.style.marginLeft = "12.5%"
    img.style.marginRight = "12.5%"
    const real_page = document.getElementById('a-page')
    real_page.appendChild(img);
}

else if (url.includes("imdb")) {
    const img = document.createElement("img");
    img.src = amazonUrl;

    img.zIndex = "999"
    img.style.width = "100%";
    img.style.height = "100%";

    const logo = document.getElementById('home_img')
    logo.remove();
    const logo_box = document.getElementById('home_img_holder')
    logo_box.appendChild(img);
}

else if (url.includes("twitch")) {
    const img = document.createElement("img");
    img.src = amazonTransparentUrl;
    const logo_box = document.getElementsByClassName('tw-animated-glitch-logo')[0]
   logo_box.style.alignItems = "center";
   logo_box.style.display = "flex";
   logo_box.style.height = "100%"; 
   img.style.padding = '2%'
   logo_box.innerHTML = "";
    img.style.width = "100%";
    img.style.height = "100%";
   logo_box.appendChild(img);
}

else if (url.includes("wholefoods")) {
    const img = document.createElement("img");
    img.src = amazonTransparentUrl;
    const logo_box = document.getElementsByClassName('wfm-global-nav__logo')[0]
    logo_box.style.justifyContent = "center";
    logo_box.style.display = "flex";
    logo_box.innerHTML = "";
    img.style.width = "50%";
    img.style.padding = "5%"; 
    logo_box.appendChild(img)
}

// else if (url.includes("mgm")) {
//     const img = document.createElement("img");
//     img.src = amazonTransparentUrl;
//     const logo = document.querySelector('[aria-label="MGM Resorts Logo"]');
//     const logo_box = logo.parentElement
//     logo_box.innerHTML = "";
//     console.log(logo_box)
//     img.src = amazonTransparentUrl;

//     logo_box.appendChild(img);
// }

else {
    img.style.width = "50%";
    img.style.marginLeft = "25%"
    img.style.marginRight = "25%"
    img.style.zIndex = "-1";
    document.documentElement.appendChild(img);
}





