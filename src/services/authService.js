const API_URL = "http://localhost:5000";

export const authService = {
  // Vérifie email/mot de passe
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/users?email=${email}`);
    const users = await response.json();
    
    // Trouve l'utilisateur
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Retourne sans le mot de passe (sécurité)
      const { password: _, ...userWithoutPassword } = user;
      return {
        success: true,
        user: userWithoutPassword,
        role: user.role
      };
    }
    
    throw new Error("Email ou mot de passe incorrect");
  },

  // Crée un nouveau compte
  register: async (userData) => {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      }),
    });

    const newUser = await response.json();
    const { password: _, ...userWithoutPassword } = newUser;

    return {
      success: true, 
      user: userWithoutPassword,
      role: newUser.role
    };
  }
};