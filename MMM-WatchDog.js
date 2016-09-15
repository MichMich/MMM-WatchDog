Module.register("MMM-WatchDog",{

    // Default module config.
    defaults: {
        interval: 2,
        timeout: 10
    },

    // Override dom generator.
    start: function() {
        this.sendSocketNotification('SET_CONFIG', this.config);
        this.startHeartbeat();
    },

    // Start the interval to send the PING message.
    startHeartbeat: function() {
        var self = this;
        setInterval(function() {
            self.sendSocketNotification('PING', this.config);
        }, this.config.interval * 1000);
    }

});
