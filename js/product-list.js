class ProductList {
  constructor() {
    this.container = document.querySelector('.products-container');
    this.productsService = new ProductsService();
    this.renderProducts();
  }
  async renderProducts() {
    let productListDomString = '';
    const products = await this.productsService.getProducts();
    
    products.forEach((product) => {
      productListDomString += this.createProductDomString(product);
    });
    
    this.container.innerHTML = productListDomString;
    // this.addEventListeners();
  }
  createProductDomString(product) {
    return `<div class="shop_item">
            <img src="images/shop/${product.image}" alt="${product.title}" class="shop_img">
            <h3 class="item_name">${product.title} <br> Croissant</h3>
            <span class="kit">Kit of 6 - $ ${product.price}</span>
            <button class="shop_btn btn">Add to cart</button>
    </div>`;
  }
  // addEventListeners() {
  //   document.querySelectorAll('.shop_btn').forEach((btn) => {
  //     btn.addEventListener('click', this.addProductToCart.bind(this));
  //   });
  // }
  // addProductToCart(event) {
  //   const id = event.target.dataset.id;
  //   const cart = new Cart();
  //   cart.addProduct(id);
  // }
}
new ProductList();
