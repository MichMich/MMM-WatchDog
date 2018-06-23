var NodeHelper = require("node_helper");
const exec = require('child_process').exec;

module.exports = NodeHelper.create({

    // Create the timer object.
    timer: null,

    // Set the default config. Since the timer should not start
    // before the config is set by the frontend, the default can
    // be 1 seconds. The real default is set in MMM-WatchDog.js

    config: {
        timeout: 1
    },

    // Handle incomming messages.

    socketNotificationReceived: function(notification, payload) {

        // Incoming config. Store config and schedule restart.
        if (notification === 'SET_CONFIG') {
            this.config = payload;
            this.scheduleRestart();
            console.log("WatchDog started. Maximum timeout: " + this.config.timeout + "s.");
        }

        // Incoming PING. Reschedule restart.
        if (notification === 'PING') {
           this.scheduleRestart();
        }
    },

    // Reschedule restart by clearing old timer, and setting a new timer.
    scheduleRestart: function() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {this.restart()}, this.config.timeout * 1000);
    },

    // Restart pm2 app
    restart: function() {
        var now = new Date();
        console.error(now.toString() + ' - WatchDog: Heartbeat timeout. Frontend might have crashed. Restarting ' + this.config.pm2_app + ' now.');
        exec("pm2 restart " + this.config.pm2_app, null);
    }
});
