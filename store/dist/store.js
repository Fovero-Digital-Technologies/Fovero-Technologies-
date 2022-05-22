"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var rootReducer_1 = require("./rootReducer");
var store = redux_1.createStore(rootReducer_1["default"]);
exports["default"] = store;
