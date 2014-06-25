#! /usr/bin/env node
/**
 * Created by intelligrape on 25/6/14.
 * auther Deepak Vishwakarma
 */
function play(file){
    var fs = require("fs");
    var lame = require("lame");
    console.log(lame);
    var Speaker = require("speaker");
    console.log(Speaker);
    var audioOptions = {channels: 2, bitDepth: 16, sampleRate: 44100};
    var decoder = lame.Decoder();
    var speaker     = new Speaker(audioOptions);
    // Read the first file
    var inputStream = fs.createReadStream(file);
    inputStream.pipe(decoder).pipe(speaker);

}
play(process.argv[2]);