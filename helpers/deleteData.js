const deleteDataFetch = async (url) => {
    try {
        const option = {
            method: 'DELETE',
        }
        await fetch(url, option);
    } catch (error) {
        console.log(error)
    }
}
export default deleteDataFetch;