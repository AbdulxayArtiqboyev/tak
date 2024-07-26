// {
//     // masala 1
//     let arr = [
//         {
//             id:1,
//             name:'botir',
//             age:20,
//             hobby:'football',
//         },
//         {
//             id:2,
//             name:'Anvar',
//             age:22,
//             hobby:'basketball',
//         },
//         {
//             id:3,
//             name:'Shoxrux',
//             age:18,
//             hobby:'basketball',
//         },
//         {
//             id:4,
//             name:'Akram',
//             age:20,
//             hobby:'football',
//         },
//     ]
//     function myFunc (foo){
//         let n = []
//         for(let num of arr){
//          if(num.age == 20 && num.hobby == 'football'){
//             n.push(num)
//          }
//         }
        
//         return n
//     }
//     let result = myFunc(arr)
//     console.log(result);
    
// }

// {
//     // masala 3
//     let array = [2,3,4,5,6,7,8,976,6];
//     function myFunc (a){
//         let num = a[0]
//         for(let i of a){
//             if(i > num){
//                 num = i;
                
//             }
            
            
//         }
//         a.unshift(num)
//         return a
        
//     }
//     let result = myFunc(array)
//     console.log(result);
    
// }

// {
//     // masala 4 

// let size = prompt("Size kiriting!")
// let userList = []

// function fillNamesInArr(arr){
//     for(let i = 0 ; i < size ; i++){
//         let enterName = prompt(`${i + 1} - ism kiriting!`)
//         arr.push(enterName)
//     }
//     return arr
// }

// const filledNameList = fillNamesInArr(userList)
// console.log(filledNameList);
// }

// {
//     // masala 5
//     let number = +prompt('son kiriting');
//     function myFunc (foo){
//         let arr = []
//         for(let i = 1; i <= number;i++){
//             arr.push(i)
//         }
//         console.log(arr.reverse());
//     }

    
//     myFunc()
// }

//  2 topshiriq

// {
//     // masala 1
//     let action = prompt("qoshish amal kiriting");
//     function myFunc (a,b){
//         if(action == '+' ){
//             console.log(a + b);
//         }
//     }
//     myFunc(2 ,2)
// }

// {
//     // masala 2
//     function myFunc (number){
//         let sum = 0
//         for(let i = 0; i < number.length;i++){
//             sum += number[i]
//         }
//         console.log(sum);
//         return sum

//     }
//     let result = myFunc([1,2,3,4,5])
// }

// {
//     // masala 3
    
// }

// {
//     // masala 4
//     let arr = ['5', 2, 'true']; // Example array

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '5') {
//             arr[i] = 5;
//         } else if (arr[i] === 'true') {
//             arr[i] = 0;
//         }
//     }
    
//     console.log(arr);
    
// }
    
// {
//     // masala 5
//     let array = [
//         {
//             id:1,
//             name:'Abdulxay',
//             status:false
//         },
//         {
//             id:2,
//             name:'shodiyor',
//             status:true
//         },
//         {
//             id:3,
//             name:'Abdulaziz',
//             status:false
//         }
//     ]
//     function myFunc (foo){
//         for(let i = 0; i < foo.length;i++){
//             if(foo[i].status == false){
//                 console.log(foo[i].name);
//             }
//         }
//     }
//     myFunc(array)
// }

// {
//     // masala 6
//     function getArithmeticMean() {
//         let numbers = [];
//         for (let i = 0; i < 3; i++) {
//             let num = parseFloat(prompt("Enter a number:"));
//             numbers.push(num);
//         }
    
//         let sum = 0;
//         for (let i = 0; i < numbers.length; i++) {
//             sum += numbers[i];
//         }
        
//         let mean = sum / numbers.length;
//         return mean;
//     }
// }

// {
//     // masala 7
//     let arr = [2, 4, 6];

// if (arr[0] % 2 === 0) {
//     arr[0] = arr[0] + 1;
// } else {
//     arr[0] = arr[0] - 1;
// }

// console.log(arr);
// }

