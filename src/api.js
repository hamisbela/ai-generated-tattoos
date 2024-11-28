import Together from 'together-ai';

const together = new Together({ 
    apiKey: import.meta.env.VITE_TOGETHER_API_KEY 
});

export async function generateImage(prompt) {
    try {
        const response = await together.images.create({
            model: "black-forest-labs/FLUX.1-schnell-Free",
            prompt: `AI generated tattoo design, professional tattoo art style, ${prompt}, clean linework, detailed shading, tattoo flash art quality, high contrast design, professional tattoo illustration, clear tattoo composition, modern tattoo art style, tattoo flash sheet quality, AI tattoo concept`,
            width: 1024,
            height: 1024,
            steps: 4,
            n: 1,
            response_format: "b64_json"
        });
        
        return response.data[0].b64_json;
    } catch (error) {
        console.error('Error generating AI tattoo design:', error);
        throw error;
    }
}