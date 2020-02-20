export function	mousewheelFunc(e) {
			window.console.log(this)
			window.console.log(e)
			e = e || window.event;  
			if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
				if (e.wheelDelta > 0) { //当滑轮向上滚动时  
					this.headerFlag = true  
				}  
				if (e.wheelDelta < 0) { //当滑轮向下滚动时  
					this.headerFlag = false  
				}  
				
			} 
			else if (e.detail) {    //Firefox滑轮事件  
				if (e.detail> 0) { //当滑轮向上滚动时  
					this.headerFlag = true  
				}  
				if (e.detail< 0) { //当滑轮向下滚动时  
					this.headerFlag = false  
				}  
			}  
		}
export function	scrollFunc() {
			let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
			if(scrollTop < 60) {
				this.headerFlag = true
			}
}