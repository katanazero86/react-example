import React from 'react';
import styles from './CssModuleExample.module.css';

function CssModuleExample(props) {

    console.log(styles);
    return (
        <div className={styles.hello}>
            hello css module world!
        </div>
    )
}


export default CssModuleExample