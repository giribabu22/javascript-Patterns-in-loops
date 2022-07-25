
//____________ pattern  of A 

//   * * * * 
// *         *
// *         *
// *         *
// * * * * * *
// *         *
// *         *
// *         *

for (let i = 1;i<=8;i++){
  hold = ''
  for (let i2 = 1;i2<= 6;i2++){
    if (i === 1 && i2>1 && i2 <6 || i === 5 || i2 === 1 && i >1 && i <=8 || i2 === 6 && i >1 && i <=8 ){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');
//____________ pattern  of B

//   * * * * * * 
//     *         *
//     *         *
//     *         *
//     * * * * * 
//     *         *
//     *         *
//     *         *
//   * * * * * * 


for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 < 7; i2++) {
    if (i === 0 && i2>=0 && i2<6 || i === 8 && i2>=0 && i2<6|| i === 4 && i2>0 && i2<6 || i2 === 1 || i2 ===6 && i>0 && i < 8 && i !=4){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');

//____________ pattern  of c

//      * * * * * *
//    *            
//    *            
//    *            
//    *            
//    *            
//    *            
//    *            
//      * * * * * *

for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 < 7; i2++) {
    if (i === 0 && i2>0  || i === 8 && i2>0 || i2 === 0 && i>0 && i<8){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');

//____________ pattern  of D

//  * * * * * *  
//    *         *            
//    *          *            
//    *          *             
//    *          *             
//    *          *            
//    *          * 
//    *         *  
//  * * * * * * 

for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 < 7; i2++) {
    if (i === 0 && i2 < 6  || i === 8 && i2 < 6  || i2 === 1 || i2 === 6 && i >1 && i<7 ){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
    if (i === 7 && i2 === 5 || i === 1 && i2 === 5){
      hold = hold.concat('*')
    }
  }
  console.log(hold);
}
console.log('\n');

//____________ pattern  of E

//  * * * * * * * *
//    *            * 
//    *            
//    *         *  
//    * * * * * *          
//    *         * 
//    *            
//    *            *
//  * * * * * * * *

for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 <= 8; i2++) {
    if (i === 0 && i2 < 7 || i === 8 && i2 < 7 || i === 3 && i2 === 5 || i === 5 && i2 === 5 || i === 4 && i2 > 0 && i2<6 || i ==1 && i2 ===7 || i ==7 && i2 ===7|| i2 === 1 ){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');

//____________ pattern  of F

//  * * * * * * * *
//    *            * 
//    *            
//    *         *  
//    * * * * * *          
//    *         * 
//    *            
//    *            
//  * * * 

for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 <= 8; i2++) {
    if (i === 0 && i2 < 7 || i === 8 && i2 < 3 || i === 3 && i2 === 5 || i === 5 && i2 === 5 || i === 4 && i2 > 0 && i2<6 || i ==1 && i2 ===7 || i2 === 1 ){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');

//____________ pattern  of G

//  * * * * * * * * 
//    *           * 
//    *            
//    *          
//    *           
//    *     * * * * *
//    *     *     *  
//    *           *
//  * * * * * * *   

for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 <= 8; i2++) {
    if (i === 0 && i2 < 7 || i === 8 && i2 < 7 ||i2 === 4 && i >= 5 && i < 7|| i === 4 && i2 > 3 || i ==1 && i2 ===7 || i2 === 7 && i >= 5 && i <= 7|| i2 === 1 ){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');

// //____________ pattern  of H

// //  * * *     * * *
// //    *         * 
// //    *         *  
// //    *         *
// //    * * * * * *          
// //    *         * 
// //    *         *  
// //    *         *
// //  * * *     * * *

for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 <= 8; i2++) {
    if (i === 0  && i2 < 3 ||i === 0  &&  i2 >5 || i === 8 && i2 < 3 ||i === 8  &&  i2 >5  || i === 4 && i2 > 0 && i2<7 || i2 === 1 || i2 === 7 ){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');


//____________ pattern  of I

//  * * * * * * * *
//         *  
//         *   
//         * 
//         *           
//         *  
//         *   
//         * 
//  * * * * * * * *

for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 <= 8; i2++) {
    if (i === 0 || i ===8 || i2===4 ){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');

// //____________ pattern  of J

// //  * * * * * * * *
// //         *  
// //         *   
// //         * 
// //         *           
// //         *  
// //         *   
// //   *     * 
// //     * * 

for (let i = 0; i < 9; i++) {
  hold = ''
  for (let i2 = 0; i2 <= 8; i2++) {
    if (i === 0 || i ===8 && i2 <4|| i2===4 ){
      hold = hold.concat(' *')
    }else{
      hold = hold.concat('  ')
    }
  }
  console.log(hold);
}
console.log('\n');