import EditBioForm from "./EditBio.js"

const Bio = () =>{

    return `
        <section class="bio">
            <div class="profile-photo">
                <img src="288914976_549666103467392_768470608350793685_n.jpg" height="" alt="">
            </div>
            <div class="profile-info">
                <p class="name" id="na">Zainab Nagogo</p>
                <p class="about">Hi, i'm Zainab Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="edit-bio-button">Edit Bio</button>
            </div>
          ${EditBioForm()}
        </section>
 `
 }

export default Bio

