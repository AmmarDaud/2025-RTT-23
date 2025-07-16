"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = processData;
const lodash_1 = __importDefault(require("lodash"));
function processData(data) {
    var _a, _b, _c;
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (!item.id) {
            throw new Error('Data item is missing an id');
        }
        const processedItem = {
            id: item.id,
            name: item.name || 'Unknown',
            price: (_a = item.price) !== null && _a !== void 0 ? _a : 0,
            discountedPrice: (_c = (_b = item.discountedPrice) !== null && _b !== void 0 ? _b : item.price) !== null && _c !== void 0 ? _c : 0,
        };
        result.push(processedItem);
    }
    return lodash_1.default.orderBy(result, ['discountedPrice'], ['asc']);
}
