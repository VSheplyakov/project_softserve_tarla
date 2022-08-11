class ProductList {
  constructor() {
      this.container = document.querySelector('.products-container');
      this.ProductsService = new ProductsService();
      this.renderProducts();
  }
  async renderProducts() {
      let productListDomString = '';
      const products = await this.ProductsService.getProducts();
      products.forEach(product => {
          productListDomString += this.createProductDomString(product);
      });
      this.container.innerHTML = productListDomString;
      //this.addEventListeners();
  }
  createProductDomString() {
    return `<div class="shop_item">
            <img src="images/shop/${product.image}" alt="${product.title}" class="shop_img">
            <h3 class="item_name">${product.title} <br> Croissant</h3>
            <span class="kit">Kit of 6 ${product.price}</span>
            
    </div>`;
  }
}
new ProductList();
