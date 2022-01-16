let countdown;
let serviceInSession;
const monthsUnit = document.querySelector('#months');
const daysUnit = document.querySelector('#days');
const hoursUnit = document.querySelector('#hours');
const minutesUnit = document.querySelector('#minutes');
const secondsUnit = document.querySelector('#seconds');

const startDate = new Date(2022, 6, 2, 17, 00, 00).getTime();
startDate > Date.now() ? timer(startDate) : calculateFutureDate(startDate);
function timer(date){
	countdown = setInterval(()=>{
		const now = Date.now();
		const differenceInTime = date - now;
		if(differenceInTime < 0){
			clearInterval(countdown);
			return;
		}
		timeLeft(differenceInTime);
	}, 10);
}

function timeLeft(time){
    const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30));
		const days = Math.floor((time % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
		const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const displayMonths = `${months < 10 ? '0' : '' }${months}`;
		const displayDays = `${days < 10 ? '0' : '' }${days}`;
		const displayHours = `${hours < 10 ? '0' : ''}${hours}`;
		const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;
		const displaySeconds = `${seconds < 10 ? '0' : ''}${seconds}`;
    monthsUnit.textContent = displayMonths;
    daysUnit.textContent = displayDays;
		hoursUnit.textContent = displayHours;
		minutesUnit.textContent = displayMinutes;
		secondsUnit.textContent = displaySeconds;
}
