class APIResponse {
    constructor(
        statusCode = 200,
        message = "Api Response successful",
        data = [],
        isAuthenticated = false,
        error = {}
    ){
        statusCode = this.statusCode;
    }

    toJson(){
        
    }

}