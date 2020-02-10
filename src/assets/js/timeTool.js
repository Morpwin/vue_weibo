export default function getTime () {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	if(hour < 10){
		hour = "0" + hour
	}
	if(min < 10){
		min = "0" + min
	}
	if(sec < 10) {
		sec = "0" + sec
	}
	let time = `${year}-${month}-${day} ${hour}:${min}:${sec}`
	return time
}