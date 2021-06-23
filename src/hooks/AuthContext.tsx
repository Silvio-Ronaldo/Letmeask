import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

import { firebase, auth } from '../services/firebase';

type User = {
	id: string;
	name: string;
	avatar: string;
};

type AuthContextType = {
	user: User | undefined;
	signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

type AuthContextProviderProps = {
	children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(old_user => {
			if (old_user) {
				const { displayName, photoURL, uid } = old_user;

				if (!displayName || !photoURL) {
					throw new Error('Faltam informações da conta do Google.');
				}

				setUser({
					id: uid,
					name: displayName,
					avatar: photoURL,
				});
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	async function signInWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();

		const result = await auth.signInWithPopup(provider);

		if (result.user) {
			const { displayName, photoURL, uid } = result.user;

			if (!displayName || !photoURL) {
				throw new Error('Faltam informações da conta do Google.');
			}

			setUser({
				id: uid,
				name: displayName,
				avatar: photoURL,
			});
		}
	}

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(AuthContext);
};
