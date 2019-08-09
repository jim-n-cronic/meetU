//  BEGIN JAVASCRIPT

$(document).ready(function() {
    // GLOBAL VARIABLES
    const nameArray = [];
    const zipLocArray = [];
    
    //hide the side sction
    $("#section-sideR").hide();

    //hide the VALUE on click (key input lines(userINIT))
    $("#input-name").on('click', function(hideUserName) {
        hideUserName = $("#input-name");
        hideUserName.val(""); 
    })
    $("#input-zipLoc").on('click', function(HideUserLoc) {
        HideUserLoc = $("#input-zipLoc");
        HideUserLoc.val("");
    })
    //submitbuttonINIT(fn)
    $("#userInitBtn").on('click', function() {
        var nameData = $("#input-name").val()
        var zipLocData = $("#input-zipLoc").val();
        nameArray.push(nameData);
        zipLocArray.push(zipLocData)
        //GLOBALarray.push(zipLocData);
        console.log(nameArray);
        console.log(zipLocArray);

        $("#introText").html("NOW LETS ADD YOUR FRIENDS! *press '+n' before SUBMIT to enter data*");
        $(".form-body").hide();
        
        //show side section
        $("#section-sideR").show();
        
    })
    
    //Section SHOWS & this is where we add n-amount(friends)//
    $("#addFriend").on('click', function(hideFriendName) {
        hideFriendName = $("#addFriend");
        hideFriendName.val("");
    })
    $("#friendZipLoc").on('click', function(hideFriendZipLoc) {
        hideFriendZipLoc = $("#friendZipLoc");
        hideFriendZipLoc.val("");
    })
        //add freindData to corresponding arrays!
        $("#moreFriends").on('click', function() {
           
            

            var friendNameData = $("#addFriend").val();
            var friendZipLocData = $("#friendZipLoc").val();
            nameArray.push(friendNameData);
            zipLocArray.push(friendZipLocData);
            //consoleLog array to check how its doing
            console.log(nameArray);
            console.log(zipLocArray);
            //joke text lol
            $("#introText").html("C'mon now! I'm sure you got more friends than that now? lol");

            $("#addFriend").val("");
            $("#friendZipLoc").val("");
            //put nameArry to $("#input-arrayData")
            
            /**
             * MAYBE we can have an interval->TRIGGER either a ...<<endl
             * strtl>>...modal !! quickPopUp{**I think this isnt allowed for this}
             * #JUST a thought */    
        })
        //Summation of entries && SECTION.hide();
        $("#pushDataBtn").on('click', function() {
            $("#section-sideR").hide();
            $("#titleLineDelt").text("Woohoo!!!!!");
            $("#introText").text("Party of " + (nameArray.length) + " meeting up!");

            
            
            //loop for name list
            for(var n = 0; n < nameArray.length; n++) {
                $("#entryDataList").append('<li>' + nameArray[n] + '</li>');
                console.log($("#input-arrayData"));
            }
            /*
            var finalizeBtn = $("<button>").addClass("finalizeBtn");
            $("#headerContainer").append(finalizeBtn);
            finalizeBtn.text("Ready?");
            */

            //submitbutton initialize
            
        })

        
        //crossRef the API data

        //make a function that calculates the optimalLocation, meetUpPoint
    
        //append MAP to mapDiv

    
    

        


    
})