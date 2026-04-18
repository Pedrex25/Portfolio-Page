function getCurrentYear() {
    let current_year = new Date().getFullYear();
    document.getElementById("year").innerHTML = current_year;
}

// async function getProjects() {
//     try {
//         const response = await fetch("https://api.github.com/users/Pedrex25/repos");
//         const container = document.getElementById("project-list");
//         container.innerHTML = "";

//         if (!response.ok) {
//             console.log(response.ok);
//             throw new Error("Github Error");
//         }

//         const projects = await response.json();

//         for (const project of projects) {
//             const getLanguages = await fetch(project.languages_url);
//             const languagesList = await getLanguages.json();

//             const languages = Object.keys(languagesList);

//             container.innerHTML += createProjectCard(project, languages);
//         }

//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// function createProjectCard(project, languages) {
//     const imageURL = `https://opengraph.githubassets.com/1/Pedrex25/${project.name}`;
//     const cardLanguages = languages.map(language => `
//         <div class="card-language">
//             <span class="card-dot" style="background-color: var(--${language.toLowerCase()}-color);"></span>
//             <span>${language}</span>
//         </div>
//     `).join('');

//     return `
//         <div class="card">
//             <img class="card-image" src="${imageURL}" alt="${project.name}" width="100%">
//             <div class="card-container">
//                 <div class="card-title">
//                     <span>&nbsp;</span>
//                     <h1>${project.name}</h1>
//                 </div>
//                 <div class="card-languages">
//                     ${cardLanguages}
//                 </div>
//             </div>
//         </div>
//     `;
// }

getCurrentYear();
// getProjects();