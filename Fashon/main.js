

// جافا اسكربت 
// console.log("Welcome to our Fashon  ");

// const Nema = document.querySelector('.sign_input[type="text"]');
// const password = document.querySelector('.sign_input[type="password"]');
// const loginBtn = document.querySelector('.sign_button');
// loginBtn.addEventListener('click', function() {
// if (password.value && Nema.value) {
//   alert("We are happy to have you join us, "+Nema.value);
// } else {
//   alert('Error');
// }}
// )
// // Contact Us
// // animation loading
//   $(document).ready(function(){
//     $(" .but_contact").click(function(){
//         $(".animation").animate({
//           left: '1000px',
//           opacity: '.2',
//           height: '+=0px',
//           width: '+=1300px'
//         });
//       });
//   });
// mous
  $(document).ready(function(){
    $("#h2").on({
      mousemove: function(){
        $("#h2").css("color", "red");
      },
      mouseout: function(){
        $("#h2").css("color", "");
      }
    });
  }); 
  $(document).ready(function(){
      $(".h1_nav").on({
      mousemove :function(){
        $(" .h1_nav ").css("color" , "red" ).css("font-size","30px").css("font-weight", "bold");
        },
      mouseout: function(){
      $(" .h1_nav ").css("color", "").css("font-size","");
    }
  });});
  $(document).ready(function(){
    $(" .text_h4").on({
    mousemove :function(){
      $(" .text_h4").css("color" , "red" ).css("font-size","60px").css("font-weight", "bold");
      },
    mouseout: function(){
    $(" .h1_nav , .text_h4 ").css("color", "").css("font-size","");
  }
});});

  $(document).ready(function(){
    $(" #h_contacct").click(function(){
      $("#h_contacct").css("color", "#fff").css("background-color","379cf4").css("margin-left","35%").css("margin-right","35% ");
    });
  });
  // Change background
  $(document).ready(function(){
    $("#but_cu").on({
        click: function(){
            $(".body_ContactUs").css("background-color", "rgba(241, 180, 180, 0.8)");
        },
        dblclick: function(){
          $(".body_ContactUs").css("background-color", "");
      }
    });
});
// man

$(document).ready(function(){
  $("#hide").click(function(){
  $(".h7").hide();
  })});
  $("#show").click(function(){
  $(".h7").show();
});

  $(document).ready(function(){
  $(".div01 #but22").click(function(){
      $(".div01 #div9").fadeToggle();
      $(".div01 #div10").fadeToggle("slow");
      $(".div01 #div11").fadeToggle(2000);
  })
  });
  $(document).ready(function(){
    $(".div02 #but22").click(function(){
        $(" .div02 #div9").fadeToggle();
        $(" .div02 #div10").fadeToggle(1000);
        $(" .div02 #div11").fadeToggle(2000);
    })
    });
   // learn more
   $(document).ready(function(){
    $(".l_m1 #l_m").click(function(){
        $("#ll_m").slideToggle(1000);
        });
    });
    $(document).ready(function(){
    $(".l_m2 #l_m").click(function(){
        $(".l_m2 #ll_m").slideToggle(1000);
        });
    });
//  about
$(document).ready(function(){
  $("#but_about").click(function(){
      $(".h44_about").slideToggle(1000);
      });
  });
  // cu
  $(document).ready(function(){
    $(" .but_contact").click(function(){
   $(".animation").animate({
     left: '1000px',
     opacity: '.2',
     height: '+=0px',
     width: '+=1300px'
   });
  });
 });

