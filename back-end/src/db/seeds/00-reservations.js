const reservationData = require('./00-reservations.json');

exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE reservations RESTART IDENTITY CASCADE")
  .then(function () {
    // Inserts seed entries
    return knex("reservations").insert(reservationData);
  });
};