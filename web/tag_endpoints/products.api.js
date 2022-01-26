const ProductsAPI = {
	CREATE_PRODUCT: "/products/:prod_id/:_name/:price/:discount/:prod_categ_id/:flavor_id/:size_id/:image",
	FIND_ALL_PRODUCTS: "/products",
	FIND_ONE_PRODUCT: "/products/:prod_id", 
	DELETE_ONE_PRODUCT: "/products/:prod_id",
	UPDATE_ONE_PRODUCT: "/products/:prod_id/:_name/:price/:discount/:prod_categ_id/:flavor_id/:size_id/:image"
};
    
Object.freeze(ProductsAPI);
    
module.exports = ProductsAPI;