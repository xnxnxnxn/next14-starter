import Image from "next/image";
import styles from './about.module.css';
const AboutPage = () => {
  return <div  className={styles.container}>
		{/* <img src="/about.png"/> */}
		{/* <Image src="/about.png" width={500} height={500}/> */}
		{/* <div className={styles.imgContainer}>
			<Image src="/about.png" fill/>
		</div>
		<Image src="https://i2.hdslb.com/bfs/archive/9b266d38a04b23b6a938ba600e4036c3ab493143.jpg@672w_378h_1c_!web-home-common-cover.avif" width={500} height={500}/> */}
		<div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
	</div>;
};

export default AboutPage;