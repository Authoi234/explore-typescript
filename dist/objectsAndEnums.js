"use strict";
// Object and Enums in typescript
var _a;
var player;
player = {
    name: "Messi",
    age: 36,
    country: "Argentina",
    married: true,
    clubs: ["Barcelona"]
};
player = {
    name: "Neimar",
    // age: 32, 
    country: "Argentina",
    married: true,
    clubs: ["Barcelona"]
};
player.married = false;
player.age = player.age + 5;
player.clubs = (_a = player === null || player === void 0 ? void 0 : player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); });
// console.log(player, player.country, player["clubs"]);
var Friends;
(function (Friends) {
    Friends[Friends["Salam"] = 10] = "Salam";
    Friends[Friends["Rahman"] = 15] = "Rahman";
    Friends[Friends["Dhoram"] = 20] = "Dhoram";
    Friends[Friends["Aram"] = 30] = "Aram";
})(Friends || (Friends = {}));
;
// console.log(Friends.Salam);
var Configs;
(function (Configs) {
    Configs["API_KEY"] = "api_key";
    Configs["DOMAIN_NAME"] = "domain_name";
})(Configs || (Configs = {}));
;
console.log(Configs.DOMAIN_NAME);
