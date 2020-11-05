let selectedCategories = ""

const DOM ={
    // divs
    homePageDiv:document.querySelector("#homePageDiv"),  
    registerDiv: document.querySelector("#registerDiv"),
    loginDiv:document.querySelector("#loginDiv"),
    productsDiv:document.querySelector("#products-div"),


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

    // sign in elements
    userNameSignIn:document.querySelector("#userNameInput-signIn"),
    passwordSignIn:document.querySelector("passwordSignIn"),

    // register elements


}
// home page nav event
DOM.moveToHomePage.addEventListener("click", ()=>{
    DOM.homePageDiv.classList.remove("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.registerDiv.classList.add("hide")
 
    
})
// login nav event
DOM.moveToLogin.addEventListener("click", ()=>{
    DOM.loginDiv.classList.remove("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")

    
})
// register nav event
DOM.moveToRegister.addEventListener("click", ()=>{
    DOM.registerDiv.classList.remove("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")

})

