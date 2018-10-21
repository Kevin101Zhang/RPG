$(document).ready(function () {

    //note: only 2 characters can win;

    var characters = {

        'Bowman': {
            name: 'Lachrymus',
            health: 8000,
            attack: 1000,
            imageUrl: "assets/images/Bowman.png",
        },

        'Warrior': {
            name: 'Fangblade',
            health: 12000,
            attack: 800,
            imageUrl: "assets/images/Warrior.png",
        },

        'Magician': {
            name: 'Curryishot',
            health: 7600,
            attack: 1400,
            imageUrl: "assets/images/Magician.png",
        },
        'Thief': {
            name: 'Korwyn',
            health: 7000,
            attack: 1600,
            imageUrl: "assets/images/Thief.png",
        }
    }

    var $Bowman = $(".Bowman");
    var $Warrior = $(".Warrior");
    var $Magician = $(".Magician");
    var $Thief = $(".Thief");
    var $PlayAsBowman = $('input[type="button"][value="Click to Play as Bowman"]');
    var $PlayAsWarrior = $('input[type="button"][value="Click to Play as Warrior"]');
    var $PlayAsMagician = $('input[type="button"][value="Click to Play as Magician"]');
    var $PlayAsThief = $('input[type="button"][value="Click to Play as Thief"]');
    var CharArray = [$(".Bimage"), $(".Wimage"), $(".Mimage"), $(".Timage")];
    var ActiveCharArray = ["B", "W", "M", "T"];
    var defeated = 0;
    var count = 0;
    var opponentA;
    var opponentH;
    var activeA;
    var activeH;

    $(".TcharDiv").append("<br>" + "Name: " + characters.Thief.name + "<br>").append('<div class="AHealth"> Health: ' + characters.Thief.health + "</div>").append('<div class="Attack"> Attack: ' + characters.Thief.attack);
    $(".BcharDiv").append("<br>" + "Name: " + characters.Bowman.name + "<br>").append('<div class="AHealth"> Health: ' + characters.Bowman.health + "</div>").append('<div class="Attack"> Attack: ' + characters.Bowman.attack);;
    $(".WcharDiv").append("<br>" + "Name: " + characters.Warrior.name + "<br>").append('<div class="AHealth"> Health: ' + characters.Warrior.health + "</div>").append('<div class="Attack"> Attack: ' + characters.Warrior.attack);;
    $(".McharDiv").append("<br>" + "Name: " + characters.Magician.name + "<br>").append('<div class="AHealth"> Health: ' + characters.Magician.health + "</div>").append('<div class="Attack"> Attack: ' + characters.Magician.attack);;

    //Play as Bowman
    $PlayAsBowman.on("click", function () {
        $Warrior.fadeToggle(1000);
        $Magician.fadeToggle(1000);
        $Thief.fadeToggle(1000);

        var characterAttribute = $(this).data("character");
        console.log(characters[characterAttribute]);

        if ($(this).attr('value') === "Click to Play as Bowman") {
            $(this).attr('value', 'Back');
            $(".Bimage").addClass("active");
            $(".BcharDiv").addClass("active");
            $(".PlayNow").css("visibility", "visible");

            for (var i = 0; i < 4; i++) {
                if (!$("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    $("." + ActiveCharArray[i] + "charDiv").css("visibility", "hidden");
                }
            }
        }
        else {
            $(this).attr('value', "Click to Play as Bowman");
            $(".PlayNow").css("visibility", "hidden");
            $(".Bimage").removeClass("active")
            for (var i = 0; i < 4; i++) {
                if (!$("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    $("." + ActiveCharArray[i] + "charDiv").css("visibility", "visible");
                }
            }
            $(".BcharDiv").removeClass("active");
        }
    });

    //Play as Warrior
    $PlayAsWarrior.on("click", function () {
        $Bowman.fadeToggle(1000);
        $Magician.fadeToggle(1000);
        $Thief.fadeToggle(1000);

        var characterAttribute = $(this).data("character");
        console.log(characters[characterAttribute]);

        if ($(this).attr('value') === "Click to Play as Warrior") {
            $(this).attr('value', 'Back');
            $(".Wimage").addClass("active");
            $(".WcharDiv").addClass("active");
            $(".PlayNow").css("visibility", "visible");

            for (var i = 0; i < 4; i++) {
                if (!$("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    $("." + ActiveCharArray[i] + "charDiv").css("visibility", "hidden");
                }
            }
        }
        else {
            $(this).attr('value', "Click to Play as Warrior");
            $(".PlayNow").css("visibility", "hidden");
            $(".Wimage").removeClass("active");

            for (var i = 0; i < 4; i++) {
                if (!$("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    $("." + ActiveCharArray[i] + "charDiv").css("visibility", "visible");
                }
            }
            $(".WcharDiv").removeClass("active");
        }
    });

    //Play as Magician
    $PlayAsMagician.on("click", function () {
        $Warrior.fadeToggle(1000);
        $Bowman.fadeToggle(1000);
        $Thief.fadeToggle(1000);

        var characterAttribute = $(this).data("character");
        console.log(characters[characterAttribute]);

        if ($(this).attr('value') === "Click to Play as Magician") {
            $(this).attr('value', 'Back');
            $(".Mimage").addClass("active");
            $(".McharDiv").addClass("active");
            $(".PlayNow").css("visibility", "visible");

            for (var i = 0; i < 4; i++) {
                if (!$("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    $("." + ActiveCharArray[i] + "charDiv").css("visibility", "hidden");
                }
            }
        }
        else {
            $(this).attr('value', "Click to Play as Magician");
            $(".PlayNow").css("visibility", "hidden");
            $(".Mimage").removeClass("active");

            for (var i = 0; i < 4; i++) {
                if (!$("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    $("." + ActiveCharArray[i] + "charDiv").css("visibility", "visible");
                }
            }
            $(".McharDiv").removeClass("active");
        }
    });

    //Play as Thief
    $PlayAsThief.on("click", function () {
        $Warrior.fadeToggle(1000);
        $Magician.fadeToggle(1000);
        $Bowman.fadeToggle(1000);

        var characterAttribute = $(this).data("character");
        console.log(characters[characterAttribute]);

        if ($(this).attr('value') === "Click to Play as Thief") {
            $(this).attr('value', 'Back');
            $(".Timage").addClass("active");
            $(".TcharDiv").addClass("active");
            $(".PlayNow").css("visibility", "visible");

            for (var i = 0; i < 4; i++) {
                if (!$("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    $("." + ActiveCharArray[i] + "charDiv").css("visibility", "hidden");
                }
            }
        }
        else {
            $(this).attr('value', "Click to Play as Thief");
            $(".PlayNow").css("visibility", "hidden");
            $(".Timage").removeClass("active");

            for (var i = 0; i < 4; i++) {
                if (!$("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    $("." + ActiveCharArray[i] + "charDiv").css("visibility", "visible");
                }
            }
            $(".TcharDiv").removeClass("active");
        }
    });

    //Start Game Function Locks in Your Character
    $(".PlayNow").on("click", function () {

        for (var i = 0; i < 4; i++) {
            if (!CharArray[i].hasClass("active")) {
                $('#empty' + i).prepend(CharArray[i]);
            }
        }
        $(".PlayNow").css("visibility", "hidden");
        $(".clickMe").css("visibility", "hidden");
        $(".clickMe").removeClass("clickMe");
        $(".clickMe").addClass("attack");
        $(".AHealth").addClass("YourHealth")
        $("#Defenders").css("visibility", "visible");
        $("#chooseChar").text("Battle");
        for (var i = 0; i < 4; i++) {
            var battleArray = [$(".battleBowman"), $(".battleWarrior"), $(".battleMagician"), $(".battleThief")];
            battleArray[i].css("visibility", "visible");
        }
    });

    //Click to Battle Bowman
    $(".battleBowman").on("click", function () {
        if ($(".Bimage").hasClass("active")) {
            alert("You can not battle yourself!");
        } else {
            alert("Battle!");
            $(".opponent").css("visibility", "visible");
            $(".opponent").append("<div> Name: " + characters.Bowman.name + "</div>").append("<div class='Benemy'> Health: " + characters.Bowman.health + "</div>").append("<div>Attack: " + characters.Bowman.attack + "</div>");
            $('.opponent').prepend('<img class="Bimage" src="assets/images/Bowman.png" height="187" width="140"/>')
            $(".battleBowman").css("visibility", "hidden");
            $(".attack").css("visibility", "visible");
            $(".inBattle").css("visibility", "visible");
        }
    });

    //Click to Battle Warrior
    $(".battleWarrior").on("click", function () {
        if ($(".Wimage").hasClass("active")) {
            alert("You can not battle yourself!");
        } else {
            alert("Battle!");
            $(".opponent").css("visibility", "visible");
            $(".opponent").append("<div> Name: " + characters.Warrior.name + "</div>").append("<div class='Wenemy'> Health: " + characters.Warrior.health + "</div>").append("<div>Attack: " + characters.Warrior.attack + "</div>");
            $('.opponent').prepend('<img class="Wimage" src="assets/images/Warrior.png" height="187" width="120"/>')
            $(".battleWarrior").css("visibility", "hidden");
            $(".attack").css("visibility", "visible");
            $(".inBattle").css("visibility", "visible");
        }
    });

    //Click to Battle Magician
    $(".battleMagician").on("click", function () {
        if ($(".Mimage").hasClass("active")) {
            alert("You can not battle yourself!");
        } else {
            alert("Battle!");
            $(".opponent").css("visibility", "visible");
            $(".opponent").append("<div> Name: " + characters.Magician.name + "</div>").append("<div class='Menemy'> Health: " + characters.Magician.health + "</div>").append("<div>Attack: " + characters.Magician.attack + "</div>");
            $('.opponent').prepend('<img class="Mimage" src="assets/images/Magician.png" height="197" width="180"/>')
            $(".battleMagician").css("visibility", "hidden");
            $(".attack").css("visibility", "visible");
            $(".inBattle").css("visibility", "visible");
        }
    });

    //Click to Battle Thief
    $(".battleThief").on("click", function () {
        if ($(".Timage").hasClass("active")) {
            alert("You can not battle yourself!");
        } else {
            alert("Battle!");
            $(".opponent").css("visibility", "visible");
            $(".opponent").append("<div> Name: " + characters.Thief.name + "</div>").append("<div class='Tenemy'> Health: " + characters.Thief.health + "</div>").append("<div>Attack: " + characters.Thief.attack + "</div>");
            $('.opponent').prepend('<img class="Timage" src="assets/images/Thief.png" height="177" width="140"/>')
            $(".battleThief").css("visibility", "hidden");
            $(".attack").css("visibility", "visible");
            $(".inBattle").css("visibility", "visible");
        }
    });

    //Attack Button
    $(".attack").on("click", function () {
        var AnO = ["Bowman", "Warrior", "Magician", "Thief"];
        var selected;
        if (count === 0) {
            for (var i = 0; i < 4; i++) {
                if ($("." + ActiveCharArray[i] + "charDiv").hasClass("active")) {
                    activeH = characters[AnO[i]].health;
                    activeA = characters[AnO[i]].attack;
                }
                if ($("div").hasClass(ActiveCharArray[i] + "enemy")) {
                    opponentH = characters[AnO[i]].health;
                    opponentA = characters[AnO[i]].attack;
                    selected = i;
                }
            }
        }
        if (count === 1) {
            for (var i = 0; i < 4; i++) {
                if ($("div").hasClass(ActiveCharArray[i] + "enemy")) {
                    opponentH = characters[AnO[i]].health;
                    opponentA = characters[AnO[i]].attack;
                    selected = i;
                }
            }
        }
        count++;
        if (count > 1) {
            for (var i = 0; i < 4; i++) {
                if ($("div").hasClass(ActiveCharArray[i] + "enemy")) {
                    selected = i;
                    opponentH -= activeA;
                    activeH -= opponentA;
                    $(".YourHealth").html("Health: " + activeH);
                    $("." + ActiveCharArray[selected] + "enemy").html("Health: " + opponentH);
                }
            }
            activeA += 1000;
            $(".Attack").html("Attack: " + activeA);
        }
        if (opponentH <= 0) {
            alert("Defeated Please Select another enemy")
            $(".opponent").empty();
            $(".inBattle").css("visibility", "hidden");
            count = 1;
            defeated++;
        }
        if (activeH <= 0) {
            $(".attack").css("visibility", "hidden");
            alert("Your Health depleted to 0, You lose. Restart Game to Play Again")
            alert("You must Defeat all enemies and have health leftover to win");
        }
        if ((defeated === 3) && (activeH > 0)) {
            alert("You Defeated All Defenders!");
            alert("YOU WIN");
            $(".attack").css("visibility", "hidden");
            $("#winningPage").css("visibility", "visible");
            $("#chooseChar").text("WINNER");
        }
    });

    //Reset Button
    $(document).ready(function () {
        $(".Reset").click(function () {
            location.reload(true);
        });
    });

});// Keep this

