const fs = require('fs');
const videoUtils = require('../utils/video.utils');

module.exports.trim = async (req, res) => {
    let { fileId, start, end } = req.body;
    let inputFile = `.temp/videos/${fileId}.mp4`;

    if (!fs.existsSync(inputFile)) {
        res.status(404);
        res.json({
            message: `File ${fileId} not found`
        });
        return;
    }

    let outName = Math.random().toString(36).substring(7);
    let outputFile = `.temp/videos/${outName}.mp4`;

    if (!fs.existsSync('.temp/videos')) {
        fs.mkdirSync('.temp/videos', { recursive: true });
    }
    
    let startTime = new Date(`1970-01-01T${start}Z`);
    let endTime = new Date(`1970-01-01T${end}Z`);

    let duration = new Date(endTime - startTime).toISOString();
    duration = duration.slice(11, -5);

    let trimming = videoUtils.trim(inputFile, outputFile, start, duration);

    trimming.then(() => {
        res.json({
            message: 'Video trimmed successfully',
            fileId: outName
        });
    }).catch((err) => {
        res.status(500);
        res.json({
            message: 'Failed to trim video',
            error: err
        });
    });
}

module.exports.merge = async (req, res) => {
    let { fileIds } = req.body;
    let inputFiles = fileIds.map(fileId => `.temp/videos/${fileId}.mp4`);
    
    for (let file of inputFiles) {
        if (!fs.existsSync(file)) {
            res.status(404);
            res.json({
                message: `File ${file} not found`
            });
            return;
        }
    }

    let outName = Math.random().toString(36).substring(7);
    let outputFile = `.temp/videos/${outName}.mp4`;

    let merging = videoUtils.merge(inputFiles, outputFile);

    merging.then(() => {
        res.json({
            message: 'Video merged successfully',
            fileId: outName
        });
    }).catch((err) => {
        res.status(500);
        res.json({
            message: 'Failed to merge videos',
            error: err
        });
    });
}

