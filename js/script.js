const PROGRAMMING = "programming";
const EMBBEDED = "embbeded";
const ARCHITECTURE = "architecture";
const COMPOSITIONS = "compositions";
const EDITING_SOFTWARE = "editing_software";

/**
 * Gets the current year
 */
function getCurrentYear() {
    let current_year = new Date().getFullYear();
    document.getElementById("year").innerHTML = current_year;
}

/**
 * Reads the xml from the file containing all of my projects
 * @param {any} selected_option receives a returned string from getSelectOption()
 */
async function readProjectXML(selected_option) {
    try {
        //Get xml file
        const response = await fetch("assets/xml/projects.xml");

        //Transform xml in text
        const xml_text = await response.text();

        // Convert xml text into xml document
        const parser = new DOMParser();
        const xml_doc = parser.parseFromString(xml_text, "text/xml");

        const projects = xml_doc.getElementsByTagName("project");

        // Gets all projects that have the corresponding category
        if (selected_option != "all") {
            const matching_projects = xml_doc.querySelectorAll(`project[category="${selected_option}"]`);

            // Clear container before adding projects
            const container = document.getElementById("project-list");
            if (container)
                container.innerHTML = "";

            // iterates through each project within the choosen category
            matching_projects.forEach(project => {
                const project_title = project.querySelector("title").textContent;
                const project_img = project.querySelector("img").textContent;
                const project_link = project.querySelector("link").textContent;
                const languages = project.querySelectorAll("language");

                createProjectCard(languages, project_title, project_img, project_link);
            });
        }
        else {
            const matching_projects = xml_doc.querySelectorAll("project");

            // Clear container before adding projects
            const container = document.getElementById("project-list");
            if (container)
                container.innerHTML = "";

            // iterates through each project within the choosen category
            matching_projects.forEach(project => {
                const project_title = project.querySelector("title").textContent;
                const project_img = project.querySelector("img").textContent;
                const project_link = project.querySelector("link").textContent;
                const languages = project.querySelectorAll("language");

                if (languages === null)
                    languages = "";

                createProjectCard(languages, project_title, project_img, project_link);
            });
        }
    } catch (error) {
        console.log("Error reading the XML: ", error);
    }
}

/**
 * Filters to the wanted project
 */
function getProjectXML() {
    var selected_option = getSelectOption();
    switch (selected_option) {
        case PROGRAMMING:
            readProjectXML(selected_option);
            break;
        case EMBBEDED:
            readProjectXML(selected_option);
            break;
        case ARCHITECTURE:
            readProjectXML(selected_option);
            break;
        case COMPOSITIONS:
            readProjectXML(selected_option);
            break;
        case EDITING_SOFTWARE:
            readProjectXML(selected_option);
            break;
        default:
            readProjectXML(selected_option);
            break;
    }
}

/**
 * Gets the value from the projects dropdown
 * @returns the selected value from the dropdown containing all the project categories
 */
function getSelectOption() {
    const categories = document.getElementById("projects");
    const selected_value = categories.value;

    return selected_value;
}

/**
 * Creates cards in html, based on the number of projects or what was selected
 * @param {any} stack languages used in a project
 * @param {any} title title of the project
 * @param {any} img image of the project
 * @param {any} link link to the project
 */
function createProjectCard(stack, title, img, link) {
    const container = document.getElementById("project-list");


    let card_languages = "";
    stack.forEach(language_node => {
        var language_name = language_node.textContent;
        var css_color = language_name

        if (language_name.toLowerCase() === "c++")
            css_color = "cpp"
        else if (language_name.toLowerCase() === "c#")
            css_color = "cs"

        card_languages += `
        <div class="card-language">
            <span class="card-dot" style="background-color: var(--${css_color.toLowerCase()}-color);"></span>
            <span>${language_name}</span>
        </div>
        `;
    });

    const card_project = `
        <div class="card">
            <img id="card-img" class="card-image" src="${img}" alt="${title}" width="100%">
            <div class="card-container">
                <div class="card-title">
                    <span>&nbsp;</span>
                    <a href="${link}" target="_blank">
                        <h1>${title}</h1>
                    </a>
                </div>
                <div class="card-languages">
                    ${card_languages}
                </div>
            </div>
        </div>
    `;
    container.innerHTML += card_project;
}

getCurrentYear();