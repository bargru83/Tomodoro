export function formatTime(minutes, seconds) {
  return `${minutes}:${seconds}`;
}

export function decrementTime(minutes, seconds) {
  let min = minutes;
  let sec = seconds;

  if (parseInt(sec, 10) > 0) {
    sec = String(parseInt(sec, 10) - 1);
    if (parseInt(sec, 10) < 10) {
      sec = `0${sec}`;
    }
  } else {
    sec = '59';
    min = String(parseInt(min, 10) - 1);
  }
  return {
    min,
    sec,
  };
}
