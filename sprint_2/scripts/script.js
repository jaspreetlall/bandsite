// Creating array for storing user comments

let commentsArray = [
    {
        userName: 'Theodore Duncan',
        userComment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
        timeStamp: '11/15/2018'
    },
    {
        userName: 'Garry Wong',
        userComment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
        timeStamp: '12/12/2018'
    },
    {
        userName: 'Micheal Lyons',
        userComment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
        timeStamp: '12/18/2018'
    }
]

// Acquiring comment submission form
let commentForm = document.getElementById('commentForm');

// Targetting comments block from HTML
let commentBlock = document.getElementById('commentBlock')+

// Initial comments loaded into HTML

// for (let i = 0; i < commentsArray.length; i++) {
//     // Creating new comment block to push into HTML
//     var newCommentBlock = document.createElement('div');
//     newCommentBlock.setAttribute('class', 'comments__container-block');
//     newCommentBlock.innerHTML = `
//         <div class="comments__container-block-wrapper">
//         <!-- <img class="comments__container-block-wrapper-img" src="" alt="Profile picture placeholder"> -->
//         </div>
//         <div class="comments__container-block-content">
//         <div class="comments__container-block-content-head">
//             <h5 class="comments__container-block-content-head-name">${commentsArray[i].userName}</h5>
//             <span class="comments__container-block-content-head-timestamp">${commentsArray[i].timeStamp}</span>
//         </div>
//         <div class="comments__container-block-content-para">${commentsArray[i].userComment}
//         </div>
//         </div>`;
//     document.getElementById('commentsBlock').prepend(newCommentBlock);
// }

// Submission
commentForm.addEventListener('submit', function(event){
    // Preventing page refresh
    event.preventDefault();

    // Getting Username
    var nameVar = event.target.userName.value;

    // Getting Comment
    var commentVar = event.target.userComment.value;

    // Generic Timestamp
    var timeVar = '12/28/2019'

    // Creating object to store new comment data
    let commentObject = {};
    commentObject['userName'] = nameVar;
    commentObject['userComment'] = commentVar;
    commentObject['timeStamp'] = timeVar;

    // Adding data to comments array
    commentsArray.push(commentObject);

  
    // Resetting the form
    commentForm.reset();

    
    
    // For loop to print all comments from array
    for (let i = 0; i < commentsArray.length; i++) {
        // Creating new comment block to push into HTML
        var newCommentBlock = document.createElement('div');
        newCommentBlock.setAttribute('class', 'comments__container-block');
        newCommentBlock.innerHTML = `
            <div class="comments__container-block-wrapper">
            <!-- <img class="comments__container-block-wrapper-img" src="" alt="Profile picture placeholder"> -->
            </div>
            <div class="comments__container-block-content">
            <div class="comments__container-block-content-head">
                <h5 class="comments__container-block-content-head-name">${commentsArray[i].userName}</h5>
                <span class="comments__container-block-content-head-timestamp">${commentsArray[i].timeStamp}</span>
            </div>
            <div class="comments__container-block-content-para">${commentsArray[i].userComment}
            </div>
            </div>`;
        document.getElementById('commentsBlock').prepend(newCommentBlock);
    }
})

