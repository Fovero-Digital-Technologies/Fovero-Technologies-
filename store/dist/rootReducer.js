"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var reducer_1 = require("./theme/reducer");
exports["default"] = redux_1.combineReducers({
    theme: reducer_1["default"]
});
