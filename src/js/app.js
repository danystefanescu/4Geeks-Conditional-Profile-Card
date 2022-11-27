import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let yourName = `${variables.name}`;
  if (variables.name == null) yourName = "Your name & ";
  let yourLastName = `${variables.lastname}`;
  if (variables.lastname == null) yourLastName = " lastname";
  let yourRole = `${variables.role}`;
  if (variables.role == null) yourRole = "Career";
  let yourCity = `${variables.city}`;
  if (variables.city == null) yourCity = "City";
  let yourCountry = `${variables.country}`;
  if (variables.country == null) yourCountry = "Country";
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${yourName} ${yourLastName} </h1>
          <h2>${yourRole}</h2>
          <h3>${yourCity}, ${yourCountry} </h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter}"><i class="bi bi-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="bi bi-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin}"><i class="bi bi-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="bi bi-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://media.istockphoto.com/id/1189542390/vector/paper-layer-blue-abstract-background-use-for-banner-cover-poster-wallpaper-design-with-space.jpg?s=612x612&w=0&k=20&c=Wc0Qu_dyI6InL6VmCrRI1EhwPBYUIHZsJaBwsu3pgQU=",
    // this is the url for the profile avatar
    avatarURL:
      "https://i.pinimg.com/236x/ff/e5/c7/ffe5c7867c2b9529b62a529ffcc567aa--mens-suits-gorgeous-men.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
