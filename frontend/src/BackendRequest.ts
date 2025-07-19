// this class provides an object containing both streaming service and link so backend can process request

export class BackendRequest {
    service: string;
    link: string;

    constructor(service: string, link: string) {
        this.service = service;
        this.link = link;
    }
}

