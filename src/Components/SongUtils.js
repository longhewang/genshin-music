
class Recording {
  constructor() {
    this.start = new Date().getTime()
    this.notes = []
  }
  init = () => {
    this.start = new Date().getTime() - 100
    console.log("Started new recording")
  }
  addNote = (index) => {
    if (this.notes.length === 0) this.init()
    let currentTime = new Date().getTime()
    let note = [index, currentTime - this.start]
    this.notes.push(note)
  }
}
class Song {
  constructor(name, notes, data) {
    this.name = name
    this.version = 1
    this.notes = notes
    if (data === undefined) {
      this.data = {}
    }else{
      this.data = data
    }
  }
}
class LoggerEvent{
  constructor(title,text,timeout){
    this.title = title
    this.timeout = timeout
    this.text = text
    if(timeout === undefined) this.timeout = 3000
    this.event = new CustomEvent("logEvent",{detail:{
      title: this.title,
      text: this.text,
      timeout: this.timeout
    }})
  }
  trigger = () => {
    window.dispatchEvent(this.event)
  }
}
class NoteData {
  constructor(index, noteNames, url) {
    this.index = index
    this.noteNames = noteNames
    this.url = url
    this.buffer = new ArrayBuffer(8)
    this.clicked = false
  }
}
class FileDownloader {
  constructor(type) {
    if (type === undefined) type = "text/json"
    this.dataType = "data:" + type + ";charset=utf-8,"
  }
  download = (file, name) => {
    let data = this.dataType + encodeURIComponent(file)
    var el = document.createElement("a")
    el.style = "display:none"
    document.body.appendChild(el)
    el.setAttribute("href", data)
    el.setAttribute("download", name)
    el.click();
    el.remove();
  }
}
export {
  Recording,
  Song,
  NoteData,
  FileDownloader,
  LoggerEvent
}