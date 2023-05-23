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
exports.PodcastRepository = void 0;
const database_1 = require("../../database");
class PodcastRepository {
    addPodcast(podcastId, podcastName, podcastProducer, podcastDuration, podcastCategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, database_1.getConnection)();
            try {
                const query = `INSERT INTO podcast (id, name, producer, duration, categoria) VALUES (?, ?, ?, ?, ?)`;
                const values = [
                    podcastId,
                    podcastName,
                    podcastProducer,
                    podcastDuration,
                    podcastCategoria,
                ];
                yield connection.query(query, values);
                // Devolver el resultado esperado (en este caso, un objeto Podcast o null)
                return null;
            }
            catch (error) {
                // Manejar cualquier error que ocurra durante la operación
                throw new Error(`Error al agregar el nuevo podcast: ${error}`);
            }
            finally {
                connection.end();
            }
        });
    }
}
exports.PodcastRepository = PodcastRepository;
