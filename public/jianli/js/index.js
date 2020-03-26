// window.onload = function () {
// 	moveBg()
// }
// 
// 
// function moveBg() {
// 	let header = document.querySelector(".header");
// 	let box = document.querySelector(".box")
// 	let distance = 0,percent = 0;
// 	let isMove = false
// 	header.onmousedown = function (event) {
// 		let e = event || window.event
// 		let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
// 		let y = e.clientY;
// 			header.onmousemove = function (event) {
// 				let e = event || window.event;
// 				distance = y - e.clientY;
// 				if(!isMove) {
// 					box.style.transition = "none"
// 					box.style.transform = "translateY(" + (- distance)  + "px)"
// 				}
// 				percent = (distance / header.offsetHeight).toFixed(2)
// 				header.style.filter = "blur(" + percent * 10 + "px)"	
// 				if(distance < 0) {
// 					box.style.transform = "translateY(0)"
// 				}
// 			}
// 	}
// 	document.onmouseup = function () {
// 		if(distance > header.offsetHeight * 0.5) {
// 			box.style.transition = "all .6s linear"
// 			box.style.transform = "translateY(" + (- header.offsetHeight)  + "px)"
// 			document.body.style.overflow = "visible"
// 			box.style.position = "absolute"
// 		}
// 		else{
// 			box.style.transition = "all .6s linear"
// 			box.style.transform = "translateY(0)"
// 			header.style.filter = "blur(0)"
// 		}
// 		header.onmousemove = null
// 	}
// 	let mobiley,dist
// 	header.addEventListener("touchstart", function (event) {
// 		let e = event || window.event
// 		mobiley = e.touches[0].clientY
// 		console.log(isMove)
// 	})
// 		header.addEventListener("touchmove", function (event) {
// 			let e = event || window.event
// 			dist = mobiley - e.touches[0].clientY
// 			if(!isMove) {
// 				box.style.transition = "none"
// 				box.style.transform = "translateY(" + (- dist)  + "px)"
// 			}
// 			if(dist < 0) {
// 				box.style.transform = "translateY(0)"
// 			}
// 		})
// 	header.addEventListener("touchend", function (event) {
// 		if(dist > header.offsetHeight * 0.5) {
// 			box.style.transition = "all .6s linear"
// 			box.style.transform = "translateY(" + (- header.offsetHeight)  + "px)"
// 			document.body.style.overflow = "visible"
// 			box.style.position = "absolute"
// 		}
// 		else{
// 			box.style.transition = "all .6s linear"
// 			box.style.transform = "translateY(0)"
// 		}
// 	})
// 	box.addEventListener("transitionstart", function () {
// 		isMove = true
// 	})
// 	box.addEventListener("transitionend", function () {
// 		header.style.filter = "blur(0)"
// 		isMove = false
// 	})
// }