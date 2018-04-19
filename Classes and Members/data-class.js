/**
 * Created by Valeri on 7/17/2017.
 */
class Request{
    constructor(method, uri, version, message, response, fulfilled){
        [this.method, this.uri, this.version, this.message] =
            [method, uri, version, message];
        this.response = undefined;
        this.fulfilled = false;
    }

}