
Package.describe({
  summary:"constants and methods for dw",
  version:"0.1.0",
  name:"sewardhorace:dw",
  git:"https://github.com/sewardhorace/something.git",
  // documentation:"README.md"
});

Package.on_use(function(api){

  // api.use();
  api.add_files(
    ['Gameplay.js'],
    ['client', 'server']
  );
  api.export(
    ['Character'],
    ['client', 'server']
  );

});
