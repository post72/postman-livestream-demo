module.exports = {
  /**
  * Returns a list of all the Exploratory videos


  */
  allVideos: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = [{
        "name": "<string>",
        "url": "<string>",
        "views": "<number>",
      }],
      status = '200';

    return {
      status: status,
      data: data
    };  
  },

  /**
  * Get a single video
  * @param options.videoId  

  */
  oneVideo: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "name": "<string>",
        "url": "<string>",
        "views": "<number>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
