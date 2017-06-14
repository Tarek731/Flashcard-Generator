// Create basic card constructor function

 
  // constructor to accept two arguments
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}
//   	this.questions = [
//   		{
// 		    type: 'list',
// 		    name: 'cardType',
// 		    message: 'pick basic card or cloze card',
// 		  	choices: ["basic card","cloze card"]
// 		},
		// ];
  
//write questions for basic card

module.exports = BasicCard;
// module that links the constrctor function to other files using variable basic card