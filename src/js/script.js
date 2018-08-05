/**
* Фильтр товаров по параметрам фильтров
*
* @filteredProducts   Array     Отфильтрованный список
* @products           Array     Список продкутов
* @filters            Object    Список фильтров
* @retun              Array     Возвращает отфильтрованный список
*/

let filteredProducts = [];

function productsFilter (products, filters) {
  // Перебор товаров
  products.forEach(function(product) {
    // Значение-флажок для пропуска товаров
    let filtered = true;
    // Перебор паарметров по заданным фильтрам
    Object.keys(filters).map(function(parameterName) {

      let parameterValue              = filters[parameterName];
      let productParameterValue       = product[parameterName];
      // Если значение параметров = пустой строке,
      //   то все товары подходят

      if(parameterValue == "") {filtered = true;}
        else {
          let productParameterArray        = productParameterValue.split(", ");
          let foundedParameterValueIndex   = productParameterArray.indexOf(parameterValue);
          // Если не совпал по типу и значению, то не пропускаем в
          //   отфильтрованные товары
          if ( foundedParameterValueIndex < 0 ) filtered = false
        };

    });

    if (filtered) filteredProducts.push(product);

  });
  return filteredProducts;
}



/**
* Тело фильтрации и вывода
* Получаем ответ от сервера
* В ответе список товаров
* Парсим его
* Передаем товары и фильтры в функцию отбора товаров
*   по выбранным параметрам фильтров
* Передаем отфильтрованные товары в функцию
*   генерации карточек товаров на странице
*
* @products           Array     Список товаров
* @productsParams     Object    Список фильтров
* @filteredProducts   Array     Отфильтрованный список
*/
function getFetch() {
  fetch('productBase.json')
    .then(response => response.json()) // Метод .json() разрешает обещания с JSON
    .then(products => {
      productsFilter(products, productsParams);
      generateHTML(filteredProducts);
    })
    .then(console.info('Вывод товаров завершен'))
    .catch(function(error){
      console.error("Ошибка: ", error);
    });
}



/**
* Генерация продуктов на страницу
*
* @products     Array     Список отфильтрованных продкутов
*/

function generateHTML (products) {
  let productsList = document.getElementById('js-products__list');
  productsList.innerHTML = '';
  products.forEach(product => {
    productsList.innerHTML +=
      `
        <acticle class="products-card">
          <header class="products-card__header">
            <p class="products-card__category">
              ${product.type}
            </p>
          </header>
          <a class="products-card__link" href="#">
            <img class="products-card__img" src="./css/img${"/pr_" + product.imgSrc + ".png"}">
            <h3 class="products-card__name">
              ${product.name}
            </h3>
          </a>
          <footer class="products-card__footer">
            <span class="products-card__price">
              ${"$ " + product.price}
            </span>
          </footer>
        </article>
      `;
  });
}



// Параметры для фильтра
let productsParams = {
"type": "",
"category": "Appleances",
};

getFetch();
