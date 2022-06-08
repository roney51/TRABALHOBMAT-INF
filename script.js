
function maxFreq(arr, n) {

   //using moore's voting algorithm
   var res = 0;
   var count = 1;
   for (var i = 1; i < n; i++) {
     if (arr[i] === arr[res]) {
       count++;
     } else {
       count--;
     }

     if (count === 0) {
       res = i;
       count = 1;
     }
   }

   return arr[res];
 }

 var arr = [40, 50, 30, 40, 50, 30, 30];
 var n = arr.length;
 var freq = maxFreq(arr, n);
 var count = 0;
 for (var i = 0; i < n; i++) {
   if (arr[i] === freq) {
     count++;
   }
 }
 document.write(
   "Element " + maxFreq(arr, n) + " occurs " +
   count + " times" + "<br>"
 );
  




