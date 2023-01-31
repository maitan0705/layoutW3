

// These are the options that I'm going to be using on each statistic
var options = {
	useEasing: true,
	useGrouping: true,
	separator: ",",
	decimal: "."
};

// Find all Statistics on page, put them inside a variable
var statistics = $(".statistic");

// For each Statistic we find, animate it
statistics.each(function(index) {
	// Find the value we want to animate (what lives inside the p tags)
	var value = $(statistics[index]).html();
	// Start animating
	var statisticAnimation = new CountUp(statistics[index], 0, value, 0, 5, options);
	statisticAnimation.start();
}); 

    // <!-- light and dark  -->
   
        var icon = document.getElementById('icon');
        icon.onclick = function () {
            document.body.classList.toggle("dark");
        }
   
    type="text/javascript">
        $(".light__dark").click(function () {
            $(this).toggleClass("active");
            $(".light__dark i").toggleClass("fa fa-moon");

        });
   
    type="text/javascript">
        $(".nav-btn").click(function () {
            $(this).toggleClass("active");
            $(".banner__menu").toggleClass("active");

        });
   
// video 
        $(document).ready(function () {
            $(".popup-with-zoom-anim").magnificPopup({
              type: "inline",
          
              fixedContentPos: false,
              fixedBgPos: true,
              overflowY: "auto",
          
              closeBtnInside: true,
              preloader: false,
          
              midClick: true,
              removalDelay: 300,
            
            });
          });
       