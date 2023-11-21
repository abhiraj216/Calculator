function addtodisplay(value){
    //add to display code here
    document.getElementById('number').value += value;

}

function calculate(){
    var result = document.getElementById('number');
    try {
        number.value = eval(number.value);
      } catch (error) {
        number.value = 'Error';
      }
}

function cleardisplay() {
    document.getElementById('number').value = '';
  }
