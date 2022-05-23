$(".add-to-cart").on('click',function(){
    $(this).hide();
    
    $(".counter").css("display","flex")
})

var counter=0;

$("#dec").on('click',function(){
counter=counter-1;
$(".number").text(counter);
})


$("#inc").on('click',function(){
    counter=counter+1;
$(".number").text(counter);
    })

