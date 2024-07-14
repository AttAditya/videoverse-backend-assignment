module.exports.trim = async (inputFile, outputFile, startTime, duration) => {
    return new Promise((resolve, reject) => {
        resolve("Video trimmed successfully");
    });
}

module.exports.merge = async (inputFiles, outputFile) => {
    return new Promise((resolve, reject) => {
        resolve("Video merged successfully");
    });
}