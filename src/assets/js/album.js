import login from './authentication';

export default {
  async created() {
    await login();
  },
  mounted() {
    const tracks = $('.track');

    tracks.mouseover(function displayPlayIcon() {
      $(this).find('.track-number').hide();
      $(this).find('.play-pause-icon').show();
    });

    tracks.mouseout(function hidePlayIcon() {
      if ($(this).find('.play-pause-icon').text() !== 'pause_circle_outline') {
        $(this).find('.track-number').show();
        $(this).find('.play-pause-icon').hide();
      }
    });
    tracks.click(function playPause() {
      tracks.find('.play-pause-icon').hide();
      tracks.find('.track-number').show();
      if ($(this).find('.play-pause-icon').text() === 'play_circle_outline') {
        tracks.find('.play-pause-icon').text('play_circle_outline');
        $(this).find('.play-pause-icon').text('pause_circle_outline');
      } else {
        tracks.find('.play-pause-icon').text('play_circle_outline');
        $(this).find('.play-pause-icon').text('play_circle_outline');
      }
      $(this).find('.play-pause-icon').show();
      $(this).find('.track-number').hide();
    });
  }
};
