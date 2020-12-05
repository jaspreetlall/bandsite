// Setting up variables

var commentsArray = [];

var commentsBlock;
var commentsBlockWrapper;
var commentsBlockWrapperImage;
var commentsBlockContent;
var commentsBlockContentHead;
var commentsBlockContentHeadName;
var commentsBlockContentHeadTimestamp;
var commentsBlockContentPara;
const defaultDisplayPicture = './assets/images/default-display-picture.png'

const apiUrl = 'https://project-1-api.herokuapp.com';
const apiKey = '?api_key=9398d87e-02a2-4bf6-a8f4-d58ce06ce0f3';
const apiCommentsEndpoint = '/comments';

// ============Testing Stuff Below============

// ============Delete Comment 

// ============REQUIRES ID of the comment to be deleted in the URL
// var testDeleteComments = axios
//     .delete(apiUrl + '/comments/' + '5bc5c503-54f1-47ab-ba62-e4186eb16687' + apiKey)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// ============Like Comment 

// ============REQUIRES ID of the comment to be liked in the URL
// var testLikeComment = axios
// .put(apiUrl + '/comments/' + '6bfea4bf-b47a-4202-9e58-aaa1aed71662' + '/like' + apiKey)
// .then(res => console.log(res))
// .catch(err => console.log(err));

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
    commentsBlockContentHeadName.innerText = commentObject.name;
    commentsBlockContentPara.innerText = commentObject.comment;
    let convertedTimeStamp = (new Date(commentObject.timestamp)).toLocaleDateString('en-US');
    commentsBlockContentHeadTimestamp.innerText = convertedTimeStamp;
    commentsBlockWrapperImage.src = defaultDisplayPicture;
}

// Function to populate comments to page
const populateComments = () => {
    // => Pulls comments from API
    axios
        .get(apiUrl + apiCommentsEndpoint + apiKey)
        .then(res => {
            // => Stores into variable
            commentsArray = res.data;
                // => Loads comments into generated markup
                for (let i = commentsArray.length-1; i >= 0; i--) {
                    displayComment(commentsArray[i]);
                }
            })
        .catch(err => console.log(err));
}

// Function to push comments to the API and reload updated comments
const postComment = (newComment) => {
    axios
        .post(apiUrl + apiCommentsEndpoint + apiKey, newComment)
        .then(res => populateComments())
        .catch(err => console.log(err));
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
    let nameVar = event.target.name.value;
    let commentVar = event.target.comment.value;

    // Checking for empty name or comment
    if (nameVar && commentVar) {
        // Creating object to store new comment data
        let newCommentObject = {
            name: nameVar,
            comment: commentVar
        };

        // Clearing existing comments
        clearComments();

        // Posting comments to API
        postComment(newCommentObject);

        // Clearing form after displaying comments
        clearForm();
    }
})