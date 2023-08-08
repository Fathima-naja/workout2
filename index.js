//1) program to reverse each word in a string
// let str="hello"
// a=str.split("")
// b=a.reverse()
// c=b.join()
// console.log(c)

//2)program to return the length of largest word in a  string---
// let str=prompt("enter a sentence")
// a=str.split(" ")
// console.log(a)
// big=a[0].length
// for(i=1;i<a.length;i++){
//     if(big<a[i].length){
//         big=a[i].length
       

//     }
// }
// console.log(big)


//3)program to return largest number from each array inside an array---
let arr=[[1,3,2],[4,6,5],[7,8]]

let k=[]
let large=arr[0][0]
for(let i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if(large<arr[i][j]){
            large=arr[i][j]
        }
    
        
    }
    k.push(large)
large=0
}

console.log(k)

// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//         if(arr[i][j]>arr[i][j+1]&&arr[i][j]>arr[i][j+2]){
//             let a=arr[i][j]
//             console.log(a)
//         }
//         else if(arr[i][j+1]>arr[i][j]&&arr[i][j+1]>arr[i][j+2]){
//             a=arr[i][j+1]
//             console.log(a)
//         }
//         else{
//             a=arr[i][j+2]
//             console.log(a)
//         }
//     }
// }

// console.log("largest number in the first array is:" +a)





//4)factorial of a number using recurssion
// function factorial(n){
    
//     rec=1
//     for(let i=1;i<=n;i++){
//         rec=rec*i
//     }
    
//     if(n>0){
//         factorial(5)
//         console.log(rec)
//     }
//     else{
//         console.log("its a negative number")
//     }
// }

// function factorial(x){
//     if(x==0){
//         return 1
//     }
//     else{
//         return x*factorial(x-1)
//     }
// }
// let num=parseFloat(prompt("enter a number"))
// if(num>=0){
//     result=factorial(num)
//     console.log("factorial of " +num+":"+result)
// }

//5)program to add an element in ana array at specified index position
// let arr = [1, 2, 3, 4, 5];

//  arr[3]=45
    
     
//     console.log(arr);



//6)print number pattern


// let n = 5; 
// let string = "";

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);





