     // ------ 1. City Name ------

var cityname = prompt("Enter Your City Name")

if(cityname == "karachi")

alert("Welcome to city Of Light")

else if(cityname == "Islamabad")

alert("City Of Brand")

else if(cityname == "Lahore")

alert("City Of Nice")

else{
    alert("City Is Not Found")

}

      //    ------ 2. Gender -------


  var Gender = prompt("Enter Your Gender")

  if(Gender == "male")

  alert("Good Morning Sir.")

  else if(Gender == "Female"){
    alert("Good Morning Ma,am.")
  }
  else{
     alert("Welcome To Others")
  }


        //    ------ 3. Traffic Signal ------


   var colorsroad = prompt("color of road traffic signal")

   if(colorsroad == "red")

   document.write("Must Stop")

   if(colorsroad == "Yellow")

   document.write("Ready to move")

   if(colorsroad == "Green")

   document.write("Move now")
    else{
        document.write("This Is A Not Traffic signal color")
    }


        //   ------ 4. car in litres ------- 


var remainingFuel = Number(prompt("Enter remaining fuel in Liters..."));

if(remainingFuel  < 0.25) {
   document.write("“Please refill the fuel in your car”");
}else{
    document.write("You have Enough Fuel In Your Car");
}


        // ------ 5. True OR False ------
 

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
  // given condition is troue

  var b = 82;
  if (b++ === 83){
  alert("given condition for variable b is true");
  }
  //  given condition is false



var c = 12;
if (c++ === 13){
alert("condition 1 is troue");
}
//  given condition is false


if (c === 13){
  alert("condition 2 is true");
  }
  //  given condition is troue 


  if (++c < 14){
    alert("condition 3 is true");
    }
    // given condition is false


    if(c === 14){
      alert("condition 4 is true");
      }
      // given condition is troue


      var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
  //  given condition is troue


  var user = Number(prompt ("50-40 = ?"))
  a = 10
  
  if (user === a){
    alert("True");
    }
    if (user != a){
    alert("False");
    }


  var Car = Number(prompt ("Enter car Long"))
  var Cat = Number(prompt ("Enter cat Long"))

  if(Car < Cat){
    alert("car is smaller than cat");
    }
    if(Car > Cat){
      alert("car is bigger than cat");
      }


  
     //  ------ 6. Marks Sheet ----- 


  var english = Number(prompt("enter your english marks"))
  var urdu = Number(prompt("enter your urdu marks"))
  var math = Number(prompt("enter your math marks"))

  var totalnum = 300
  var obtaindnum = english + urdu + math;
  var percentage = (obtaindnum / totalnum) * 100;

  document.write("<h1>MARK SHEET</h1>")
  document.write("total marks :", totalnum,"<br><br>")
  document.write("obtaindnum marks :", obtaindnum,"<br><br>")
  document.write("Percentage :"+ percentage + "%" + "<br><br>")

  if(percentage >=80){
    document.write("Grade: A-one" + "<br><br>")
  document.write("Remarks: Exlent" + "<br><br>")

  }else if(percentage <=79 && percentage >=70){
    document.write("Grade: A" + "<br><br>")
    document.write("Remarks: Good" + "<br><br>")

  }else if(percentage <=69 && percentage >=60){
    document.write("Grade: B" + "<br><br>")
    document.write("Remarks: You need to inprove" + "<br><br>")

  }else if(percentage <=60){
    document.write("Grade: Fail" + "<br><br>")
    document.write("Remarks: Sorry you work hard" + "<br><br>")
  }


  
//    ------- 7. Guess game: ------

var inputNumber = 6;
var guessNumber = Number(prompt("please guess any Number 1 to 6"))

if(guessNumber === inputNumber){
  alert("Bingo! Corret answer")
}else if(guessNumber == inputNumber +1 || guessNumber == inputNumber -1){
  alert("Close enough to the correct answer.")
}else{
  alert("wrong answer")
}


      // -------- 8. Given Number --------
     

var userinput = Number(prompt("Write a check the given number isdivisible by 3.")) 

if(userinput % 3 == 0){
  alert("given number devided by 3")
}else{
  alert("given number can not devided by 3")
}



       // ------- 9. Even Number -------


var userinput = Number(prompt("Write a check the given input even number")) 

if(userinput % 2 == 0){
  alert("given number is even")
}else{
  alert("given number is odd")
}


    //  ------- 10. Weather temperature --------

    var temperature = Number (prompt ("Enter the temperature in Celsius"))

    if(temperature >=40){
      document.write("It is too hot outside.")
    }

    else if(temperature <=39 && temperature >=30){
      document.write("The Weather today is Normal.")
    }
    
    else if(temperature <=29 && temperature >=20){
      document.write("Today’s Weather is cool.")
    }

    else if(temperature >=0 && temperature <=19){
      document.write("OMG! Today’s weather is so Cool.")
    }

    

 // ------- 11. create a calculator --------


var num1 = Number(prompt("Enter your first Number"));
var num2 = Number(prompt("Enter your secend Number"));

var oper = prompt("Enter your operater");

if(oper === "+"){
    alert(num1+num2)
}else if(oper === "-"){
    alert(num1-num2)
}else if(oper === "*"){
    alert(num1*num2)
}else if(oper === "/"){
    alert(num1/num2)
}else if(oper === "%"){
    alert(num1/num2*100)
}


 


   

   







 








