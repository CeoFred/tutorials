const draggables = document.querySelectorAll('.draggable');

const containers = document.querySelectorAll('.container');


draggables.forEach(draggable => {
draggable.addEventListener('dragstart',() => {
  draggable.classList.add('dragging');
  console.log('Drag Start')
}); 

draggable.addEventListener('dragend',function(event) {
  draggable.classList.remove('dragging');
});

})

containers.forEach(container => {
  container.addEventListener('dragover',() => {
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable)
  })
})