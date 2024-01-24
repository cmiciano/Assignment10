class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

const $ = (id) => document.getElementById(id)

// ADD ALBUMS TO JUKEBOX
var jbox = new Jukebox()
let arrayAlbum = [["Operation Ivy", "Energy"], 
                  ["Blink 182", "Dude Ranch"],
                 ["New Found Glory", "Sticks and Stones"]]

for (alb of arrayAlbum) {
    console.log(alb)
    let artist = alb[0]
    let album = alb[1]
    let newAlb = new Album(artist, album)
    jbox.addAlbum(newAlb)
}


// RETRIEVE ALBUM CHOICE UPON CLICK
let albumList = $('albums')
let playButton = $('play')

let tPlay = $("timesPlayed")
playButton.addEventListener("click", function() {
    let selectAlb = albumList.value
    document.getElementById("play").innerHTML = selectAlb;

    // Retrieve corresponding album in array and play album
    let indSelectAlb = albumList.selectedIndex
    let albumToPlay = jbox.albums[indSelectAlb]
    albumToPlay.play()
    tPlay.innerHTML = albumToPlay.display()
    console.log(albumToPlay.display())



});

// RETRIEVE FAVORITE ALBUM
let faveButton = $('fave')
let pFave = $("favoriteAlbum")
faveButton.addEventListener("click", function() {
    pFave.innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`
    console.log( `Your favorite album is: ${jbox.favoriteAlbum()}`)

});

// minimal rewrite of the application that allows the user to pick an artist/album from a drop down menu on a web page and then click a play button to play the actual album. 
// Every time the play button is clicked, you need to keep track of which albums are being played and how often. There should be a button on the screen that reads “Show my favorite album”. 
// When the user clicks this button, it should show the user’s favorite album based on how many times it’s been played. When building the application, keep the following in mind:


//Store artists/albums within an array
//Bind that array to the drop down menu on the web page
//In code, iterate through the array and programmatically create new Album class instances based on each album within the array. You’ll also need to add these instances to the player.
//Add a play button to the web page. When the user selects an artist/album from the drop down menu and clicks the play button, the play() method should be called for that album. This will track that album as being played.
//When the user clicks the “show my favorite album” button, the favoriteAlbum() method should be called and the user’s favorite album based on number of plays should be displayed in the web page.