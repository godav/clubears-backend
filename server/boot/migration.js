'use strict';

module.exports = function (server) {
   server.dataSources.clubears.automigrate();
   console.log("Performed automigration.");
};