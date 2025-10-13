// 📁 src/components/uploadToCloudinary.js
import axios from "axios";

export async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "publication"); // ton preset Cloudinary

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dl7o4c4ri/image/upload", // ton cloud_name dans l'URL seulement
      formData
    );
    console.log("✅ Cloudinary upload success:", res.data);
    return res.data.secure_url;
  } catch (err) {
  console.error("❌ Erreur Cloudinary :", err.response?.data || err.message);
  alert(JSON.stringify(err.response?.data || err.message, null, 2));
  throw err;
}

}
