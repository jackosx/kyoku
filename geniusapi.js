const request = require("request");
const lyricist = require("lyricist")('u-3INPffNw___Y7N3GCu98dKaTasT_g9LRnYjcvmzRf35z0-eYVFFwmoFasBC5AH');

const getSongData  = ({name, artist}, finished) => {
   let options = {
      url: 'https://api.genius.com/search?q=' + encodeURIComponent(name + ' ' + artist),
      headers: {
         'Authorization': 'Bearer 0ODuJ_BEdGP4UcHx_fZ2q7jjAHSgEq04PcVSXHolbog_pxjTlv25L0dS-TQkQ6iw'
      }
   }
   request(options, (error, response, body) => {
      if (!error && response.statusCode == 200){
         body = JSON.parse(body);
         let song = body.response.hits[0];
         console.log(song);
         finished({imgURL: song.result.header_image_url});
         lyricist.song(song.result.id, (err, response) => {
            finished({lyrics:response.lyrics.trim()});
         })
      }
   });
}


module.exports = {
   getSongData
}
