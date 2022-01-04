const date = document.getElementById('date');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

let h, m , s ,day, month, year;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// Get time func
function getDate(){
	const currentDate = new Date()
	year = currentDate.getFullYear();
	day = currentDate. getDate();
	month = currentDate.getMonth();
	h = currentDate.getHours();
	m = currentDate.getMinutes();
	s = currentDate.getSeconds();	

	// Assing above values to init variables and display the result on HTML Page
	hour.innerText = h < 10 ? `0${h}\nHours` : `${h}\nHours`;
	minute.innerText = m < 10 ? `0${m}\nMinutes` : `${m}\nMinutes`;
	second.innerText = s < 10 ?`0${s}\nSeconds` : `${s}\nSeconds`;
	date.innerHTML = `${day} ${months[month]} ${year}`;


}

// Call getDate function every second
setInterval(() => getDate(), 1000);




