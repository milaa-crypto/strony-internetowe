"use strict";
let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let description = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function() {

    let isHero = document.body.classList.contains("hero");

    if (isHero) {
        document.body.classList.replace("hero", "villain");
        name.textContent ="Nyx Hollow 🤍🎀";
        description.textContent = "cutie 🎀";
        avatar.src = "https://api.dicebear.com/10.x/gaze/svg?seed=Erik";
    }
    else {
       document.body.classList.replace("villain", "hero");
       name.textContent ="John Doe";
       description.textContent = "Tryb: Hero";
       avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix";
    }
});