import { addEntryToDb } from "../../database.js"

const addBioEventListeners = () => {

    const editBioForm = document.querySelector('.edit-bio-form')
    const editBioButton = document.querySelector('.edit-bio-button')
    const cancelFormButton = document.querySelector('.cancel-edit-bio')

    editBioButton.addEventListener('click', () => {
        editBioForm.style.display = "block"
    })
    cancelFormButton.addEventListener('click', () => {
        editBioForm.style.display = "none"
    })


    editBioForm.addEventListener('submit', () => {
        event.preventDefault()
        const bioname = document.querySelector('#bioName').value
        const bioDescription = document.querySelector('#bioDescription').value
        const nameOutput = document.querySelector('#na')

        nameOutput.innerText = bioname
        addEntryToDb('bio', {bioname, bioDescription})

        
    })

}

export default addBioEventListeners