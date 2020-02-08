const fs = require('fs');

const getNotes = function () {
    return 'Your notes ....';
};

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

const saveNotes = (notesArray) => {
    fs.writeFileSync('notes.json', JSON.stringify(notesArray));
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
module.exports = {getNotes, addNote, removeNote};