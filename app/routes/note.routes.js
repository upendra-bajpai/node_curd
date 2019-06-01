module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    app.post('/notes',notes.create);

    app.get('/notes',notes.findAll);

    app.post('/notes/:noteId',notes.findOne);

    app.put('/notes/:noteId',notes.updateOne);

    app.delete('/notes/:noteId',notes.deleteOne);
}