class NotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHanlder(request, h) {
    try {
      const { title = 'untitled', tags, body } = request.payload;
      const noteId = this._service.addNotes({ title, tags, body });

      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = h.response({
        status: 'success',
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }

  getNotesHandler(h) {
    try {
      const notes = this._service.getNotes();
      const response = h.response({
        status: 'success',
        data: {
          notes,
        },
      });
      response.code(200);
      return response;
    } catch (error) {
      const response = h.response({
        status: 'fial',
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }

  getNoteByIdHanlder(request, h) {
    try {
      const { id } = request.params;
      const note = this._service.getNoteById(id);
      const response = h.response({
        status: 'success',
        data: {
          note,
        },
      });
      response.code(200);
      return response;
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }

  putNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      this._service.editNoteById(id, request.payload);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil diperbarui',
      });
      response.code(200);
      return response;
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }

  detleteNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      this._service.detleteNoteById(id);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil dihapus',
      });
      response.code(200);
      return response;
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
}

module.exports = NotesHandler;
