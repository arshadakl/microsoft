$(document).ready(function(){
    
    $("#message-form").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            message:{
                minlength:2
            }
        },
        messages:{
            email:{
                required: " Please Enter Your Email .",
                email:" Enter Valid Email Address ."
            },
            message:{
                minlength:" Type a proper Message ."
            }
        },
        errorPlacement: function(error, element) {
            $(error).appendTo("#contact-error");
          },
          submitHandler:function(form){
            alert("Form submited")
            location.reload()

          }
    })
})

