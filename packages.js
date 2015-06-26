/**
 * @namespace Packages
 */
Packages = {};

/**
 * Add the API methods
 */
_.extend(Packages, {

  /**
   * This will automatically populated by the build plugin
   * @type {Object}
   */
  __packages__: {},

  /**
   * Check to see if a package is installed
   * @param  {String} pkg Package name
   * @return {Boolean}
   */
  installed: function(pkg) {
    return (pkg in Packages.__packages__);
  },

  /**
   * Get the version of a package
   * @param  {String} pkg Package name
   * @return {String}
   */
  version: function(pkg) {
    return Packages.__packages__[pkg];
  }
});
