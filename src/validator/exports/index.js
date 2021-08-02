const InvariantError = require('../../exceptions/InvariantError');
const { ExportNotesPayloadSchema } = require('./schema');

const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    const ValidationResult = ExportNotesPayloadSchema.validate(payload);

    if (ValidationResult.error) {
      throw new InvariantError(ValidationResult.error.message);
    }
  },
};

module.exports = ExportsValidator;
