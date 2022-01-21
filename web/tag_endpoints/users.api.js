const UserAPI = {
	CREATE_USER: "/users/:user_id/:first_name/:last_name/:email/:password/:avatar/:users_categ_id",
	FIND_ALL_USERS: "/",
	FIND_ONE_USER: "/user/:user_id", 
	DELETE_ONE_USER: "/user/:user_id",
	UPDATE_ONE_USER: "/users/:user_id/:first_name/:last_name/:email/:password/:avatar/:users_categ_id"
};
    
Object.freeze(UserAPI);
    
module.exports = UserAPI;