const html = new mojs.Html({
	el: '#cube',
	//x: '700%',
	y: {[-10]: 0},
	duration: 1000,
	repeat: 999,
	opacity: {1 : 0.5},
	isYoyo: true
}).play();

$(document).ready(function(){
	$('#myModal').draggable();
	console.log("I am ready!");	
	$('#submitBtn').click(function(){
		var user = $('#username').val();
		var pw = $('#password').val();
		const allOrgs = [["dylan symm", "Comput3ch"]];
		var matchedCredentials = false;
		for (let i = 0; i < allOrgs.length; i++){
			var [correctUser, correctPw] = allOrgs[i];
			if (user === correctUser && pw === correctPw) {
				matchedCredentials = true
				break
			}
		}
		if (!user || !pw){
			$('.errorresponse').html('Please complete both fields.');
		} else if (!matchedCredentials) {
			$('.errorresponse').html("Incorrect login data");	
		} else {
			$('#myLoginData').submit();
		}
	});
});