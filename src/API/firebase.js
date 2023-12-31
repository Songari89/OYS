import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getDatabase, get, set, ref } from "firebase/database";

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
