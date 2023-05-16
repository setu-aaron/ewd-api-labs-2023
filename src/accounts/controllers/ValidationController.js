export default (dependencies) => {
    const { accountSchema } = dependencies;
    const { accountsRepository } = dependencies;

    const validateAccount = async(request, response, next) => {
        //Input
        try{
            console.log("ValidationController.validateAccount called");
            console.log("request.body: ", request.body);
            const validated = await accountSchema['account'].validateAsync(request.body);
            console.log("Validated: ", validated);
            request.body = validated;
            next();
        } catch(error){
            next (new Error (`Invalid Data ${error.message}`));
        }
    };

    const validateUniqueMovieId = async(request, response, next) => {
        const userId = request.params.id;
        console.log("UserID: ", userId);
        try {
            const account = await accountsRepository.get(request.params.id);
            if (account == null){
                throw Error("Unable to retrieve user");
            } else {
                const { movieId } = request.body;
                if (account.favorites.includes(movieId)){
                    throw Error("Duplicate movie id reqeusted to favorites for user. ", account.firstName);
                }
            }
            console.log("ValidationController - accountFavorites", account.favorites);
            next();
        } catch (error){
            next (new Error (error.message));
        }
        
    }

    return {
        validateAccount,
        validateUniqueMovieId
    };
}