const breakfastMenu = ['Pancakes- $4', 'Eggs Benedict- $5', 'Oatmeal- $4', 'Frittata- $4'];
const mainCourseMenu = ['Steak- 10', 'Pasta- $5', 'Burger- $4', 'Salmon- $6'];
const dessertMenu = ['Cake- $3', 'Ice Cream- $3', 'Pudding- $3', 'Fruit Salad- $4'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Elemento ${index + 1}: ${item}</p>`).join('');
       document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;