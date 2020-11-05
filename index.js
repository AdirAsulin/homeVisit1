const DOM ={
    // divs
    homePageDiv:document.querySelector("#homePageDiv"),  
    registerDiv: document.querySelector("#registerDiv"),
    loginDiv:document.querySelector("#loginDiv"),
    FrozenDiv:document.querySelector("#FrozenDiv"),
    vegetablesDiv:document.querySelector("#vegetablesDiv"),
    cannedFoodDiv:document.querySelector("#cannedFoodDiv"),
    butcherFoodDiv:document.querySelector("#butcherFoodDiv"),
    dairyDiv:document.querySelector("#dairyDiv"),

    // nav elements
    logout:document.querySelector("#logout-nav"),
    searchInputNav:document.querySelector("#searchInput-nav"),
    searchBtnNav:document.querySelector("#searchBtn-nav"),
    // move To
    moveToHomePage:document.querySelector("#move-to-homePage"),
    moveToRegister:document.querySelector("#move-to-register"),
    moveToLogin:document.querySelector("#move-to-login"),
    moveToFrozen:document.querySelector("#move-to-frozen"),
    moveToVegetables:document.querySelector("#move-to-vegetables"),
    moveToCannedFood:document.querySelector("#move-to-cannedFood"),
    moveToButcherShop:document.querySelector("#move-to-butcherShop"),
    moveToDairyProducts:document.querySelector("#move-to-dairyProducts"),

}
// home page nav event
DOM.moveToHomePage.addEventListener("click", ()=>{
    DOM.homePageDiv.classList.remove("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.FrozenDiv.classList.add("hide")
    DOM.vegetablesDiv.classList.add("hide")
    DOM.cannedFoodDiv.classList.add("hide")
    DOM.butcherFoodDiv.classList.add("hide")
    DOM.dairyDiv.classList.add("hide")
    
})
// login nav event
DOM.moveToLogin.addEventListener("click", ()=>{
    DOM.loginDiv.classList.remove("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.FrozenDiv.classList.add("hide")
    DOM.vegetablesDiv.classList.add("hide")
    DOM.cannedFoodDiv.classList.add("hide")
    DOM.butcherFoodDiv.classList.add("hide")
    DOM.dairyDiv.classList.add("hide")
    
})
// register nav event
DOM.moveToRegister.addEventListener("click", ()=>{
    DOM.registerDiv.classList.remove("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.FrozenDiv.classList.add("hide")
    DOM.vegetablesDiv.classList.add("hide")
    DOM.cannedFoodDiv.classList.add("hide")
    DOM.butcherFoodDiv.classList.add("hide")
    DOM.dairyDiv.classList.add("hide")
})
// frozen nav event
DOM.moveToFrozen.addEventListener("click", ()=>{
    DOM.FrozenDiv.classList.remove("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.vegetablesDiv.classList.add("hide")
    DOM.cannedFoodDiv.classList.add("hide")
    DOM.butcherFoodDiv.classList.add("hide")
    DOM.dairyDiv.classList.add("hide")
})
// vegetables nav event
DOM.moveToVegetables.addEventListener("click", ()=>{
    DOM.vegetablesDiv.classList.remove("hide")
    DOM.FrozenDiv.classList.add("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.cannedFoodDiv.classList.add("hide")
    DOM.butcherFoodDiv.classList.add("hide")
    DOM.dairyDiv.classList.add("hide")
})
// canned food nav event
DOM.moveToCannedFood.addEventListener("click", ()=>{
    DOM.cannedFoodDiv.classList.remove("hide")
    DOM.FrozenDiv.classList.add("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.vegetablesDiv.classList.add("hide")
    DOM.butcherFoodDiv.classList.add("hide")
    DOM.dairyDiv.classList.add("hide")
})
// butcher food nav event
DOM.moveToButcherShop.addEventListener("click", ()=>{
    DOM.butcherFoodDiv.classList.remove("hide")
    DOM.FrozenDiv.classList.add("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.vegetablesDiv.classList.add("hide")
    DOM.cannedFoodDiv.classList.add("hide")
    DOM.dairyDiv.classList.add("hide")
})
// dairy nav event
DOM.moveToDairyProducts.addEventListener("click", ()=>{
    DOM.dairyDiv.classList.remove("hide")
    DOM.FrozenDiv.classList.add("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.vegetablesDiv.classList.add("hide")
    DOM.cannedFoodDiv.classList.add("hide")
    DOM.butcherFoodDiv.classList.add("hide")
})





