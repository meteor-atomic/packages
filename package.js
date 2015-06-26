Package.describe({
  name: 'atomic:packages',
  version: '1.0.0',
  summary: 'Get package informtion at runtime.',
  git: 'https://github.com/meteor-atomic/packages',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'atomic:packages',
  sources: ['plugin/plugin.js']
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Helper for building objects
  api.use("underscore");

  // Add the versions implementation
  api.addFiles('packages.js', ['server']);

  // Add the trigger file
  api.addFiles("trigger.e0b4937e95f3cf4aa05a4a718fae08f0", ["server"]);

  // Export the versions namespace
  api.export("Packages");
});
