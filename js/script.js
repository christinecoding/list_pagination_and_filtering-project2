/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project 
//- https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


const studentList = document.getElementsByTagName('li');
const itemsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

***/

const showPage = (list, page) => {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

//    Loop over the list parameter.
// Inside the loop, display any list item with 
// an index that is greater than or equal to the start 
// index variable and less than the end index variable.
   for (let i=0; i<list.length; i++){
      if (i>=startIndex && i<endIndex){
         list[i].style.display = '';
       }else {
         list[i].style.display = 'none';
       }
   }
};

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   const numPages = studentList.length/itemsPerPage;
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   const div = document.querySelector('.page');
   div.appendChild(paginationDiv);
   const paginationUl = document.createElement('ul');
   paginationUl.parentNode = paginationDiv;
   paginationDiv.appendChild(paginationUl);
   const paginationLi= document.createElement('li');
   const paginationLink= document.createElement('a');
   paginationLi.parentNode = paginationUl;
   paginationLink.parentNode = paginationLi;
   paginationUl.appendChild(paginationLi);
   paginationLi.appendChild(paginationLink);

   for (let i=1; i<=numPages; i++){
      paginationLi.textContent = i;
      paginationLink.textContent = i;
   // if (i==1){
   //    link.className='active';
   }
 
   // paginationLink.addEventListener('click', (event) => {
   // // if ( )
   // // create loop to loop through links to put them all individually to inactive
   
   // for (let j=0; j<numPages; i++){
   //    paginationUl.childNodes[j].childNodes[0].className = '';
   // }
   // event.target.className = 'active';
   //    showPage(studentList, i);
   // });

 //}
 }



// Remember to delete the comments that came with this file, 
// and replace them with your own code comments