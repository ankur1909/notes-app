const chalk = require('chalk')
const notes = require('./notes.js');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'lis all notes',
    handler: function() {
        console.log('listing all notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('reading a note');
    }
})

yargs.parse();
//console.log(yargs.argv);