// let name = "akram"
// let emil = "akram@gmail.com"
// let phone = 12345678911
// let password = 12345678




// if (name == "akram") {

//     if (emil== "akram@gmail.com") {
//         if (phone== 12345678911) {
//             if (password== 12345678) {
//                 console.log("ok")
//             }
//             else{
//                 console.log("wrongPassword")
//             }
//         }
//         else{
//             console.log("wrongPhone")
//         }
//     }
//     else{
//         console.log("wrongEmail")
//     }
// }
// else{
//     console.log("wrongName")
// }


let fullName = document.querySelector("#fullName")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let password =document.querySelector("#password")
let result = document.querySelector("h4")
let button = document.querySelector("button")


button.addEventListener("click",function(){


    if (fullName.value == "akram") {
        if (email.value == "akram@gmail.com") {
            // console.log("emailOk")
            if (phone.value == "12345678911") {
                // console.log("phoneOk")
                if (password.value == 12345678) {
                    console.log("log in done")
                    result.innerHTML ="Log in successful"
                    result.style.color ="green"
                    result.style.background ="white"


                }
                else{
                    console.log("wrongPassword")

                    result.innerHTML ="Wrong Password"
                    result.style.color ="red"
                }
            }
            else{
                console.log("wrongNumber")
                result.innerHTML ="Wrong Phone Number"
                result.style.color ="red"
            }
            
        }
        else{
            console.log("wrongEmil")
            result.innerHTML ="Wrong Email"
            result.style.color ="red"
        }
    }
    else{
        console.log("wrong ID Name")
        result.innerHTML ="wrong ID Name"
        result.style.color ="red"
        
    }


})