var h = window.innerHeight;
		var container = document.getElementById("container");
		container.style.width = `${h}px`;
		container.style.height = `${h -5 }px`;
		console.log(h);
		for( i =0; i<11;i++ ){
			container.innerHTML += `<div class="box" id="box${i}" onmouseover="test(${i})">${i}</div>`;
		}
		for( i =0; i<10;i++ ){
			container.innerHTML += `<div class="box" id="box${i+11}" style="grid-column: 11/12;"
			onmouseover="test(${i+11})">${i+11}</div>`;
		}
		for( i =10; i>0;i-- ){
			container.innerHTML += `<div class="box" id="box${i+20}" style="grid-row: 11/12;"
			onmouseover="test(${i+20})">${i+20}</div>`;
		}
		for( i =9; i>0;i-- ){
			container.innerHTML += `<div class="box" id="box${i+30}" style="grid-column: 1/2; grid-row:${11-i}/${12-i}"
			 onmouseover="test(${i+30})">${i+30}</div>`;
		}

		function test(i){
			var test2 = document.getElementById("card");
			test2.innerHTML = "box"+i;
                }
                const dice1 = document.getElementById("die1");
                const dice2 = document.getElementById("die2");
                function roll(){
                        let die1 = Math.floor(Math.random() * 6) +1;
                        let die2 = Math.floor(Math.random() * 6) +1;
                        dice1.setAttribute("src", `assets/dice${die1}.png`);
                        dice2.setAttribute("src", `assets/dice${die2}.png`);
                }
		///--------------------------------------------
		// var test2 = document.getElementById("card");
		// document.getElementById("box1").onmouseover = function () {
		//    test2.innerHTML = "box1";
		//     console.log("box1");
		// }
		// document.getElementById('box1').onmouseout = function () {
		//     test2.innerHTML = "";
		//     console.log("over");
		// }
		// document.getElementById("box2").onmouseover = function () {
		//    test2.innerHTML = "box2";
		//     console.log("box2");
		// }
		// document.getElementById('box2').onmouseout = function () {
		//     test2.innerHTML = "";
		//     console.log("over2");
		// }
		//------------------------------------------------