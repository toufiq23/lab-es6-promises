// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

// Iteration 1 using callbacks
const steakCooked = new Promise((resolve, reject) => {
	addFood(steak[1], '#steak', () => {
		// ... your code here
		addFood(steak[5], '#steak', () => {
			addFood(steak[7], '#steak', () => {
				addFood(steak[3], '#steak', () => {
					addFood(steak[6], '#steak', () => {
						addFood(steak[4], '#steak', () => {
							addFood(steak[0], '#steak', () => {
								addFood(steak[2], '#steak', () => {
									document.getElementById('table').innerHTML += `<img src="public/images/steak.jpg">`;
									resolve();
									console.log('steakCooked');
								});
							});
						});
					});
				});
			});
		});
	});
});


// Iteration 2 using `.then()`
const potatoesCooked = new Promise((resolve, reject) => {
	addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
		// ... your code here
		addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
		});
			addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
			});
			addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
			});
				addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
					document.getElementById('table').innerHTML += `<img src="public/images/mashPotatoes.jpg">`;
					resolve();
					console.log('potatoesCooked');
				});
	});
});


// Iteration 3 using async and await

const brusselCooked = new Promise((resolve, reject) => {
	brusselSprouts.forEach((step) => {
		async function makeFood(step) {
			// ... your code here
				await addFood(step, '#brusselSprouts');	
	}
		makeFood(step);
		resolve();
		console.log('brusselCooked');
	});
});
document.getElementById("table").innerHTML += `<img src="public/images/brusselSprouts.jpg">`;

Promise.all([potatoesCooked, steakCooked, brusselCooked]).then((resolve) => {
	alert('Dinner is served');
});

		// Promise.all([PromiseSteak(), PromisePotaotes(), makeFood()]).then(() => {
		// 	alert('Dinner is served');
		// });