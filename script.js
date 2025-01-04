

const leftArrowScrolling = document.querySelector(".leftArrowCircle");
const rightArrowScrolling = document.querySelector(".rightArrowCircle");
const quickPickScrollingBox = document.querySelector(".quickPickScrollingBox");
const quickPickChildElements = document.querySelectorAll(".qiuckPicksScrollingChildDivs");
const quickPicksSongsDivBox = document.querySelector(".quickPicksSongsDivBox");
const barsLogo = document.querySelector(".barsLogo");
const barsDiv = document.querySelector(".barsDiv");
const navbar = document.querySelector('.navbar');
const heartWithoutBackgroundLogo = document.querySelector(".heartWithoutBackgroundLogo");
const heartWithBackgroundLogo = document.querySelector(".heartWithBackgroundLogo");
const heartWithoutBackgroundBox = document.querySelector(".heartWithoutBackground");
const heartWithBackgroundBox = document.querySelector(".heartWithBackground");
const pauseLogo = document.querySelector(".pauseLogo");
const playLogo = document.querySelector(".playLogo");
const pauseDiv = document.querySelector(".pauseDiv")
const playDiv = document.querySelector(".playDiv");
const audioTag = document.querySelector(".audioTag");
const progressBar = document.querySelector(".progress-bar");
const quickPickSongsImg = document.getElementsByClassName("quickPickSongsImg");
const quickPickSongsImgAbout = document.querySelectorAll(".quickPickSongsImg-About");
const quickPickSongName = document.getElementsByClassName("quickPickSongName");
const quickPickSongArtistName = document.getElementsByClassName("quickPickSongArtistName");
const songPlayerImg = document.querySelector(".songPlayerImg");
const backgroundVideo = document.querySelector(".backgroundVideo");
const MusicPlayerInsideSongName = document.querySelector(".pinside-Song-name");
const MusicPlyerArtistName = document.querySelector(".songPlyerArtistName");
const progressContainer = document.querySelector(".progress-container");
const progressDot = document.querySelector(".progress-dot");
const forwardLogo = document.querySelector(".forwardLogo");
const backwardLogo = document.querySelector(".backwardLogo");
const playlistMainDiv = document.querySelector(".playlistMainDiv");
const PopularAlbumImg = document.querySelectorAll(".albumImg");
const PopularAlbumAbout = document.querySelectorAll(".albumAbout");
const recommendedAlbumImg = document.querySelectorAll(".recoImg");
const recommendedAbout = document.querySelectorAll(".recoAbout");
const artistAbout = document.querySelectorAll(".artistAbout");
const artistImg = document.querySelectorAll(".artistImg");
const searchBarLogo = document.querySelector(".searchBarLogo");
const BigHitsAlbumImg = document.querySelectorAll(".BigHitsImg");
const BigHitsAlbumAbout = document.querySelectorAll(".BigHitsAbout");
const discoverPicksAlbumImg = document.querySelectorAll(".discoverPicksImg");
const discoverPicksAlbumAbout = document.querySelectorAll(".discoverPicksAbout");
const mainPlayListContainer = document.querySelector(".mainPlayListContainer");
const playlistMainDivName = document.querySelector(".playlistMainDivName");
const mainplaylistImg = document.querySelector(".mainplaylistImg");
const mainDivAfterClickThreeDotLogo = document.querySelector(".mainDivAfterClickThreeDotLogo");
const DivAfterClickThreeDotLogoGoBack = document.querySelector(".DivAfterClickThreeDotLogoGoBack");
const libraryDiv = document.querySelector(".librarydiv");
const libraryDivpage = document.querySelector(".libraryDivpage");
const searchMainDiv = document.querySelector(".searchMainDiv");
const likedDivpage = document.querySelector(".likedDivpage");
const homeDiv = document.querySelector(".homeDiv");
const libraryDivpageSongsMainDiv = document.querySelector(".libraryDivpageSongsMainDiv");
const likedDivpageSongsMainDiv = document.querySelector(".likedDivpageSongsMainDiv");
const likedDiv = document.querySelector(".likedDiv");
const playlistMainDivScrollSongNameDiv = document.querySelector(".mainplaylistMainDivScrollSongNameDiv");

let currentSongofthreeDotDiv;
let currentSongoafterMainSongPlayingDotDiv;
let currentSong;
let currentSongNameDivArrayForColor=null;
let currentPlaylist = [];
let currentSongIndex = 0;
let videoPlayingCondition;
let currentOpendPlaylistInsidePlaylistDiv=null;
let currentOpendPlaylistInsidePlaylistDiv2=null;
let currentSongObj;

let songSerialRepeat = localStorage.getItem("songSerialRepeat") || "repeatNext";
 localStorage.setItem("songSerialRepeat",songSerialRepeat);

homeDiv.classList.add("selctBarColor");
document.querySelector(".ThreeDotcircle-pluslogoDiv").classList.add("ThreeDotcircleDisplayBlock");
document.querySelector(".circle-pluslogoDiv-main").classList.add("circle-plus-checklogoDiv-maindisplayBlock");
let libraryArray =  JSON.parse(localStorage.getItem('libraryArray')) || [];

document.querySelector(".ThreeDotcircle-heartWithoutBackgroundDiv").classList.add("ThreeDotcircle-heartDislplay-block");
let likedArray =  JSON.parse(localStorage.getItem('likedArray')) || [];

// All function.......................................................
 let visibleFun = ()=>{
   document.querySelector(".songPlayerMainDiv").classList.add("visible");
 }
 

 let backgroundImgForVideoFun = ()=>{
  if(videoPlayingCondition==true){
    if(document.querySelector(".songPlayerMainDiv").classList.contains("songPlayerMainDivForFullScreen")){
       document.querySelector(".songPlayerImg").classList.add("displayNone");
     }else{
      document.querySelector(".songPlayerImg").classList.remove("displayNone");
     }
  }else if(videoPlayingCondition==false){
    if(document.querySelector(".songPlayerImg").classList.contains("displayNone")){
      document.querySelector(".songPlayerImg").classList.remove("displayNone");
    }
    
  }
}




// .......................................................






//Quick picks box scrolling feature..................................
let currentIndex = 0;

checkArrowButtonColors();

leftArrowScrolling.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToIndex(currentIndex);
    leftArrowScrolling.classList.add("clicked");
    setTimeout(() => {
      leftArrowScrolling.classList.remove("clicked");
    }, 200);
  }
  checkArrowButtonColors();
});

rightArrowScrolling.addEventListener("click", () => {
  if (currentIndex < quickPickChildElements.length - 1) {
    currentIndex++;
    scrollToIndex(currentIndex);
    rightArrowScrolling.classList.add("clicked");
    setTimeout(() => {
      rightArrowScrolling.classList.remove("clicked");
    }, 200);
  }
  checkArrowButtonColors();
});

function scrollToIndex(index) {
  const targetScrollLeft = index * quickPickChildElements[0].offsetWidth;
  quickPickScrollingBox.scrollTo({
    left: targetScrollLeft,
    behavior: "smooth",
  });
}

function checkArrowButtonColors() {
  const scrollLeft = quickPickScrollingBox.scrollLeft;
  const maxScrollLeft =
    quickPickScrollingBox.scrollWidth - quickPickScrollingBox.clientWidth;

  if (scrollLeft <= 0) {
    leftArrowScrolling.classList.remove("active");
    rightArrowScrolling.classList.add("active");
  } else if (scrollLeft >= maxScrollLeft - 2) {
    leftArrowScrolling.classList.add("active");
    rightArrowScrolling.classList.remove("active");
  } else {
    leftArrowScrolling.classList.add("active");
    rightArrowScrolling.classList.add("active");
  }
}

quickPickScrollingBox.addEventListener("scroll", () => {
  const scrollLeft = quickPickScrollingBox.scrollLeft;
  const childWidth = quickPickChildElements[0].offsetWidth;
  currentIndex = Math.round(scrollLeft / childWidth);
  checkArrowButtonColors();
});
//Quick picks box scrolling feature end here...........................



let bodyNotScrollingFun = ()=>{
  if(barsDiv.classList.contains("barsDivAfterClick")||document.querySelector(".songPlayerMainDiv").classList.contains("songPlayerMainDivForFullScreen")||playlistMainDiv.classList.contains("playlistMainDivVisibility-visible")||mainDivAfterClickThreeDotLogo.classList.contains("mainDivAfterClickThreeDotLogoAfterdotClick")||libraryDivpage.classList.contains("libraryDivpageVisibility-visible")||likedDivpage.classList.contains("likedDivpageVisibility-visible")||searchMainDiv.classList.contains("searchMainDivVisibility-Visible")){
    document.querySelector(".backgroundForBody").classList.add("display-block");
    document.querySelector("body").classList.add("classForBodyNotScrolling");
    if(navbar.classList.contains('navbar-scrolled')){
      navbar.classList.remove('navbar-scrolled');
    }
    
    
  }else{
    document.querySelector(".backgroundForBody").classList.remove("display-block");
    document.querySelector("body").classList.remove("classForBodyNotScrolling");
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scrolled');
    }
  }
}

 
// BarLogo Click feature start here.........................................
   barsLogo.addEventListener("click",()=>{
     barsDiv.classList.add("barsDivAfterClick");
     bodyNotScrollingFun();
   });
   
   document.querySelector(".xmark").addEventListener("click",()=>{
    barsDiv.classList.remove("barsDivAfterClick");
    bodyNotScrollingFun();
   });
// BarLogo Click feature end here.........................................



// Header style for scrolling start...............................................................
 window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
 });
// Header style for scrolling end...............................................................
    




// Song player song name animation start................................................................
   let songplayerSongNameScrollingFun = ()=>{
    const songPlayer = document.querySelector(".SongPlayerSongName");
    const content = document.querySelector(".pinside-Song-name");
 
     if (content.scrollWidth > songPlayer.clientWidth) {
       content.classList.add("scroll-animation");
     }else{
      if(content.classList.contains("scroll-animation"))
        content.classList.remove("scroll-animation");
     }
   }
   

// Song player song name animation end................................................................
  
   
 

//heart animation start here.............................................................................
heartWithoutBackgroundBox.classList.add("heartDisplayBlock");

 let heartInsideSongPlayerDivFun = ()=>{
  if(currentSongoafterMainSongPlayingDotDiv){
    const LikedexistingSong2 = likedArray.find((e) => e.title === currentSongoafterMainSongPlayingDotDiv.title);
  if(LikedexistingSong2){
    heartWithoutBackgroundBox.classList.remove("heartDisplayBlock");
    heartWithBackgroundBox.classList.add("heartDisplayBlock");
    
  }else{
    if(heartWithBackgroundBox.classList.contains("heartDisplayBlock")){
      heartWithBackgroundBox.classList.remove("heartDisplayBlock");
      heartWithoutBackgroundBox.classList.add("heartDisplayBlock");
    }
  }
 }
 FunDisplaySongInLikedDiv();
}


heartWithoutBackgroundBox.addEventListener("click",()=>{
  const LikedexistingSong4 = likedArray.find((e) => e.title === currentSongoafterMainSongPlayingDotDiv.title);
  if(!LikedexistingSong4){
    likedArray.push(currentSongoafterMainSongPlayingDotDiv);
    localStorage.setItem('likedArray', JSON.stringify(likedArray));
    heartInsideSongPlayerDivFun();
    notificationFun("Added to Liked Songs");
    heartWithBackgroundBox.classList.add("heartAnimation");
  }
});

heartWithBackgroundBox.addEventListener("click",()=>{
  const LikedexistingSong5 = likedArray.find((e) => e.title === currentSongoafterMainSongPlayingDotDiv.title);
  if(LikedexistingSong5){
    const likedindex10 = likedArray.findIndex((e) => e.title === currentSongoafterMainSongPlayingDotDiv.title);
    if (likedindex10 > -1) {
      likedArray.splice(likedindex10, 1);
    }
    localStorage.setItem('likedArray', JSON.stringify(likedArray));
    heartInsideSongPlayerDivFun();
    notificationFun("Removed from Liked Songs");
    heartWithoutBackgroundBox.classList.add("heartAnimation");
  }
});


  
//heart animation end here.............................................................................




//PlayPauseLogo and audio feature start..........................................................................................
pauseDiv.classList.add("playPauseDisplayBlock");

pauseLogo.addEventListener("click",()=>{
  pauseDiv.classList.remove("playPauseDisplayBlock");
  playDiv.classList.add("playPauseDisplayBlock");
  audioTag.pause();
});

playLogo.addEventListener("click",()=>{
  playDiv.classList.remove("playPauseDisplayBlock");
  pauseDiv.classList.add("playPauseDisplayBlock");
  audioTag.play();
})
//PlayPauseLogo and audio feature end..........................................................................................




//Song Player click for full screen feature start......................................................

document.querySelector(".songPlayerClickForFullScreen").addEventListener("click",()=>{
  document.querySelector(".songPlayerMainDiv").classList.add("songPlayerMainDivForFullScreen");
  document.querySelector(".songPlayerClickForFullScreen").classList.add("songPlayerClickForFullScreendisplayNone");
  document.querySelector(".songPlayerDiv").classList.add("songPlayerDivAfterFullscreen");
  document.querySelector(".songPlayerImgAboutDiv").classList.add("songPlayerImgAboutDivAfterFullscreen");
  document.querySelector(".songPlayePlayPauseDiv").classList.add("songPlayePlayPauseDivAfterFullscreen");
  document.querySelector(".songPlayerAbout").classList.add("songPlayerAboutAfterFullscreen");
  document.querySelector(".songPlayerImg").classList.add("songPlayerImgAfterFullscreen");
  document.querySelector(".SongPlayerSongName").classList.add("SongPlayerSongNameAfterFullscreen");
  document.querySelector(".songPlyerArtistName").classList.add("songPlyerArtistNameAfterFullscreen");
  document.querySelector(".progress-container").classList.add("progress-containerAfterfullscreen");
  document.querySelector(".progress-dot").classList.add("progress-dotDisplayBlock");
  document.querySelector(".progress-bar").classList.add("progress-barAfterFullScreen");
  document.querySelector(".time-container").classList.add("time-containerDisplayBlock");
  document.querySelector(".PlayPauseBox").classList.add("PlayPauseBoxAfterClick");
  document.querySelector(".playpause").classList.add("playpauseAfterClick");
  document.querySelector(".playDiv").classList.add("playDivAfterfullscreen");
  document.querySelector(".pauseDiv").classList.add("pauseDivAfterfullscreen");
  document.querySelector(".backwardDiv").classList.add("backward-forwardLogoaDisplayBlock");
  document.querySelector(".forwardDiv").classList.add("backward-forwardLogoaDisplayBlock");
  document.querySelector(".chevron-down").classList.add("chevron-downdisplay-block");
  document.querySelector(".heartBox").classList.add("heartBoxAfterfullscreen");
  document.querySelector(".visualizer").classList.add("visualizerAfterFullScreen");
  document.querySelector(".repeat-repeat1Box").classList.add("classvisibility");
  document.querySelector(".circle-plusDiv").classList.add("classvisibility");
  document.querySelector(".songAddedNotificationMainDiv").classList.add("songAddedNotificationMainDivforFullScreenSongPlayerDiv");
  backgroundVideo.classList.add("backgroundVideoDisplayBlock");
  backgroundImgForVideoFun();
  bodyNotScrollingFun();
  addLibraryinsideSongplayerUpdateDivFun();
  heartInsideSongPlayerDivFun();

});
  
document.querySelector(".chevron-down").addEventListener("click",()=>{
  document.querySelector(".songPlayerMainDiv").classList.remove("songPlayerMainDivForFullScreen");
  document.querySelector(".songPlayerClickForFullScreen").classList.remove("songPlayerClickForFullScreendisplayNone");
  document.querySelector(".songPlayerDiv").classList.remove("songPlayerDivAfterFullscreen");
  document.querySelector(".songPlayerImgAboutDiv").classList.remove("songPlayerImgAboutDivAfterFullscreen");
  document.querySelector(".songPlayePlayPauseDiv").classList.remove("songPlayePlayPauseDivAfterFullscreen");
  document.querySelector(".songPlayerAbout").classList.remove("songPlayerAboutAfterFullscreen");
  document.querySelector(".songPlayerImg").classList.remove("songPlayerImgAfterFullscreen");
  document.querySelector(".SongPlayerSongName").classList.remove("SongPlayerSongNameAfterFullscreen");
  document.querySelector(".songPlyerArtistName").classList.remove("songPlyerArtistNameAfterFullscreen");
  document.querySelector(".progress-container").classList.remove("progress-containerAfterfullscreen");
  document.querySelector(".progress-dot").classList.remove("progress-dotDisplayBlock");
  document.querySelector(".progress-bar").classList.remove("progress-barAfterFullScreen");
  document.querySelector(".time-container").classList.remove("time-containerDisplayBlock");
  document.querySelector(".PlayPauseBox").classList.remove("PlayPauseBoxAfterClick");
  document.querySelector(".playpause").classList.remove("playpauseAfterClick");
  document.querySelector(".playDiv").classList.remove("playDivAfterfullscreen");
  document.querySelector(".pauseDiv").classList.remove("pauseDivAfterfullscreen");
  document.querySelector(".backwardDiv").classList.remove("backward-forwardLogoaDisplayBlock");
  document.querySelector(".forwardDiv").classList.remove("backward-forwardLogoaDisplayBlock");
  document.querySelector(".chevron-down").classList.remove("chevron-downdisplay-block");
  document.querySelector(".heartBox").classList.remove("heartBoxAfterfullscreen");
  document.querySelector(".visualizer").classList.remove("visualizerAfterFullScreen");
  document.querySelector(".repeat-repeat1Box").classList.remove("classvisibility");
  document.querySelector(".circle-plusDiv").classList.remove("classvisibility");
  document.querySelector(".songAddedNotificationMainDiv").classList.remove("songAddedNotificationMainDivforFullScreenSongPlayerDiv");
  backgroundVideo.classList.remove("backgroundVideoDisplayBlock");
  backgroundImgForVideoFun();
  bodyNotScrollingFun();
})
//Song Player click for full screen feature start......................................................











// Songs playlist start.........................................................................................................
  //  HindiSong1 playlist start here-------------------------------------------->
  const HindiSong1Playlist = [
    {
      title: "Jo Tum Mere Ho",
      src: "Anuv_Jain_-_JO_TUM_MERE_HO__Lyrics_(256k).mp3.vm.au",
      img: "Jo-Tum-Mere-Ho-Hindi-2024-20240731053953-500x500.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "HindiSong1Playlist",
    },
    {
      title: "Suniyan Suniyan",
      src: "Suniyan_Suniyan_-_Lyrics____Juss_X_Mixsingh____Official_Audio____Lyrics_Video____SF_LYRICS_HUB___(256k).mp3.vm.au",
      img: "artworks-9L7V4njW3zkBVG1l-misuQQ-t500x500.jpg",
      artist: "Song.Juss,MixSingh",
      playlistname: "HindiSong1Playlist",
    },
    {
      title: "Chuttamalle",
      src: "CHUTTAMALLE_SONG_LYRICS_DEVARA__(256k).mp3",
      img: "Chuttamalle-From-Devara-Part-1-Telugu-2024-20240805181008-500x500.jpg",
      artist: "Song.Shilpa Rao",
      playlistname: "HindiSong1Playlist",
      backgroundVideo: "VID_20241219122156.mp4",
    },
    {
      title: "Choo Lo",
      src: "The_Local_Train_-_Aalas_Ka_Pedh_-_Choo_Lo__Official_Audio_(256k).mp3",
      img: "1478a886e438f0a746a8b42eacfdbcc4.1000x1000x1.jpg",
      artist: "Song.The Local Train",
      playlistname: "HindiSong1Playlist",
    },
    {
      title: "Samjho Na x Wishes",
      src: "Samjho_Na_X_Wishes_-_Mashup___Aditya_Rikhari___Hasan_Raheem___DJ_Sumit_Rajwanshi(256k).mp3",
      img: "Wishes-X-Samjho-Na-Hindi-2024-20240906154834-500x500.jpg",
      artist: "Song.My Love",
      playlistname: "HindiSong1Playlist",
    },
    {
      title: "Hass Hass",
      src: "Hass_Hass__Official_Video__Diljit_X_Sia(256k).mp3",
      img: "Hass-Hass-English-2023-20231026170517-500x500.jpg",
      artist: "Song.Diljit Dosanjh,Sia",
      playlistname: "HindiSong1Playlist",
    },
    {
      title: "Mere Mehboob",
      src: "Mere_Mehboob__LYRICS__-_Shilpa_Rao___Sachet_Tandon___Rajkummar_R___Triptii_D___Sachin-Jigar___Priya(256k).mp3",
      img: "Mere-Mehboob-From-Vicky-Vidya-Ka-Woh-Wala-Video-Hindi-2024-20240923121003-500x500.jpg",
      artist: "Sachin-jigar",
      playlistname: "HindiSong1Playlist",
    },
    {
      title: "KU LO SA",
      src: "Oxlade_-_KU_LO_SA__Lyrics_(256k).mp3",
      img: "KU-LO-SA-English-2022-20221207081653-500x500.jpg",
      artist: "Song.Oxlade,Camila Cabello",
      playlistname: "HindiSong1Playlist",
      backgroundVideo: "Video_10778348-c25e-46f5-9308-70421841c1b8.mp4",
    },
    {
      title: "Espresso",
      src: "Sabrina_Carpenter_-_Espresso__Lyrics_(256k).mp3",
      img: "Espresso_-_Sabrina_Carpenter.png",
      artist: "Song.Sabrina Carpenter",
      playlistname: "HindiSong1Playlist",
      backgroundVideo: "Video_4b4bf893-d5f9-4d44-a8c0-88bf88be4b4b.mp4",
    },
    {
      title: "Heeriye",
      src: "Heeriye__Lyrics__Jasleen_Royal_ft._Arijit_Singh___Dulquer_Salmaan(256k).mp3",
      img: "Heeriye-feat-Arijit-Singh-Hindi-2023-20230928050405-500x500.jpg",
      artist: "Jasleen Royal",
      playlistname: "HindiSong1Playlist",
    },
    {
      title: "Dil Tu Jaan Tu",
      src: "Gurnazar_-_Dil_Tu_Jaan_Tu__Lyrics_(256k).mp3",
      img: "artworks-JMJGj7piT6dxBNDf-XZKtHQ-t500x500.jpg",
      artist: "Gurnazar, Chet Singh",
      playlistname: "HindiSong1Playlist",
    },
    {
      title: "We Don't Talk Anymore",
      src: "Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3",
      img: "500x500.jpg",
      artist: "Song.Charlie Puth, Selena Gomez",
      playlistname: "HindiSong1Playlist",
    },
  ]; 
  //  HindiSong1 playlist end here-------------------------------------------->
  


 //  TrendingHindiSong playlist start here-------------------------------------------->
  const TrendingHindiSongPlaylist = [
    {
      title: "Jo Tum Mere Ho",
      src: "Anuv_Jain_-_JO_TUM_MERE_HO__Lyrics_(256k).mp3.vm.au",
      img: "Jo-Tum-Mere-Ho-Hindi-2024-20240731053953-500x500.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "TrendingHindiSongPlaylist",
    },
    {
      title: "Akhiyaan Gulaab",
      src: "Akhiyaan_Gulaab_-_MITRAZ__Lyrics_English_Meaning_(256k).mp3",
      img: "Akhiyaan-Gulaab-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240119131017-500x500.jpg",
      artist: "Song.Mitraz",
      playlistname: "TrendingHindiSongPlaylist",
      backgroundVideo: "Video_9788c17e-5027-4820-8395-afa298cb6878.mp4",
    },
    {
      title: "Jaana Samjho Na",
      src: "Jaana_Samjho_Na__LYRICS__-_Bhool_Bhulaiyaa_3___Kartik_A,_Triptii,_Aditya_R,_Tulsi_K,_Lijo,_DJ_Chetas(256k).mp3",
      img: "Jaana-Samjho-Na-From-Bhool-Bhulaiyaa-3-Hindi-2024-20241108131016-500x500.jpg",
      artist: "Song.Aditya Rikhari",
      playlistname: "TrendingHindiSongPlaylist",
    },
    {
      title: "Choo Lo",
      src: "The_Local_Train_-_Aalas_Ka_Pedh_-_Choo_Lo__Official_Audio_(256k).mp3",
      img: "1478a886e438f0a746a8b42eacfdbcc4.1000x1000x1.jpg",
      artist: "Song.The Local Train",
      playlistname: "TrendingHindiSongPlaylist",
    },
    {
      title: "Raanjhan (From.Do Patti)",
      src: "Raanjhan__LYRICS__-_Do_Patti___Kriti_Sanon,_Shaheer_S___Parampara_Tandon___Sachet_Tandon,_Kausar_M(256k).mp3",
      img: "Raanjhan-From-Do-Patti-Hindi-2024-20241004153945-500x500.jpg",
      artist: "Sachet-Parampara",
      playlistname: "TrendingHindiSongPlaylist",
    },
    {
      title: "AANKH",
      src: "Aankh__Lyrics____Sunidhi_Chauhan,_Rusha___Blizza___Feat._Sanya_Malhotra(256k).mp3",
      img: "153037-aankh-mp3-song-300.jpg",
      artist: "Sunidhi Chauhan",
      playlistname: "TrendingHindiSongPlaylist",
    },
    {
      title: "Mere Mehboob",
      src: "Mere_Mehboob__LYRICS__-_Shilpa_Rao___Sachet_Tandon___Rajkummar_R___Triptii_D___Sachin-Jigar___Priya(256k).mp3",
      img: "Mere-Mehboob-From-Vicky-Vidya-Ka-Woh-Wala-Video-Hindi-2024-20240923121003-500x500.jpg",
      artist: "Sachin-jigar",
      playlistname: "TrendingHindiSongPlaylist",
    },
    {
      title: "Aaj Ki Raat (From.Stree2)",
      src: "Aaj_Ki_Raat_Lyrics_-_Stree_2___Sachin-Jigar,_Madhubanti_Bagchi,_Divya_Kumar(256k).mp3",
      img: "aaj-ki-raat_1440_sonu_1728988106.jpg",
      artist: "Sachin-Jigar",
      playlistname: "TrendingHindiSongPlaylist",
      
    },
    {
      title: "Jaanam",
      src: "Jaanam__LYRICS__-_Bad_Newz___Vicky_Kaushal___Triptii_Dimri___Vishal_Mishra(256k).mp3",
      img: "Jaanam-From-Bad-Newz-Hindi-2024-20240709073740-500x500.jpg",
      artist: "Song.Vishal Mishra",
      playlistname: "TrendingHindiSongPlaylist",
    },
    {
      title: "Tum Se(From.Teri Baaton Mein Aisa Uljha Jiya)",
      src: "Tum_Se__Lyrics___Shahid_Kapoor,_Kriti_Sanon___Sachin-Jigar,_Raghav_Chaitanya,_Varun_Jain,_Indraneel(256k).mp3",
      img: "artworks-tSTYvte3mYdarR3w-dkoxvQ-t500x500.jpg",
      artist: "Sachin-Jigar",
      playlistname: "TrendingHindiSongPlaylist",
    },
    {
      title: "Dil Tu Jaan Tu",
      src: "Gurnazar_-_Dil_Tu_Jaan_Tu__Lyrics_(256k).mp3",
      img: "artworks-JMJGj7piT6dxBNDf-XZKtHQ-t500x500.jpg",
      artist: "Gurnazar, Chet Singh",
      playlistname: "TrendingHindiSongPlaylist",
    },
    
  ]; 
  //  TrendingHindiSong playlist end here-------------------------------------------->




  //  Punjabi playlist start here-------------------------------------------->
  const PunjabiPlaylist = [
    {
      title: "Aam Jahe Munde",
      src: "Aam_Jahe_Munde_LYRICS___Parmish_Verma_feat_Pardhaan___Latest_Punjabi_Songs_2020(256k).mp3",
      img: "artworks-snklxDVDya566qg9-IP6aLQ-t500x500.jpg",
      artist: "Parmish Verma",
      playlistname: "PunjabiPlaylist",
    },
    {
      title: "Bandana",
      src: "Shubh_-_Bandana__Lyrics_(256k).mp3",
      img: "BANDANA-SHUBH.jpg",
      artist: "Shubh",
      playlistname: "PunjabiPlaylist",
    },
    {
      title: "MVP",
      src: "MVP_-_Shubh__Lyrics_English_Meaning_(256k).mp3",
      img: "IMG_20250104_112426.jpg",
      artist: "Shubh",
      playlistname: "PunjabiPlaylist",
    },
    {
      title: "Mera Mann",
      src: "Mera_Mann__Juss_Feat._Parul_Gulati___Mix_Singh_Lyrics___Latest_Punjabi_Song_2024(256k).mp3",
      img: "Mera-Mann-Punjabi-2024-20241113231503-500x500.jpg",
      artist: "Juss",
      playlistname: "PunjabiPlaylist",
    },
    {
      title: "Suniyan Suniyan",
      src: "Suniyan_Suniyan_-_Lyrics____Juss_X_Mixsingh____Official_Audio____Lyrics_Video____SF_LYRICS_HUB___(256k).mp3.vm.au",
      img: "artworks-9L7V4njW3zkBVG1l-misuQQ-t500x500.jpg",
      artist: "Song.Juss,MixSingh",
      playlistname: "PunjabiPlaylist",
    },
    {
      title: "With You",
      src: "Ap_Dhillon_-_With_You__Lyrics_(256k).mp3",
      img: "With-You-Punjabi-2023-20230822145201-500x500.jpg",
      artist: "AP Dhillon",
      playlistname: "PunjabiPlaylist",
    },
    
  ]; 
  //  Punjabi playlist end here-------------------------------------------->




  //  PopChillPlaylist start here-------------------------------------------->
  const PopChillPlaylist = [
    {
      title: "Thoda Thoda Pyaar",
      src: "Thoda_Thoda_Pyaar_Stebin_Ben___Kumaar___Nilesh_Ahuja___Sidharth_Malhotra,_Neha_S___Lyrics_Store_04(256k).mp3",
      img: "Thoda-Thoda-Pyaar-Hindi-2021-20210212084501-500x500.jpg",
      artist: "Nilesh Ahuja",
      playlistname: "PopChillPlaylist",
    },
    {
      title: "Mera Mann",
      src: "Mera_Mann__Juss_Feat._Parul_Gulati___Mix_Singh_Lyrics___Latest_Punjabi_Song_2024(256k).mp3",
      img: "Mera-Mann-Punjabi-2024-20241113231503-500x500.jpg",
      artist: "Juss",
      playlistname: "PopChillPlaylist",
    },
    {
      title: "With You",
      src: "Ap_Dhillon_-_With_You__Lyrics_(256k).mp3",
      img: "With-You-Punjabi-2023-20230822145201-500x500.jpg",
      artist: "AP Dhillon",
      playlistname: "PopChillPlaylist",
    },
    {
      title: "Tera Ghata",
      src: "Tera_Ghata___Lyrical_Video___Gajendra_Verma_Ft._Karishma_Sharma___Vikram_Singh(256k).mp3",
      img: "Tera-Ghata-English-2018-20200225111817-500x500.jpg",
      artist: "Gajendra Verma",
      playlistname: "PopChillPlaylist",
    },
    
    {
      title: "Heeriye",
      src: "Heeriye__Lyrics__Jasleen_Royal_ft._Arijit_Singh___Dulquer_Salmaan(256k).mp3",
      img: "Heeriye-feat-Arijit-Singh-Hindi-2023-20230928050405-500x500.jpg",
      artist: "Jasleen Royal",
      playlistname: "PopChillPlaylist",
    },
    {
      title: "Akhiyaan Gulaab",
      src: "Akhiyaan_Gulaab_-_MITRAZ__Lyrics_English_Meaning_(256k).mp3",
      img: "Akhiyaan-Gulaab-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240119131017-500x500.jpg",
      artist: "Song.Mitraz",
      playlistname: "PopChillPlaylist",
      backgroundVideo: "Video_9788c17e-5027-4820-8395-afa298cb6878.mp4",
    },
    
  ]; 
  //  PopChillPlaylist end here-------------------------------------------->




  // BollywoodWorkout Playlist start here-------------------------------------------->
  const BollywoodWorkoutPlaylist = [
    {
      title: "Jai Jai Shivshankar (From.WAR)",
      src: "Jai_Jai_Shivshankar__Lyrics__-_Hrithik_Roshan___Tiger_Shroff___Vishal___Shekhar___Benny___War(256k).mp3",
      img: "War-Hindi-2019-20191001104931-500x500.jpg",
      artist: "Vishal Dadlani",
      playlistname: "BollywoodWorkoutPlaylist",
    },
    {
      title: "Let's Nacho",
      src: "Let’s_Nacho_-_Kapoor___Sons___Sidharth___Alia___Fawad___Badshah___Benny_Dayal___Nucleya(256k).mp3",
      img: "artworks-000199808197-8zc8em-t500x500.jpg",
      artist: "Nucleya",
      playlistname: "BollywoodWorkoutPlaylist",
    },
  ]; 
  //  BollywoodWorkout Playlist end here-------------------------------------------->




  // DiljitDosanjh Playlist start here-------------------------------------------->
  const DiljitDosanjhPlaylist = [
    {
      title: "Kinni Kinni",
      src: "Kinni_Kinni_Lyrics___Diljit_Dosanjh___New_Trending_Punjabi_Song_2023(256k).mp3",
      img: "Kinni-Kinni-1.jpg",
      artist: "Diljit Dosanjh",
      playlistname: "DiljitDosanjhPlaylist",
    },
    {
      title: "Hass Hass",
      src: "Hass_Hass__Official_Video__Diljit_X_Sia(256k).mp3",
      img: "Hass-Hass-English-2023-20231026170517-500x500.jpg",
      artist: "Song.Diljit Dosanjh,Sia",
      playlistname: "DiljitDosanjhPlaylist",
    },
  ]; 
  //  DiljitDosanjh Playlist end here-------------------------------------------->





  // DesiHipHop Playlist start here-------------------------------------------->
  const DesiHipHopPlaylist = [
    {
      title: "Mera Mann",
      src: "Mera_Mann__Juss_Feat._Parul_Gulati___Mix_Singh_Lyrics___Latest_Punjabi_Song_2024(256k).mp3",
      img: "Mera-Mann-Punjabi-2024-20241113231503-500x500.jpg",
      artist: "Juss",
      playlistname: "DesiHipHopPlaylist",
    },
    {
      title: "Pagol",
      src: "Pagol__Lyrics____Deep_Jandu___Bohemia___J_Statik___Latest_Punjabi_Songs_2019(256k).mp3",
      img: "Pagol-Punjabi-2019-20190704155556-500x500.jpg",
      artist: "Deep Jandu",
      playlistname: "DesiHipHopPlaylist",
    },
    {
      title: "Aam Jahe Munde",
      src: "Aam_Jahe_Munde_LYRICS___Parmish_Verma_feat_Pardhaan___Latest_Punjabi_Songs_2020(256k).mp3",
      img: "artworks-snklxDVDya566qg9-IP6aLQ-t500x500.jpg",
      artist: "Parmish Verma",
      playlistname: "DesiHipHopPlaylist",
    },
    {
      title: "Bandana",
      src: "Shubh_-_Bandana__Lyrics_(256k).mp3",
      img: "BANDANA-SHUBH.jpg",
      artist: "Shubh",
      playlistname: "DesiHipHopPlaylist",
    },
    {
      title: "MVP",
      src: "MVP_-_Shubh__Lyrics_English_Meaning_(256k).mp3",
      img: "IMG_20250104_112426.jpg",
      artist: "Shubh",
      playlistname: "DesiHipHopPlaylist",
    },
  ]; 
  //  DesiHipHop Playlist end here-------------------------------------------->



  // Glory Playlist start here-------------------------------------------->
  const GloryPlaylist = [
    {
      title: "Millionaire",
      src: "Millionaire__LYRICS__-_Yo_Yo_Honey_Singh___Leo_Grewal___Glory(256k).mp3",
      img: "artworks-gqoGzzWOX5R27mCZ-7ecckw-t500x500.jpg",
      artist: "Honey Singh",
      playlistname: "GloryPlaylist",
    },
    {
      title: "Jatt Mehkam",
      src: "Yo_Yo_Honey_Singh_-_JATT_MEHKMA___Song_Lyrics___Glory_Album_Lyrics(256k).mp3",
      img: "artworks-gqoGzzWOX5R27mCZ-7ecckw-t500x500.jpg",
      artist: "Honey Singh",
      playlistname: "GloryPlaylist",
    },
  ]; 
  //  Glory Playlist end here-------------------------------------------->




  // oosLove Playlist start here-------------------------------------------->
  const oosLovePlaylist = [
    {
      title: "Tujh Mein Rab Dikhta Hai",
      src: "Roopkumar_Rathod_-_Tujh_Mein_Rab_Dikhta_Hai__Lyrics____Rab_Ne_Bana_Di_Jodi(256k).mp3",
      img: "Tujh-Mein-Rab-Dikhta-Hai-Happy-Version-Hindi-2023-20230605104843-500x500.jpg",
      artist: "Salim-Sulaiman",
      playlistname: "oosLovePlaylist",
    },
    {
      title: "Tum Dil ki Dhadkan Mein",
      src: "Dhadkan-Tum_Dil_Ki_Dhadkan_Mein_Lyrics__Sad_(256k).mp3",
      img: "Dhadkan-Hindi-2000-20210226131403-500x500.jpg",
      artist: "Abhijeet",
      playlistname: "oosLovePlaylist",
    },
  ]; 
  //  oosLove Playlist end here-------------------------------------------->



  // BadshahParty Playlist start here-------------------------------------------->
  const BadshahPartyPlaylist = [
    {
      title: "Bachpan Ka Pyaar",
      src: "Badshah_-_Bachpan_Ka_Pyaar__Lyrics___Sahdev_Dirdo___Aastha_Gill___Rico__(256k).mp3",
      img: "Bachpan-Ka-Pyaar-Hindi-2021-20210809110458-500x500.jpg",
      artist: "Badshah",
      playlistname: "BadshahPartyPlaylist",
    },
    {
      title: "Genda Phool",
      src: "Badshah_-_Genda_Phool_ft._Payal_Dev__Lyrics___Jacqueline_Fernandez(256k).mp3",
      img: "Genda-Phool-Hindi-2020-20200325120350-500x500.jpg",
      artist: "Badshah",
      playlistname: "BadshahPartyPlaylist",
    },
    {
      title: "Pagol",
      src: "Pagol__Lyrics____Deep_Jandu___Bohemia___J_Statik___Latest_Punjabi_Songs_2019(256k).mp3",
      img: "Pagol-Punjabi-2019-20190704155556-500x500.jpg",
      artist: "Deep Jandu",
      playlistname: "BadshahPartyPlaylist",
    },
  
  ]; 
  //  BadshahParty Playlist end here-------------------------------------------->





  // TrendingInsta Playlist start here-------------------------------------------->
  const TrendingInstaPlaylist = [
     {
      title: "Mera Mann",
      src: "Mera_Mann__Juss_Feat._Parul_Gulati___Mix_Singh_Lyrics___Latest_Punjabi_Song_2024(256k).mp3",
      img: "Mera-Mann-Punjabi-2024-20241113231503-500x500.jpg",
      artist: "Juss",
      playlistname: "TrendingInsta",
    },
    {
      title: "Pagol",
      src: "Pagol__Lyrics____Deep_Jandu___Bohemia___J_Statik___Latest_Punjabi_Songs_2019(256k).mp3",
      img: "Pagol-Punjabi-2019-20190704155556-500x500.jpg",
      artist: "Deep Jandu",
      playlistname: "TrendingInsta",
    },
    {
      title: "Husn",
      src: "Anuv_Jain_-_HUSN__Lyrics_(256k).mp3",
      img: "0x1900-000000-80-0-0-2.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "TrendingInsta",
    },
    
    {
      title: "Alag Aasmaan",
      src: "Anuv_Jain_-_ALAG_AASMAAN___Lyrics__(256k).mp3",
      img: "IMG_20250104_183658.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "TrendingInsta",
    },
    {
      title: "Millionaire",
      src: "Millionaire__LYRICS__-_Yo_Yo_Honey_Singh___Leo_Grewal___Glory(256k).mp3",
      img: "artworks-gqoGzzWOX5R27mCZ-7ecckw-t500x500.jpg",
      artist: "Honey Singh",
      playlistname: "TrendingInsta",
    },
    {
      title: "Jatt Mehkam",
      src: "Yo_Yo_Honey_Singh_-_JATT_MEHKMA___Song_Lyrics___Glory_Album_Lyrics(256k).mp3",
      img: "artworks-gqoGzzWOX5R27mCZ-7ecckw-t500x500.jpg",
      artist: "Honey Singh",
      playlistname: "TrendingInsta",
    },
    {
      title: "Samjho Na x Wishes",
      src: "Samjho_Na_X_Wishes_-_Mashup___Aditya_Rikhari___Hasan_Raheem___DJ_Sumit_Rajwanshi(256k).mp3",
      img: "Wishes-X-Samjho-Na-Hindi-2024-20240906154834-500x500.jpg",
      artist: "Song.My Love",
      playlistname: "TrendingInsta",
    },
  
  ]; 
  //  TrendingInsta Playlist end here-------------------------------------------->




  // Atif Aslam Playlist start here-------------------------------------------->
  const AtifAslamPlaylist = [
    {
      title: "Dil Diyan Gallan",
      src: "Atif_Aslam_-_Dil_Diyan_Gallan__Lyrics___Tiger_Zinda_Hai_Soundtrack_(256k).mp3",
      img: "size_m_1516003439.jpg",
      artist: "Atif Aslam",
      playlistname: "AtifAslamPlaylist",
    },
    {
      title: "Tera Hone Laga Hoon",
      src: "Tera_Hone_Laga_Hoon_Lyrics_-_Ajab_Prem_Ki_Gazab_Kahaani___Pritam,_Atif_Aslam,_Alisha_Chinai(256k).mp3",
      img: "Tera-Hone-Laga-Hoon-Lofi-Mix-Hindi-2022-20240408232235-500x500.jpg",
      artist: "Atif Aslam",
      playlistname: "AtifAslamPlaylist",
    },
    {
      title: "O Meri Laila",
      src: "O_Meri_Laila_-__Lyrics__Atif_Aslam,_jyotica_tangri___7clouds_Hindi(256k).mp3",
      img: "IMG_20250104_182804.jpg",
      artist: "Atif Aslam",
      playlistname: "AtifAslamPlaylist",
    },
  ]; 
  //  Atif Aslam Playlist end here-------------------------------------------->





  // AnuvJain  Playlist start here-------------------------------------------->
  const AnuvJainPlaylist = [
    {
      title: "Husn",
      src: "Anuv_Jain_-_HUSN__Lyrics_(256k).mp3",
      img: "0x1900-000000-80-0-0-2.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "AnuvJainPlaylist",
    },
    {
      title: "Jo Tum Mere Ho",
      src: "Anuv_Jain_-_JO_TUM_MERE_HO__Lyrics_(256k).mp3.vm.au",
      img: "Jo-Tum-Mere-Ho-Hindi-2024-20240731053953-500x500.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "AnuvJainPlaylist",
    },
    {
      title: "Alag Aasmaan",
      src: "Anuv_Jain_-_ALAG_AASMAAN___Lyrics__(256k).mp3",
      img: "IMG_20250104_183658.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "AnuvJainPlaylist",
    },
  ]; 
  // AnuvJain Playlist  end here-------------------------------------------->





  // VishalMishra Playlist start here-------------------------------------------->
  const VishalMishraPlaylist = [
    {
      title: "Pehle Bhi Main",
      src: "Pehle_Bhi_Main____Vishal_Mishra____Animal____Official_Audio____Lyrics_Video____SF_LYRICS_HUB___(256k).mp3",
      img: "avatars-yce3dRCyyER6w9YT-VyJW0A-t1080x1080.jpg",
      artist: "Vishal Mishra",
      playlistname: "VishalMishraPlaylist",
      
    },
    {
      title: "Khoobsurat (From.Stree2)",
      src: "Khoobsurat_Lyrics_-_Stree_2___Sachin-Jigar,_Vishal_Mishra(256k).mp3",
      img: "Khoobsurat-From-Stree-2-Hindi-2024-20240809163834-500x500.jpg",
      artist: "Vishal Mishra",
      playlistname: "VishalMishraPlaylist",
    },
  ]; 
  //  VishalMishra Playlist end here-------------------------------------------->




  //  AnirudhRavichander Playlist start here-------------------------------------------->
  const AnirudhRavichanderPlaylist = [
    {
      title: "Chuttamalle",
      src: "CHUTTAMALLE_SONG_LYRICS_DEVARA__(256k).mp3",
      img: "Chuttamalle-From-Devara-Part-1-Telugu-2024-20240805181008-500x500.jpg",
      artist: "Song.Shilpa Rao",
      playlistname: "AnirudhRavichanderPlaylist",
      backgroundVideo: "VID_20241219122156.mp4",
    },
    {
      title: "Chaleya",
      src: "Chaleya__Lyrics__-_Jawan___Shah_Rukh_Khan___Nayanthara___Atlee,_Anirudh___Arijit_Singh___Shilpa_Rao(256k).mp3",
      img: "Chaleya_album_cover.jpg",
      artist: "Anirudh Ravichander",
      playlistname: "AnirudhRavichanderPlaylist",
    },
  ]; 
  //   AnirudhRavichander Playlist end here-------------------------------------------->





  //  HotHitTelugu Playlist start here-------------------------------------------->
  const HotHitTeluguPlaylist = [
    {
      title: "Chuttamalle",
      src: "CHUTTAMALLE_SONG_LYRICS_DEVARA__(256k).mp3",
      img: "Chuttamalle-From-Devara-Part-1-Telugu-2024-20240805181008-500x500.jpg",
      artist: "Song.Shilpa Rao",
      playlistname: "HotHitTeluguPlaylist",
      backgroundVideo: "VID_20241219122156.mp4",
    },
    {
      title: "Sooseki",
      src: "Sooseki___Couple_song_lyrics___English___Pushpa_2___Allu_Arjun___Rashmika___DSP___View_Trend_Lyrics(256k).mp3",
      img: "Sooseki-From-Pushpa-2-The-Rule-Telugu-2024-20240528221003-500x500.jpg",
      artist: "Shreya Ghoshal",
      playlistname: "HotHitTeluguPlaylist",
    },
    {
      title: "Daavudi",
      src: "Daavudi__Lyrics____Devara___NTR___Janhvi_Kapoor___Koratala_Siva___Anirudh(256k).mp3",
      img: "daavudisinglepiclong-979x1024.jpg",
      artist: "Nakash Aziz",
      playlistname: "HotHitTeluguPlaylist",
    },
  ]; 
  //   HotHitTelugu Playlist end here-------------------------------------------->







   //  LofiSukoon Playlist start here-------------------------------------------->
   const LofiSukoonPlaylist = [
    {
      title: "KAHO NA KAHO (Slowed Reverb) Lofi Song",
      src: "KAHO_NA_KAHO_[_Slowed_Reverb_]_Lofi_Song_Murder❤️(256k).mp3",
      img: "IMG_20250104_220501.jpg",
      artist: "Lofi (Slowed Reverb)",
      playlistname: "LofiSukoonPlaylist",
      
    },
    {
      title: "Sanam Teri Kasam (Slowed Lofi)",
      src: "Sanam_Teri_Kasam__Slowed___Reverb____Ankit_Tiwari___Palak_Muchhal___Lofi_-Zone__(256k).mp3",
      img: "artworks-JC2GQEX0k8UOD5Il-Bi9cWQ-t500x500.jpg",
      artist: "Lofi (Slowed Reverb)",
      playlistname: "LofiSukoonPlaylist",
    },
   
  ]; 
  //   LofiSukoon Playlist end here-------------------------------------------->





  // UltimateLoveSong Playlist start here-------------------------------------------->
  const UltimateLoveSongPlaylist = [
    {
      title: "Dil Tu Jaan Tu",
      src: "Gurnazar_-_Dil_Tu_Jaan_Tu__Lyrics_(256k).mp3",
      img: "artworks-JMJGj7piT6dxBNDf-XZKtHQ-t500x500.jpg",
      artist: "Gurnazar, Chet Singh",
      playlistname: "UltimateLoveSongPlaylist",
    },
    {
      title: "Tere Pyaar me",
      src: "Tere_Pyaar_Mein__Lyrics____Tu_Jhoothi_Main_Makkar___Arijit_Singh___Nikhita_Gandhi___Ranbir,_Shraddha(256k).mp3",
      img: "Tere-Pyaar-Mein-From-Tu-Jhoothi-Main-Makkaar-Hindi-2023-20230203140532-500x500.jpg",
      artist: "Song.Arijit Singh",
      playlistname: "UltimateLoveSongPlaylist",
    },
    {
      title: "Akhiyaan Gulaab",
      src: "Akhiyaan_Gulaab_-_MITRAZ__Lyrics_English_Meaning_(256k).mp3",
      img: "Akhiyaan-Gulaab-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240119131017-500x500.jpg",
      artist: "Song.Mitraz",
      playlistname: "UltimateLoveSongPlaylist",
      backgroundVideo: "Video_9788c17e-5027-4820-8395-afa298cb6878.mp4",
    },
    {
      title: "Raataan Lambiyan (From.Shershaah)",
      src: "Raataan_Lambiyan__Lyrics____Jubin_Nautiyal___Asees_Kaur___Tanishk_Bagchi(256k).mp3",
      img: "Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg",
      artist: "Tanishk Bagchi",
      playlistname: "UltimateLoveSongPlaylist",
      
    },
    {
      title: "O Maahi (From.Dunki)",
      src: "O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3",
      img: "O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg",
      artist: "Arijit Singh",
      playlistname: "UltimateLoveSongPlaylist",
      
    },
    {
      title: "Mareez-E-Ishq",
      src: "Mareez-e-Ishq__Lyrics__-_Arijit_Singh_🎵(256k).mp3",
      img: "Zid-Original-Motion-Picture-Soundtrack-Hindi-2014-20230331114652-500x500.jpg",
      artist: "Arijit Singh",
      playlistname: "UltimateLoveSongPlaylist",
      
    },
    {
      title: "Tera Ban Jaunga",
      src: "Tera_Ban_Jaunga_Lyrics___Tulsi_Kumar,_Akhil_Sachdeva___Shahid_Kapoor,_Kiara_Advani___Kabir_Singh(256k).mp3",
      img: "Kabir-Singh-Hindi-2019-20240131131003-500x500.jpg",
      artist: "Song.Akhil Sachdeva",
      playlistname: "UltimateLoveSongPlaylist",
      
    },
    {
      title: "Kesariya",
      src: "Kesariya__Lyrics__Full_Song_-_Brahmastra___Arijit_Singh___Kesariya_Tera_Ishq_Hai_Piya(256k).mp3",
      img: "Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg",
      artist: "Pritam",
      playlistname: "UltimateLoveSongPlaylist",
      
    },
    {
      title: "Tum Se(From.Teri Baaton Mein Aisa Uljha Jiya)",
      src: "Tum_Se__Lyrics___Shahid_Kapoor,_Kriti_Sanon___Sachin-Jigar,_Raghav_Chaitanya,_Varun_Jain,_Indraneel(256k).mp3",
      img: "artworks-tSTYvte3mYdarR3w-dkoxvQ-t500x500.jpg",
      artist: "Sachin-Jigar",
      playlistname: "UltimateLoveSongPlaylist",
    },
    {
      title: "Jaanam",
      src: "Jaanam__LYRICS__-_Bad_Newz___Vicky_Kaushal___Triptii_Dimri___Vishal_Mishra(256k).mp3",
      img: "Jaanam-From-Bad-Newz-Hindi-2024-20240709073740-500x500.jpg",
      artist: "Song.Vishal Mishra",
      playlistname: "UltimateLoveSongPlaylist",
    },
    {
      title: "Soni Soni",
      src: "Soni_Soni__Lyrics__-_Darshan_Raval___Ishq_Vishk_Rebound___Rohit_Saraf___Jonitha_Gandhi(256k).mp3.vm.au",
      img: "Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg",
      artist: "Darshan Raval",
      playlistname: "UltimateLoveSongPlaylist",
      
    },
    {
      title: "Heeriye",
      src: "Heeriye__Lyrics__Jasleen_Royal_ft._Arijit_Singh___Dulquer_Salmaan(256k).mp3",
      img: "Heeriye-feat-Arijit-Singh-Hindi-2023-20230928050405-500x500.jpg",
      artist: "Jasleen Royal",
      playlistname: "UltimateLoveSongPlaylist",
    },
  ]; 
  //  UltimateLoveSong Playlist end here-------------------------------------------->





  // ClubHits Playlist start here-------------------------------------------->
  const ClubHitsPlaylist = [
    {
      title: "With You",
      src: "Ap_Dhillon_-_With_You__Lyrics_(256k).mp3",
      img: "With-You-Punjabi-2023-20230822145201-500x500.jpg",
      artist: "AP Dhillon",
      playlistname: "ClubHitsPlaylist",
    },
    {
      title: "Kinni Kinni",
      src: "Kinni_Kinni_Lyrics___Diljit_Dosanjh___New_Trending_Punjabi_Song_2023(256k).mp3",
      img: "Kinni-Kinni-1.jpg",
      artist: "Diljit Dosanjh",
      playlistname: "ClubHitsPlaylist",
    },
    {
      title: "Hass Hass",
      src: "Hass_Hass__Official_Video__Diljit_X_Sia(256k).mp3",
      img: "Hass-Hass-English-2023-20231026170517-500x500.jpg",
      artist: "Song.Diljit Dosanjh,Sia",
      playlistname: "ClubHitsPlaylist",
    },
    
    {
      title: "Tera Ghata",
      src: "Tera_Ghata___Lyrical_Video___Gajendra_Verma_Ft._Karishma_Sharma___Vikram_Singh(256k).mp3",
      img: "Tera-Ghata-English-2018-20200225111817-500x500.jpg",
      artist: "Gajendra Verma",
      playlistname: "ClubHitsPlaylist",
    },
  ]; 
  //  ClubHits Playlist end here-------------------------------------------->




  // Safar Playlist start here-------------------------------------------->
  const SafarPlaylist = [
    {
      title: "Husn",
      src: "Anuv_Jain_-_HUSN__Lyrics_(256k).mp3",
      img: "0x1900-000000-80-0-0-2.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "SafarPlaylist",
    },
    {
      title: "Jo Tum Mere Ho",
      src: "Anuv_Jain_-_JO_TUM_MERE_HO__Lyrics_(256k).mp3.vm.au",
      img: "Jo-Tum-Mere-Ho-Hindi-2024-20240731053953-500x500.jpg",
      artist: "Song.Anuv Jain",
      playlistname: "SafarPlaylist",
    },
    {
      title: "Choo Lo",
      src: "The_Local_Train_-_Aalas_Ka_Pedh_-_Choo_Lo__Official_Audio_(256k).mp3",
      img: "1478a886e438f0a746a8b42eacfdbcc4.1000x1000x1.jpg",
      artist: "Song.The Local Train",
      playlistname: "SafarPlaylist",
    },
    {
      title: "Aasa Kooda",
      src: "Aasa_Kooda_-_Sai_Abhyankkar,_Sai_Smriti__Lyrics_video_(256k).mp3",
      img: "Aasa-Kooda-from-Think-Indie-Tamil-2024-20241209235403-500x500.jpg",
      artist: "Sai Abhyankkar",
      playlistname: "SafarPlaylist",
    },
  ]; 
  // Safar Playlist end here-------------------------------------------->




  // ArijitSing Playlist start here-------------------------------------------->
  const ArijitSinghPlaylist = [
    {
      title: "Mareez-E-Ishq",
      src: "Mareez-e-Ishq__Lyrics__-_Arijit_Singh_🎵(256k).mp3",
      img: "Zid-Original-Motion-Picture-Soundtrack-Hindi-2014-20230331114652-500x500.jpg",
      artist: "Arijit Singh",
      playlistname: "ArijitSinghPlaylist",
      
    },
    {
      title: "Khairiyat",
      src: "Khairiyat_-__Lyrics__Arijit_Singh___7clouds_Hindi(256k).mp3",
      img: "MV5BNzVlZjY4ZmItZGEwZi00MmM4LWI1ZDEtYTdjNzBhMGIxZDdiXkEyXkFqcGc@._V1_.jpg",
      artist: "Song.Arijit Singh",
      playlistname: "ArijitSinghPlaylist",
      
    },
    {
      title: "O Maahi (From.Dunki)",
      src: "O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3",
      img: "O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg",
      artist: "Arijit Singh",
      playlistname: "ArijitSinghPlaylist",
      
    },
    {
      title: "Main Dhoondne Ko Zamaana Mein",
      src: "Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3",
      img: "Heartless-2014-500x500.jpg",
      artist: "Song.Arijit Singh",
      playlistname: "ArijitSinghPlaylist",
      
    },
    {
      title: "Satranga (From.ANIMAL)",
      src: "ANIMAL-_Satranga__Lyrics____Arijit___Ranbir_Kapoor___Rashmika(256k).mp3",
      img: "Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg",
      artist: "Song.Arijit Singh",
      playlistname: "ArijitSinghPlaylist",
      
    },
    {
      title: "Lutt Putt Gaya",
      src: "Lutt_Putt_Gaya_Lyrics___Arijit_Singh___Dunki__Drop_2___ShahRukh_Khan___Taapsee_Pannu___Pritam(256k).mp3",
      img: "Lutt-Putt-Gaya-From-Dunki-Hindi-2023-20231211171015-500x500.jpg",
      artist: "Pritam",
      playlistname: "ArijitSinghPlaylist",
      
    },
    {
      title: "Kesariya",
      src: "Kesariya__Lyrics__Full_Song_-_Brahmastra___Arijit_Singh___Kesariya_Tera_Ishq_Hai_Piya(256k).mp3",
      img: "Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg",
      artist: "Pritam",
      playlistname: "ArijitSinghPlaylist",
      
    },
    
  ]; 
  //  ArijitSing Playlist end here-------------------------------------------->




 //Bollywood central playlist start here------------------------------------->
  const BollywoodCentralPlaylist = [
    {
      title: "Tum Se(From.Teri Baaton Mein Aisa Uljha Jiya)",
      src: "Tum_Se__Lyrics___Shahid_Kapoor,_Kriti_Sanon___Sachin-Jigar,_Raghav_Chaitanya,_Varun_Jain,_Indraneel(256k).mp3",
      img: "artworks-tSTYvte3mYdarR3w-dkoxvQ-t500x500.jpg",
      artist: "Sachin-Jigar",
      playlistname: "BollywoodCentralPlaylist",
    },
    {
      title: "Jaanam",
      src: "Jaanam__LYRICS__-_Bad_Newz___Vicky_Kaushal___Triptii_Dimri___Vishal_Mishra(256k).mp3",
      img: "Jaanam-From-Bad-Newz-Hindi-2024-20240709073740-500x500.jpg",
      artist: "Song.Vishal Mishra",
      playlistname: "BollywoodCentralPlaylist",
    },
    {
      title: "Soni Soni",
      src: "Soni_Soni__Lyrics__-_Darshan_Raval___Ishq_Vishk_Rebound___Rohit_Saraf___Jonitha_Gandhi(256k).mp3.vm.au",
      img: "Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg",
      artist: "Darshan Raval",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Tere Pyaar me",
      src: "Tere_Pyaar_Mein__Lyrics____Tu_Jhoothi_Main_Makkar___Arijit_Singh___Nikhita_Gandhi___Ranbir,_Shraddha(256k).mp3",
      img: "Tere-Pyaar-Mein-From-Tu-Jhoothi-Main-Makkaar-Hindi-2023-20230203140532-500x500.jpg",
      artist: "Song.Arijit Singh",
      playlistname: "BollywoodCentralPlaylist",
    },
    {
      title: "Jaana Samjho Na",
      src: "Jaana_Samjho_Na__LYRICS__-_Bhool_Bhulaiyaa_3___Kartik_A,_Triptii,_Aditya_R,_Tulsi_K,_Lijo,_DJ_Chetas(256k).mp3",
      img: "Jaana-Samjho-Na-From-Bhool-Bhulaiyaa-3-Hindi-2024-20241108131016-500x500.jpg",
      artist: "Song.Aditya Rikhari",
      playlistname: "BollywoodCentralPlaylist",
    },
    {
      title: "Akhiyaan Gulaab",
      src: "Akhiyaan_Gulaab_-_MITRAZ__Lyrics_English_Meaning_(256k).mp3",
      img: "Akhiyaan-Gulaab-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240119131017-500x500.jpg",
      artist: "Song.Mitraz",
      playlistname: "BollywoodCentralPlaylist",
      backgroundVideo: "Video_9788c17e-5027-4820-8395-afa298cb6878.mp4",
    },
    {
      title: "Raataan Lambiyan (From.Shershaah)",
      src: "Raataan_Lambiyan__Lyrics____Jubin_Nautiyal___Asees_Kaur___Tanishk_Bagchi(256k).mp3",
      img: "Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg",
      artist: "Tanishk Bagchi",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "O Maahi (From.Dunki)",
      src: "O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3",
      img: "O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg",
      artist: "Arijit Singh",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Mareez-E-Ishq",
      src: "Mareez-e-Ishq__Lyrics__-_Arijit_Singh_🎵(256k).mp3",
      img: "Zid-Original-Motion-Picture-Soundtrack-Hindi-2014-20230331114652-500x500.jpg",
      artist: "Arijit Singh",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Pehle Bhi Main",
      src: "Pehle_Bhi_Main____Vishal_Mishra____Animal____Official_Audio____Lyrics_Video____SF_LYRICS_HUB___(256k).mp3",
      img: "avatars-yce3dRCyyER6w9YT-VyJW0A-t1080x1080.jpg",
      artist: "Vishal Mishra",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Tere Vaaste (From. Zara Hatke Zara Bachke)",
      src: "Tere_Vaaste_-_lyrics___Zara_Hatke_Zara_Bachke(256k).mp3",
      img: "Zara-Hatke-Zara-Bachke-Hindi-2024-20240427063455-500x500.jpg",
      artist: "Varun Jain",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Besharam Rang (From.Pathaan)",
      src: "Besharam_Rang_Lyrics__Pathaan__Shah_Rukh_Khan,_Deepika_Padukone___Vishal___Sheykhar___Shilpa,_Kumaar(256k).mp3",
      img: "Besharam_Rang_song.jpg",
      artist: "Vishal-Sekhar",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Tera Ban Jaunga",
      src: "Tera_Ban_Jaunga_Lyrics___Tulsi_Kumar,_Akhil_Sachdeva___Shahid_Kapoor,_Kiara_Advani___Kabir_Singh(256k).mp3",
      img: "Kabir-Singh-Hindi-2019-20240131131003-500x500.jpg",
      artist: "Song.Akhil Sachdeva",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Aaj Ki Raat (From.Stree2)",
      src: "Aaj_Ki_Raat_Lyrics_-_Stree_2___Sachin-Jigar,_Madhubanti_Bagchi,_Divya_Kumar(256k).mp3",
      img: "aaj-ki-raat_1440_sonu_1728988106.jpg",
      artist: "Sachin-Jigar",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Khairiyat",
      src: "Khairiyat_-__Lyrics__Arijit_Singh___7clouds_Hindi(256k).mp3",
      img: "MV5BNzVlZjY4ZmItZGEwZi00MmM4LWI1ZDEtYTdjNzBhMGIxZDdiXkEyXkFqcGc@._V1_.jpg",
      artist: "Song.Arijit Singh",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Main Dhoondne Ko Zamaana Mein",
      src: "Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3",
      img: "Heartless-2014-500x500.jpg",
      artist: "Song.Arijit Singh",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Satranga (From.ANIMAL)",
      src: "ANIMAL-_Satranga__Lyrics____Arijit___Ranbir_Kapoor___Rashmika(256k).mp3",
      img: "Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg",
      artist: "Song.Arijit Singh",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Lutt Putt Gaya",
      src: "Lutt_Putt_Gaya_Lyrics___Arijit_Singh___Dunki__Drop_2___ShahRukh_Khan___Taapsee_Pannu___Pritam(256k).mp3",
      img: "Lutt-Putt-Gaya-From-Dunki-Hindi-2023-20231211171015-500x500.jpg",
      artist: "Pritam",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Kesariya",
      src: "Kesariya__Lyrics__Full_Song_-_Brahmastra___Arijit_Singh___Kesariya_Tera_Ishq_Hai_Piya(256k).mp3",
      img: "Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg",
      artist: "Pritam",
      playlistname: "BollywoodCentralPlaylist",
      
    },
    {
      title: "Chaleya",
      src: "Chaleya__Lyrics__-_Jawan___Shah_Rukh_Khan___Nayanthara___Atlee,_Anirudh___Arijit_Singh___Shilpa_Rao(256k).mp3",
      img: "Chaleya_album_cover.jpg",
      artist: "Anirudh Ravichander",
      playlistname: "BollywoodCentralPlaylist",
    },
    {
      title: "Khoobsurat (From.Stree2)",
      src: "Khoobsurat_Lyrics_-_Stree_2___Sachin-Jigar,_Vishal_Mishra(256k).mp3",
      img: "Khoobsurat-From-Stree-2-Hindi-2024-20240809163834-500x500.jpg",
      artist: "Vishal Mishra",
      playlistname: "BollywoodCentralPlaylist",
    },
    {
      title: "Dil Diyan Gallan",
      src: "Atif_Aslam_-_Dil_Diyan_Gallan__Lyrics___Tiger_Zinda_Hai_Soundtrack_(256k).mp3",
      img: "size_m_1516003439.jpg",
      artist: "Atif Aslam",
      playlistname: "BollywoodCentralPlaylist",
    },
    {
      title: "Tera Hone Laga Hoon",
      src: "Tera_Hone_Laga_Hoon_Lyrics_-_Ajab_Prem_Ki_Gazab_Kahaani___Pritam,_Atif_Aslam,_Alisha_Chinai(256k).mp3",
      img: "Tera-Hone-Laga-Hoon-Lofi-Mix-Hindi-2022-20240408232235-500x500.jpg",
      artist: "Atif Aslam",
      playlistname: "BollywoodCentralPlaylist",
    },
    {
      title: "O Meri Laila",
      src: "O_Meri_Laila_-__Lyrics__Atif_Aslam,_jyotica_tangri___7clouds_Hindi(256k).mp3",
      img: "IMG_20250104_182804.jpg",
      artist: "Atif Aslam",
      playlistname: "BollywoodCentralPlaylist",
    },
  ];
    
  //Bollywood central playlist end here------------------------------------->


  //Top English Songs playlist start here------------------------------------->
  const TopEnglishSongsPlaylist = [
    {
      title: "Let Me Down Slowly",
      src: "Alec_Benjamin_-_Let_Me_Down_Slowly__Lyrics_(256k).mp3",
      img: "0x1900-000000-80-0-0.jpg",
      artist: "Alec Benjamin",
      playlistname: "TopEnglishSongsPlaylist",
    },
    {
      title: "Rockabye",
      src: "Clean_Bandit_-_Rockabye__Lyrics__feat._Sean_Paul___Anne-Marie(256k).mp3",
      img: "Clean_Bandit_-_Rockabye_(feat._Sean_Paul_&_Anne-Marie).png",
      artist: "Song.Clean Bendit",
      playlistname: "TopEnglishSongsPlaylist",
    },
    {
      title: "Blinding Lights",
      src: "The_Weeknd_-_Blinding_Lights__Lyrics_(256k).mp3",
      img: "The_Weeknd_-_Blinding_Lights.png",
      artist: "The Weeknd",
      playlistname: "TopEnglishSongsPlaylist",
      
    },
    {
      title: "Memories",
      src: "Maroon_5_-_Memories__Lyrics_(256k).mp3",
      img: "Maroon_5_-_Memories.png",
      artist: "Maroon 5",
      playlistname: "TopEnglishSongsPlaylist",
    },
    {
      title: "The Nights",
      src: "Avicii_-_The_Nights__Lyrics_(256k).mp3",
      img: "Avicii_Nights_Artwork.png",
      artist: "Avicii",
      playlistname: "TopEnglishSongsPlaylist",
    },
    {
      title: "We Don't Talk Anymore",
      src: "Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3",
      img: "500x500.jpg",
      artist: "Song.Charlie Puth, Selena Gomez",
      playlistname: "TopEnglishSongsPlaylist",
    },
    {
      title: "Espresso",
      src: "Sabrina_Carpenter_-_Espresso__Lyrics_(256k).mp3",
      img: "Espresso_-_Sabrina_Carpenter.png",
      artist: "Song.Sabrina Carpenter",
      playlistname: "TopEnglishSongsPlaylist",
      backgroundVideo: "Video_4b4bf893-d5f9-4d44-a8c0-88bf88be4b4b.mp4",
    },
    {
      title: "Let Her Go",
      src: "Passenger___Let_Her_Go__Official_Lyric_Video_(256k).mp3",
      img: "Let-her-go-by-passenger.jpg",
      artist: "Song.Passenger",
      playlistname: "TopEnglishSongsPlaylist",
      
    },
    {
      title: "Attention",
      src: "Charlie_Puth_-_Attention__Lyrics_(256k).mp3",
      img: "MV5BNWUwZGYzMjgtNmY0OC00MTliLWIwMDMtMjAzYjBkNmJkYWEyXkEyXkFqcGc@._V1_.jpg",
      artist: "Song.Charlie Puth",
      playlistname: "TopEnglishSongsPlaylist",
      
    },
    {
      title: "I Really Like to Party",
      src: "I_really_like_to_party,_I_really_like_your_body_-_lyrics(256k).mp3",
      img: "artworks-r6GJIPSn5NgsmCRW-z6U2SQ-t500x500.jpg",
      artist: "DJ Gotta",
      playlistname: "TopEnglishSongsPlaylist",
      
    },
    {
      title: "KU LO SA",
      src: "Oxlade_-_KU_LO_SA__Lyrics_(256k).mp3",
      img: "KU-LO-SA-English-2022-20221207081653-500x500.jpg",
      artist: "Song.Oxlade,Camila Cabello",
      playlistname: "TopEnglishSongsPlaylist",
      backgroundVideo: "Video_10778348-c25e-46f5-9308-70421841c1b8.mp4",
    },
  ];
  //Top English Songs playlist end here------------------------------------->
// Songs playlists end......................................................................................................




// Quick Picks song Set start here.........................................................................................
let quickPicksPlaylist = JSON.parse(localStorage.getItem('quickPicksPlaylist')) || [
  AnuvJainPlaylist[0],
  HindiSong1Playlist[11],
  BollywoodCentralPlaylist[5],
  SafarPlaylist[3],
  BollywoodCentralPlaylist[1],
  TrendingInstaPlaylist[0],
  BollywoodCentralPlaylist[4],
  TopEnglishSongsPlaylist[6],
  HindiSong1Playlist[2],
  HindiSong1Playlist[6],
  HindiSong1Playlist[7],
  AnuvJainPlaylist[1],
];

// Save it to localStorage
const saveQuickPicksPlaylist = () => {
  localStorage.setItem('quickPicksPlaylist', JSON.stringify(quickPicksPlaylist));
};
saveQuickPicksPlaylist();

// -----------------------------------
const updateQuickPicksPlaylist = (song) => {
  // Check if the song is already in the playlist
  const QuickPicksPlaylistexistingIndex = quickPicksPlaylist.findIndex((s) => s.title === song.title);
  // Remove it if it exists to avoid duplicates
  if (QuickPicksPlaylistexistingIndex !== -1) {
    quickPicksPlaylist.splice(QuickPicksPlaylistexistingIndex, 1);
  }
  // Add the song to the beginning
  quickPicksPlaylist.unshift(song);
 // Limit the playlist size (e.g., 12 songs)
  if (quickPicksPlaylist.length > 12) {
    quickPicksPlaylist.pop();
  }
 // Save the updated playlist to localStorage
  saveQuickPicksPlaylist();
};
// --------------------------------------------
// Updating the Quick Picks ui
let quickPicksSongSettingFuntion = () =>{
  quickPicksPlaylist.forEach((e,index)=>{
    quickPickSongsImg[index].style.backgroundImage =`url('${e.img}')`;
    quickPickSongName[index].innerText =`${e.title}`;
    quickPickSongArtistName[index].innerText=`${e.artist}`;
    quickPickSongsImgAbout[index].setAttribute('songTitle', e.title);
  });
  document.querySelectorAll(".three-dot-Clicklogo").forEach((e,index)=>{
    e.addEventListener("click",()=>{
      threeDotLogoClickFun(quickPicksPlaylist,index);
    });
  });
}
quickPicksSongSettingFuntion();
// Quick Picks song Set end here.........................................................................................






let funForSongNameColor = ()=>{
  const quickPicksPlaylistSongNameForColor = document.querySelectorAll(".quickPickSongName");
  let songsDivPlaylistaboutSongNameForColor = document.querySelectorAll(".songsDivPlaylistaboutSongName");

// remove the color
  quickPicksPlaylistSongNameForColor.forEach((e)=>{
     e.style.removeProperty("color");
  });

  if(songsDivPlaylistaboutSongNameForColor){
    songsDivPlaylistaboutSongNameForColor.forEach((e)=>{
      e.style.removeProperty("color");
   }); 
  };

// add the color
  quickPicksPlaylistSongNameForColor.forEach((e)=>{
    if(currentSong===e.innerText){
      e.style.color="#ff4a62";
    };
  });

 
  if(songsDivPlaylistaboutSongNameForColor.length > 0){
    songsDivPlaylistaboutSongNameForColor.forEach((e)=>{
      e.style.removeProperty("color");
      if(currentSong==e.innerHTML){
       e.style.color="#ff4a62";
      };
    });
  };
}

  

  


//Song playing after song select from the playlist start here...............................................
let playListSelectFun = (e,playlistName)=>{
  const songTitle = e.getAttribute("songTitle");
  currentPlaylist = playlistName;
  currentSongIndex = playlistName.findIndex((song) => song.title === songTitle);
  
  playlistName.forEach((e)=>{
       if(songTitle===e.title){
         visibleFun();
         
         
         if(playDiv.classList.contains("playPauseDisplayBlock")){
           playDiv.classList.remove("playPauseDisplayBlock");
           pauseDiv.classList.add("playPauseDisplayBlock");
         }
         audioTag.src="";
         audioTag.src=`${e.src}`;
         currentSongoafterMainSongPlayingDotDiv=e;
         currentSongObj = e;
         
         songPlayerImg.style.backgroundImage =`url('${e.img}')`;
         MusicPlayerInsideSongName.innerText=`${e.title}`;
         currentSong = `${e.title}`;
         funForSongNameColor();
         MusicPlyerArtistName.innerText=`${e.artist}`;
         audioTag.addEventListener('loadedmetadata', ()=> {
           audioTag.play();
         });
         songplayerSongNameScrollingFun();
            
             if("backgroundVideo" in e){
               setTimeout(()=>{
                 backgroundVideo.src = `${e.backgroundVideo}`;
                 backgroundVideo.addEventListener('loadeddata', () => {
                   backgroundVideo.play();
                   videoPlayingCondition = true;
                   backgroundImgForVideoFun()
                   
                 });
               })
               
             }else{
               backgroundVideo.src = "";
               backgroundVideo.pause();
               videoPlayingCondition = false;
               backgroundImgForVideoFun()
               
             }
         }
   });
  //  console.log(currentOpendPlaylistInsidePlaylistDiv2);  
}
//Song playing after song select from the playlist end here...............................................

 

quickPickSongsImgAbout.forEach((e,index)=>{
 e.addEventListener("click",()=>{
    currentSongNameDivArrayForColor=quickPickSongName;
    playListSelectFun(e,quickPicksPlaylist);
    addLibraryinsideSongplayerUpdateDivFun();
    heartInsideSongPlayerDivFun();
  });
});
// Quick Picks song Set end here......................................................................................... 




 
// Funtion for audio tag to play the next song when the current one ends  start here....................................
function playNextSong() {
  currentSongIndex++;

  if (currentSongIndex >= currentPlaylist.length) {
    // If the end of the playlist is reached, loop back to the first song
    currentSongIndex = 0;
  }
  
  let songWillPlay = currentPlaylist[currentSongIndex];
  let nextSong;
  if(songWillPlay){
     nextSong = songWillPlay;
  }else{
     nextSong = quickPicksPlaylist[Math.floor(Math.random()*11)+1];
     currentPlaylist = quickPicksPlaylist
  }
  
  audioTag.src="";
  audioTag.src = `${nextSong.src}`;
  currentSongoafterMainSongPlayingDotDiv=nextSong;
  currentSongObj = nextSong;
  
  songPlayerImg.style.backgroundImage = `url('${nextSong.img}')`;
  MusicPlayerInsideSongName.innerText = `${nextSong.title}`;
  currentSong = `${nextSong.title}`
  funForSongNameColor();
  MusicPlyerArtistName.innerText = `${nextSong.artist}`;
  audioTag.addEventListener('loadedmetadata', ()=> {
    audioTag.play();
  });

  if("backgroundVideo" in nextSong){
    setTimeout(()=>{
      backgroundVideo.src = `${nextSong.backgroundVideo}`;
      backgroundVideo.addEventListener('loadeddata', () => {
        backgroundVideo.play();
        videoPlayingCondition = true;
        backgroundImgForVideoFun()
      });
    })
    
  }else{
    backgroundVideo.src = "";
    backgroundVideo.pause();
    videoPlayingCondition = false;
    backgroundImgForVideoFun()
  }
  
  songplayerSongNameScrollingFun();
  // console.log(currentOpendPlaylistInsidePlaylistDiv2);
}


audioTag.addEventListener('ended', ()=>{
  console.log(currentSongObj);
  updateQuickPicksPlaylist(currentSongObj);
  quickPicksSongSettingFuntion();
  
  setTimeout(() => {
    if (songSerialRepeat === "playAgain") {
      // Replay the current song
      audioTag.currentTime = 0; // Reset playback position to the start
      audioTag.play();
      funForSongNameColor();
    } else {
      // Play the next song in the playlist
      playNextSong();
      
    }

    // Update the play/pause button status
    if (playDiv.classList.contains("playPauseDisplayBlock")) {
      playDiv.classList.remove("playPauseDisplayBlock");
      pauseDiv.classList.add("playPauseDisplayBlock");
    }

    // Update the song player UI
    addLibraryinsideSongplayerUpdateDivFun();
    heartInsideSongPlayerDivFun();
  }, 1000);
});
// Funtion for audio tag to play the next song when the current one ends  end here....................................


 
//ForwardLogo click song update start here.......................................................................
forwardLogo.addEventListener('click', ()=>{
  

  console.log(currentSongObj);
  updateQuickPicksPlaylist(currentSongObj);
  quickPicksSongSettingFuntion();
    
  setTimeout(() => {
    if (songSerialRepeat === "playAgain") {
      // Replay the current song
      audioTag.currentTime = 0; // Reset playback position to the start
      audioTag.play();
      funForSongNameColor();
    } else {
      // Play the next song in the playlist
      playNextSong();
    }

    // Update the play/pause button status
    if (playDiv.classList.contains("playPauseDisplayBlock")) {
      playDiv.classList.remove("playPauseDisplayBlock");
      pauseDiv.classList.add("playPauseDisplayBlock");
    }

    // Update the song player UI
    addLibraryinsideSongplayerUpdateDivFun();
    heartInsideSongPlayerDivFun();
  }, 400);
});  
//ForwardLogo click song update end here.......................................................................




//BackwardLogo click song update start here.......................................................................
function playPreviousSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    // If the beginning of the playlist is reached, go to the last song
    currentSongIndex = currentPlaylist.length - 1;
  }
  
  let previoussongWillPlay = currentPlaylist[currentSongIndex];
  let previousSong;
  if(previoussongWillPlay){
     previousSong = previoussongWillPlay;
  }else{
     previousSong = quickPicksPlaylist[Math.floor(Math.random()*11)+1];
     currentPlaylist = quickPicksPlaylist
  }

  audioTag.src="";
  audioTag.src = `${previousSong.src}`;
  currentSongoafterMainSongPlayingDotDiv=previousSong;
  currentSongObj = previousSong;
  
  songPlayerImg.style.backgroundImage = `url('${previousSong.img}')`;
  MusicPlayerInsideSongName.innerText = `${previousSong.title}`;
  currentSong = `${previousSong.title}`
  funForSongNameColor();
  MusicPlyerArtistName.innerText = `${previousSong.artist}`;
  audioTag.addEventListener('loadedmetadata', ()=> {
     audioTag.play();
    });

    if("backgroundVideo" in previousSong){
      setTimeout(()=>{
        backgroundVideo.src = `${previousSong.backgroundVideo}`;
        backgroundVideo.addEventListener('loadeddata', () => {
          backgroundVideo.play();
          videoPlayingCondition = true;
          backgroundImgForVideoFun();
        });
      })
    }else{
      backgroundVideo.src = "";
      backgroundVideo.pause();
      videoPlayingCondition = false;
      backgroundImgForVideoFun();
    }
    // funForSongNameColor();
    
    songplayerSongNameScrollingFun();
}


backwardLogo.addEventListener("click", () => {
  console.log(currentSongObj);
  updateQuickPicksPlaylist(currentSongObj);
  quickPicksSongSettingFuntion();
  setTimeout(() => {
    if (songSerialRepeat === "playAgain") {
      // Replay the current song
      audioTag.currentTime = 0; 
      audioTag.play();
      funForSongNameColor();
    } else {
      // Play the previous song
      playPreviousSong();
    }

    // Update play/pause button and song player UI
    if (playDiv.classList.contains("playPauseDisplayBlock")) {
      playDiv.classList.remove("playPauseDisplayBlock");
      pauseDiv.classList.add("playPauseDisplayBlock");
    }
    addLibraryinsideSongplayerUpdateDivFun();
    heartInsideSongPlayerDivFun();
  }, 400);
});
//BackwardLogo click song update end here.......................................................................










// song progressBar feature Start............................................................
let isTouching = false; 
let lastScrollTime = 0; 

audioTag.addEventListener("timeupdate", () => {
  const progressPercent = (audioTag.currentTime / audioTag.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressDot.style.left = `${progressPercent}%`;
});

progressContainer.addEventListener("click", (e) => {
  const containerWidth = progressContainer.offsetWidth;
  const clickX = e.offsetX;
  const newTime = (clickX / containerWidth) * audioTag.duration;
  audioTag.currentTime = newTime;
});

progressContainer.addEventListener("wheel", (e) => {
  e.preventDefault(); 

  const now = Date.now();

  if (now - lastScrollTime < 50) return;
  lastScrollTime = now;

  const stepFraction = 0.01; 
  const step = audioTag.duration * stepFraction;
  if (e.deltaY > 0) {
    
    audioTag.currentTime = Math.min(audioTag.currentTime + step, audioTag.duration);
  } else {
    
    audioTag.currentTime = Math.max(audioTag.currentTime - step, 0);
  }
});

progressContainer.addEventListener("touchstart", (e) => {
  isTouching = true;
});

progressContainer.addEventListener("touchmove", (e) => {
  if (isTouching) {
    const touchX = e.touches[0].clientX - progressContainer.getBoundingClientRect().left;
    const containerWidth = progressContainer.offsetWidth;
    const newTime = (touchX / containerWidth) * audioTag.duration;

    if (newTime >= 0 && newTime <= audioTag.duration) {
      audioTag.currentTime = newTime;
    }
  }
});

progressContainer.addEventListener("touchend", () => {
  isTouching = false;
});
// song progressBar feature end............................................................





// Song timer update start.............................................................................
document.addEventListener("DOMContentLoaded", () => {
  
  const currentTimeEl = document.querySelector(".current-time");
  const totalDurationEl = document.querySelector(".total-duration");

  if (!audioTag || !currentTimeEl || !totalDurationEl) {
    console.error("Required elements not found in the DOM.");
    return;
  }

  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  audioTag.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(audioTag.currentTime);
    if (!isNaN(audioTag.duration)) {
      totalDurationEl.textContent = formatTime(audioTag.duration);
    }
  });

  audioTag.addEventListener("loadedmetadata", () => {
    if (!isNaN(audioTag.duration)) {
      totalDurationEl.textContent = formatTime(audioTag.duration);
    }
  });

  
  audioTag.addEventListener("ended", () => {
    currentTimeEl.textContent = "0:00";
  });
});
// Song timer update end.............................................................................

   



//visualizerbar animation start here...................................................................
document.querySelectorAll(".visualizerbar").forEach((e)=>{
  audioTag.addEventListener('playing', () => {
    e.classList.add("visualizerbarifSongPlaying");
    if(playDiv.classList.contains("playPauseDisplayBlock")){
      playDiv.classList.remove("playPauseDisplayBlock");
      pauseDiv.classList.add("playPauseDisplayBlock");
    }
  });

  audioTag.addEventListener('pause', () => {
    e.classList.remove("visualizerbarifSongPlaying");
    if(pauseDiv.classList.contains("playPauseDisplayBlock")){
      pauseDiv.classList.remove("playPauseDisplayBlock");
      playDiv.classList.add("playPauseDisplayBlock");
    }
    
  });
 })
//visualizerbar animation start here...................................................................





  
  
  
  








// PopularAlbum Img array start here.........................................................................
 let PopularAlbumImgarray = [
  {
    AlbumName: "Trending Hindi Songs ",
    img:"IMG_20241218_201026.jpg",
    playListToPlay: TrendingHindiSongPlaylist,
  },
  {
    AlbumName: "Panjabi Pump",
    img:"artworks-zZ8oi8AqLR21VkRD-EaGQdg-t500x500.jpg",
    playListToPlay: PunjabiPlaylist,
  },
  {
    AlbumName: "Pop chiil",
    img:"IMG_20250104_160849.jpg",
    playListToPlay: PopChillPlaylist,
  },
  {
    AlbumName: "Bollywood Workout",
    img:"IMG_20250104_091103.jpg",
    playListToPlay: BollywoodWorkoutPlaylist,
  },
  {
    AlbumName: "Diljit Dosanjh-Top Hits",
    img:"Diljit-Dosanjh-Mashup-2023-Punjabi-2023-20230705140341-500x500.jpg",
    playListToPlay: DiljitDosanjhPlaylist,
  },
 ]
// PopularAlbum Img array end here.........................................................................



// recommendedAlbum Img array start here.........................................................................
let recommendedAlbumImgarray = [
  {
    AlbumName: "Top English Songs",
    img:"8c69ceeb6fb847dda1ba09302849da5c_464_464.jpg",
    playListToPlay: TopEnglishSongsPlaylist,
  },
  {
    AlbumName: "Best of Arijit Singh",
    img:"IMG_20241218_183940.jpg",
    playListToPlay: ArijitSinghPlaylist,
  },
  {
    AlbumName: "Club Hits",
    img:"DJ-Night-Club-Hits-Punjabi-2020-20201111000729-500x500.jpg",
    playListToPlay: ClubHitsPlaylist,
  },
  {
    AlbumName: "Ultimate Love Songs",
    img:"IMG_20241218_192605.jpg",
    playListToPlay: UltimateLoveSongPlaylist,
  },
  {
    AlbumName: "Safar Mix",
    img:"Safar-English-2022-20220721081511-500x500.jpg",
    playListToPlay: SafarPlaylist,
  },
 ]
// recommendedAlbum Img array end here.........................................................................






// bigHitsAlbumIm Img array start here.........................................................................
let bigHitsAlbumImgarray = [
  {
    AlbumName: "Bollywood Central",
    img:"IMG_20250102_010333.jpg",
    playListToPlay: BollywoodCentralPlaylist,
  },
  {
    AlbumName: "GLORY",
    img:"artworks-gqoGzzWOX5R27mCZ-7ecckw-t500x500.jpg",
    playListToPlay: GloryPlaylist,
  },
  {
    AlbumName: "00's Love Hits",
    img:"IMG_20241218_192545.jpg",
    playListToPlay: oosLovePlaylist,
  },
  {
    AlbumName: "Badshah Party Hits",
    img:"Badshah-Party-Hits-Hindi-2020-20200525104056-500x500.jpg",
    playListToPlay: BadshahPartyPlaylist,
  },
  {
    AlbumName: "Trending-Bollywood",
    img:"Trending-Bollywood-1-Min-Mix-Hindi-2023-20230720160521-500x500.jpg",
    playListToPlay: TrendingHindiSongPlaylist,
  },
 ]
// bigHitsAlbumIm Img array end here.........................................................................








// discoverPicksAlbum Img array start here.........................................................................
let discoverPicksAlbumImgarray = [
  {
    AlbumName: "Desi Hip Hop",
    img:"IMG_20241218_205028.jpg",
    playListToPlay: DesiHipHopPlaylist,
  },
  {
    AlbumName: "Hot Hit Telugu",
    img:"IMG_20241218_213355.jpg",
    playListToPlay: HotHitTeluguPlaylist,
  },
  {
    AlbumName: "Trending in Instagram",
    img:"instagram-logo_1199-122.jpg",
    playListToPlay: TrendingInstaPlaylist,
  },
  {
    AlbumName: "Best of Vishal Mishra",
    img:"IMG_20241218_212623.jpg",
    playListToPlay: VishalMishraPlaylist,
  },
  {
    AlbumName: "Lofi Songs (Sukoon Vibes)",
    img:"artworks-000321524016-jw118f-t500x500.jpg",
    playListToPlay: LofiSukoonPlaylist,
  },
 ]
// discoverPicksAlbum Img array end here.........................................................................








// ArtistAlbum Img array start here.........................................................................
let ArtistAlbumImgarray = [
  {
    AlbumName: "Arijit Singh",
    img:"yiwwlrbe78ahhohjjmum.jpg",
    playListToPlay: ArijitSinghPlaylist,
  },
  {
    AlbumName: "Vishal Mishra",
    img:"IMG_20250104_085849.jpg",
    playListToPlay: VishalMishraPlaylist,
  },
  {
    AlbumName: "Atif Aslam",
    img:"IMG_20250104_090120.jpg",
    playListToPlay: AtifAslamPlaylist,
  },
  {
    AlbumName: "Anuv Jain",
    img:"IMG_20250104_090650.jpg",
    playListToPlay: AnuvJainPlaylist,
  },
  {
    AlbumName: "Anirudh Ravichandran",
    img:"IMG_20250104_090418.jpg",
    playListToPlay: AnirudhRavichanderPlaylist,
  },
 ]
// ArtistAlbum Img array end here.........................................................................






//3dot logo click start here...............................................................................
let threeDotLogoClickFun=(playlist,index)=>{
 mainDivAfterClickThreeDotLogo.classList.add("mainDivAfterClickThreeDotLogoAfterdotClick");
 bodyNotScrollingFun();
 document.querySelector(".DivAfterClickThreeDotLogoSongImg").style.backgroundImage = "";
 document.querySelector(".DivAfterClickThreeDotLogoSongImg").style.backgroundImage =`url('${playlist[index].img}')`;
 document.querySelector(".DivAfterClickThreeDotLogoSongAboutSongName").innerHTML = playlist[index].title;
 document.querySelector(".DivAfterClickThreeDotLogoSongAboutArtistName").innerHTML = playlist[index].artist;
 currentSongofthreeDotDiv = playlist[index];
 librarylogoUpdateFun(playlist[index]);
 threeDotDivLikedLogoUpdateFun(currentSongofthreeDotDiv);
}


// threeDotLogoClickFun();
//3dot logo click end here...............................................................................




//playListClickFun start here..........................................................................................
let playListClickFun = (playlist, playlistName,playlistimg) => {
  
  // If the playlist is already open, just show the playlist div and exit
  if (currentOpendPlaylistInsidePlaylistDiv2 == playlist ) {
    playlistMainDiv.classList.add("playlistMainDivVisibility-visible");
    bodyNotScrollingFun();
    playlistMainDivName.innerHTML = playlistName;
    mainplaylistImg.style.backgroundImage = `url('${playlistimg}')`;
    playlistMainDivScrollSongNameDiv.innerHTML = playlistName;
    funForSongNameColor();
    // currentOpendPlaylistInsidePlaylistDiv2 = playlist;
    return; // Exit without recreating the song divs
  }
  
// Otherwise, delete previous song divs and render the new playlist
  const songDivs = document.querySelectorAll(".songDivMainContainer");
  songDivs.forEach(songDiv => {
    songDiv.remove();  // Removes each songDivMainContainer element
  });

// Clear the playlist name
  playlistMainDivName.innerHTML = "";
  mainplaylistImg.style.backgroundImage = "none";
  playlistMainDivScrollSongNameDiv.innerHTML = "";
  playlistMainDiv.scrollTop = 0;


 // Add new songs from the clicked playlist
  playlist.forEach((e) => {
    const songDivMainContainer = document.createElement("div");
    const songsDivPlaylistimgabout = document.createElement("div");
    const songsDivPlaylistThreeDotDiv = document.createElement("div");
    const songsDivPlaylistimg = document.createElement("div");
    const songsDivPlaylistabout = document.createElement("div");
    const songsDivPlaylistaboutSongName = document.createElement("div");
    const songsDivPlaylistaboutArtistName = document.createElement("div");
    const threedotlogo = document.createElement("i");
    songDivMainContainer.classList.add("songDivMainContainer");
    songsDivPlaylistimgabout.classList.add("songsDivPlaylistimgabout");
    songsDivPlaylistThreeDotDiv.classList.add("songsDivPlaylistThreeDotDiv");
    songsDivPlaylistimg.classList.add("songsDivPlaylistimg");
    songsDivPlaylistabout.classList.add("songsDivPlaylistabout");
    songsDivPlaylistaboutSongName.classList.add("songsDivPlaylistaboutSongName");
    songsDivPlaylistaboutArtistName.classList.add("songsDivPlaylistaboutArtistName");
    threedotlogo.classList.add("fa-solid","fa-ellipsis-vertical","three-dot-logo","three-dot-ClicklogoAlbum");
    mainPlayListContainer.appendChild(songDivMainContainer);
    songDivMainContainer.appendChild(songsDivPlaylistimgabout);
    songDivMainContainer.appendChild(songsDivPlaylistThreeDotDiv);
    songsDivPlaylistimgabout.appendChild(songsDivPlaylistimg);
    songsDivPlaylistimgabout.appendChild(songsDivPlaylistabout);
    songsDivPlaylistabout.appendChild(songsDivPlaylistaboutSongName);
    songsDivPlaylistabout.appendChild(songsDivPlaylistaboutArtistName);
    songsDivPlaylistThreeDotDiv.appendChild(threedotlogo);

    songsDivPlaylistaboutSongName.innerHTML = `${e.title}`;
    songsDivPlaylistaboutArtistName.innerHTML = `${e.artist}`;
    songsDivPlaylistimg.style.backgroundImage =`url('${e.img}')`;
    songsDivPlaylistimgabout.setAttribute('songTitle', e.title);
    
  });
   

// Show the playlist container and update the name
  playlistMainDiv.classList.add("playlistMainDivVisibility-visible");
  playlistMainDivName.innerHTML = playlistName;
  mainplaylistImg.style.backgroundImage = `url('${playlistimg}')`;
  playlistMainDivScrollSongNameDiv.innerHTML = playlistName;
  currentOpendPlaylistInsidePlaylistDiv2 = playlist;
  
  // funForSongNameColor();

  
// Update the currently opened playlist reference
  document.querySelectorAll(".songsDivPlaylistimgabout").forEach((e,index)=>{
    e.addEventListener("click",()=>{
      currentSongNameDivArrayForColor = document.querySelectorAll(".songsDivPlaylistaboutSongName");
      currentOpendPlaylistInsidePlaylistDiv2 = playlist;
      playListSelectFun(e,playlist);
      heartInsideSongPlayerDivFun();
      funForSongNameColor();
    });
  });
  
  

  document.querySelectorAll(".three-dot-ClicklogoAlbum").forEach((element,index)=>{
    element.addEventListener("click",()=>{
      threeDotLogoClickFun(playlist,index);
      
      document.querySelector(".AlbumthreeDotbackground").classList.add("AlbumthreeDotbackgrounddisplay-block");
      document.querySelector(".playlistMainDiv").classList.add("mainDivAfterClickThreeDotLogoforNotScrolling");
    });
  });
  bodyNotScrollingFun();
  document.querySelector(".playlistMainDiv-arrow-leftLogo").addEventListener("click",()=>{
    playlistMainDiv.classList.remove("playlistMainDivVisibility-visible");
    bodyNotScrollingFun();
    currentOpendPlaylistInsidePlaylistDiv2 = playlist;
  });
};

//-------------------------------------------------------------------------------
document.querySelector(".playlistMainDiv").addEventListener('scroll', () => {
  const playlistMainDiv = document.querySelector(".playlistMainDiv");
  const playlistMainArrowDiv = document.querySelector(".playlistMainArrowDiv");
  
  if (playlistMainDiv.scrollTop > 0) {
      playlistMainArrowDiv.classList.add('playlistMainArrowDivscroll');
      
  } else {
      playlistMainArrowDiv.classList.remove('playlistMainArrowDivscroll');
  }
});


document.querySelector(".playlistMainDiv").addEventListener('scroll', () => {
  const playlistMainDiv = document.querySelector(".playlistMainDiv");
  const playlistMainDivScrollSongNameDiv = document.querySelector(".playlistMainDivScrollSongNameDiv");

  // Set a fixed pixel threshold (e.g., 100px)
  const scrollThreshold = 200;

  if (playlistMainDiv.scrollTop > scrollThreshold) {
    playlistMainDivScrollSongNameDiv.classList.add('playlistMainDivScrollSongNameDivvisibility-visible');
  } else {
    playlistMainDivScrollSongNameDiv.classList.remove('playlistMainDivScrollSongNameDivvisibility-visible');
  }
});

//playListClickFun end here..................................................................................................................









// playlistMainDiv.classList.add("playlistMainDivVisibility-visible");

//PopularAlbum------------>
PopularAlbumAbout.forEach((e,index)=>{
   e.innerText=`${PopularAlbumImgarray[index].AlbumName}`;
});

PopularAlbumImg.forEach((e,index)=>{
  e.style.backgroundImage =`url('${PopularAlbumImgarray[index].img}')`;
  e.addEventListener("click",()=>{
    playListClickFun(PopularAlbumImgarray[index].playListToPlay,PopularAlbumImgarray[index].AlbumName,PopularAlbumImgarray[index].img);
  })
});





//ArtistAlbum------------>
artistAbout.forEach((e,index)=>{
  e.innerText=`${ArtistAlbumImgarray[index].AlbumName}`;
});

artistImg.forEach((e,index)=>{
 e.style.backgroundImage =`url('${ArtistAlbumImgarray[index].img}')`;
 e.addEventListener("click",()=>{
   playListClickFun(ArtistAlbumImgarray[index].playListToPlay,ArtistAlbumImgarray[index].AlbumName,ArtistAlbumImgarray[index].img);
 })
});





//recommendedAlbum--------->
recommendedAbout.forEach((e,index)=>{
  e.innerText=`${recommendedAlbumImgarray[index].AlbumName}`;
 });

recommendedAlbumImg.forEach((e,index)=>{
  e.style.backgroundImage =`url('${recommendedAlbumImgarray[index].img}')`;
  e.addEventListener("click",()=>{
    playListClickFun(recommendedAlbumImgarray[index].playListToPlay,recommendedAlbumImgarray[index].AlbumName,recommendedAlbumImgarray[index].img);
  })
});






//big-hits!Album--------->
BigHitsAlbumAbout.forEach((e,index)=>{
  e.innerText=`${bigHitsAlbumImgarray[index].AlbumName}`;
});

BigHitsAlbumImg.forEach((e,index)=>{
  e.style.backgroundImage =`url('${bigHitsAlbumImgarray[index].img}')`;
  e.addEventListener("click",()=>{
    playListClickFun(bigHitsAlbumImgarray[index].playListToPlay,bigHitsAlbumImgarray[index].AlbumName,bigHitsAlbumImgarray[index].img);
  });
});







//discoverPicksAlbum--------->
discoverPicksAlbumAbout.forEach((e,index)=>{
  e.innerText=`${discoverPicksAlbumImgarray[index].AlbumName}`;
 
});

discoverPicksAlbumImg.forEach((e,index)=>{
 e.style.backgroundImage =`url('${discoverPicksAlbumImgarray[index].img}')`;
 e.addEventListener("click",()=>{
    playListClickFun(discoverPicksAlbumImgarray[index].playListToPlay,discoverPicksAlbumImgarray[index].AlbumName,discoverPicksAlbumImgarray[index].img);
  });
});
// ----------------------------------------------------












// Library  click feature start here.................................................................................
let addLibraryinsideSongplayerUpdateDivFun = ()=>{
  const existingSong2 = libraryArray.find((e) => e.title === currentSongoafterMainSongPlayingDotDiv.title);
  if(existingSong2){
    document.querySelector(".circle-pluslogoDiv-main").classList.remove("circle-plus-checklogoDiv-maindisplayBlock");
    document.querySelector(".circle-checklogoDivmain").classList.add("circle-plus-checklogoDiv-maindisplayBlock");
  }else{
    if(document.querySelector(".circle-checklogoDivmain").classList.contains("circle-plus-checklogoDiv-maindisplayBlock")){
      document.querySelector(".circle-checklogoDivmain").classList.remove("circle-plus-checklogoDiv-maindisplayBlock");
      document.querySelector(".circle-pluslogoDiv-main").classList.add("circle-plus-checklogoDiv-maindisplayBlock");
    };
  };
};

document.querySelector(".circle-pluslogoDiv-main").addEventListener("click",()=>{
  const existingSongCondition = libraryArray.find((e) => e.title === currentSongoafterMainSongPlayingDotDiv.title);
  if(!existingSongCondition){
    libraryArray.push(currentSongoafterMainSongPlayingDotDiv);
    localStorage.setItem('libraryArray', JSON.stringify(libraryArray));
  }
  addLibraryinsideSongplayerUpdateDivFun();
  FunDisplaySongInLibraryDiv();
  notificationFun("Added to Library");
});

document.querySelector(".circle-checklogoDivmain").addEventListener("click",()=>{
  const Index = libraryArray.findIndex((e) => e.title === currentSongoafterMainSongPlayingDotDiv.title);
    if (Index > -1) {
    libraryArray.splice(Index, 1);
    }
    localStorage.setItem('libraryArray', JSON.stringify(libraryArray));
  addLibraryinsideSongplayerUpdateDivFun();
  FunDisplaySongInLibraryDiv();
  notificationFun("Removed from Library");
});


let librarylogoUpdateFun = (song)=>{
  const existingSong = libraryArray.find((e) => e.title === song.title);
  if(existingSong){
    document.querySelector(".ThreeDotcircle-pluslogoDiv").classList.remove("ThreeDotcircleDisplayBlock");
    document.querySelector(".ThreeDotcircle-checklogoDiv").classList.add("ThreeDotcircleDisplayBlock");
    document.querySelector(".saveTolibrary").innerHTML="Remove from library";
  }else{
    document.querySelector(".ThreeDotcircle-pluslogoDiv").classList.add("ThreeDotcircleDisplayBlock");
    if(document.querySelector(".ThreeDotcircle-checklogoDiv").classList.contains("ThreeDotcircleDisplayBlock")){
      document.querySelector(".ThreeDotcircle-checklogoDiv").classList.remove("ThreeDotcircleDisplayBlock");
       document.querySelector(".saveTolibrary").innerHTML=" Save to library";
    }
  }
}


let addToLibrary = (song) =>{
  if(document.querySelector(".ThreeDotcircle-pluslogoDiv").classList.contains("ThreeDotcircleDisplayBlock")){
    libraryArray.push(song);
    localStorage.setItem('libraryArray', JSON.stringify(libraryArray));
    librarylogoUpdateFun(song);
    notificationFun("Added to Library");
    mainDivAfterClickThreeDotLogo.classList.remove("mainDivAfterClickThreeDotLogoAfterdotClick");
  bodyNotScrollingFun();
  if( document.querySelector(".AlbumthreeDotbackground").classList.contains("AlbumthreeDotbackgrounddisplay-block")){
    document.querySelector(".AlbumthreeDotbackground").classList.remove("AlbumthreeDotbackgrounddisplay-block");
  }
  
  if(document.querySelector(".playlistMainDiv").classList.contains("mainDivAfterClickThreeDotLogoforNotScrolling")){
    document.querySelector(".playlistMainDiv").classList.remove("mainDivAfterClickThreeDotLogoforNotScrolling")
  }
  }else{
    const index = libraryArray.findIndex((e) => e.title === song.title);
    if (index > -1) {
    libraryArray.splice(index, 1);
    
    }
    localStorage.setItem('libraryArray', JSON.stringify(libraryArray));
    
    librarylogoUpdateFun(song);
    notificationFun("Removed from Library");
    mainDivAfterClickThreeDotLogo.classList.remove("mainDivAfterClickThreeDotLogoAfterdotClick");
    bodyNotScrollingFun();
   if( document.querySelector(".AlbumthreeDotbackground").classList.contains("AlbumthreeDotbackgrounddisplay-block")){
    document.querySelector(".AlbumthreeDotbackground").classList.remove("AlbumthreeDotbackgrounddisplay-block");
   }
  
  if(document.querySelector(".playlistMainDiv").classList.contains("mainDivAfterClickThreeDotLogoforNotScrolling")){
    document.querySelector(".playlistMainDiv").classList.remove("mainDivAfterClickThreeDotLogoforNotScrolling")
  }
  }
};


document.querySelector(".MoreOptionLogoDivLibrary").addEventListener("click",()=>{
  addToLibrary(currentSongofthreeDotDiv);
  FunDisplaySongInLibraryDiv();
});





libraryDiv.addEventListener("click",()=>{
  FunDisplaySongInLibraryDiv();
  if(homeDiv.classList.contains("selctBarColor")){
    homeDiv.classList.remove("selctBarColor");
  }
  libraryDiv.classList.add("selctBarColor");
  libraryDivpage.classList.add("libraryDivpageVisibility-visible");
  barsDiv.classList.remove("barsDivAfterClick");
  bodyNotScrollingFun();
});

document.querySelector(".libraryDivpage-arrow-leftLogo").addEventListener("click",()=>{
  if(libraryDiv.classList.contains("selctBarColor")){
    libraryDiv.classList.remove("selctBarColor");
  };
  homeDiv.classList.add("selctBarColor");
  libraryDivpage.classList.remove("libraryDivpageVisibility-visible");
  bodyNotScrollingFun();
});
// Library  click feature end here.................................................................................








// liked  click feature start here.................................................................................
 likedDiv.addEventListener("click",()=>{
  if(homeDiv.classList.contains("selctBarColor")){
    homeDiv.classList.remove("selctBarColor");
  }
  likedDiv.classList.add("selctBarColor");
  likedDivpage.classList.add("likedDivpageVisibility-visible");
  barsDiv.classList.remove("barsDivAfterClick");
  bodyNotScrollingFun();
  FunDisplaySongInLikedDiv();
});





document.querySelector(".likedDivpage-arrow-leftLogo").addEventListener("click",()=>{
  if(likedDiv.classList.contains("selctBarColor")){
    likedDiv.classList.remove("selctBarColor");
  };
  homeDiv.classList.add("selctBarColor");
  likedDivpage.classList.remove("likedDivpageVisibility-visible");
  bodyNotScrollingFun();
});

let likedSongaddFun = (song)=>{
  if(document.querySelector(".ThreeDotcircle-heartWithoutBackgroundDiv").classList.contains("ThreeDotcircle-heartDislplay-block")){
    likedArray.push(song);
    localStorage.setItem('likedArray', JSON.stringify(likedArray));
    threeDotDivLikedLogoUpdateFun(currentSongofthreeDotDiv);
    FunDisplaySongInLikedDiv();
    notificationFun("Added to Liked Songs");
  }else if(document.querySelector(".ThreeDotcircle-heartWithBackgroundDiv").classList.contains("ThreeDotcircle-heartDislplay-block")){
    const likedindex = likedArray.findIndex((e) => e.title === song.title);
    if (likedindex > -1) {
      likedArray.splice(likedindex, 1);
    }
    localStorage.setItem('likedArray', JSON.stringify(likedArray));
    threeDotDivLikedLogoUpdateFun(currentSongofthreeDotDiv);
    FunDisplaySongInLikedDiv();
    notificationFun("Removed from Liked Songs");
  }
  mainDivAfterClickThreeDotLogo.classList.remove("mainDivAfterClickThreeDotLogoAfterdotClick");
  bodyNotScrollingFun();
  if( document.querySelector(".AlbumthreeDotbackground").classList.contains("AlbumthreeDotbackgrounddisplay-block")){
    document.querySelector(".AlbumthreeDotbackground").classList.remove("AlbumthreeDotbackgrounddisplay-block");
  }
  
  if(document.querySelector(".playlistMainDiv").classList.contains("mainDivAfterClickThreeDotLogoforNotScrolling")){
    document.querySelector(".playlistMainDiv").classList.remove("mainDivAfterClickThreeDotLogoforNotScrolling")
  }
  heartInsideSongPlayerDivFun();
}



let threeDotDivLikedLogoUpdateFun = (song)=>{
  const LikedexistingSong = likedArray.find((e) => e.title === song.title);
  if(LikedexistingSong){
     document.querySelector(".ThreeDotcircle-heartWithoutBackgroundDiv").classList.remove("ThreeDotcircle-heartDislplay-block");
     document.querySelector(".ThreeDotcircle-heartWithBackgroundDiv").classList.add("ThreeDotcircle-heartDislplay-block");
     document.querySelector(".Addtolikedsongs").innerHTML="Remove from liked songs";
  }else{
    if(document.querySelector(".ThreeDotcircle-heartWithBackgroundDiv").classList.contains("ThreeDotcircle-heartDislplay-block")){
      document.querySelector(".ThreeDotcircle-heartWithBackgroundDiv").classList.remove("ThreeDotcircle-heartDislplay-block")
      document.querySelector(".ThreeDotcircle-heartWithoutBackgroundDiv").classList.add("ThreeDotcircle-heartDislplay-block");
      document.querySelector(".Addtolikedsongs").innerHTML="Add to liked songs";
    }
  }
}

document.querySelector(".MoreOptionLogoDivLiked").addEventListener("click",()=>{
  likedSongaddFun(currentSongofthreeDotDiv);
});



let FunDisplaySongInLikedDiv = ()=>{
  if(likedArray.length===0){
    document.querySelector(".likednoSongImg").classList.add("likednoSongImg-display-flex");
  }

  const likedsongMainContainer = document.querySelectorAll(".likedDivsMainContainer");
    if(likedsongMainContainer){
      likedsongMainContainer.forEach((e)=>{
        e.remove(); 
      })
    };

  likedArray.forEach((e,index)=>{
    if(document.querySelector(".likednoSongImg").classList.contains("likednoSongImg-display-flex")){
      document.querySelector(".likednoSongImg").classList.remove("likednoSongImg-display-flex");
    }

    const likedDivsMainContainer = document.createElement("div");
    const likedsDivsPlaylistimgabout = document.createElement("div");
    const likedsDivslistThreeDotDiv = document.createElement("div");
    const likedsDivsPlaylistimg = document.createElement("div");
    const likedsDivsPlaylistabout = document.createElement("div");
    const likedsDivsPlaylistaboutSongName = document.createElement("div");
    const likedsDivsPlaylistaboutArtistName = document.createElement("div");
    const likedthreedotlogo = document.createElement("i");
  
    likedDivsMainContainer.classList.add("likedDivsMainContainer");
    likedsDivsPlaylistimgabout.classList.add("likedsDivsPlaylistimgabout");
    likedsDivslistThreeDotDiv.classList.add("likedsDivslistThreeDotDiv");
    likedsDivsPlaylistimg.classList.add("likedsDivsPlaylistimg");
    likedsDivsPlaylistabout.classList.add("likedsDivsPlaylistabout");
    likedsDivsPlaylistaboutSongName.classList.add("likedsDivsPlaylistaboutSongName");
    likedsDivsPlaylistaboutArtistName.classList.add("likedsDivsPlaylistaboutArtistName");
    likedthreedotlogo.classList.add("fa-solid","fa-ellipsis-vertical","three-dot-logo","three-dot-Clicklogoliked");
  
    likedDivpageSongsMainDiv.appendChild(likedDivsMainContainer);
    likedDivsMainContainer.appendChild(likedsDivsPlaylistimgabout);
    likedDivsMainContainer.appendChild(likedsDivslistThreeDotDiv);
    likedsDivsPlaylistimgabout.appendChild(likedsDivsPlaylistimg);
    likedsDivsPlaylistimgabout.appendChild(likedsDivsPlaylistabout);
    likedsDivsPlaylistabout.appendChild(likedsDivsPlaylistaboutSongName);
    likedsDivsPlaylistabout.appendChild(likedsDivsPlaylistaboutArtistName);
    likedsDivslistThreeDotDiv.appendChild(likedthreedotlogo);


    likedsDivsPlaylistaboutSongName.innerHTML = `${e.title}`;
    likedsDivsPlaylistaboutArtistName.innerHTML = `${e.artist}`;
    likedsDivsPlaylistimg.style.backgroundImage =`url('${e.img}')`;
    likedsDivsPlaylistimgabout.setAttribute('songTitle', e.title);;
  });

  currentOpendPlaylistInsidePlaylistDiv = likedArray;
  document.querySelectorAll(".likedsDivsPlaylistimgabout").forEach((e,index)=>{
    e.addEventListener("click",()=>{
      
      currentSongNameDivArrayForColor = document.querySelectorAll(".songsDivPlaylistaboutSongName");
      playListSelectFun(e,likedArray);
      heartInsideSongPlayerDivFun();
    });
  });

  document.querySelectorAll(".three-dot-Clicklogoliked").forEach((element,index)=>{
    element.addEventListener("click",()=>{
      threeDotLogoClickFun(likedArray,index);
      
      document.querySelector(".AlbumthreeDotbackground").classList.add("AlbumthreeDotbackgrounddisplay-block");
      document.querySelector(".playlistMainDiv").classList.add("mainDivAfterClickThreeDotLogoforNotScrolling");
    });
  });

}
FunDisplaySongInLikedDiv();
// liked  click feature end here.................................................................................








// song serial repeat or only onesong play feature start here...........................................................
let repeatOrOnlyOneSongPlayIconSettingFun = ()=>{
  if(songSerialRepeat==="repeatNext"){
    if(document.querySelector(".repeat-1Div").classList.contains("repeatDiv-repeat-1DivDisplayBlock")){
      document.querySelector(".repeat-1Div").classList.remove("repeatDiv-repeat-1DivDisplayBlock");
    }
      document.querySelector(".repeatDiv").classList.add("repeatDiv-repeat-1DivDisplayBlock");
    }else{
     if(document.querySelector(".repeatDiv").classList.contains("repeatDiv-repeat-1DivDisplayBlock")){
      document.querySelector(".repeatDiv").classList.remove("repeatDiv-repeat-1DivDisplayBlock");
    }
      document.querySelector(".repeat-1Div").classList.add("repeatDiv-repeat-1DivDisplayBlock");
  }
};
repeatOrOnlyOneSongPlayIconSettingFun();

document.querySelector(".repeatDiv").addEventListener("click",()=>{
  songSerialRepeat = "playAgain";
  localStorage.setItem("songSerialRepeat",songSerialRepeat);
  repeatOrOnlyOneSongPlayIconSettingFun();
});

document.querySelector(".repeat-1Div").addEventListener("click",()=>{
  songSerialRepeat = "repeatNext";
  localStorage.setItem("songSerialRepeat",songSerialRepeat);
  repeatOrOnlyOneSongPlayIconSettingFun();
});

let FunDisplaySongInLibraryDiv = ()=>{
  if(libraryArray.length===0){
    document.querySelector(".librarynoSongImg").classList.add("librarynoSongImgFofDisplayFlex");
  }

  const librarysongMainContainer = document.querySelectorAll(".libraryDivsMainContainer");
    if(librarysongMainContainer){
      librarysongMainContainer.forEach((e)=>{
        e.remove(); 
      })
    }

  libraryArray.forEach((e,index)=>{
    if(document.querySelector(".librarynoSongImg").classList.contains("librarynoSongImgFofDisplayFlex")){
      document.querySelector(".librarynoSongImg").classList.remove("librarynoSongImgFofDisplayFlex");
    }
    const libraryDivsMainContainer = document.createElement("div");
    const librarysDivsPlaylistimgabout = document.createElement("div");
    const librarysDivslistThreeDotDiv = document.createElement("div");
    const librarysDivsPlaylistimg = document.createElement("div");
    const librarysDivsPlaylistabout = document.createElement("div");
    const librarysDivsPlaylistaboutSongName = document.createElement("div");
    const librarysDivsPlaylistaboutArtistName = document.createElement("div");
    const librarythreedotlogo = document.createElement("i");

    libraryDivsMainContainer.classList.add("libraryDivsMainContainer");
    librarysDivsPlaylistimgabout.classList.add("librarysDivsPlaylistimgabout");
    librarysDivslistThreeDotDiv.classList.add("librarysDivslistThreeDotDiv");
    librarysDivsPlaylistimg.classList.add("librarysDivsPlaylistimg");
    librarysDivsPlaylistabout.classList.add("librarysDivsPlaylistabout");
    librarysDivsPlaylistaboutSongName.classList.add("librarysDivsPlaylistaboutSongName");
    librarysDivsPlaylistaboutArtistName.classList.add("librarysDivsPlaylistaboutArtistName");
    librarythreedotlogo.classList.add("fa-solid","fa-ellipsis-vertical","three-dot-logo","three-dot-ClicklogoLibrary");

    libraryDivpageSongsMainDiv.appendChild(libraryDivsMainContainer);
    libraryDivsMainContainer.appendChild(librarysDivsPlaylistimgabout);
    libraryDivsMainContainer.appendChild(librarysDivslistThreeDotDiv);
    librarysDivsPlaylistimgabout.appendChild(librarysDivsPlaylistimg);
    librarysDivsPlaylistimgabout.appendChild(librarysDivsPlaylistabout);
    librarysDivsPlaylistabout.appendChild(librarysDivsPlaylistaboutSongName);
    librarysDivsPlaylistabout.appendChild(librarysDivsPlaylistaboutArtistName);
    librarysDivslistThreeDotDiv.appendChild(librarythreedotlogo);

    librarysDivsPlaylistaboutSongName.innerHTML = `${e.title}`;
    librarysDivsPlaylistaboutArtistName.innerHTML = `${e.artist}`;
    librarysDivsPlaylistimg.style.backgroundImage =`url('${e.img}')`;
    librarysDivsPlaylistimgabout.setAttribute('songTitle', e.title);;
  });

  currentOpendPlaylistInsidePlaylistDiv = libraryArray;
  document.querySelectorAll(".librarysDivsPlaylistimgabout").forEach((e,index)=>{
    e.addEventListener("click",()=>{
      
      currentSongNameDivArrayForColor = document.querySelectorAll(".songsDivPlaylistaboutSongName");
      playListSelectFun(e,libraryArray);
      heartInsideSongPlayerDivFun();
    });
  });


  document.querySelectorAll(".three-dot-ClicklogoLibrary").forEach((element,index)=>{
    element.addEventListener("click",()=>{
      threeDotLogoClickFun(libraryArray,index);
      
      document.querySelector(".AlbumthreeDotbackground").classList.add("AlbumthreeDotbackgrounddisplay-block");
      document.querySelector(".playlistMainDiv").classList.add("mainDivAfterClickThreeDotLogoforNotScrolling");
    });
  });

};
FunDisplaySongInLibraryDiv();
// -------------------------------------------------
// song serial repeat or only onesong play feature end here...........................................................










// song add notification start here.................................................................
let notificationFun = (text)=>{
    document.querySelector(".songAddedRemovedNotificationDiv").classList.add("songAddedRemovedNotificationDivAfter");
    document.querySelector(".songAddedRemovedNotificationDiv").innerHTML=text;
    setTimeout(()=>{
      if(document.querySelector(".songAddedRemovedNotificationDiv").classList.contains("songAddedRemovedNotificationDivAfter")){
        document.querySelector(".songAddedRemovedNotificationDiv").innerHTML="";
        document.querySelector(".songAddedRemovedNotificationDiv").classList.remove("songAddedRemovedNotificationDivAfter");
      }
    },2000);
}
// song add notification end here.................................................................







// .......................................................................................................
DivAfterClickThreeDotLogoGoBack.addEventListener("click",()=>{
  mainDivAfterClickThreeDotLogo.classList.remove("mainDivAfterClickThreeDotLogoAfterdotClick");
  bodyNotScrollingFun();
  if( document.querySelector(".AlbumthreeDotbackground").classList.contains("AlbumthreeDotbackgrounddisplay-block")){
    document.querySelector(".AlbumthreeDotbackground").classList.remove("AlbumthreeDotbackgrounddisplay-block");
  }
  
  if(document.querySelector(".playlistMainDiv").classList.contains("mainDivAfterClickThreeDotLogoforNotScrolling")){
    document.querySelector(".playlistMainDiv").classList.remove("mainDivAfterClickThreeDotLogoforNotScrolling")
  }
});

document.querySelector(".divForDivAfterClickThreeDotLogoClosingLogoMainDivXmark").addEventListener("click",()=>{
  mainDivAfterClickThreeDotLogo.classList.remove("mainDivAfterClickThreeDotLogoAfterdotClick");
  bodyNotScrollingFun();
  if( document.querySelector(".AlbumthreeDotbackground").classList.contains("AlbumthreeDotbackgrounddisplay-block")){
    document.querySelector(".AlbumthreeDotbackground").classList.remove("AlbumthreeDotbackgrounddisplay-block");
  }
  if(document.querySelector(".playlistMainDiv").classList.contains("mainDivAfterClickThreeDotLogoforNotScrolling")){
    document.querySelector(".playlistMainDiv").classList.remove("mainDivAfterClickThreeDotLogoforNotScrolling")
  }
});
// ............................................................................................................................



// glowing sideBars style.................................................................................
// audioTag.addEventListener("play",()=>{
//    document.querySelectorAll(".glowing-borders").forEach((e)=>{
//     e.classList.add("glowing-bordersAniation");
//    })
// });
// audioTag.addEventListener("pause",()=>{
//   document.querySelectorAll(".glowing-borders").forEach((e)=>{
//    e.classList.remove("glowing-bordersAniation");
//   })
// })
// glowing sideBars style.................................................................................




//Song search feature start here.................................................................................................
searchBarLogo.addEventListener("click",()=>{
  searchMainDiv.classList.add("searchMainDivVisibility-Visible");
  bodyNotScrollingFun();
});

document.querySelector(".searchDivpage-arrow-leftLogoDiv").addEventListener("click",()=>{
  searchMainDiv.classList.remove("searchMainDivVisibility-Visible"); 
  bodyNotScrollingFun();
})
//Song search feature end here.................................................................................................

















  
















