
function showData(successList, errorList) {

  let displayList = '<h2>Fix the following errors:</h2> <ul> \n';
  let errorListContainer = document.getElementById('errorListContainer');

  //Clean the previous values sent to the console
  console.clear();

  //Display the valid information
  console.log(successList);

  //Display the errors
  if(errorList.length > 0){
    errorList.map((errorItem) => displayList += '<li>' + errorItem + '</li> \n');
    displayList += '</ul>';
    errorListContainer.innerHTML = displayList;
  }else{
    //Clean the previous list of errors
    errorListContainer.innerHTML = '';
  }
}
