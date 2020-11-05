let selectedCategories = ""

const DOM ={
    // divs
    homePageDiv:document.querySelector("#homePageDiv"),  
    registerDiv: document.querySelector("#registerDiv"),
    loginDiv:document.querySelector("#loginDiv"),
    productsDiv:document.querySelector("#products-div"),
    successRegisterDiv:document.querySelector("#successRegisterDiv"),


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
    passwordSignIn:document.querySelector("#passwordSignIn"),

    // register elements
    firstNameRegister:document.querySelector("#firstName-Register"),
    lastNameRegister:document.querySelector("#lastName-Register"),
    emailRegister: document.querySelector("#email-register"),
    passwordRegister:document.querySelector("#password-register"),
    passwordConfirmationRegister:document.querySelector("#passwordConfirmation-register"),
    registerBtn:document.querySelector("#registerBtn"),
    registerErrorMessage:document.querySelector("#registerErrorMessage")
    
}
console.log(DOM)

const users = JSON.parse(localStorage.getItem("users")) || []


function register({email,password,name}) {
    users.push({
        id:Math.random()*9999,
        email,
        password,
        name
    })
    localStorage.setItem("users",JSON.stringify(users))
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
    DOM.successRegisterDiv.classList.add("hide")

})
function checkIfUserExist(email) {
    console.log(email)
    return users.find((user)=>user.email===email)
}

DOM.registerBtn.addEventListener("click",()=>{
    
    const{
        firstNameRegister,
        lastNameRegister,
        emailRegister,
        passwordRegister,
        passwordConfirmationRegister,
        registerErrorMessage,
        successRegisterDiv
    }=DOM
    
    successRegisterDiv.classList.add("hide")

    if (!firstNameRegister.value|| !lastNameRegister.value || !emailRegister.value || !passwordRegister.value || !passwordConfirmationRegister.value) {
        registerErrorMessage.innerHTML = "please enter all fields"
        console.log("please enter all fields");
        return
    }
    if (passwordRegister.value !== passwordConfirmationRegister.value) {
        registerErrorMessage.innerHTML = "password doesn't match"
        console.log("password doesn't match");
        return
    }
    const isExists = checkIfUserExist(emailRegister.value)
    console.log(isExists)
    if (isExists) {
        registerErrorMessage.innerHTML = "email is already in use"
        console.log("email is already in use");
        return
    }
    register({
        email:emailRegister.value,
        password: passwordRegister.value ,
        name: `${firstNameRegister.value} ${lastNameRegister.value}`,
    })
    registerErrorMessage.innerHTML = ""
successRegisterDiv.classList.remove("hide")
})






