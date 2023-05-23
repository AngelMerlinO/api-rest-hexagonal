"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Podcast = void 0;
class Podcast {
    constructor(id, name, producer, duration, categoria) {
        this.id = id;
        this.name = name;
        this.producer = producer;
        this.duration = duration;
        this.categoria = categoria;
    }
}
exports.Podcast = Podcast;
