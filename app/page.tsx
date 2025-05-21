import Header from "@/components/Header";
import classes from "./page.module.css";
import Modal from "@/components/Modal";
export default function Home() {
  return (
    <>
    <Header/>
      <main className={classes.main}>
        <section className={classes.info}>
          <h2>GIFcentration</h2>
          <p>The GIF card-matching game!</p>
        </section>
      </main>
      <Modal/>
    </>
  );
}
