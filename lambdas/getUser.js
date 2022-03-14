const Responses = require('./API_Responses');


exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        //failed without an ID
        return Responses._400({message: 'missing the ID from the pathParameters'});
    };

    let ID = event.pathParameters.ID;

    if (data[ID]){
        //return the data
        return Responses._200({message: data[ID]});
    }

    //failed as ID not in the data
    return Responses._400({message: 'no ID in data'});
};

const data = {
    1: {name: 'A', age:25, job:'journalist'},
    2: {name: 'B', age:26, job:'teacher'},
    3: {name: 'C', age:27, job:'plasterer'},
};
