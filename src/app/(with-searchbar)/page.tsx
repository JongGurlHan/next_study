import styles from "./page.module.css";

// 클라이언트 컴퍼넌트: 상호작용이 있어야 하면
// 서버 컴퍼넌트: 상호작용이 있지 않다면
export default function Home() {
  console.log("Home 컴퍼넌트 실행");
  return <div className={styles.page}>인덱스페이지</div>;
}
