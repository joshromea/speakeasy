$(document).ready(function () {
    // Delete button for history list.    
    $(document).on("click", ".delete-history", function () {
        console.log("delete");

        // API call to delete posts
        $.ajax({
            method: "DELETE",
            url: "/api/Translate" + id
        })
            .then(function () {


            });
    });
});
