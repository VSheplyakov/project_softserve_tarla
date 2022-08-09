class ProductList {
  constructor() {
    this.container = document.querySelector('.shop__block');
    this.productsService = new ProductsService();
    this.renderProducts();
  }
  async renderProducts() {
    let productListDomString = "";
    const products = await this.productsService.getProducts();
    products.forEach(product => {
      productListDomString += this.createProductDomString(product)
    });
  }
  createProductDomString() {
    return `<div class="shop_item">
            <img src="images/${product.image}" alt="Croissant_1" class="shop_img">
            <h3 class="item_name">All-Butter <br> Croissant</h3>
            <span class="kit">Kit of 6 £12</span>
            <a href="#" class="shop_btn btn">Add to cart</a>
    </div>`
  }
}