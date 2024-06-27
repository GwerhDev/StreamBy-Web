import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema({
  active: { type: Boolean, required: true },
});

export const CredentialModel = mongoose.model('Credential', credentialSchema);