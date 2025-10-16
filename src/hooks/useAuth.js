import { useSelector } from 'react-redux';

export const useAuth = () => {
  const auth = useSelector(state => state.auth);
  
  return {
    // Infos de connexion
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    role: auth.role,
    
    // Vérifications de rôle
    isAdmin: auth.role === 'admin',
    isStartup: auth.role === 'startup', 
    isInvestor: auth.role === 'investor',
    isVisitor: auth.role === 'visitor',
    
    // Permissions
    canAddStartup: ['admin', 'startup'].includes(auth.role),
    canAddEvent: ['admin', 'startup'].includes(auth.role),
    canDelete: auth.role === 'admin',
    canAccessDashboard: ['admin', 'startup', 'investor'].includes(auth.role)
  };
};