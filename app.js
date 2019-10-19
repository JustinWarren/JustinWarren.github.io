console.log($);

//Window onload
$(() => {

      //This selects the form element and sets an event listener to run on submit.
    $('form').on('submit', (event)=> {
      //This prevents the page from reloading
      event.preventDefault();
      console.log("hi");
      //This stores the user input in the variable userInput
      const userInput = $('#userInput1').val();
      console.log(userInput);
      // This is the ajax call to get information from the weatherstack API
        $.ajax({
          url: "http://api.weatherstack.com/current?access_key=5dd8a14370cd45b1946ba62524b4683f&query=Chicago"
        }).then(
          (data)=>{  //If successful
            console.log(data.location.name);  //Success callback will show if it works!
          },
          ()=>{  //If error and unsucceful in data request.
            console.log('bad request');  //Error callback will trigger if doesn't work
          }
        );

    });


});


// "http://api.weatherstack.com/current?access_key=5dd8a14370cd45b1946ba62524b4683f&query=Chicago"
