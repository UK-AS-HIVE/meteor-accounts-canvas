Package.describe({
  name: 'hive:accounts-canvas',
  summary: 'Login service for Canvas LMS',
  version: '1.0.0',
  git: 'https://github.com/UK-AS-HIVE/meteor-accounts-canvas'
});

Package.on_use(function(api) {
  api.use('accounts-base',['client','server']);
  api.imply('accounts-base',['client','server']);
  api.use('accounts-oauth',['client','server']);
  api.use('hive:canvas',['client','server']);

  api.add_files('canvas.js');
});