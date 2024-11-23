function h( x, fn){
     console.log( x*x)
      fn(x*x )  //thsw s expected a  argument
}
 h(10 ,exec)
  function  exec(n){
    console.log(" this si our Squre " , n)
  }