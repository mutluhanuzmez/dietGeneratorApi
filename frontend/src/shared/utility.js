export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const to = (promise) => {//global function that will help use handle promise rejections, this article talks about it http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
    let CONNECTION_ERROR = "Network error :("

    return promise
        .then(data => {
            console.log("data",data)
            return [null, data.data];
        }).catch(err => {
            console.log("error",err.response);
            if(err){
                return [err.response];
            }else{
                return [CONNECTION_ERROR];
            }
        });
}

export const config = (token) => {
    return {
        headers: {
            'Authorization': token
        }
    }
}

export const URL = 'http://localhost:8000/';