window.addEventListener("mousemove",function(details){
    // console.log(details.clientX)
    gsap.utils.
    gsap.to('#rect',{
        left:details.clientX+"px",
        ease:Power3

    })
})