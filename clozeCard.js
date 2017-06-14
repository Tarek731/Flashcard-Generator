



 
 //constructor to accept two arguments
  function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    }

    // this.partial = partial;
  //   this.questions = [
  // // {
  //   type: 'input',
  //   name: 'clozecardQuestion',
  //   message: '____ was the first president of the United States',
  //   validate: function (value) {
  //     var pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
  //     if (pass) {
  //       return true;
  // },
  // ];

  
  
 // var Cloze = new ClozeCard(); 
  
// not sure if this is the way to add properties to object
// cloze.NewProperties = function() {
//   this.text = text;
//   this.partial = partial;
//   this.fullText = fullText;
// }
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.

// Use prototypes to attach these methods, wherever possible.


//exports a constructor to the file
module.exports = ClozeCard;