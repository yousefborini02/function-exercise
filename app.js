// let number = "548752";
// let newNumber="" ;

// for(let i=number.length-1 ; i>=0 ; i--)
//     {
//         newNumber=newNumber+number[i];
//     }
//     console.log(parseInt(newNumber));



   
//Q1

// function reverseNumber (number)
//     {

//         number = number.toString();
//         let reverseNum="" ;
//         for(let i=number.length-1 ; i>=0 ; i--)
//             {
//                 reverseNum+=number[i];
//             }
//             return reverseNum; 
//     }
//    console.log(reverseNumber(59847625));

//---------------------------------------------------------------------------------------------------------

//Q2 

// function evenOdd(number)
// {
//     if(number%2==0)
//         console.log("Even");
//     else
//         console.log("Odd");
// }

// evenOdd(7);

//---------------------------------------------------------------------------------------------------------

//Q3 

// function alphabeticalOrder(text)
// {
//     let sortingText = text.split("").sort().join("");
//     return sortingText;
// }

// let text="fkdlkduaaa";
// console.log(alphabeticalOrder(text));

//---------------------------------------------------------------------------------------------------------

//Q4 

// function addingDashBetweenEvens(number)
// {
//   let textNumber = number.toString();
//   for(let i=0;i<textNumber.length;i++)
//       {
        
//         if(parseInt(textNumber[i])%2==0 && parseInt(textNumber[i+1])%2==0)
//             {
//                 let start=textNumber.slice(0,i);
//                 let end= textNumber.slice(i+1);
//                 let arr=textNumber.split("").slice(i,i+1);
//                 arr.push("-");
//                 arr=arr.join("");
//                 textNumber=start+arr+end;

//             }
//       }

//       return textNumber;
// }

// console.log(addingDashBetweenEvens(52146578633248));

//---------------------------------------------------------------------------------------------------------

//Q5 

// function ageChecker(age)
//   {
//     return age>=18 ? "The user is Adult": "The user is Minor" ;
//   }

//  console.log( ageChecker(18) );






