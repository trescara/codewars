//Function to test if a coupon is vaild or not. The first two variables seem to be pointless for this drill.
//All that is needed check the current date v exp date.
//Used ES6 notation to avoid legnthy if else statements
//Other solutions used a Date.parse method, then compared them. This might be a useful thing if some coupons can expire mid-day.


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
var curDate =new Date(currentDate);
var expDate =new Date(expirationDate);
if(enteredCode === correctCode && curDate<=expDate)
{
return true;
}
return false;
}
