/* Magic Mirror Test default config for modules
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */
let config = require(process.cwd() + "/tests/configs/default.js").configFactory({
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.10.1"]
});
delete config.modules;

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
