import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getDatabase, get, set, ref, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

// export async function login() {
//       return signInWithPopup(auth, provider)
//         .then((result) => {
//           const user = result.user;

//           return user;
//         })
//         .catch((error) => {
//           alert("로그인을 다시 시도해주세요.");
//         });
//     }

export async function login() {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          return user;
        })
        .catch((error) => {
          alert("로그인을 다시 시도해주세요.");
        });
    })
    .catch(console.error);
}

export async function logout() {
  return signOut(auth)
    .then(() => null)
    .catch((error) => {
      alert("로그아웃을 다시 시도해주세요.");
    });
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : user;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database, "admins")).then((snapshot) => {
    if (snapshot.exists()) {
      const adimins = snapshot.val();
      const isAdmin = adimins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}

export async function addNewProduct(product, imageUrl) {
  const id = uuid();
  const category = product.category;
  const saleprice =
    product.saleprice !== undefined && !isNaN(product.saleprice)
      ? parseInt(product.saleprice).toLocaleString("ko-KR")
      : null;
  console.log(saleprice);
  set(ref(database, `products/${category}/${id}`), {
    ...product,
    id,
    price: parseInt(product.price).toLocaleString("ko-KR"),
    saleprice: saleprice,
    image: imageUrl,
    colors: product.colors.split(","),
  });
}

// export async function getProduct(category) {
//   return get(ref(database, `products/${category}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       return Object.values(snapshot.val());
//     }
//     return [];
//   });
// }

export async function getProduct(category) {
  const databaseRef = category ? `products/${category}` : "products";
  return get(ref(database, databaseRef)).then((snapshot) => {
    if (snapshot.exists()) {
      if (category) {
        return Object.values(snapshot.val());
      } else {
        return Object.values(snapshot.val()).flatMap((categoryData) =>
          Object.values(categoryData)
        );
      }
    }
    return [];
  });
}

export async function addOrUpdateToCart(uid, product) {
  return set(ref(database, `carts/${uid}/${product.id}`), product);
}

export async function getCart(uid) {
  return get(ref(database, `carts/${uid}`)).then((snapshot) => {
    const items = snapshot.val() || {};
    return Object.values(items);
  });
}

export async function removeFromCart(uid, productId) {
  return remove(ref(database, `carts/${uid}/${productId}`));
}
