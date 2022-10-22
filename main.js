/* Battery */

initBattery();

function initBattery() {
    let percentage = document.querySelector('.percentage');
    let percent = document.querySelector('.percent');   
    let status = document.querySelector('.status');   

    navigator.getBattery().then(function (battery) {

        updateBattery = () => {
            let level = Math.floor(battery.level * 100);
            percent.innerHTML = level + '%';
            percentage.style.width = level + '%';

            if (level == 100) {
                status.innerHTML = 'Full Battery'
            }
            else if (level <= 20 &! battery.charging) {
                status.innerHTML = 'Low Battery'
            }
            else if (battery.charging) {
                status.innerHTML = 'Charging...'
            }
            else {
                status.innerHTML - ''
            }


            if (level <= 20) {
                percentage.classList.add('gradient-color-red');
                percentage.classList.remove('gradient-color-green', 'gradient-color-orange', 'gradient-color-yellow')
            } 
            else if (level <= 40) {
                percentage.classList.add('gradient-color-orange');
                percentage.classList.remove('gradient-color-green', 'gradient-color-red', 'gradient-color-yellow')                
            }
            else if (level <= 80) {
                percentage.classList.add('gradient-color-yellow');
                percentage.classList.remove('gradient-color-green', 'gradient-color-orange', 'gradient-color-red')
            } else {
                percentage.classList.add('gradient-color-green');
                percentage.classList.remove('gradient-color-red', 'gradient-color-orange', 'gradient-color-yellow')
            }


        };
        updateBattery();

        battery.addEventListener('chargingchange', () => {updateBattery()});
        battery.addEventListener('levelchange', () => {updateBattery()});

    })

}

