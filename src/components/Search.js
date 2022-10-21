import styles from '../components/search.module.scss'
import { Input } from "@material-tailwind/react";
export default function Search() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentTwo}>
            <span className={styles.text}>Let’s go. Get a link to download the app.</span>

<Input className={styles.input} />

      
     
    </div>
    <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white w-50 h-12"
              >
               APPLY TO DRIVE
              </a>
   
            </div>
           
        </div>
      
    )
  }
  