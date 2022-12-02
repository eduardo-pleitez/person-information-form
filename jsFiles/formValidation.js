
/* Get submit buttton and add event listener after click*/
const submit = document.getElementById('submitBtn');
submit.addEventListener('click', formValidation);

/* Function for validation */
function formValidation(e){
  /* Prevent default */
  e.preventDefault();

  /* Get the inputs for validation */
  const pName = document.getElementById('pName');
  const pLastName = document.getElementById('pLastName');
  const email = document.getElementById('email');
  const emailPass = document.getElementById('emailPwd');
  const emailConfPass = document.getElementById('emailConfPwd');
  const phone = document.getElementById('phone');
  const age = document.getElementById('age');
  const gender = document.querySelector('input[name=gender]:checked');
  const interests = document.querySelectorAll('input[name=interestsPerson]:checked');
  let interestsList = 'Interests: \n';
  const website = document.getElementById('website');
  const expLvl = document.getElementById('expLvl');

  /* Create the regular expressions to validate inputs */
  const regExpText = /^[A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`']+(?:\s[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`']+)*$/;
  const regExpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const regExpPass = /^[A-Za-z0-9#?!@$%^&*-.,_¿¡;]{8,}$/;
  const regExpPhone = /^[0-9]{4}\-?[0-9]{4}$/;
  const regExpWebsite = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/gm;

  /* Variables to display the data */
  let errorList = [];
  let successList = 'Person Information \n';

  /* Checking input values */
  //Input name
  (pName.value.match(regExpText) && pName.value.length>2) ? successList += 'Name: ' + pName.value.toUpperCase() + '\n' : errorList.push('The name must be letters.');

  //Input last name
  (pLastName.value.match(regExpText) && pName.value.length>2) ? successList += 'Last Name: ' + pLastName.value.toUpperCase() + '\n' : errorList.push('The last name must be letters.');

  //Input email
  (email.value.match(regExpEmail)) ? successList += 'E-mail: ' + email.value + '\n' : errorList.push('Insert a correct e-mail address.');

  //Input password and input password confirmation
   (emailPass.value.match(regExpPass) && emailPass.value == emailConfPass.value) ? successList += 'E-mail password: ' + emailPass.value + '\n' : errorList.push('The password and the confirmation password don\'t match or is not 8 charaters long.'); 
 
  //Input phone
  (phone.value.match(regExpPhone)) ? successList += 'Phone number: ' + phone.value + '\n' : errorList.push('The phone number must be 8 digits long.');

  //Input age
  (Number(age.value) >= 18 && Number(age.value) <= 120) ? successList += 'Age: ' + age.value + '\n' : errorList.push('Age must be a number between 18 and 120');

  //Input gender
  (gender != null) ? successList += 'Gender: ' + gender.value + '\n' : errorList.push('Select a gender option.');

  //Input interests
  (interests.length >= 2) ? Array.from(interests).map(interest => interestsList += interest.value + '\n') : errorList.push('Must select at least 2 interests.');
  //Add the interests to the successList just if the clause is valid.
  (interests.length >= 2) ? successList += interestsList : null; 

  //Input website
  (website.value.match(regExpWebsite)) ? successList += 'Website: ' + website.value + '\n' : errorList.push('Insert a correct website address.');

  //Add experience level
  (Number(expLvl.value) < 34) ? successList += 'Experience level: Junior \n' : (Number(expLvl.value) > 66) ? successList += 'Experience level: Senior \n' : successList += 'Experience level: Mid-level \n';

  showData(successList, errorList);
}
