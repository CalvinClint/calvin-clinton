import styles from './SkillsStyles.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme, toggleTheme } = useTheme();

  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Angular' />
        <SkillList src={checkMarkIcon} skill='Node' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Git' />
        <SkillList src={checkMarkIcon} skill='Bootstrap' />
      </div>
    </section>
  );
}

export default Skills;
