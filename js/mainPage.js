$(document).ready(function(){
  
  $("#aboutmebtn").addClass('activebutton');
  
  $(".navbutton").click(function() {
    $(".navbutton").removeClass('activebutton');
    $(this).addClass('activebutton');
  });
  
  $("#aboutmebtn").click(function() {
    $("#maindescription").html("I am currently a 4th year computer science honours student at the\
      University of Saskatchewan. My interest in programming began when I was very young, and I have\
      pursued it in both high school and now university. I pride myself on my ability to work with \
      others, and solve problems without large amounts of instruction.<br><br>Aside from\
      computer science I am also very interested in physics and astronomy. I have taken multiple\
      physics classes as electives, and I would take more if I could. If I am not studying something\
      computer science related, then I am most likely keeping up-to-date with these two other\
      subjects.<br><br>Other than school and studying I enjoy playing sports with my friends,\
      learning new instruments, and listening to music.<br><br>");
  });
		
  $("#projectsbtn").click(function() {
    $("#maindescription").html("<h2>OS432</h2><p> OS432 is a simple operating system that me and a\
      team of 5 other people made for our advanced operating systems concepts class (CMPT 432). The\
      operating system was designed to run on a Raspberry Pi, and allowed the user to choose from a\
      list of pre-defined processes to run. These processes showed that we were able to achieve user\
      level processes, interprocess communication, and basic keyboard & screen I/O. This project gave me a\
      solid understanding of modern operating systems, as well as the arm architecture and assembly\
      language.</p><h2>Doodle Charades</h2><p>Doodle Charades is a game that me and one other person\
      made for our web programming class (CMPT 350). This game was made using HTML 5, CSS, Javascript\
      , and Node JS. It would automatically assign a user a word to draw, and all other users had to\
      try to guess the word that the user was drawing. We wrote the server from scratch using Node\
      JS and web sockets. The server worked by passing drawing coordinates between all users, then\
      the lines were computed, connected, and displayed on the client side.</p>");
  });

  $("#contactbtn").click(function() {
    $("#maindescription").html("<div><a id=\"emaillink\" href=\"mailto:chrislross@hotmail.com\">\
                                </a><div id=\"emailarrow\">&#8592;</div><div id=\"sendemail\">Click\
                                here to send me an email</div></div><div><div id=\"socialnetworks\">\
                                Or message me on my social networks!</div><div id=\"linksarrow\">&#8601\
                                </div></div>");
    });
		
    $("#resumebtn").click(function() {
      $("#maindescription").html("<h1>Coming soon!</h1>");
    });
});
