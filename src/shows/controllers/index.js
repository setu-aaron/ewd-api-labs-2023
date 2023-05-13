import showServices from '../services';

export default (dependencies) => {
    const getShow = async(request, response, next) => {
        console.log("Calling shows/controllers getShow");
        //Input 
        const showId = request.params.id;

        //Treatment
        const show = await showServices.getShow(showId);

        //Output
        response.status(200).json(show);
    };

    const find = async( request, response, next) => {
        console.log("Calling shows/controllers find");


        //Input 
        let pageNumber = request.params.pageNumber;
        if (pageNumber == null){
            pageNumber = "1";
        }

        //Treatment
        const shows = await showServices.find(pageNumber, dependencies);

        //Output
        response.status(200).json(shows);

    };

    return {
        getShow,
        find
    };
};