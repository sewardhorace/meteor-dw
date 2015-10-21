Package.describe({
  summary:"constants and methods for dw",
  version:"0.1.0",
  name:"sewardhorace:dw",
  git:"https://github.com/sewardhorace/something.git", //TODO
  documentation:"README.md", //TODO
});

Package.on_use(function(api) {
  api.use(
    ['mongo'],
    ['client','server']
  );
  api.add_files(
    ['Character.js'],
    ['client', 'server']
  );
  api.export(
    ['Character'],
    ['client', 'server']
  );

});
