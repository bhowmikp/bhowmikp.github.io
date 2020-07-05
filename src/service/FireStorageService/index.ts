require("dotenv").config();

export const FireStorageService = {
  getProfilePciture: async (): Promise<string> => {
    return `https://firebasestorage.googleapis.com/v0/b/${process.env.FIREBASE_STORAGE_BUCKET}/o/profilePicture.jpg?alt=media`;
  },

  getResume: async (): Promise<string> => {
    return `https://firebasestorage.googleapis.com/v0/b/${process.env.FIREBASE_STORAGE_BUCKET}/o/Prantar-Resume.pdf?alt=media`;
  }
};
