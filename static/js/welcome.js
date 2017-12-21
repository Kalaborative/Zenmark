$(document).ready(function(){
	console.log('ready');
     $('#sidebarCollapse').on('click', function () {
     	$('#sidebar').toggleClass('active');
	 });

        function formatDate (date) {
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            return monthNames[monthIndex] + " " + day + " " + year;
        }


     setTimeout(function(){
        let todays_date = new Date();
        todays_date.setDate(todays_date.getDate() - 1);
        var yesterday = formatDate(todays_date);
        var payload = {'yesterday': yesterday};
        $.ajax({
            url: '/checkyesterday',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(payload)
        }).done(function(response){
            console.log("AJAX Request success");
            newNumber = response['notifs'].length - 1;
            $('#badgeNumberForm').html(newNumber);
            $buttoncheck = $('#buttonChecker').attr('guest');
            if ($buttoncheck == "no") {
                $('#badgeWordForm').html(newNumber + " NEW");
            }
        }).fail(function(){
            console.log('AJAX Request failed');
        });
     }, 5000);
});