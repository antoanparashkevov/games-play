//for user authorization sessions

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'))//from json to object
}

export function getAccessToken() {
    const user = getUserData();
    if (user !== null) {
        return user.accessToken
    } else {
        return null;
    }
}

export function clearUserData() {
    localStorage.removeItem('user')
}

export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data))
}

//decorator func who add a behaviour to handler func
export function createSubmitHandler(ctx, handler) {//to remove the boiler plate from processing the forms
    return function (event) {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target))

        handler(ctx, formData, event)
    }
}

export function parseQueryString(query = '') {
    return Object.fromEntries(
        query
            .split('&')
            .map(kvp => kvp.split('=')))//[['key','value],['key','value']]
}
