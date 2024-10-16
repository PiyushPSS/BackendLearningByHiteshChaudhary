import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import 'dotenv/config';

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadedFileFunction = async (filePath) => {
    try {

        if (!filePath) {
            throw new Error("File path is required");
        }

        // Upload file
        const uploadedFile = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto"
        });

        //file has been uploaded.
        console.log(uploadedFile);

        return uploadedFile;

    } catch (err) {
        //remove the locally saved file as the upload operation got failed.
        fs.unlinkSync(filePath);
        return err;
    }
}

export default uploadedFileFunction;