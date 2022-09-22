export default class DjangoRequestsHelper {

    constructor(requestUrl) {
        this.requestUrl = requestUrl;
    }

    get(route, token) {
        return fetch(
            `${this.requestUrl}/${route}`,
            {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Token ${token}`
                }
            }
        );
    }

    post(route, data, token) {

        return fetch(
            `${this.requestUrl}/${route}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Token ${token}`
                },
                method: "POST",
                body: JSON.stringify(data)
            }
        )
    }
}