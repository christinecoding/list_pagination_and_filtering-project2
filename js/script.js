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

   for (let i=0; i<list.length; i++){
      if (i>=startIndex && i<endIndex){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
       }
   }
};

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   const numPages = Math.ceil(studentList.length/itemsPerPage);
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   const div = document.querySelector('.page');
   div.appendChild(paginationDiv);
   const paginationUl = document.createElement('ul');
   paginationDiv.appendChild(paginationUl);
 
   for (let i=1; i<=numPages; i++){
      const paginationLi= document.createElement('li');
      const paginationLink= document.createElement('a');
      paginationUl.appendChild(paginationLi);
      paginationLi.appendChild(paginationLink);
      paginationLink.textContent = i;
      
      if (i===1){
         paginationLink.className='active';
         } else {
            paginationLink.className='';
         }

      for (let j = 0; j < paginationLink.length; j++) {
         paginationLink[j].addEventListener("click", (event) => {
            if (event.target.tagName == 'a'){ 
               paginationLink[j].className = ' ';
               event.target.className = "active";
               showPage(list, i);
         }
         });
      }
   }
};

showPage(studentList, 1);
appendPageLinks(studentList);
// Remember to delete the comments that came with this file, 
// and replace them with your own code comments
