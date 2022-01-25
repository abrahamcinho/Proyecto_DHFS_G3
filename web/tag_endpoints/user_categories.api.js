const UserCategAPI = {
	CREATE_USER_CATEGORIES: "/userscateg/:users_categ_id/:name",
	FIND_ALL_USERS_CATEGORIES: "/userscateg",
	FIND_ONE_USER_CATEGORIES: "/userscateg/:users_categ_id", 
	DELETE_ONE_USER_CATEGORIES: "/userscateg/:users_categ_id",
	UPDATE_ONE_USER_CATEGORIES: "/userscateg/:users_categ_id/:name"
};
    
Object.freeze(UserCategAPI);
    
module.exports = UserCategAPI;