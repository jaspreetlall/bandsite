let commentForm = document.getElementById('commentForm');
// console.log(commentForm);
commentForm.addEventListener('submit', function(event){
    // Preventing page refresh
    event.preventDefault();

    // Getting Username
    var userName = event.target.userName.value;

    // Getting Comment
    var userComment = event.target.userComment.value;

    // Adding 

    console.log(userComment);
})