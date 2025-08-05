import ffmpeg from "fluent-ffmpeg"
 import ffmpegStatic from "ffmpeg-static"
 import fs from "fs"
 ffmpeg.setFfmpegPath(ffmpegStatic)
 const convertToHLS = async()=>{
 const resolutions = [
 {
 resolution: '320x180',
 videoBitrate: '500k',
 audioBitrate: '64k'
 },
 {
 resolution: '854x480',
 videoBitrate: '1000k',
 audioBitrate: '128k'
 },
 {
 resolution: '1280x720',
 videoBitrate: '2500k',
 audioBitrate: '192k'
 }
 ];
 const mp4FileName = 'test.mp4';
 const variantPlaylists = [];
 for (const { resolution, videoBitrate, audioBitrate } of resolutions) {
 console.log(`HLS conversion starting for ${resolution}`);
 const outputFileName = `${mp4FileName.replace(   //how file name should appear
 '.',
 '_'
 )}_${resolution}.m3u8`;
const segmentFileName = `${mp4FileName.replace(
 '.',
 '_'
 )}_${resolution}_%03d.ts`;  //_%03d- 001 002
 await new Promise((resolve, reject) => {
 ffmpeg('test.mp4')
 .outputOptions([
 `-c:v h264`,         //video codec format, shrinks video to store
 `-b:v ${videoBitrate}`,
 `-c:a aac`,  //audio format
 `-b:a ${audioBitrate}`,
 `-vf scale=${resolution}`,
 `-f hls`,
 `-hls_time 10`,  //how long chunk is of, 10sec
 `-hls_list_size 0`,  //now we have fixed no. of chunks, but incase of livestreaming dont kmnow how many chunks need,
 `-hls_segment_filename output/${segmentFileName}` //so we define a list size whn exceeded it get replaces by new one
 ])
 .output(`output/${outputFileName}`) //a bit doubt
 .on('end', () => resolve())
 .on('error', (err) => reject(err))
 .run();
 });
 const variantPlaylist = {
 resolution,
 outputFileName
 };
 variantPlaylists.push(variantPlaylist);
 console.log(`HLS conversion done for ${resolution}`);
 }
 console.log(`HLS master m3u8 playlist generating`);
 let masterPlaylist = variantPlaylists
 .map((variantPlaylist) => {
 const { resolution, outputFileName } = variantPlaylist;
 const bandwidth =
 resolution === '320x180'
 ? 676800
 : resolution === '854x480'
 ? 1353600
 : 3230400;
 return
 `#EXT-X-STREAM-INF:BANDWIDTH=${bandwidth},RESOLUTION=${resolution}\n${outputFileName}`;
 })
 .join('\n');
 masterPlaylist = `#EXTM3U\n` + masterPlaylist;
const masterPlaylistFileName = `${mp4FileName.replace(
 '.',
 '_'
 )}_master.m3u8`;
 const masterPlaylistPath = `output/${masterPlaylistFileName}`;
 fs.writeFileSync(masterPlaylistPath, masterPlaylist);
 console.log(`HLS master m3u8 playlist generated`);
 }
 export default convertToHLS