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

  if (!app.running()) {
    console.log('iTunes is not running');
    return;
  }

  const tracks = app.selection();

  const length = tracks.length;

  if (!length) {
    console.log('no tracks are selected');
    return;
  }

  const message = `Are you sure to set track numbers from ${from} to ${from + length - 1} for ${length} tracks?`;

  if (!confirm(message)) {
    console.log('cancelled');
    return;
  }

  if (tracks.some(track => track.trackNumber())) {
    console.log('all track numbers must be unset before run');
    return;
  }

  console.log('setting track numbers...');

  tracks.forEach(track => {
    track.trackNumber = from;
    from++;
  });

  console.log('done');
}

function confirm(message) {
  const app = Application.currentApplication();
  app.includeStandardAdditions = true
  try {
    app.displayDialog(message);
    return true;
  } catch (e) {
    return false;
  }
}
