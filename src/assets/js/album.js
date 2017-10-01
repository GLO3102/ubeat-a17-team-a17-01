export default {
  mounted() {
    const tracks = document.getElementsByClassName('track');
    let playingTrackIndex = -1;
    if (screen.width >= 992) {
      for (let i = 0; i < tracks.length; i += 1) {
        tracks[i].addEventListener('mouseover', function displayPlayIcon() {
          this.querySelector('.track-number').style.display = 'none';
          this.querySelector('.play-pause-icon').style.display = 'block';
        });

        tracks[i].addEventListener('mouseout', function hidePlayIcon() {
          if (this.querySelector('.play-pause-icon').innerHTML !== 'pause_circle_outline') {
            this.querySelector('.track-number').style.display = 'block';
            this.querySelector('.play-pause-icon').style.display = 'none';
          }
        });
        tracks[i].addEventListener('click', function playPause() {
          if (this.querySelector('.play-pause-icon').innerHTML === 'play_circle_outline') {
            if (playingTrackIndex !== -1) {
              tracks[playingTrackIndex].querySelector('.play-pause-icon').innerHTML = 'play_circle_outline';
              tracks[playingTrackIndex].querySelector('.play-pause-icon').style.display = 'none';
              tracks[playingTrackIndex].querySelector('.track-number').style.display = 'block';
            }
            this.querySelector('.play-pause-icon').innerHTML = 'pause_circle_outline';
            playingTrackIndex = i;
          } else {
            this.querySelector('.play-pause-icon').innerHTML = 'play_circle_outline';
            playingTrackIndex = -1;
          }
        });
      }
    } else {
      for (let i = 0; i < tracks.length; i += 1) {
        tracks[i].addEventListener('click', function MouseClickResponsive() {
          if (this.querySelector('.play-icon-responsive').innerHTML === 'play_circle_outline') {
            tracks.querySelector('.play-icon-responsive').innerHTML = 'play_circle_outline';
            this.querySelector('.play-icon-responsive').innerHTML = 'pause_circle_outline';
          } else {
            this.querySelector('.play-icon-responsive').innerHTML = 'play_circle_outline';
          }
        });
      }
    }
  }
};
