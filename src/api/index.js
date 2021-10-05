export default async function apiCall (
    url,
    method = "get",
    body,
    headers)
    {
       try {
           const response = await fetch(url, {
            method,
            body,
            headers
        });

        return await response.json();
    }
    catch (err) {
        Promise.reject(err);
    }
    }