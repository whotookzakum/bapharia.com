// Trivia
// Generate map names and skill names from a list?
// Automatically generate "what class's skill is __?" and " __ is an ability for what skill? questions?

function openTrivia() {
    var triviaQuestion = $(".triviaQuestion");
    var triviaCategory = $(".triviaCategory");
    var triviaChoices = $(".triviaChoices");
    var buttonColor = $(".triviaChoices").css("background-color");
    var qIndex = 0;

    // Display container
    $("#pageTrivia").css("display","block");


    // Durstenfeld Shuffle
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    // Shuffle questions
    shuffle(triviaHolder);

    function generateQuestion() {

        // If finished, shuffle deck and restart
        if (qIndex >= triviaHolder.length) {
            shuffle(triviaHolder);
            qIndex = 0;
        }

        // Shuffle choices
        shuffle(triviaHolder[qIndex].choice);

        // Send category & question
        triviaCategory.html(triviaHolder[qIndex].category);
        triviaQuestion.html(triviaHolder[qIndex].question);

        // Sends each choice once & resets button color
        triviaChoices.each(function(index) {
            $(this).css("background-color", buttonColor);
            $(this).html(triviaHolder[qIndex].choice[(index)]);
        });

        // Enable clicking on an option
        triviaChoices.prop("disabled", false);    

    }

    generateQuestion();

    // Check Answer
    triviaChoices.click(function (){
        var myAns = $(this);
        var correctAns = triviaHolder[qIndex].answer[0];

        // Disable clicking after choosing an option
        triviaChoices.prop("disabled", true);

        // Search choices for correct answer and turn it green; 
        triviaChoices.each(function() {
            if ($(this).text() == correctAns) {
                $(this).css("background-color", "green");
            }
        });

        // If my answer is wrong turn it red
        if (myAns.text() != correctAns) {
            myAns.css("background-color", "red");
        }

        // Go to next question
        window.setTimeout(generateQuestion, 2000);
        qIndex++;

    });

} // End Trivia


