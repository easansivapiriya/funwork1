SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function()
{ SC.stream('/tracks/652012811',function(sound){
   $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});

SC.stream('/tracks/345946410 ',function(sound){
  $('#start1').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/345819962',function(sound){
  $('#start2').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop2').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('tracks/345817027 ',function(sound){
  $('#start3').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop3').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/347843083',function(sound){
  $('#start4').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop4').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/346079656',function(sound){
  $('#start5').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop5').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/521213439',function(sound){
  $('#start6').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop6').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
}); SC.stream('/tracks/495496020',function(sound){
   $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop7').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
  SC.stream('/tracks/621450903',function(sound){
   $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop8').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
//muttu
SC.stream('/tracks/66061745',function(sound){
 $('#start9').click(function(e) {
         e.preventDefault();
         sound.start();
       });

   $('#stop9').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
});
//teejay
SC.stream('/tracks/588877713',function(sound){
 $('#start10').click(function(e) {
         e.preventDefault();
         sound.start();
       });

   $('#stop10').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
});
//omiya
SC.stream('/tracks/495051222',function(sound){
 $('#start11').click(function(e) {
         e.preventDefault();
         sound.start();
       });

   $('#stop11').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
});
//mcsai
SC.stream('/tracks/465627363',function(sound){
 $('#start12').click(function(e) {
         e.preventDefault();
         sound.start();
       });

   $('#stop12').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
});


 });
