$(document).ready(function() {
    const sectTwo = $("#nuSect-friendsPN");
    sectTwo.hide();
    $("#showPostClick").hide();
    //show this later after submitting all friends
    ///////////
    // global 
    const meetU = {
        name: [],
        zipCode: [],
    };
    const entName = $("#nameIn");
    const entZip = $("#zipLocIn");
    
    entName.on('click', function() {
       
        entName.val('')
    })
    entZip.on('click', function() {
        
       entZip.val('')
    })

    //enter data to arrays
    $("#userSUBMIT").on('click', function() {
           
        userName = entName.val();
            meetU.name.push(userName);
            
        userZip = entZip.val();
            meetU.zipCode.push(userZip);
            console.log(meetU);
             
        $("#input-section").hide(); 

        // show the SECOND flipBox \\
        $(document.body).append(sectTwo.show());
        console.log(sectTwo + "this works just not filled yet");  
        
        
        
    })
    
    /* @this point << the user name 
    and zipCode pushed to {meetU}
    */
    //~START~ >> semantics for sectTwo [object Object]
    const newNameIN = $("#add-nuName");
    const newZipIN = $("#add-nuZipCode");
    const pushClrIN = $("#nuSubmit");

    //nuSubmit btn on click function
    pushClrIN.on('click', function() {
        
        namePP = newNameIN.val();
            meetU.name.push(namePP);
        
        zipPP = newZipIN.val();
            meetU.zipCode.push(zipPP);
        //console.log(this)
        console.log(meetU);
        console.log(meetU.name);
        console.log(meetU.zipCode);
        // determined from console that the app now properly adds to object//
        //now clear the input(text) values
        newNameIN.val('');
        newZipIN.val('');
        console.log(meetU);  // ALL GOOD UP TO HERE!!!
        ////////\\\/\/\/\/\/\/\/\/\ FAIL/SAFE POINT!!!!!

        // Now \below: we will add some quirts for humorus messages/       
        //~~funnyStuff \/BEGIN\/
        //switch statment(meetU.length <= 2, meetU.length >= 4, BREAK)
        //~~funnyStuff /\ END /\
            $("#header-sectionListNames").empty();
        //have loop of meetU.name.length appendTo 
        for (var n = 0; n < meetU.name.length; n++) {
            $("#header-sectionListNames").append('<button>'+meetU.name[n]+'</button>'+'<br>');

        }//this loop keep repeating the whole array like last time, maybe the loop should go sooner!???
        //ASK FOR HELP!!!!
        //ALMOST GOT IT CRACKED!!!!!
        
                                
    })
    




})
