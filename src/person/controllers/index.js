import personServices from '../services';

export default (dependencies) => {
    const getPerson = async(request, response, next) => {
        console.log("Calling person/controllers getPerson");
        //Input 
        const personId = request.params.id;

        //Treatment
        const person = await personServices.getPerson(personId);

        //Output
        response.status(200).json(person);
    };

    const search = async(request, response, next) => {
        console.log("Calling person/controllers show");
        //Input 
        const searchText = request.params.text;

        //Treatment
        const show = await personServices.search(searchText);

        //Output
        response.status(200).json(show);
    };
    return {
        getPerson,
        search,
    };
};