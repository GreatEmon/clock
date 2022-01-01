setInterval(time,1000);
  function time(){
    var d=new Date();
    var hour=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    var day=d.getDate();
    var months=d.getMonth();
    var year=d.getFullYear();
   //hour checking
   if (hour>12) {
     hours=hour-12;
   }else{
     hours=hour;
   }
   //AM or PM checking
   if (hour>11) {
     document.querySelector(".apm").innerHTML="PM";
   }else{
     document.querySelector(".apm").innerHTML="AM";
   }
   //adding 0 before minutes
   if (min<10) {
     mins="0"+ min;
   }else{
     mins=min;
   }
   //adding 0 beforr seconds
  if (sec<10) {
     secs="0"+ sec;
   }else{
    secs=sec;
   }
   //0/1 to month name
  const monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 let month = monthes[months];
  var fdate=day + " " + month +" " + year;
  //Dom Activity
   document.querySelector(".hour").innerHTML=hours;
    document.querySelector(".min").innerHTML=mins;
    document.querySelector(".sec").innerHTML=secs;
  document.querySelector(".Date").innerHTML=fdate;
   }