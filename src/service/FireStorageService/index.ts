require("dotenv").config();

export const FireStorageService = {
  getProfilePciture: async (): Promise<any> => {
    return `https://firebasestorage.googleapis.com/v0/b/${process.env.FIREBASE_STORAGE_BUCKET}/o/profilePicture.jpg?alt=media`;
  }
};
