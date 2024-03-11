import styles from './App.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
  function clickNext() {
	if(isLastStep) {
		setActiveIndex(0);
	} else {setActiveIndex((activeIndex) => activeIndex + 1);}

  }
  function clickBack() {
    setActiveIndex((activeIndex) => activeIndex - 1);
  }


	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
            			{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}> 
						{steps.map((element, index) => (
            				<li key={element.id} className={`${styles['steps-item']} ${index < activeIndex && styles.done || index === activeIndex && styles.active}`}>
                				<button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>{parseInt(element.id)}</button>
                			{	element.title}
              				</li>
          				))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={clickBack} disabled={isFirstStep}>BACK</button>
						<button className={styles.button} onClick={clickNext}>
							{isLastStep ? 'Start Over' : 'NEXT'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};


