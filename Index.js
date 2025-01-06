 var rect=document.querySelector('#center');
 rect.addEventListener("mousemove",function(details){
//  console.log("i am on the box")
//   console.log(rect.getBoundingClientRect())// This tell rectangel or any this location 
 var rectangel=rect.getBoundingClientRect();
  var insidervertval=details.clientX - rectangel.left;
 if( insidervertval<rectangel.width/2){
    var redcolor= gsap.utils.mapRange(0,rectangel.width/2,255,0,insidervertval
    )
gsap.to(rect,{
    backgroundColor:`rgb(${redcolor},0,0)`,
    ease:Power4,
});
 }
else{
    var bluecolor= gsap.utils.mapRange(rectangel.width/2,rectangel.width,0,255,insidervertval);

    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease:Power4,
    });
}
 
 });

rect.addEventListener('mouseleave',function(){
gsap.to(rect,{
    backgroundColor:"white",
    ease:Power4,
})
})





