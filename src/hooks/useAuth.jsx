import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = (username) => setUser(username);
  const logout = () => setUser(null);

  return { user, login, logout };
}
