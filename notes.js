const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(el => {
        return el.title === title;
    });
    if(duplicateNotes.length === 0) {
        notes.push({title:title,body:body});
        saveNotes(notes);
        console.log('New note added');
    }
    else {
        console.log('Note already present');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.filter(el => {
        return el.title === title;
    })
    if(findNote.length === 0) {
        console.log('Note not present');
    }
    else {
        const newNotesArray = notes.filter(el => {
            return el.title !== title;
        });
        console.log('Note to be removed: ', findNote);
        saveNotes(newNotesArray);
        console.log('Note removed');
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(el => {
        console.log('Title: ', el.title);
        console.log('Body: ', el.body);
    })
}

const saveNotes = (notesArray) => {
    fs.writeFileSync('notes.json', JSON.stringify(notesArray));
}

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.filter(el => el.title===title);
    note.forEach(el => {
        console.log(el.title);
        console.log(el.body);
    })
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e) {
        return [];
    }
}
module.exports = {addNote, removeNote, listNotes, readNotes};