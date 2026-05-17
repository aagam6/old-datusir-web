export const useWhatsApp = () => {
  const openWhatsApp = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Hi, I want to enquire about admission for Class 11/12 Commerce. Please share details.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return { openWhatsApp };
};