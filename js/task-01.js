const categoriesList = document.getElementById('categories');
// console.log(categories);
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories:  ${categoriesItems.length}`);
categoriesItems.forEach((categoryItem) => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const itemsInCategory = categoryItem.querySelectorAll('li');
    console.log(`Category: ${categoryTitle}, Elements: ${itemsInCategory.length}`);
});