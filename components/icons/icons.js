import styles from '../../styles/icons.module.css';

export const ReactIcon = ({ smallicon }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className={styles.svg + (smallicon ? ' ' + styles.smallicon : '')}>
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
        </svg>
    );
}

export const Ghicon = ({ setAnimatelinks, small, hover }) => {
    const handleMouseEnter = () => {
        if(!hover) return
        setAnimatelinks(true);
    }
    
return (
    <>
        { small ? (<div className={styles['icon-cont']}>
        <svg className="" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="40px" height="40px" onMouseEnter={handleMouseEnter}>
            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/>
        </svg>
        <div className={styles['arrow-cont']}>
            <img src='flecha-desplegable.png'/>
        </div>
        </div>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" className={styles.svg}><path fillRule="evenodd" clipRule="evenodd" fill="#181616" d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/></svg>)}
    </>
    
     );
}
 
export const NodejsIcon = ({ smallicon }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" className={styles.svg + (smallicon ? ' ' + styles.smallicon : '')}>
            <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"/><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"/><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"/><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"/><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"/> 
        </svg>
    );
}

export const AngularIcon = ({ smallicon }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" className={styles.svg + (smallicon ? ' ' + styles.smallicon : '')}>
            <path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"/><path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"/><path fill="#dd2c00" d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"/><path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z"/><path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"/><path fill="#bdbdbd" d="M24 24H30V28H24z"/><path fill="#eee" d="M18 24H24V28H18z"/>
        </svg>
    );
}

export const MongodbIcon = ({ smallicon }) => {
    return (
        // <div className={styles['img-cont']}>
        //     <img
        //     src="/mongodbicon.png"
        //     />
        // </div>
        <svg className={styles.svg + (smallicon ? ' ' + styles.smallicon : '')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 598.88 1333.33" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><g fillRule="nonzero"><path d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z" fill="#599636"/><path d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z" fill="#6cac48"/><path d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z" fill="#c2bfbf"/></g></svg>

    );
}

export const FirebaseIcon = ({ smallicon }) => {
    return (
        // <div className={styles['firebase-icon-cont']}>
        //     <img
        //     src='/logo-vertical.svg'
        //     className={styles.svg}
        //     />
        // </div>
        <svg className={styles.svg + (smallicon ? ' ' + styles.smallicon : '')} viewBox="0 0 256 351" xmlns="http://www.w3.org/2000/svg" /* xmlns:xlink="http://www.w3.org/1999/xlink" */ preserveAspectRatio="xMidYMid"><defs><path d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z" id="a"/><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="b"><feGaussianBlur stdDeviation="17.5" in="SourceAlpha" result="shadowBlurInner1"/><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowInnerInner1"/></filter><path d="M134.417 148.974l32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556z" id="c"/><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="d"><feGaussianBlur stdDeviation="3.5" in="SourceAlpha" result="shadowBlurInner1"/><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" in="shadowInnerInner1"/></filter></defs><path d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z" fill="#FFC24A"/><use fill="#FFA712" fillRule="evenodd"/><use filter="url(#b)"/><path d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z" fill="#F4BD62"/><use fill="#FFA50E" fillRule="evenodd"/><use filter="url(#d)"/><path fill="#F6820C" d="M0 282.998l.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"/><path d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005" fill="#FDE068"/><path d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355z" fill="#FCCA3F"/><path d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689z" fill="#EEAB37"/></svg>
    );
}
 
export const ExpressIcon = ({ smallicon }) => {
    return (
        // <div className={styles['express-icon-cont']}>
            
        // </div>
        // <img
        // className={styles.img}
        // src='/expressicon.png'
        // />
        <svg className={styles.svg + (smallicon ? ' ' + styles.smallicon : '')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
        
    );
}

export const Auth0Icon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
            aria-label="Auth0" role="img"
            viewBox="0 0 512 512"><rect
            width="512" height="512"
            rx="15%"
            fill="#fff"/><path d="M358.1 378.8L319.6 260L420.5 186.9H295.7l-38.6-118.7l-.01-.03h124.8l38.6 118.7v-.003l0.03-.02c22.4 68.8-.7 147 -62.4 192zm-201.9 0l-.036 .03L257.13 452.2L358.09 378.84L257.17 305.51ZM93.85 186.85c-23.57 72.57 3.79 149.46 62.36 192l0.01-.036L194.77 260.17L93.89 186.87H218.6L257.15 68.2L257.2 68.2H132.4Z" fill="#eb5424"/>
        </svg>
    );
}

export const Jsicon = () => {
    return (
        <svg id="svg4525" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.4 291.5" className={styles.svg}>
            <style>{`.st0{fill:#d4b830}.st1,.st2{opacity:.986;fill:#ebebeb;fill-opacity:0;enable-background:new}.st2{fill-opacity:.9216}.st3{fill:#fdd83c}`}</style><g id="g5193" transform="translate(4.988 -113.385)"><path id="path5113" className="st0" d="M18.8 375.4L-5 113.4l256.4.1-23.6 261.7L123 404.8 18.8 375.4zm189.7-14.3l19.9-224.4h-105l.8 247.5 84.3-23.1zm-94.9-191.5H88.1l-.3 134.3-49.5-13.5.1 30.7 75.2 20.3V169.6z"/><path id="path5159" className="st1" d="M105.2 338.9c-3.3-1-19.6-5.4-36.2-9.9l-30.1-8.1v-15.1c0-14.8 0-15.1 1.5-14.6.8.3 11.8 3.3 24.4 6.8l22.9 6.3.2-67 .2-67h25v85.2c0 67.7-.2 85.2-.9 85.2-.5-.1-3.7-.9-7-1.8z"/><path id="path5157" className="st2" d="M38.4 321.1l-.1-30.7s31.6 8.9 49.5 13.5l.3-134.2h25.5v171.7l-75.2-20.3z"/><path id="path5117" className="st3" d="M123.4 136.6h105L208.5 361l-85.1 23.1V136.6zm79.7 186.8l6.9-83.9-51 5.7v-44.8l54.4-.2 2.2-30.6-82.1.4 1.1 111.4 49.6-8.5-.7 24.8-50 13.3.5 30.4 69.1-18z"/></g>
        </svg>
    );
}

export const NextjsIcon = () => {
    return (
        <svg version="1.1" viewBox="0 0 148 90" xmlns="http://www.w3.org/2000/svg" className={styles.nextjs_svg + ' ' + styles.svg}>
            <path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="black" fillRule="nonzero"></path>
        </svg>
    );
}

export const Giticon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.96 114.01" className={styles.svg + ' ' + styles.giticon}>
            <path fill="#413000" d="m163.59,38.806c-5.985,0-10.442,2.9389-10.442,10.012,0,5.3291,2.9375,9.0284,10.12,9.0284,6.0875,0,10.222-3.5869,10.222-9.2485,0-6.416-3.7-9.7915-9.9-9.7915zm-11.97,49.94c-1.4162,1.7382-2.8275,3.585-2.8275,5.7646,0,4.3482,5.545,5.6568,13.162,5.6568,6.31,0,14.905-0.44188,14.905-6.3085,0-3.4869-4.135-3.7028-9.36-4.0304l-15.88-1.0825zm32.201-49.611c1.955,2.5029,4.025,5.9848,4.025,10.989,0,12.075-9.465,19.146-23.169,19.146-3.485,0-6.64-0.43412-8.5962-0.97712l-3.5912,5.7648,10.66,0.65125c18.822,1.1992,29.915,1.7442,29.915,16.208,0,12.514-10.985,19.581-29.915,19.581-19.69,0-27.196-5.0049-27.196-13.598,0-4.8975,2.1762-7.5025,5.9838-11.098-3.5912-1.518-4.7862-4.2362-4.7862-7.1748,0-2.395,1.195-4.5702,3.1562-6.6386,1.9575-2.065,4.1325-4.1348,6.7438-6.5274-5.33-2.6104-9.3562-8.2676-9.3562-16.319,0-12.509,8.2688-21.1,24.91-21.1,4.6788,0,7.5088,0.43062,10.011,1.0874h21.215v9.2446l-10.01,0.76175"/>
            <path fill="#413000" d="m212.98,19.366c-6.2025,0-9.7912-3.5932-9.7912-9.7964,0-6.1954,3.5888-9.5704,9.7912-9.5704,6.31,0,9.9,3.375,9.9,9.5704,0,6.2031-3.59,9.7964-9.9,9.7964zm-14.036,65.376,0-8.5899,5.55-0.75925c1.5238-0.22075,1.74-0.5445,1.74-2.1802v-31.983c0-1.1942-0.325-1.959-1.4162-2.2828l-5.8738-2.0688,1.1962-8.8086h22.521v45.144c0,1.7438,0.105,1.9595,1.7412,2.1802l5.5488,0.75925v8.5899h-31.008"/>
            <path fill="#413000" d="m272.97,80.526c-4.68,2.2818-11.532,4.3491-17.736,4.3491-12.945,0-17.839-5.2168-17.839-17.515v-28.5c0-0.65138,0-1.0884-0.87375-1.0884h-7.6138v-9.6816c9.5762-1.0908,13.381-5.8784,14.578-17.736h10.336v15.453c0,0.75875,0,1.0874,0.87125,1.0874h15.338v10.877h-16.209v25.999c0,6.4194,1.525,8.9194,7.3962,8.9194,3.05,0,6.2012-0.75925,8.8125-1.7392l2.94,9.5761"/>
            <path fill="#f05133" d="M111.78,51.977,62.035,2.2381c-2.8622-2.8648-7.5082-2.8648-10.374,0l-10.329,10.33,13.102,13.102c3.0459-1.0284,6.5371-0.33888,8.9639,2.0884,2.4394,2.4424,3.124,5.9634,2.0698,9.0195l12.628,12.628c3.0551-1.0528,6.58-0.37262,9.0195,2.0712,3.4106,3.4096,3.4106,8.9345,0,12.345-3.4111,3.4116-8.936,3.4116-12.349,0-2.5645-2.5665-3.1988-6.3345-1.8999-9.4942l-11.777-11.777-0.001,30.991c0.8315,0.41162,1.6162,0.961,2.3091,1.6509,3.4096,3.4092,3.4096,8.9331,0,12.348-3.4106,3.4091-8.938,3.4091-12.345,0-3.4101-3.4146-3.4101-8.9385,0-12.348,0.84275-0.84125,1.8179-1.478,2.8584-1.9048v-31.279c-1.041-0.425-2.015-1.057-2.859-1.905-2.583-2.581-3.2051-6.372-1.8804-9.5439l-12.916-12.918-34.106,34.105c-2.8657,2.867-2.8657,7.513,0,10.378l49.742,49.739c2.8638,2.8648,7.5082,2.8648,10.376,0l49.512-49.504c2.8648-2.8662,2.8648-7.5136,0-10.379"/>
        </svg>
    );
}
 
export const LinkedIn = () => {
    return (
            <img src='/linkedin3.png' className={styles.linkedinicon}/>
    );
}

export const JgIcon = ({ themeclass }) => {
    let dark = themeclass === 'dark' ? true : '';
     
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328 171" className={styles.jgicon + (dark ? (' ' + styles.jgicon_dark) : '')}>
            <g>
                <g>
                    <path /* className="st0" */ d="M131.02,33.04c-11.34,1.31-12.51,2.18-12.51,14.4v53.81c0,19.2-3.05,29.23-12.8,37.96
                        c-4.8,4.36-9.6,6.69-13.52,8.43l-2.33-4.36c8.29-4.07,12.94-10.76,14.54-19.2c1.31-6.98,1.45-15.42,1.45-27.63V47.44
                        c0-12.22-1.31-13.23-13.23-14.4v-4.07h38.39L131.02,33.04L131.02,33.04z"/>
                    <path /* className="st0" */ d="M237.47,83.8c-9.02,1.16-9.6,2.04-9.6,10.62v12.22c0,5.09,0.15,9.89,0.87,13.82
                        c-9.02,2.04-20.8,5.24-33.01,5.24c-33.01,0-53.08-20.51-53.08-49.74c0-30.69,25.01-49.01,54.1-49.01
                        c14.83,0,25.74,2.91,30.25,3.64c0.29,5.38,1.02,14.25,2.18,23.41l-4.36,0.87c-3.49-12.36-7.71-17.6-16.87-20.65
                        c-3.34-1.16-9.31-1.89-13.52-1.89c-22.25,0-36.65,15.27-36.65,41.88c0,23.12,11.93,46.1,40.14,46.1c4.94,0,9.45-1.02,12.36-2.47
                        c3.05-1.75,4.94-3.34,4.94-9.31V96.6c0-10.62-1.16-11.78-15.12-12.8v-4.22h37.38L237.47,83.8L237.47,83.8z"/>
                </g>
            </g>
            <path /* className="st1" */ d="M319.92,92.2c-4.74,0-8.3,2.66-10.67,7.96c-2.03,4.4-3.05,9.09-3.05,14.06v28.97c0,5.64-1.55,10.7-4.66,15.16
                c-3.11,4.46-7.31,6.69-12.62,6.69h-11.35v-11.01h7.45c5.31,0,7.96-6.1,7.96-18.3l-0.17-14.74c0-19.42,4.97-30.78,14.91-34.05
                c-4.29-1.36-7.82-4.46-10.59-9.32c-2.77-4.86-4.15-9.66-4.15-14.4l-0.17-9.66V34.42c0-9.26-2.6-13.89-7.79-13.89h-7.45V9.52h11.35
                c7.91,0,13.16,4.23,15.75,12.71c0.79,2.6,1.3,5.62,1.52,9.06c0.23,3.45,0.34,7.82,0.34,13.13l-0.17,7.29c0,4.4,0.11,8.24,0.34,11.52
                s0.57,5.76,1.02,7.45c2.03,7.57,6.1,11.35,12.2,11.35L319.92,92.2L319.92,92.2z"/>
            <path /* className="st1" */ d="M8.47,92.2c4.74,0,8.3,2.66,10.67,7.96c2.03,4.4,3.05,9.09,3.05,14.06v28.97c0,5.64,1.55,10.7,4.66,15.16
                c3.1,4.46,7.31,6.69,12.62,6.69h11.35v-11.01h-7.45c-5.31,0-7.96-6.1-7.96-18.3l0.17-14.74c0-19.42-4.97-30.78-14.91-34.05
                c4.29-1.36,7.82-4.46,10.59-9.32c2.77-4.86,4.15-9.66,4.15-14.4l0.17-9.66V34.42c0-9.26,2.6-13.89,7.79-13.89h7.45V9.52H39.47
                c-7.91,0-13.16,4.23-15.75,12.71c-0.79,2.6-1.3,5.62-1.52,9.06c-0.23,3.45-0.34,7.82-0.34,13.13l0.17,7.29
                c0,4.4-0.11,8.24-0.34,11.52s-0.57,5.76-1.02,7.45c-2.03,7.57-6.1,11.35-12.2,11.35L8.47,92.2L8.47,92.2z"/>
        </svg>
    );
}

export const BurguerIcon = () => {
    return (
        <svg className={styles.burguer_icon} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="icon-bound" fill="none" />
                <path d="M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z" />
        </svg>
    );
}
 
