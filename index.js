const characters = ["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
     "`","!","@","#","$","%","^","&","*","(",")","_","-","+",
     "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];

let password1El = document.querySelector("#password1-el")
let password2El = document.querySelector("#password2-el")
let password = false
function generatePassword() {
    if (password === false) {
        let password1 = " "; //设置变量初始值
        let password2 = " ";    
        //每次循环生成1个随机字符，共八次循环
        for (let i = 0; i < 15; i ++) {                         
            let password1ElIndex = Math.floor(Math.random() * characters.length)
            let password2ElIndex = Math.floor(Math.random() * characters.length)
            //把每次循环的字符累加
            password1 += characters[password1ElIndex]
            password2 += characters[password2ElIndex]
            }
        password1El.textContent = password1
        password2El.textContent = password2
        password = true     
    }
}



