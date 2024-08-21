import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profilepicture.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Profile Picture of Calvin Clinton'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Calvin <br />
          Clinton
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href='https://x.com/thecalvin10101' target='_blank'>
            <img src={twitterIcon} alt='Twitter Icon' />
          </a>
          <a
            href='https://www.instagram.com/calvin_clinton/?theme=dark'
            target='_blank'
          >
            <img src={instagramIcon} alt='Twitter Icon' />
          </a>
          <a href='https://github.com/CalvinClint' target='_blank'>
            <img src={githubIcon} alt='Github Icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/calvin-clinton-91b854154/'
            target='_blank'
          >
            <img src={linkedinIcon} alt='Linkedin Icon' />
          </a>
        </span>
        <p className={styles.description}>
          Software engineer skilled in front-end development, SQL, and product
          management.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
