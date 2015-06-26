# Package version information during runtime.

This package will parse your `.meteor/versions` during the compile process, parse the package and version information, and associate expose it to the package at runtime

This allows you to check for installed packages and their currently installed version.

### Why is this important? 
One common reason for needing this feature is to allow packages to detect what UI package you are using, so they can customise the template accordingly for a more seemless integration.

With this package you will be able to perform checks like:

```js
if(Packages.installed("meteorhacks:flow-router")) {

  // Fetch flow router
  var FlowRouter = Package['meteorhacks:flow-router'];

  if(Packages.version("meteorhacks:flow-router") < 1) {
    // compatibility mode.
  }
}

if(Packages.installed("iron:router")) {
  // Etc
}
```

Thats just usage, the reason that I built this initially (apart from seing if it was possible), was to allow my blog application to provide a UI showing the user what packages are installed and what version they are at, including a prompt to update them within admin.
