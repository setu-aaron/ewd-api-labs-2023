export default (dependencies) => {
    const { accountSchema } = dependencies;

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

    return {
        validateAccount
    };
}