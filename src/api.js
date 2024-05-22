export const fetchAPI = async (date) => {
    // Simule une réponse API pour les heures disponibles
    const times = ["17:00", "18:00", "19:00", "20:00"];
    return times;
  };

  export const submitAPI = async (formData) => {
    console.log("Submitting form data: ", formData);
    // Simule une réponse réussie de soumission
    return true;
  };