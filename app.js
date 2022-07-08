const addbutton = document.querySelector('#push');
const input = document.querySelector('#newtask input');
const todo = document.querySelector('#tasks');
const main = document.getElementById('main');

main.addEventListener('submit', (event) => {
    event.preventDefault();
    
    addbutton.addEventListener('click', function added() {
        if(input.value.length == 0) {
            alert("Please Enter a Task");
        } else {
            todo.innerHTML += `
            <div class="task">
            <span id="taskname">
                    ${input.value}
            </span>
            <button class="delete">
                 <i class="far fa-trash-alt"></i>
            </button>
            </div>
            `;
    
            const delebutton = document.querySelectorAll(".delete");
            for(var i=0; i<delebutton.length; i++){
                delebutton[i].onclick = function() {
                    this.parentNode.remove();
                }
            }
    
        }
        input.value = "";
    }
    );
    
    
});