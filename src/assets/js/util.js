export const displayTrackDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
};

export const parseISOString = (isoString) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const date = new Date(isoString);
  const day = date.getUTCDate().toString();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear().toString();
  return `${month} ${day}, ${year}`;
};

