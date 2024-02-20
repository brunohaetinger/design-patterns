// Proxy

interface YouTubeSDKLib {
  listVideos();
  getVideoInfo(id: string);
  downloadVideo(id: string): Promise<Uint8Array>; 
}

class YouTubeSDK implements YouTubeSDKLib{
  listVideos() {
    return [{title: "video 1"}, {title: "video 2"}]
  }

  getVideoInfo(id: string) {
    return {
      id,
      duration: "04:30:00",
      title: "Titanic"
    }
  }

  downloadVideo(id: string): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(new Uint8Array([0x48, 0x65, 0x6C, 0x6C, 0x6F]));
      }, 5000)
    });
  }
}

class CachedYouTubeSDK implements YouTubeSDKLib{
  service: YouTubeSDK;
  listCache;
  videoInfoCache;
  videoCache;

  constructor(s: YouTubeSDK){
    this.service = s;
    this.listCache = [];
    this.videoInfoCache = {};
    this.videoCache = {};
  }

  listVideos() {
    if(!this.listCache){
      this.listCache = this.service.listVideos();
    }
    return this.listCache;
  }

  getVideoInfo(id: string) {
    if(!this.videoInfoCache[id]){
      this.videoInfoCache[id] = this.service.getVideoInfo(id);
    }
    return this.videoInfoCache[id];
  }
  
  downloadVideo(id: string): Promise<Uint8Array> {
    if(!this.videoCache[id]){
      this.videoCache[id] = this.service.downloadVideo(id);
    }
    return this.videoCache[id];
  }
}



// main
function main(){
  const youtubeSDK = new YouTubeSDK();
  const cachedSDK = new CachedYouTubeSDK(youtubeSDK);
  
  
  console.log('Youtube SDK - common');
  console.time('Normal SDK');
  youtubeSDK.downloadVideo('foo').then((video)=>{
    console.log('Result: ', video);
    console.timeEnd('Normal SDK');
  })


  console.log('Youtube SDK - Cached 1');
  console.time('Cached SDK 1');
  cachedSDK.downloadVideo('foo').then((video)=>{
    console.log('Result: ', video);
    console.timeEnd('Cached SDK 1');
  })

  console.log('Youtube SDK - Cached 2');
  console.time('Cached SDK 2');
  cachedSDK.downloadVideo('foo').then((video)=>{
    console.log('Result: ', video);
    console.timeEnd('Cached SDK 2');
  })
};
main();