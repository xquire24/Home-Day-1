 module.exports = {
 notesApplication: function(author) {

 this.author = author;
 this.notes=[];
//method that creates a new note content
this.create: function(note_content){
notes.push(notes_content);

};
//method that lists the total avialable notes with is number, title and author
this.listNotes: function (){

  for (var i=0; i < this.notes.length; i++){
  return "note_id: " + i + '\n' + this.note[i] + "\n" + "By author: " + "this.author";
}
};
//method that gets the based based on the note id
this.get: function(note_id){
for (var i = 0; i < this.notes.length; i++){
  if(note_id === i){
    return this.notes[i];
  }
  else{
    return "Not found";
  }
} 
};
//method that searches with a search text and returns the note content 
this.search: function(search_text){
  for (var i = 0; i< this.notes.length; i++){
  if (this.notes[i].indexof(search_text)){
  return "showing result for search" + "\n" + "Note ID:" + i + "\n" + this.notes[i] + '\n' + "By Author" + "this.author" + "\n";

  }else{
    return "Not found";
  }
  }
  };
  //this method deletes notes according to note id
this.delete: function(note_id) {
    delete this.notes[note_id];
  };
  //this method edits note content
this.edit: function(note_id, new_content) {
    this.note[note_id] = new_content;
  };
  }

}