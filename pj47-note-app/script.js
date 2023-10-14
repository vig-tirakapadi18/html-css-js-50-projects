const addNoteBtn = document.getElementById("add-btn");
const appEl = document.getElementById("app");

const createNote = (id, content) => {
        const createNoteEl = document.createElement("textarea");
        createNoteEl.classList.add("note");
        createNoteEl.placeholder = "Empty Note";
        createNoteEl.value = content;

        createNoteEl.addEventListener("dblclick", () => {
                const warning = confirm("Are you sure want to delete this note?");
                if (warning) {
                        deleteNoteEl(id, createNoteEl);
                }
        })

        createNoteEl.addEventListener("input", () => {
                updateNoteEl(id, createNoteEl.value);
        })

        return createNoteEl;
}

const addNote = () => {
        const notes = getNotes();
        const noteObj = {
                id: Math.floor(Math.random() * 1000000),
                content: ""
        }
        const noteEl = createNote(noteObj.id, noteObj.content);

        appEl.insertBefore(noteEl, addNoteBtn);

        notes.push(noteObj);

        saveNotes(notes);
};


const getNotes = () => {
        return JSON.parse(localStorage.getItem("note") || "[]");
}

const deleteNoteEl = (id, element) => {
        const notes = getNotes().filter(note => note.id != id);
        saveNotes(notes);
        appEl.removeChild(element);
};

const updateNoteEl = (id, content) => {
        const notes = getNotes();
        const target = notes.filter(note => note.id === id)[0];
        target.content = content;
        saveNotes(notes);
};

const saveNotes = (notes) => {
        localStorage.setItem("note", JSON.stringify(notes));
}

getNotes().forEach(note => {
        const noteEl = createNote(note.id, note.content);
        appEl.insertBefore(noteEl, addNoteBtn);
})

addNoteBtn.addEventListener("click", addNote);

//https://cdn.pixabay.com/photo/2023/10/07/07/10/butterfly-8299620_1280.jpg

//https://cdn.pixabay.com/photo/2023/09/12/17/59/stones-8249322_1280.jpg

//https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg

//https://cdn.pixabay.com/photo/2016/03/27/16/24/holidays-1283014_1280.jpg

//https://cdn.pixabay.com/photo/2019/11/09/17/36/fjord-4614096_1280.jpg

//https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_1280.jpg