const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

module.exports.getVideoInfo = async (inputFile) => {
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(inputFile, (err, metadata) => {
            if (err) {
                reject(err);
            }

            resolve(metadata);
        });
    });
}

module.exports.trim = async (inputFile, outputFile, startTime, duration) => {
    let trimPromise = new Promise((resolve, reject) => {
        let video = ffmpeg(inputFile);
        
        video.setStartTime(startTime);
        video.setDuration(duration);

        video.save(outputFile);
        video.on('end', () => {
            resolve("Video trimmed successfully");
        });

        video.on('error', (err) => {
            reject(err);
        });
    });

    return trimPromise;
}

module.exports.merge = async (inputFiles, outputFile) => {
    return new Promise((resolve, reject) => {
        let video = ffmpeg();

        for (let file of inputFiles) {
            video.addInput(file);
        }
        
        video.mergeToFile(outputFile, '.temp');
        video.on('end', () => {
            resolve("Videos merged successfully");
        });

        video.on('error', (err) => {
            reject(err);
        });
    });
}