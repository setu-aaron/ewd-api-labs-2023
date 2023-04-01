export default (dependencies) => {
    const { accountSchema } = dependencies;
    const { accountsRepository } = dependencies;

    const validateAccount = async(request, response, next) => {
        //Input
        try{
            const validated = await accountSchema['account'].validateAsync(request.body);
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