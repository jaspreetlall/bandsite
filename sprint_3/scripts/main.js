// Creating array for storing user comments

let commentsArray = [
    {
        userName: 'Theodore Duncan',
        userComment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
        timeStamp: '11/15/2018',
        displayPicture: './assets/images/default-display-picture.png'
    },
    {
        userName: 'Garry Wong',
        userComment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
        timeStamp: '12/12/2018',
        displayPicture: './assets/images/default-display-picture.png'
    },
    {
        userName: 'Micheal Lyons',
        userComment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
        timeStamp: '12/18/2018',
        displayPicture: './assets/images/default-display-picture.png'
    }
];

// Setting up variables
var commentsBlock;
var commentsBlockWrapper;
var commentsBlockWrapperImage;
var commentsBlockContent;
var commentsBlockContentHead;
var commentsBlockContentHeadName;
var commentsBlockContentHeadTimestamp;
var commentsBlockContentPara;
const defaultDisplayPicture = './assets/images/default-display-picture.png'
const defaultTimeStamp = '12/28/2019'

const apiUrl = 'https://project-1-api.herokuapp.com';
const apiKey = '?api_key=9398d87e-02a2-4bf6-a8f4-d58ce06ce0f3';





// ============Testing Stuff Below============

//  ============Get Comments
var testGetComments = axios
    .get(apiUrl + '/comments' + apiKey)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

// ============Post Comment
// ============Requires name & comment as a object
// var testPostComments = axios
//     .post(apiUrl + '/comments' + apiKey, {
//         name: 'Jaspreet S Lall',
//         comment: 'OMG! So awesome'
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// ============Delete Comment 
// ============REQUIRES ID of the comment to be deleted in the URL
// var testDeleteComments = axios
//     .delete(apiUrl + '/comments/' + '5bc5c503-54f1-47ab-ba62-e4186eb16687' + apiKey)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// ============Like Comment 
// ============REQUIRES ID of the comment to be liked in the URL
var testLikeComment = axios
.put(apiUrl + '/comments/' + '6bfea4bf-b47a-4202-9e58-aaa1aed71662' + '/like' + apiKey)
.then(res => console.log(res))
.catch(err => console.log(err));

// ============Get Shows
var testGetShows = axios
    .get(apiUrl + '/showdates' + apiKey)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

// ============Testing stuff above============





// Acquiring comment submission form
const commentForm = document.getElementById('commentForm');

// Targetting comments container block in HTML
const commentsParentContainer = document.querySelector('#commentsBlock');

// Function to generate HTML markup for comment block
const generateMarkup = () => {
    // Creating all elements required for HTML markup
    commentsBlock = document.createElement('div');
    commentsBlockWrapper = document.createElement('div');
    commentsBlockWrapperImage = document.createElement('img');
    commentsBlockContent = document.createElement('div');
    commentsBlockContentHead = document.createElement('div');
    commentsBlockContentHeadName = document.createElement('h5');
    commentsBlockContentHeadTimestamp = document.createElement('span');
    commentsBlockContentPara = document.createElement('div');

    // Setting classes to each element created above
    commentsBlock.className = 'comments__container-block';
    commentsBlockWrapper.className = 'comments__container-block-wrapper';
    commentsBlockWrapperImage.className = 'comments__container-block-wrapper-img';
    commentsBlockContent.className = 'comments__container-block-content';
    commentsBlockContentHead.className = 'comments__container-block-content-head';
    commentsBlockContentHeadName.className = 'comments__container-block-content-head-name';
    commentsBlockContentHeadTimestamp.className = 'comments__container-block-content-head-timestamp';
    commentsBlockContentPara.className = 'comments__container-block-content-para';

    // Appending elements & setting up elements nesting
    commentsParentContainer.append(commentsBlock);
    commentsBlock.append(commentsBlockWrapper);
    commentsBlock.append(commentsBlockContent);
    commentsBlockWrapper.append(commentsBlockWrapperImage);
    commentsBlockContent.append(commentsBlockContentHead);
    commentsBlockContent.append(commentsBlockContentPara);
    commentsBlockContentHead.append(commentsBlockContentHeadName);
    commentsBlockContentHead.append(commentsBlockContentHeadTimestamp);
}

// Function to fill content into each comment block
const displayComment = (commentObject) => {
    generateMarkup();
    commentsBlockContentHeadName.innerText = commentObject.userName;
    commentsBlockContentPara.innerText = commentObject.userComment;
    commentsBlockContentHeadTimestamp.innerText = commentObject.timeStamp;
    commentsBlockWrapperImage.src = commentObject.displayPicture;
}

// Function to populate comments to page
const populateComments = () => {
    for (let i = commentsArray.length-1; i >= 0; i--) {
        displayComment(commentsArray[i]);
    }
}

// Function to clear comments
const clearComments = () => {
    commentsParentContainer.innerHTML = "";
}

// Function to clear form
const clearForm = () => {
    commentForm.reset();
}

// Initial population of comments into page
populateComments();

// On submission
commentForm.addEventListener('submit', function(event){
    // Preventing page refresh
    event.preventDefault();
    
    // Getting information from form
    var nameVar = event.target.userName.value;
    var commentVar = event.target.userComment.value;
    var timeVar =  new Date().toLocaleDateString('en-US');

    // Checking for empty name or comment
    if (nameVar && commentVar) {
        // Creating object to store new comment data
        let newCommentObject = {
            userName: nameVar,
            userComment: commentVar,
            timeStamp: timeVar,
            displayPicture: defaultDisplayPicture
        };

        // Adding data to comments array
        commentsArray.push(newCommentObject);

        // Clearing existing comments
        clearComments();

        // Reloading comments with new comment
        populateComments();
        
        // Clearing form after displaying comments
        clearForm();
    }
})