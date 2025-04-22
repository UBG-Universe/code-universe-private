document.addEventListener("DOMContentLoaded", function () {
    const allowedPages = ["1", "2", "6", "3"]; // Pages that should have banners
    const currentPageID = document.body.getAttribute("data-page-id");

    if (allowedPages.includes(currentPageID) && !document.querySelector("#bannerIframe")) {
        const iframe = document.createElement("iframe");
        iframe.id = "bannerIframe";
        iframe.src = "/banner.html";
        iframe.style.width = "100%";
        iframe.style.height = "100px";
        iframe.style.border = "none";
        document.body.prepend(iframe); // Adds banner to the top
    }
});
