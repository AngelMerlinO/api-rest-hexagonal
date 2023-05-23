"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryMusicRepository = void 0;
const database_1 = require("../../database");
const music_1 = require("../domain/music");
class InMemoryMusicRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entered InMemoryMusicRepository getAll");
            const connection = yield (0, database_1.getConnection)();
            const result = yield connection.query("SELECT * FROM musics");
            if (result.length === 0) {
                return [];
            }
            const musica = result[0];
            console.log(`prueba ${JSON.stringify(musica)}`);
            return musica.map((music) => {
                return new music_1.Music(music.id, music.title, music.genre, music.artist, music.album, music.duration);
            });
        });
    }
}
exports.InMemoryMusicRepository = InMemoryMusicRepository;
