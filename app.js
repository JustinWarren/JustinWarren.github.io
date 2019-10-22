console.log($);

//Window onload
$(() => {


      //Modal code - From Brendan's lesson

      //This selects the Instructions Button
      const $openBtn = $('#openModal');

      //This grabs the modal element
      const $modal = $('#modal');

      //This grabs close button
      const $closeBtn = $('#close');

      //This is a function that sets the modal to display block on the screen.  It is
      //currently set to display none.
      const openModal = () => {
        $modal.css('display', 'block');
      }

      //This is a function that sets the modal to display none again.
      const closeModal = () => {
        $modal.css('display', 'none');
      }

      //This sets and event listener on the Instructions button to open the modal
      $openBtn.on('click', openModal)

      //This sets and event listener on the close button
      $closeBtn.on('click', closeModal)


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
          url: "https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=5dd8a14370cd45b1946ba62524b4683f&units=f&query=" + userInput
        }).then(
          (data)=>{  //If successful
            //This selects the h2 with class city and returns the location name from
            //the data set
            console.log(data);
            $('.city').html(data.location.name);

            //This selects the h2 with class temperature and returns the location name from
            //the data set with the degree symbol and F for fahrenheit added on
            $('.temperature').html(data.current.temperature + "&#176;" + " F")
            //This selects
            $('.weather-description').html(data.current.weather_descriptions)
            console.log(data.location.name);  //Success callback will show if it works!
          },
          ()=>{  //If error and unsucceful in data request.
            console.log('bad request');  //Error callback will trigger if doesn't work
          }
        );

    });


});


// "http://api.weatherstack.com/current?access_key=5dd8a14370cd45b1946ba62524b4683f&query=Chicago"
