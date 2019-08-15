$(document).ready(function() {
    const sectTwo = $("#nuSect-friendsPN");
    sectTwo.hide();
    $("#showPostClick").hide();
    $("#info-chgConf").hide();
    //$("#finalSubmit").hide();
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

    //create a function for the map to show in the $("#mapLocation")
    //later << reCall(this.fucntion) ^^^^^^^^^^ //
    function renderMap() {
        //def variable for the map placeHolder
        const map = $("#mapFigure");
        // def queryURL;
        // * && def API key;

        // $.ajax({queryURL+API, GET})
        // \cont'd\.then(function(callBacks))  \\START//

        //                                     \\BREAK//

    }


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
        //call function {{above pushClrIN.onClick}}
    //-cmBk.fn    renderMap();
        

        $("#header-sectionListNames").empty();
        //have loop of meetU.name.length appendTo 
        for (var n = 0; n < meetU.name.length; n++) {
            $("#header-sectionListNames").append('<button class="pplChange" data-index='+n+'>'+meetU.name[n]+'</button>'+'<br>');
            
            $("#info-chgConf").show();
            //$("#finalSubmit").show();
        }//this loop keep repeating the whole array like last time, maybe the loop should go sooner!???
        //ASK FOR HELP!!!!
        //ALMOST GOT IT CRACKED!!!!!
        
        
    })
    
    
   
    function render(){
        $("#header-sectionListNames").empty()
        for (var n = 0; n < meetU.name.length; n++) {
            $("#header-sectionListNames").append('<button class="pplChange" data-index='+n+'>'+meetU.name[n]+'</button>'+'<br>');
            $("#info-chgConf").show();
            
        }
    }
    
    $("#finalSubmit").on('click', function () {
        console.log("FINALIZE(grn)Btn works!");
        console.log(meetU);
        console.log(meetU.zipCode);
    })
    
    $(document).on('click',".pplChange", function() {
            
            var selectedBtn = $(this);
            var selectedIndex = selectedBtn.data("index");

            console.log(meetU.name[selectedIndex]);

            // removes button && removes data from array
            meetU.name.splice(selectedIndex,1);
            meetU.zipCode.splice(selectedIndex,1);
            console.log(meetU);
            //call render function!!
            render();
            // check object activity
            console.log(meetU);
            
            //////////////////
            //insert map callBackFucntion
            //AJAX

            
        })
    
})

