/**
 * Require dependancies
 */
var FS        = Npm.require("fs"),
    Path      = Npm.require("path");
/**
 * Register the compiler
 *
 * e0b4937e95f3cf4aa05a4a718fae08f0 is a unique md5 hash for 'atomic:versions:trigger'
 * to assure that this is the only file detected.
 */
Plugin.registerSourceHandler("e0b4937e95f3cf4aa05a4a718fae08f0", function (step) {
  /**
   * Declare packages scope
   */
  var packages = {};

  // Read the packages file
  // Currently when compiling the package into an isopackage during metoer publish.
  // it tried to look for the version file in the package directory.
  // we wrap in an exception handler to account for that as teh file wont exists.
  try {
    var dotVersions = FS.readFileSync(Path.join(process.cwd(), '.meteor', 'versions')).toString("utf8");

    // Extract each package
    dotVersions.split("\n").forEach(function(pkg){
      // Skip empty lines
      if(!pkg)
        return;

      /**
       * Package lines are composed of <package>@<version>
       *
       * <package> is composed of either <owner>:<package> or just <package>
       * <version> is a semver version string.
       *
       * We may want to break the <package> into groups of package owners in
       * the future, but for now this is just a POC.
       */
      var pkgComponants = pkg.split("@");
      packages[pkgComponants[0]] = pkgComponants[1];
    });
  }catch (e) {
    // XXX Maybe write a Packages.__build_error_ so runtime knows we failed
  }


  /**
   * Parse the packages
   */
  step.addJavaScript({
    path: step.inputPath,
    sourcePath: step.inputPath,
    data: "Packages.__packages__ = " + JSON.stringify(packages)
  });

});
