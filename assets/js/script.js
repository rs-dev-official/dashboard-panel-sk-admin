document.getElementById("toggle-sidebar").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("sidebar_opened");
    document
        .getElementById("mainContainer")
        .classList.toggle("expandedSidebar");
    document.getElementById("toggle-sidebar").classList.toggle("sidebarIsOpen");
    document.getElementById("action-bar").classList.toggle("display-hidden");
});

// toggle notification list in Desktop
document.getElementById("notificationButton").addEventListener("click", () => {
    if (
        document
            .getElementById("contactList")
            .classList.contains("showContactList")
    ) {
        document
            .getElementById("contactList")
            .classList.toggle("showContactList");
    }
    document
        .getElementById("notificationBar")
        .classList.toggle("showNotificationBar");
});

// toggle contact list
document.getElementById("toggleContactList").addEventListener("click", () => {
    if (
        document
            .getElementById("notificationBar")
            .classList.contains("showNotificationBar")
    ) {
        document
            .getElementById("notificationBar")
            .classList.toggle("showNotificationBar");
    }
    document.getElementById("contactList").classList.toggle("showContactList");
});

// // toggle contact list in Desktop
// document.getElementById("toggleContactList").addEventListener("click", () => {
//     document.getElementById("contactList").classList.toggle("display-none");
//     document.getElementById("Root").classList.toggle("full-width");
// });
