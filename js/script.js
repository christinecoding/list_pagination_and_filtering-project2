/******************************************
FSJS project 2 - List Filter and Pagination
******************************************/


const studentList = document.getElementsByClassName('student-item'); //variable that stores the list of students located in the HTML file 
const itemsPerPage = 10; //variable that stores the number of items that will be shown on each page 

//function that hides all of the items in the student list except for the ten that want to show
const showPage = (list, page) => { //the function has a list of items ('list') and the number of the page that should be shown ('page') as parameters
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   for (let i=0; i<list.length; i++){ //a for loop that loops over all the items in the 'list' parameter to make the browser only display the 10 student items of the 'page' parameter 
      if (i>=startIndex && i<endIndex){ 
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
};

//function that generates, appends, and adds functionality to the pagination buttons
const appendPageLinks = (list) => {
   //function's parameter represents the list of students 
   const numPages = Math.ceil(studentList.length/itemsPerPage); //variable that determines how many link pages are needed for the given list 
   //creation of <a>, <li>, <ul>, and <div> elements and appending them to the appropriate <div> element already in the HTML
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   const div = document.querySelector('.page');
   div.appendChild(paginationDiv);
   const paginationUl = document.createElement('ul');
   paginationDiv.appendChild(paginationUl);
 
   for (let i=1; i<=numPages; i++){
      //a for loop that adds <li> and <a> tags with a text content of i to​ every page
      const paginationLi= document.createElement('li');
      const paginationLink= document.createElement('a');
      paginationUl.appendChild(paginationLi);
      paginationLi.appendChild(paginationLink);
      paginationLink.textContent = i;
      
      //conditional statement so that initially the first pagination link's class name is 'active' (to activate certain CSS style properties for the link)
      if (i===1){
         paginationLink.className='active';
         } else {
         paginationLink.className='';
         }
         /*creation of an event listener for each <a>​ ​tag. When an <a> element is clicked the showPage function is called so 
         that only the student names of the clicked link are displayed */
         paginationLink.addEventListener('click', (event) => {
         const lastActive = document.getElementsByClassName('active'); /* variable to select all the elements that have a class name of 'active' 
         (Only one element has a class of 'active' at any given time) */
         lastActive[0].className = lastActive[0].className.replace('active', ''); //for the element with a class of 'active', make it's class name ' '
         event.target.className = 'active'; //changing the class name of the element clicked to 'active'
         showPage(list, paginationLink.textContent);
      });
   }
};

//calling both functions so that when the web page is loaded the links are appended to the page and the first 10 student items are shown
showPage(studentList, 1);
appendPageLinks(studentList);

