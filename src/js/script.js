import React from 'react';
import {render} from 'react-dom';
import Weather from './components/weather';

render(<Weather/>, document.getElementById('weatherWidget'));

// -------------------------------------------------
// DATA
// -------------------------------------------------

// Инициализируем массив для базы товаров
// полученных с сервера
let productsData = [];

// Инициализируем объект параметров для
// фильтрации
let productsParams = {
  "type": "",
  "category": ""
};


// -------------------------------------------------
// Common logic
// -------------------------------------------------

/**
 * Фильтрация товаров по полученным аргументам-параметрам фильтра
 *
 * @param   {array}   products      Список продкутов
 * @param   {object}  filters       Список фильтров
 *
 * @returns {array}                 Возвращает отфильтрованный список
 */
function productsFilter (products, filters) {
  let filteredProducts = [];
  products.forEach(function(product) {

    // Флаг отображения товара на странице
    let matched = true;

    Object.keys(filters).forEach(function(parameterName) {

      let filterParameterValue           = filters[parameterName];

      if ( filterParameterValue != '') {
        let productParameterValue        = product[parameterName];
        let productParameterArray        = productParameterValue.split(", ");
        let foundedParameterValueIndex   = productParameterArray.indexOf(filterParameterValue);

        if ( foundedParameterValueIndex < 0 ) matched = false
      }

    });

    if (matched) filteredProducts.push(product);

  });
  // console.log("Отсортированный список: ", filteredProducts);
  return filteredProducts;
}


/**
 * Получение товаров из базы
 *
 */
function fetchProducts() {

  fetch('productBase.json')
    .then(response => response.json()) // Метод .json() разрешает обещания с JSON
    .then(responceProducts => {

      // console.info(responceProducts);
      productsData = responceProducts;
      generateHTML(productsFilter(productsData, productsParams));

    })
    .catch(function(error){
      console.error("Ошибка: ", error);
    });

}


/**
 * Генерация продуктов на страницу
 *
 * @param   {array}   products    Список отфильтрованных продкутов
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


// -------------------------------------------------
// Handlers
// -------------------------------------------------

// Обработчик селекта
let selecterCategory = document.getElementById("js-categoriSelecter");
selecterCategory.addEventListener("change", function () {
  productsParams.category = this.value;
  generateHTML(productsFilter(productsData, productsParams))
});

// Обработчик радио
let productTypeInput = document.querySelectorAll('input[name=productType]');
productTypeInput.forEach(function (input) {
  input.addEventListener('change', function () {
    productsParams.type = this.value;
    generateHTML(productsFilter(productsData, productsParams))
  })
});


// Init

fetchProducts();
