// Another old Kata being uploaded. This is very similar to the DNA to RNA problem. Instead all vowels needed to be changed to !. 

function replace(s){
//   return[(][expression][)];
     return s.replace(/[aeiouAEIOU]/g,'!');
}
