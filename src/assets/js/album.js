$( window ).on('load', function(){
  let tracks = $('.track');

  if (screen.width >= 992) {
    tracks.on('mouseover', function () {
      $(this).find('.track-number').hide();
      $(this).find('.play-pause-icon').show();
    });

    tracks.on('mouseout', function () {
      $(this).find('.track-number').show();
      $(this).find('.play-pause-icon').text('play_circle_outline');
      $(this).find('.play-pause-icon').hide();
    });
    tracks.on('click', function () {
      if ($(this).find('.play-pause-icon').text() === 'play_circle_outline') {
        $(this).find('.play-pause-icon').text('pause_circle_outline');
      } else {
        $(this).find('.play-pause-icon').text('play_circle_outline');
      }
    });
  }
  else {
    tracks.on('click', function () {
      if ($(this).find('.play-icon-responsive').text() === 'play_circle_outline') {
        tracks.find('.play-icon-responsive').text('play_circle_outline');
        $(this).find('.play-icon-responsive').text('pause_circle_outline');
      } else {
        $(this).find('.play-icon-responsive').text('play_circle_outline');
      }
    });
  }
});
