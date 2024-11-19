$(document).ready(function () {
    const googleScholarUrl = "https://scholar.google.com/citations?user=KeVT3SwAAAAJ&hl=en";

    // Fetch publication titles (manual placeholder for dynamic feature)
    $.ajax({
        url: googleScholarUrl,
        success: function (data) {
            let publications = [];
            // This is a placeholder for actual scraping or API usage
            // Replace this with actual fetched data if possible
            publications = [
                "Publication 1: Advanced Modeling in Geotechnics",
                "Publication 2: Vegetation Effects on Slope Stability",
                "Publication 3: Soil Stabilization Using Biopolymers"
            ];

            let list = $("#publication-list");
            publications.forEach((pub) => {
                list.append(`<li>${pub}</li>`);
            });
        },
        error: function () {
            $("#publication-list").append(
                "<li>Unable to fetch publications at the moment.</li>"
            );
        },
    });
});
