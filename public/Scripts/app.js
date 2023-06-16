/* File : comm--401-ass2, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 16 2023*/

(function(){
    function Start()
    {
        console.log("App Started...")

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event) =>{
                if(!confirm('Are you sure?'))
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();