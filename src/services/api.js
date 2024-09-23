export const fetchCharacters = async () => {
 
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=19');

    if (!response.ok) {
        throw new Error('Error fetching characters');
    }
    return await response.json();
};
