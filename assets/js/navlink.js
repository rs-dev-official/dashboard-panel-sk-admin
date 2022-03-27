const response = await fetch("navdata.json");
const navdata = await response.json();

const makeSublinks = (submenu) => {
    return `<li class="sub-menu-item">
            <a href="${submenu.link || ""}">
                <i class="${submenu.menu_icon}"></i>
                <span>${submenu.name}</span>
            </a>
        </li>`;
};

const makeNav = (sub) => {
    let aa = ``;
    sub.map(
        (s) =>
            (aa += `
            <li class="sub-menu-item">
                <a href="${s.link || ""}">
                    <i class="${s.menu_icon}"></i>
                    <span>${s.name}</span>
                </a>
            </li>
            `)
    );
    return aa;
};

let navItems = ``;
navdata.map(
    (nav) =>
        (navItems += `
            <li class="nav-item">
                <i class="${nav.menu_icon}"></i>
                <span>${nav.name}</span>
                <i class="bx bx-chevron-down-square"></i>
            </li>
            <ul class="sub-menu">${makeNav(nav.submenu)}</ul>
        `)
);

let nav_elem = document.getElementById("nav_items");
nav_elem.innerHTML = navItems;

const li = document.getElementsByClassName("nav-item");
for (let i = 0; i < li.length; i++) {
    if (li[i].classList.contains("dashboard_link")) {
        continue;
    }
    li[i].addEventListener("click", function () {
        let list = Array.from(li);

        list.map((e) => {
            if (!li[i].classList.contains("selected")) {
                e.nextElementSibling.classList.remove("expanded-submenu");
                e.classList.remove("selected");
            }
        });
        this.classList.toggle("selected");
        this.nextElementSibling.classList.toggle("expanded-submenu");
    });
}
