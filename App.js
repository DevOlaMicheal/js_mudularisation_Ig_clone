import Bio from './modules/bio/Bio.js'
import addBioEventListeners from './modules/bio/events.js'
import Gallery from './modules/gallery/Gallery.js'
import Nav from './modules/nav/Nav.js'
import { request, addEntryToDb, getEntryFromDb } from './database.js'



request.onsuccess = () => {
  addBioEventListeners()
}

const App = () => {
    return `
        ${Nav()}
        <div class="container">
            ${Bio()}
            ${Gallery()}
        </div>
        
    `
}

document.getElementById('root').innerHTML = App()



