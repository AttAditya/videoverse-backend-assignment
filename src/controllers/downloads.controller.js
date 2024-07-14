const fs = require('fs');

module.exports.videoDownload = async (req, res) => {
    let fileId = req.params.fileId;
    let file = `.temp/videos/${fileId}.mp4`;

    if (!fs.existsSync(file)) {
        res.status(404);
        res.json({
            message: `File ${fileId} not found`
        });
        return;
    }

    res.status(200);
    res.download(file);
};