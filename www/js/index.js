App.controller('home', function (page) {
    // put stuff here
  });

  App.controller('cvpage', function (page) {
    // put stuff here
  });

  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }