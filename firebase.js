//firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyC0c1oLtfzuAxautDvA5TXeXj8jlc7aUj0",
  authDomain: "fb-study-f6547.firebaseapp.com",
  projectId: "fb-study-f6547",
  storageBucket: "fb-study-f6547.appspot.com",
  messagingSenderId: "197597240114",
  appId: "1:197597240114:web:3f0540728ceec6eb9b552b",
  measurementId: "G-G4F1K9JKGC" 
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = getFirestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
