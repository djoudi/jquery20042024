// jQuery(document).ready(function($){

// })

//$(function(){})

$(document).ready(function(){

   //$(".box").hide(5000)
	//$(".box").show(5000)
	//$(".box").toggle(5000)
	
   
    // $(".box").fadeOut(5000)
    //   $(".box").fadeIn(5000)
    //   $(".box").fadeToggle(5000)
    //  $(".box").slideUp(5000)
    //  $(".box").slideDown(5000)
   //  
   // $(".box").slideToggle(5000)
   // 
   //$(".box").toggle(5000).delay(2000).slideToggle(5000)
  // 
//  $("#start").click(function() {
//   	$(".box").toggle(5000).delay(2000).slideToggle(5000)
//   });

 /*$(document).on("click","#start",function(){
  	$(".box").toggle(5000).delay(2000).slideToggle(5000)
  })*/


//   $(document).on("click","#start",function(){
//   //	$(".box").fadeTo(5000,0.1)
//   	//$(".box").text("Hiiii")
//   	$(".box").html("<strong>Hiiii</strong>")
//   })


/************************************ */

//   $(document).on("click","#start",function(){
//   	$(".box").animate({
//   		marginLeft : "+=50",
//   		opacity : 1 
//   	},1000)
//   })


//  $(document).on("click","#start",function(){
//     $(".box").animate({
//       left : 999,
//       top:500
//     },5000)

//       $(".box").animate({
//       opacity : .3
//     },2000)
//   })
 
//  $(document).on("click","#stop",function(){
//     $(".box").stop(true,false)  // (true,true)  (true,false)
//   })


// $(document).on('click',"#append",function(){
//     $(this).append('<b>Hiiiii</<b>')
// })

// $(document).on('click',"#start",function(){
//     $("span").appendTo('#append')
// })


 $(document).on('click',"#start",function(){
    // $("#append").after('<li> Hiiii</li>')
     $("#append").next().after('<li> Hiiii</li>')
 })

})





