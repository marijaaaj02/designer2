let url=location.href;

let navigationText=['Home', 'Explore Work', 'Contact', 'Author'];
let navigationLinks=['index.html', 'work.html', 'contact.html', 'author.html'];
//work
let description=['Minimalistic Living Room', 'Futuristic Interior Concept', 'Minimalistic Dinning Room', 'Standard Dinning Room', 'Small Living Room', 'Nature Living Room'];
let locations=['Florida', 'San Francisco', 'Hawai', 'Atlanta', 'New York' ,'Alexandria'];
getNavigation();
getFooter();
if(url.indexOf("index.html")!=-1){
    getLatestWork();
    getInfo();
    howItWorks();
    ourStaff();
}

if(url.indexOf("contact.html")!=-1){
    getSubjects();
    getContactInfo();
}


if(url.indexOf("work.html")!=-1){
    getWork();
}

function getNavigation(){

    let print='';

    print+=`<ul class="d-flex justify-content-between">`;

    for(let i=0;i<navigationText.length;i++){
        print+=`<li><a href="${navigationLinks[i]}" class="fs-5`;
        
        if(url.indexOf(navigationLinks[i])!=-1){
            print+=' text-danger';
        }
        else{
            print+=' text-light';
        }
        
        print+=`">${navigationText[i]}</a></li>`;
    }

    print+=`</ul>`;
    document.getElementById("navigation").innerHTML=print;
}



function getLatestWork(){
    let workHeading=['Interior Design', 'Building & Developing', 'Giving Your Brand Power', 'Boost Up Your Style'];
    let workTitle=['The Waterfront Cafe and Restaurant ', 'Home Land Port Canaveral Suites ', 'Hallandale Beach Motel Design ', 'Interior for Marina Beach Resort '];
    let workDate=['January 22, 2022', 'January 20, 2022', 'January 18, 2022', 'January 16, 2022'];
    let workLocations=['Florida, USA', 'Miami Beach, Florida, USA', 'North City Beach Park', 'Sunny Isles Beach, FL 33160'];

    let print='';

    for(let i=0;i<workHeading.length;i++){
        print+=`<div class='`;
        if(i!=0){
            print+=` d-none`;
        }
        print+=` slide'>
                    <h3>${workHeading[i]}</h3>
                    <hr>
                    <p class='fs-5'><i class="fas fa-calendar fs-4"></i> ${workDate[i]}</p>
                    <h4 class='my-5'>${workTitle[i]}</h4>
                    <p class='fs-5'><i class="fas fa-map fs-4"></i> ${workLocations[i]}</p>
                </div>`;
    }


    document.getElementById("latestWork").innerHTML=print;

    let printDots='';
    for(let i=0;i<workHeading.length;i++){
        printDots+=`<a href="#" class="dotSlider px-2 bg-danger mx-2 rounded-circle" data-id='${i}'></a>`;
    }


    document.getElementById("sliderDots").innerHTML=printDots;
    let dots=document.getElementsByClassName("dotSlider");
    for(let i=0;i<dots.length;i++){
        dots[i].addEventListener('click',changeSlide);
    }

}

function changeSlide(e){
    e.preventDefault();
    let index=this.dataset.id;

    let dots=document.getElementsByClassName("slide");
    for(let i=0;i<dots.length;i++){
        dots[i].classList.add('d-none');
    }
    dots[index].classList.remove('d-none');


}

function getInfo(){
    let infoIcons=['fas fa-headset', 'fas fa-user', 'fas fa-disease'];
    let infoText=['Active Support 24/7', 'Customer Care', 'Easy to Customize'];

    let print='';
    for(let i=0;i<infoIcons.length;i++){
        print+=`<div class="col-5 col-md-3 shadow px-3 py-4 rounded m-3 m-md-3">
                    <i class="${infoIcons[i]} text-danger"></i>
                    <p class="fs-5">${infoText[i]}</p>
                </div>`;
    }

    document.getElementById('info').innerHTML=print;
}

function howItWorks(){
    let headings=['What is Interior Desing', 'What is Exterior Decoration', '3D Rendering Models'];
    let texts=['Interior design is defined as the professional and comprehensive practice of creating an interior environment that addresses, protects, and responds to human need(s).', 'Exterior Decorations is defined as all colored artwork, designs and/or markings on the exterior surface of the Products.', '3D rendering generates a 2D image from a digital three-dimensional model or scene.'];

    let print='';
    for(let i=0;i<headings.length;i++){
        print+=`<a href='#' class='toggleWorks text-dark'>
                    <h3 class="d-flex justify-content-between align-items-center">${headings[i]} <i class="fas fa-chevron-down"></i></h3>
                    <hr/>
                    <p class='fs-5'>${texts[i]}</p>
                </a>`;
    }

    document.getElementById("howItWorks").innerHTML=print;


    $('.toggleWorks').click(toggleWorks)
}

function toggleWorks(e){
    e.preventDefault();
    if($(this).find('i').hasClass('fa-chevron-down')){
        $(this).find('i').addClass('fa-chevron-up');
        $(this).find('i').removeClass('fa-chevron-down');
    }
    else{
        $(this).find('i').removeClass('fa-chevron-up');
        $(this).find('i').addClass('fa-chevron-down');
    }
    let close=$('.toggleWorks i').not($(this).find('i'))
    close.addClass('fa-chevron-down');
    close.removeClass('fa-chevron-up');
    $('.toggleWorks p').not($(this).find('p')).slideUp();
    $(this).find('p').slideToggle();
}

function getFooter(){
    let print='';

    print+=`<div class='col-12 col-md-4'>
                <a href='index.html'><img src='assets/images/footer-logo.png' alt='Logo image' class='img-fluid'/></a>
                <p class="mt-3">No matter your design style, our experienced designers will help you create a design that perfectly reflects the way you live in your home. It is our goal to provide an incomparable, fun design experience for every customer.</p>
            </div>
            <div class='col-12 col-md-7'>
                <div class='row'>
                    <div class='col-12 col-md-4 text-center text-md-start'>
                        <h4>Our Location</h4>
                        <p>Sunny Isles Beach</p>
                        <p>Florida 33160</p>
                        <p>United States</p>
                    </div>
                    <div class='col-12 col-md-4 text-center text-md-start'>
                        <h4>Customer Care</h4>
                        <p>010-020-0340</p>
                        <p>090-080-0760</p>
                        <p>info@designer.com</p>
                    </div>
                    <div class='col-12 col-md-4 text-center text-md-start'>
                        <h4>Follow Us</h4>
                        <p><a href='https://www.facebook.com/' class='text-dark'><i class='fab fa-facebook fs-4 '></i> Facebook</a></p>
                        <p><a href='https://www.twitter.com/' class='text-dark'><i class='fab fa-twitter fs-4'></i> Twitter</a></p>
                        <p><a href='https://www.linkedin.com/' class='text-dark'><i class='fab fa-linkedin fs-4'></i> Linkedin</a></p>
                    </div>
                </div>
            </div>
            <div class='col-12 text-center'>
                <a href='doc.pdf' class='text-dark'>Documentation</a>
            </div>`;

    document.getElementById('footer').innerHTML=print;
}

function ourStaff(){
    let stuff=['Sophia Loren', ' Catherine Rose', ' Isaebella Marble', 'Maya Doe'];
    let position=['Chef Designer', 'CEO of Designer', 'Designer', 'Senior Architect'];
    let grade=[5, 4, 3, 5];
    let text=['You know it all started with the feeling that I needed to know something about design. I just wasn’t entirely sure of what I needed and how to go about it. And I have attempted to do just that.', 'From a young age, the realms of design and technology maintained as a crucial point of curiosity for me. It was the interest of using my hands to be creative and producing work that gave me the greatest satisfaction.', 'This is my first exposure to design and I intend to use what I’ve learned from design 101 to keep learning, keep building, keep testing, and eventually create something that would solve a problem.','THERE IS NO TYPICAL DAY IN AN ARCHITECT’S LIFE. Every day is different, according to Corey. An architect must wear many hats and complete a variety of tasks every single day.'];

    let print='';
    for(let i=0;i<stuff.length;i++){
        print+=`<div class='p-2 mx-3 rounded stuff'>
                    <h3>${stuff[i]}</h3>
                    <p class='text-secondary'>${position[i]}</p>`;

                    for(let j=0;j<grade[i];j++){
                        print+=`<i class="fa fa-star text-danger"></i>`;
                    }
            
                    print+=`<p>${text[i]}</p>
                </div>`;
    }

    document.getElementById("stuff").innerHTML+=print;


    $('#stuff').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
}

$("#hamburger a").click(getMobileNav);

function getMobileNav(e){
    e.preventDefault();
    let print='';

    print+=`<a href='#' id='close'><i class='fa fa-times text-light'></i></a>`;
    print+=`<ul>`;

    for(let i=0;i<navigationText.length;i++){
        print+=`<li class="my-2 py-1"><a href="${navigationLinks[i]}" class="text-light py-1 fs-5">${navigationText[i]}</a></li>`;
    }

    print+=`</ul>`;
    $('#navMobile').removeClass('default');
    $('#navMobile').html(print);

    $("#close").click(closeMobileNav);
    $('#navMobile').addClass('py-3')
    $('#navMobile').addClass('px-4')
}


function closeMobileNav(e){
    e.preventDefault()
    $('#navMobile').html('');
    $('#navMobile').removeClass('py-3')
    $('#navMobile').removeClass('px-4')
}

function getSubjects(){
    let subjects=['Question', 'Suggestion', 'Job', 'Other'];

    let print='';
    print+=`<option value=''>Choose subject</option>`;
    for(let i=0;i<subjects.length;i++){
        print+=`<option value='${i}'>${subjects[i]}</option>`;
    }

    $("#subject").html(print);
}

$("#name").keyup(checkName);

function checkName(){
    let nameRegex=/^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,})?$/;
    //ovde dodati srpske karaktere

    let nameValue=$("#name").val(); 

    if(nameRegex.test(nameValue)){
        $("#name").next().addClass('d-none');
        return 0;
    }
    else{
        $("#name").next().removeClass('d-none');
        return 1;
    }

}


$("#email").keyup(checkEmail)

function checkEmail(){
    let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    let emailValue=$("#email").val(); 

    if(emailRegex.test(emailValue)){
        $("#email").next().addClass('d-none');
        return 0;
    }
    else{
        $("#email").next().removeClass('d-none');
        return 1;
    }
}

$("#subject").change(checkSubject);

function checkSubject(){
    let subjectValue=$("#subject").val(); 

    
    if(subjectValue!=""){
        $("#subject").next().addClass('d-none');
        return 0;
    }
    else{
        $("#subject").next().removeClass('d-none');
        return 1;
    }
    
}

$("#message").keyup(checkMessage);

function checkMessage(){
    let message=$("#message").val().trim(); 

    
    if(message.split(" ").length<5){
        $("#message").next().removeClass('d-none');
        return 1;
    }
    else{
        $("#message").next().addClass('d-none');
        return 0;
    }
}

$("#sendMessage").click(checkAll);

$(".client").change(checkClient)

function checkClient(){
    let client=$(".client:checked");

    if(client.length==0){
        $("#client").removeClass('d-none');
        return 1;
    }
    else{
        $("#client").addClass('d-none');
        return 0;
    }
}

$("#terms").change(checkTerms);

function checkTerms(){
    let terms=$("#terms:checked").val();
    if(terms){
        $("#terms").next().addClass('d-none');
        return 0;
    }
    else{
        $("#terms").next().removeClass('d-none');
        return 1;
    }
}

function checkAll(){
    let errorCounter=0;
    errorCounter+=checkName();
    errorCounter+=checkEmail();
    errorCounter+=checkSubject();
    errorCounter+=checkMessage();
    errorCounter+=checkClient();
    errorCounter+=checkTerms();

    if(errorCounter==0){
        console.log("Sve oke");
        $("#messageText").removeClass("d-none");
        $("input[type='text']").val("");
        $(".client").prop("checked",false);
        $("#terms").prop("checked",false);
        $("#subject").val("");
        $("#message").val("");
    }
    else{
        console.log("Nije sve ok");
        $("#messageText").addClass("d-none");
    }
}

function getContactInfo(){
    let icons=['fas fa-user', 'fas fa-envelope', 'fas fa-comment'];
    let headings=['Mailing Address', 'Email Address', 'Chat With Us'];
    let content=['Sunny Isles Beach, Florida 33160, USA', 'contact@designer.com', 'chat@designer.com'];

    let print='';

    for(let i=0;i<headings.length;i++){
        print+=`<div class='col-12 bg-danger text-light text-center my-3 rounded px-2 py-4'>
                    <i class='${icons[i]} fs-2'></i>
                    <h3>${headings[i]}</h3>
                    <p>${content[i]}</p>
                </div>`;
    }


    document.getElementById("contactInfo").innerHTML=print;
}

window.onscroll = function(){
    scrollToTop();
}

function scrollToTop(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#scrolArrow").addClass("d-block");
    $("#scrolArrow").removeClass("d-none");
  } else {
    $("#scrolArrow").removeClass("d-block");
    $("#scrolArrow").addClass("d-none");
  }
}
$("#scrolArrow a").click(function(e){
    e.preventDefault();
    document.documentElement.scrollTop = 0;
})

function getWork(){
    let images=['gallery1.jpeg', 'gallery2.jpeg', 'gallery3.jpeg', 'gallery4.jpeg', 'gallery5.jpeg', 'gallery6.jpeg'];


    let print='';

    for(let i=0;i<images.length;i++){
        print+=`<div class="col-12 col-md-4 my-3">
                    <div class='row'>
                        <div class='col-12'>
                            <img src='assets/images/${images[i]}' alt='${description[i]}' class='img-fluid'/>
                        </div>
                        <div class='col-12'>
                            <h2 class='fs-4'>${description[i]}</h2>
                            <a href='#' class='details' data-id='${i}'>Show Details</a>
                        </div>
                    </div>
                </div>`;
    }


    document.getElementById("work").innerHTML=print;

    $(".details").click(showDetails);
}

function showDetails(e){
    e.preventDefault();
    let architects=['Maya Doe', 'Peter Marble', 'Maya Doe', 'Stiven Musk', 'Anna Twen', 'Maya Doe'];
    $("#modal").removeClass("d-none");
    console.log(this.dataset.id);

    let print='';

    print+=`<div class='insideModal text-center bg-secondary'>
                <a href='#' class='closeModal'><i class='fa fa-times text-light fs-3'></i></a>
                <h3 class='text-dark'>${description[this.dataset.id]}</h3>
                <p class='text-light fs-4'>Location: ${locations[this.dataset.id]}</p>
                <p class='text-light fs-4'>Architect: ${architects[this.dataset.id]}</p>
            </div>`;

    document.getElementById("modal").innerHTML=print;
    $(".closeModal").click(closeModal);
}

function closeModal(e){
    e.preventDefault();
    $("#modal").addClass("d-none");
}