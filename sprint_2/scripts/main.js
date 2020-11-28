// Creating array for storing user comments

let commentsArray = [
    {
        userName: 'Theodore Duncan',
        userComment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
        timeStamp: '11/15/2018',
        displayPicture: './assets/images/Mohan-muruge.jpg'
    },
    {
        userName: 'Garry Wong',
        userComment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
        timeStamp: '12/12/2018',
        displayPicture: './assets/images/Mohan-muruge.jpg'
    },
    {
        userName: 'Micheal Lyons',
        userComment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
        timeStamp: '12/18/2018',
        displayPicture: './assets/images/Mohan-muruge.jpg'
    }
];

// Declaring variables
var commentsBlock;
var commentsBlockWrapper;
var commentsBlockWrapperImage;
var commentsBlockContent;
var commentsBlockContentHead;
var commentsBlockContentHeadName;
var commentsBlockContentHeadTimestamp;
var commentsBlockContentPara;

// Acquiring comment submission form
const commentForm = document.getElementById('commentForm');

// Targetting comments block from HTML
const commentsParentContainer = document.querySelector('#commentsBlock');

// Function to generate HTML structure
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
    commentsParentContainer.appendChild(commentsBlock);
    commentsBlock.append(commentsBlockWrapper);
    commentsBlockWrapper.appendChild(commentsBlockWrapperImage);
    commentsBlock.append(commentsBlockContent);
    commentsBlockContent.append(commentsBlockContentHead);
    commentsBlockContent.append(commentsBlockContentPara);
    commentsBlockContentHead.append(commentsBlockContentHeadName);
    commentsBlockContentHead.append(commentsBlockContentHeadTimestamp);
}

// Function to load entire markup with content

const generateComments = (userName, userComment, timeStamp, displayPicture) => {
    commentsBlockContentHeadName.innerText = userName;
    commentsBlockContentPara.innerText = userComment;
    commentsBlockContentHeadTimestamp.innerText = timeStamp;
    commentsBlockWrapperImage.src = displayPicture;
} 


// Loop to load comments into created markup

for (let i = commentsArray.length-1; i >= 0; i--) {
    generateMarkup();
    generateComments(
        commentsArray[i].userName,
        commentsArray[i].userComment,
        commentsArray[i].timeStamp,
        commentsArray[i].displayPicture
        );
}

// Initial comments loaded into HTML



// On submit

// commentForm.addEventListener('submit', function(event){
    // Preventing page refresh
    // event.preventDefault();

    // Getting Username
    // var nameVar = event.target.userName.value;

    // Getting Comment
    // var commentVar = event.target.userComment.value;

    // Generic Timestamp
    // var timeVar = '12/28/2019'

    // Creating object to store new comment data
    // let commentObject = {};
    // commentObject['userName'] = nameVar;
    // commentObject['userComment'] = commentVar;
    // commentObject['timeStamp'] = timeVar;

    // Adding data to comments array
    // commentsArray.push(commentObject);

  
    // Resetting the form
    // commentForm.reset();