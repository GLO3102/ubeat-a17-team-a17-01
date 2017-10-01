$(document).ready(function() {
  let tracks = $('.track');

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
});
