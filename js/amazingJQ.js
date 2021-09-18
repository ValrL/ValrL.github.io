jQuery(document).ready(function ($) {

    let $container = $('.our-works-gallery');
    $container.isotope({
        itemSelector: '.isotope-item',
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });


    $('.our-works-title-item').click(function () {
        $('.our-works-title-list .active').removeClass('active');
        $(this).addClass('active');

        let selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

// ISOTOPE LOAD MORE BUTTON

    let initShow = 12; //number of images loaded on init & onclick load more button
    let counter = initShow; //counter for load more button
    let iso = $container.data('isotope'); // get Isotope instance
    console.log(iso.elemCount);

    function loadMoreFirstIteration(toShow) {

        $container.find(".hidden").removeClass("hidden");

        let hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
            //console.log(item.element);
            return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $container.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
            $(".load-more-btn").hide();
        } else {
            $(".load-more-btn").show();
        }
        ;

    }

    loadMoreFirstIteration(initShow); //execute function onload, creating first items pack without delay

    function loadMore(toShow) {  // second and third iteration, creating items packs WITH delay
        setTimeout(function () {


            $container.find(".hidden").removeClass("hidden");

            let hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
                //console.log(item.element);
                return item.element;
            });
            $(hiddenElems).addClass('hidden');
            $container.isotope('layout');
            $(".centered").hide()
            //when no more to load, hide show more button
            if (hiddenElems.length == 0) {
                $(".load-more-btn").hide();
            } else {
                $(".load-more-btn").show();
            }
            ;
        }, 2000)

    }


    // //append load more button
    // $container.after('        <div class="load-wrap">\n' +
    //     '                <div class="centered">\n' +
    //     '                    <figure>\n' +
    //     '                        <div></div>\n' +
    //     '                        <div></div>\n' +
    //     '                        <div></div>\n' +
    //     '                        <div></div>\n' +
    //     '                        <div></div>\n' +
    //     '                        <div></div>\n' +
    //     '                        <div></div>\n' +
    //     '                        <div></div>\n' +
    //     '                    </figure>\n' +
    //     '                </div>\n' +
    //     '                <a href="#" id="load-more"></a><div class="load-more-btn">load more</div>\n' +
    //     '            </div>\n' +
    //     '        </div>');

    //when load more button clicked
    $(document).on("click", ".load-more-btn", function (e) {
        e.preventDefault();
        $(".load-more-btn").hide()
        $(".centered").show()
        if ($('#filters').data('clicked')) {
            //when filter button clicked, set initial value for counter
            counter = initShow;
            j$('#filters').data('clicked', false);
        } else {
            counter = counter;
        }
        ;

        counter = counter + initShow;
        loadMore(counter);
    });
});


//second IMPLEMENTATION


// const workTitle = document.querySelectorAll('.our-works-title-item');
// const workItem = document.querySelectorAll('.our-works-gallery-card');
// let ourWorksTabsList = document.getElementById("ourworksTabsList");
//
//
//
// $(workItem).slice(0, 12).show()
// $(".load-more-btn").on("click", function load() {
//     $(".load-more-btn").hide()
//     $(".centered").show()
//     setTimeout( function () {
//
//         $(".our-works-gallery-card:hidden").slice(0, 12).slideDown()
//         $(".centered").hide()
//         $(".load-more-btn").show()
//         if ($(".our-works-gallery-card:hidden").length == 0) {
//             $(".load-more-btn").hide()
//         }
//     },2000)
//
// })
// showCategory = ()=> {
//     for(let i = 0; i < workItem.length; i++){
//         let show = workItem[i].querySelector( '.img-card-category');
//         show.textContent = workItem[i].dataset.content;
//     }
// };
// showCategory();
//
//
//
//
// ourWorksTabsList.onclick =(event)=>{
//     let target = event.target;
//     workTitle.forEach((elem) => {
//         elem.classList.remove('active')
//
//     });
//     target.classList.add('active');
//     let tabCategory = target.dataset.content;
//     workItem.forEach((e)=>{
//         //e.classList.add('hidden');
//         $(e).hide()
//         $(target).show()
//         let cardCategory = e.dataset.content;
//         // let loadAttr = e.getAttribute('data-load');
//         if(tabCategory === 'All') {
//            // e.classList.remove('hidden');
//             $(e).show()
//         }else if(tabCategory === cardCategory){
//           //  e.classList.remove('hidden');
//             $(e).show()
//         }
//     });
// };

//}}}~~~ Load more //
// morePhoto.onclick =()=>{
//     morePhoto.remove();
//     $('.centered').css('display','block');
//
//     setTimeout(getMoreImages,3000);
//     function getMoreImages (){
//     workItem.forEach(e => { e.removeAttribute('data-load')});
//     workTitle.forEach((el)=> {
//         if (el.classList.contains("active")) {
//             let attr = el.getAttribute("data-content");
//             workItem.forEach((element)=>{
//                 let wrapElement = element.getAttribute("data-content");
//                 if(attr === wrapElement){
//                     element.classList.remove('hidden');
//                 } else if(attr === "All"){
//                     element.classList.remove('hidden');
//                 }
//             });
//
//
//         }
//
//     });
//
//         $('.centered').css('display','none');
//
// }
// };








