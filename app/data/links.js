import modernSidebarData from "./modernSidebarData";

let links = [];

modernSidebarData.forEach((section) => {

    if (section.title == "Contact") {
        return;
    }

    section.links.forEach((link) => {
        links.push({
            name: link.name,
            href: link.link
        })
    })
})

export default links;