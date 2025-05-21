export const getGifs = async(prevState:any,formData:FormData) =>{
    const apiKey = process.env.NEXT_PUBLIC_GIFAPI
    const searchQuery = formData.get("search");
    let content;
    await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=5`)
    .then((response) => response.json())
    .then((data) => {
        content = data.data
    })

    return content
}