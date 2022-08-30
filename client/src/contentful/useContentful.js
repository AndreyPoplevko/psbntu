import { createClient } from 'contentful';

const useContentful = () => {
    const client = createClient({
        space: "73krgvujqgfj",
        accessToken: "z0apGS9idS1_QuS1M9E2WcdIglYsNuN-NnQFg0fPaWQ"
    })

    const getArticles = async() => {
        try {
            const entries = await client.getEntries({
                content_type: "article",
                select: "fields"
            });

            const sanitizedEntries = entries.items.map((item) => {
                const background = item.fields.background.fields;
                return {
                    ...item.fields,
                    background
                }
            })
            return sanitizedEntries
        } catch(error) {
            console.log(error)
        }
    }
    return { getArticles }
}

export default useContentful