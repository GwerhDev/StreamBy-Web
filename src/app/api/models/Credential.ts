import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema({
  active: { type: Boolean, required: true },
});

const CredentialModel = mongoose.models.Credential || mongoose.model('Credential', credentialSchema);

export default CredentialModel;