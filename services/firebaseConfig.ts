import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc, getDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db
import { Product } from '../types/products';

const firebaseConfig = {
	apiKey: 'AIzaSyCU42uuS55TFRUWS2KJZzoQKjhTJT1Jciw',
	authDomain: 'proyecto-final-c5690.firebaseapp.com',
	projectId: 'proyecto-final-c5690',
	storageBucket: 'proyecto-final-c5690.appspot.com',
	messagingSenderId: '183150005663',
	appId: '1:183150005663:web:791e23ff92190ffddf41aa',
	measurementId: 'G-YKJ4DK3G23',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

//Funciones para loguear y registrar
export const createUser = (formData: any) => {
	createUserWithEmailAndPassword(auth, formData.email, formData.password)
		.then(async (userCredential) => {
			//Primer paso es obtener el id
			const user = userCredential.user;
			console.log(user.uid);

			//Segundo paso es agregar un documento con más info bajo ese id
			try {
				const where = doc(db, 'users', user.uid);
				const data = {
					nam: formData.name,
				};
				await setDoc(where, data);
				alert('Se creó el usuario');
			} catch (error) {
				console.error(error);
			}
		})
		.catch((error: any) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(errorCode, errorMessage);
		});
};

export const logIn = (formData: any) => {
	signInWithEmailAndPassword(auth, formData.email, formData.password)
		.then(async (userCredential) => {
			//Primer paso es obtener el id
			const user = userCredential.user;
			console.log(user.uid);
		})
		.catch((error: any) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(errorCode, errorMessage);
		});
};

//Funciones para agregar y obtener productos
export const addProduct = async (formData: Omit<Product, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'products'), formData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getPosts = async () => {
	const querySnapshot = await getDocs(collection(db, 'posts'));
	const arrayProducts: Array<Product> = [];

	querySnapshot.forEach((doc) => {
		const data = doc.data() as any;
		arrayProducts.push({ id: doc.id, ...data });
	});

	return arrayProducts;
};

//Función para obtener especificamente un solo documento
export const getDetailDoc = async (id: string) => {
	const docRef = doc(db, 'movies', id);
	const docSnap = await getDoc(docRef);
	return docSnap.data();
};
