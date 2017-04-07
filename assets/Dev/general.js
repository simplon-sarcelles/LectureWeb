$(function(){

  var arrayMusic = [];
  var srcMusic = [
    "assets/Audio/Ralph_Da_God_-_Like_Me.mp3",
    "assets/Audio/The.madpix.project_-_Just_For_A_Second.mp3",
    "assets/Audio/Joe_Playo_-_Summer_Of_Joe.mp3",
    "assets/Audio/Michael_Ellis_-_Summer.mp3",
    "assets/Audio/Kidd_Young_-_Back_To_The_Moon.mp3",
  ];
  var $iconeLink = $('.Chanson');
  var actif = 0;
  var isPlay = false;






  function createObject(idMusic, srcPath, musicClass, link){
    var readName =  srcPath.split('/');

    var newObject = {
      id : idMusic,
      src: srcPath,
      className : musicClass,
      title : readName.slice(-1)[0]
    }
    return newObject
  }

  function changeHTML(actif){

    $('audio').attr('src', arrayMusic[actif].src);
    $('.lecteur').removeClass('music0 music1 music2 music3 music4');
    $('.lecteur').addClass(arrayMusic[actif].className);
    $('#musicTitle').text(arrayMusic[actif].title);

    document.getElementById('audioPlayer').play();
    isPlay = true;
  }





  for(i=0; i<5; i++){
    arrayMusic[i] = createObject(i, srcMusic[i], 'music'+i, $iconeLink.eq(0));
  }
  $('#musicTitle').text(arrayMusic[actif].title);



  $iconeLink.click(function(){

    for(i=0; i<$iconeLink.length; i++){
      if(this == $iconeLink[i]){
        actif = i;
      }
    }
    changeHTML(actif);
  });



  $('audio').on('ended', function(){
    actif++;

    if(actif >= arrayMusic.length){
      actif = 0;
    }

    changeHTML(actif)
  });


  //PAUSE-PLAY

  $('.lecteur').click(function(){
    if(!isPlay){
      document.getElementById('audioPlayer').play();
      isPlay = true;
    }else{
      document.getElementById('audioPlayer').pause();
      isPlay = false;
    }
  });

  //HOVER PROGRESS BAR

  $('.tuMetImage').hover(function(){
    $('audio').css('opacity', '1');
  }, function(){
    $('audio').css('opacity', '0');
  });






//ICONE NEXT-BACK



  $('.iconePrevious').click(function(){
    actif--;
    if(actif < 0){
      actif = 4;
    }
    changeHTML(actif);
  });



  $('.iconeNext').click(function(){
    actif++;
    if(actif >= arrayMusic.length){
      actif = 0;
    }
    changeHTML(actif);
  });

});
