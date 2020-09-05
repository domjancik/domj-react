export const config = {
    clientId: 'zMLXx8EEQ8pRP5E7gXlhmKfkAHFYnBYbDRvCFbKXQC4',
    redirectUrl: 'https://91db6debd3cb.ngrok.io/login',
    // redirectUrl: 'https://www.domj.net/login',
}

export const getLink = () => {
    return `https://be.contentful.com/oauth/authorize?response_type=token&client_id=${config.clientId}&redirect_uri=${config.redirectUrl}&scope=content_management_manage`
}