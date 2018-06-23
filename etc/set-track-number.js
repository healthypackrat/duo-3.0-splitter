// Usage: osascript -l JavaScript etc/set-track-number.js

function run(argv) {
  let from = 1;

  if (argv.length) {
    let value = parseInt(argv[0]);

    if (isFinite(value) && value > 0) {
      from = value;
    }
  }

  const app = Application('iTunes');

  const selection = app.selection();

  selection.forEach((track, index) => {
    track.trackNumber = from;
    from++;
  });

  console.log('done.');
}
