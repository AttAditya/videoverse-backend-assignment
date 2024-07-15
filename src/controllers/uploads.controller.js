const fs = require('fs');
const videoUtils = require('../utils/video.utils');

const MAX_UPLOAD_SIZE = process.env.MAX_UPLOAD_SIZE || (50 * 1024 * 1024);
const MIN_UPLOAD_DURATION = process.env.MIN_UPLOAD_DURATION || 5000;
const MAX_UPLOAD_DURATION = process.env.MAX_UPLOAD_DURATION || 25000;

module.exports.videoUpload = async (req, res) => {
    const { file } = req.files;
    const { size, data, mimetype } = file;

    if (size > MAX_UPLOAD_SIZE) {
        res.status(413);
        res.json({
            message: 'File is too large'
        });
    }

    let supportedTypes = ['video/mp4'];
    
    if (!supportedTypes.includes(mimetype)) {
        res.status(415);
        res.json({
            message: 'Invalid file format, check allowedFormats for supported types',
            allowedFormats: supportedTypes
        });
    }

    let name = Math.random().toString(36).substring(7);

    if (!fs.existsSync('.temp/videos')) {
        fs.mkdirSync('.temp/videos', { recursive: true });
    }

    fs.writeFileSync(`.temp/videos/${name}.mp4`, data);

    let videoInfo = await videoUtils.getVideoInfo(`.temp/videos/${name}.mp4`);
    let duration = videoInfo.format.duration * 1000;

    if (duration < MIN_UPLOAD_DURATION || duration > MAX_UPLOAD_DURATION) {
        fs.unlinkSync(`.temp/videos/${name}.mp4`);

        res.status(416);
        res.json({
            message: 'Invalid video duration',
            minDuration: MIN_UPLOAD_DURATION,
            maxDuration: MAX_UPLOAD_DURATION
        });

        return;
    }

    res.status(200);
    res.json({
        message: 'File uploaded successfully',
        fileId: name
    });
};