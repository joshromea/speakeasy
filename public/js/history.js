$(document).ready(function () {
    event.preventDefault();
    // Delete button for history list.
    $(document).on("click", "#del", function () {
        console.log("delete");

        // API call to delete posts
        $.ajax({
            method: "DELETE",
            url: "/api/Translate" + id
            // eslint-disable-next-line no-empty-function
        }).then(function () { });
    });
});
