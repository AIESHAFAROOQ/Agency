const filterButtons=document.querySelectorAll("[data-filter]");
const workCards=document.querySelectorAll(".work-card");
filterButtons.forEach(button=>button.addEventListener("click",()=>{
 filterButtons.forEach(item=>item.classList.remove("active"));
 button.classList.add("active");
 const selected=button.dataset.filter;
 workCards.forEach(card=>{card.hidden=selected!=="All"&&card.dataset.category!==selected;});
}));
const projectForm=document.getElementById("projectForm");
if(projectForm)projectForm.addEventListener("submit",event=>{
 event.preventDefault();
 document.getElementById("formMessage").textContent="Thank you! This demo form is working on the front end only; it does not send an email.";
 projectForm.reset();
});
