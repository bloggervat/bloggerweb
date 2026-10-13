const startedUsingLinux = new Date('2023-08-24T00:00:00+10:00');
const vladivostokClock = new Intl.DateTimeFormat('ru-RU', {
  timeZone: 'Asia/Vladivostok',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});
const vladivostokDate = new Intl.DateTimeFormat('ru-RU', {
  timeZone: 'Asia/Vladivostok',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function updateLocalTime() {
  const now = new Date();
  let elapsed = Math.max(0, now - startedUsingLinux);

  const days = Math.floor(elapsed / 86_400_000);
  elapsed -= days * 86_400_000;

  const hours = Math.floor(elapsed / 3_600_000);
  elapsed -= hours * 3_600_000;

  const minutes = Math.floor(elapsed / 60_000);
  const uptime = document.querySelector('#uptime');
  const clock = document.querySelector('#clock');

  if (!uptime || !clock) return;

  uptime.textContent = `${days} д ${hours} ч ${minutes} мин`;
  clock.textContent = vladivostokClock.format(now);
  clock.title = vladivostokDate.format(now);
}

updateLocalTime();
setInterval(updateLocalTime, 1000);
