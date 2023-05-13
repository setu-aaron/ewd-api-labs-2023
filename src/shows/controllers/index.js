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

    const getShowImages = async(request, response, next) => {
        console.log("Calling shows/controllers getShowImages");
        //Input 
        const showId = request.params.id;

        //Treatment
        const show = await showServices.getShowImages(showId);

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

    const getEpisodeDetails = async(request, response, next) => {
        console.log("Calling shows/controllers getShowImages");
        //Input 
        const showId = request.params.id;
        const seasonId = request.params.seasonId;
        const episodeId = request.params.episodeId;

        //Treatment
        const show = await showServices.getEpisodeDetails(showId,seasonId,episodeId);

        //Output
        response.status(200).json(show);
    };

    const getSeasonDetails = async(request, response, next) => {
        console.log("Calling shows/controllers getShowImages");
        //Input 
        const showId = request.params.id;
        const seasonId = request.params.seasonId;

        //Treatment
        const show = await showServices.getSeasonDetails(showId, seasonId);

        //Output
        response.status(200).json(show);
    };

    const getCredits = async(request, response, next) => {
        console.log("Calling shows/controllers getShowImages");
        //Input 
        const showId = request.params.id;

        //Treatment
        const show = await showServices.getCredits(showId);

        //Output
        response.status(200).json(show);
    };

    return {
        getShow,
        getShowImages,
        getEpisodeDetails,
        getSeasonDetails,
        getCredits,
        find
    };
};