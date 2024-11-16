// src/services/imagesApi.js

const BASE_URL = 'http://localhost:5000'; // Cambia esta URL a la del servidor Flask si es necesario

/**
 * Subir una imagen al backend de Flask.
 * @param {File} imageFile - El archivo de imagen a cargar.
 * @returns {Promise} - La respuesta de la API.
 */
export const postImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await fetch(`${BASE_URL}/upload_image`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Error uploading image');
        }
        
        return data; // Devuelve los datos de la respuesta (por ejemplo, file_path)
    } catch (error) {
        console.error('Error in postImage:', error);
        throw error;
    }
};

/**
 * Obtener todas las imágenes almacenadas en el backend.
 * @returns {Promise} - La respuesta de la API con las imágenes.
 */
export const getImages = async () => {
    try {
        const response = await fetch(`${BASE_URL}/get_images`, {
            method: 'GET',
        });
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Error fetching images');
        }
        
        return data.images; // Devuelve el array de imágenes
    } catch (error) {
        console.error('Error in getImages:', error);
        throw error;
    }
};
