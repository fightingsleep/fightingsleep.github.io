$(document).ready(function() {
  
  $("#aboutmebtn").addClass('activebutton');
  
  $(".navbutton").click(function() {
    $(".navbutton").removeClass('activebutton');
    $(this).addClass('activebutton');
  });
  
  $("#aboutmebtn").click(function() {
    $("#maindescription").html("<div id=\"briefSummary\">\
       Software Engineer<br>University of Saskatchewan<br>Saskatoon, Saskatchewan, Canada<br>\
       Bachelor of Science (B.Sc.) Honours, Computer Science<br><br>\
       </div>\
       I am currently a 4th year computer science honours student at the University of Saskatchewan. My interest\
       in programming began when I was very young, and I have pursued it in both high school and now university.\
       I pride myself on my ability to work with others, and solve problems without large amounts of\
       instruction.<br><br>\
       In university my goal was to gain the widest breath of knowledge within Computer Science that I could. So I ended\
       up taking classes on a wide variety of topics including: operating system design, concurrent programming, image processesing,\
       databases, web programming, artificial intelligence, algorithm design, and many more topics (as can be seen on my resume).\
       I enjoy all of the areas of computer science that I have studied so far, and I am eager to learn more!<br><br>\
       Aside from computer science I am also very interested in physics. I have taken multiple physics\
       classes as electives, and I would take more if I could. If I am not studying something computer science related,\
       than I am most likely trying to expand my knowledge on various physics topics.<br><br>\
       Other than school and studying I enjoy playing sports with my friends, learning new instruments, \
       and listening to music.<br><br>\
       </div>");
  });
		
  $("#projectsbtn").click(function() {
    $("#maindescription").html("<h2>OS432</h2><p> OS432 is a simple operating system that me and a\
      team of 5 other people made for our advanced operating systems concepts class (CMPT 432). The\
      operating system was designed to run on a Raspberry Pi, and allowed the user to choose from a\
      list of pre-defined processes to run. These processes showed that we were able to achieve user\
      level processes, interprocess communication, and basic keyboard & screen I/O. This project gave me a\
      solid understanding of modern operating systems, as well as the arm architecture and assembly\
      language.</p><h2>chrislross.com</h2><p>The website that you are currently on was made by me and is hosted\
      on Github Pages. The website was written using basic HTML, Javascript, CSS, jQuery, and jQuery Mobile.\
      I designed both a desktop version of the site and a simple mobile version. The intention\
      of this website is to describe myself and the work that I've done so far. As time goes on I plan\
      to post more of my personal projects on here and hopefully make it a little bit more interesting.</p>\
      <h2>Paintstream</h2><p>Paintstream is a game that me and one other person\
      made for our web programming class (CMPT 350). This game was made using HTML 5, CSS, Javascript\
      , and Node JS. It would automatically assign a user a word to draw, and all other users had to\
      try to guess the word that the user was drawing. We wrote the server from scratch using Node\
      JS and web sockets. The server worked by passing drawing coordinates between all users, then\
      the lines were computed, connected, and displayed on the client side.</p>");
  });

  $("#contactbtn").click(function() {
    $("#maindescription").html("<h1 id=\"contactHeading\">Contact me</h1><h5 id=\"contactSubheading\">Email:</h5>\
                                <a id=\"emaillink\" href=\"mailto:chris@chrislross.com\">chris@chrislross.com</a>\
                                <br><br><h5 id=\"contactSubheading\">Phone: </h5><a id=\"phoneNumber\"href=\"tel:+13067169046\">1 (306) 716-9046</a><br><br>\
                                <h5 id=\"contactSubheading\">LinkedIn & Github:</h5><br><br>");
    });
		
    $("#resumebtn").click(function() {
      window.location.assign("Chris_Ross_Resume.pdf");
    });
});
