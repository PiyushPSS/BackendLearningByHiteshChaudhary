import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '.public/temp');
    },

    //keeping the original file name is not advisable, as it may contain special characters or spaces. And, we might have multiple files with the same name which will cause conflicts.
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

export const upload = multer({ storage: storage });