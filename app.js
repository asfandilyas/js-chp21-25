//=== CHAPTER NO 21 - 25  ===//

//===Ques no 01 ==///

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName.concat( " " + lastName);
// alert("Hello " + " " + fullName)



//===Ques no 02 ===//
// var userMobile = prompt("favorite mobile phone model");
// document.write(`My favorite phone is: ${userMobile} <br /> lenght of String: ${userMobile.length}`)


//===Ques no 03 ==///

// let word = "Pakistani"
// document.write(`String: ${word} <br /> Index of 'n': ${word.indexOf("n")}`)

//==Ques no 04 ==///
// let word = "Hello World"
// document.write(`String: ${word} <br /> Last Index of 'l': ${word.lastIndexOf("l")}`)


//===Ques no 05 ===//
// var word  = "Pakistani";
// document.write(`Sring: ${word} <br/> Character at index "3" : ${word.charAt(3)}`)

//===Ques no 07 ===//
// var word = "Hyderabad"
// var replace = word.replace("Hyderabad" ,"Islamabad")
// console.log(replace)

//==Ques no 08 ==///

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, "&"  )
// console.log(replace)

//===Ques no 09 ==///

// var stringNum = "472"
// document.write("value: " + stringNum + "<br />" + "Type: " + typeof(stringNum))
// var num = parseInt(stringNum)
// document.write(` <br/>Value: ${num} <br/> Type:  ${typeof(num)}`)


//==Ques no 10 ==///


// var wordCap = prompt("Enter any words:");
// document.write(`User Input : ${wordCap} <br> UPPER CASE : ${wordCap.toUpperCase()}`)



//===Ques no 11 ===//

// var userInput = prompt("enter Any word");
// document.write(userInput.slice(0,1).toUpperCase() + userInput.slice(1,userInput.length).toLowerCase() )



//===Ques no 12 ==///

// var num = 35.36
// var string = num.toString().replace("." , "");
// document.write(`Number: ${num} <br> Result: ${string}`)


//===Ques no 13 ==///

// var names = prompt("UserName:")
// for(var i=0;i<names.length;i++){
//         if(names[i].charCodeAt() === 33 || names[i].charCodeAt() === 44 || names[i].charCodeAt() === 46 || names[i].charCodeAt() === 64 ){
//                 alert("Please enter a valid userName")}
//         }
// console.log(names)

///==Ques no 14 ==///

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("What you want to order:").toLowerCase();
// var indeNum = bakeryItems.indexOf(searchItem)
// console.log(indeNum)
// if(bakeryItems.indexOf(searchItem) !== -1){
//         document.write(`${searchItem} is Available at Index ${bakeryItems.indexOf(searchItem)} in our Bakery`)

// }

// else{
//         document.write(`${searchItem} is Not Available in our Bakery`)

// }


///==Ques no 15 ==///

// var password = prompt("Enter Password!");
// var pass_validation = /^[a-zA-Z0-9!$@]{1,}$/
// if(password !== ""){
//         if(!password.match(pass_validation)){
//                 alert("Please enter a valid Password")
//         }
//         else{
//                 alert("Password is Correct")
//         }

// }


// else{
//         alert("Please fill up password field")
// }

///////=============Question # 16 ======//////
// var university = "University of Karachi";
// var arr = university.split("")
// document.write(arr.join("<br />")  )


//===Ques no 17 ===//

// var user = prompt("enter word");
// document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.charAt(user.length-1))
// document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.slice(user.length-1))


/////******************************************///
