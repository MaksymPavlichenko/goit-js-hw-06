const categoriesList = document.querySelector("#categories");
const childrenOfCategoriesList = categoriesList.children;
const numberOfCategories = childrenOfCategoriesList.length;

console.log("Number of categories:", numberOfCategories);

[...childrenOfCategoriesList].forEach(elem => {
    const categoryName = elem.firstElementChild.textContent;
    const numberOfItemsInCategory = elem.lastElementChild.length;

    console.log("Category:", categoryName);
    console.log("Elements:", numberOfItemsInCategory);
});