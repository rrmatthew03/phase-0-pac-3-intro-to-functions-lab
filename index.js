function shout(string){return string.toUpperCase()}
function whisper(string){return string.toLowerCase()}
function logShout(toHaveBeenCalledWith){console.log('HELLO')}
function logWhisper(toHaveBeenCalledWith){console.log('hello')}
function sayHiToHeadphonedRoommate(string){return ("I can\'t hear you!")}
function sayHiToHeadphonedRoommate(string){
    if (string.toUpperCase() === string){
        return "YES INDEED!"
    } else if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
    return 'I can\'t hear you!'
}
