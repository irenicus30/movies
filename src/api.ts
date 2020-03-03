import fetch from 'node-fetch';


export function api(url: string): Promise<any> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        }).catch(err => {
            console.error(err);
        }); 
}
