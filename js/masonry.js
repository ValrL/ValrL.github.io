

const mainGrid = document.querySelector('.gallery-images-grid');

let mainMasonGrid = new Masonry(mainGrid, {
    itemSelector: '.gallery-main-item',
    columnWidth: 372,
    gutter: 20,
})


imagesLoaded( mainGrid  ).on( 'progress', function() {
    // layout Masonry after each image loads
    mainMasonGrid.layout();
});







