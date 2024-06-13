// import React, { FC } from 'react';
// import cn from 'classnames';
// import styles from './OwncastLogo.module.scss';

// export type LogoProps = {
//   variant?: 'simple' | 'contrast';
//   className?: string;
// };

// export const OwncastLogo: FC<LogoProps> = ({ variant = 'simple', className = '' }) => {
//   const rootClassName = cn(styles.root, {
//     [styles.simple]: variant === 'simple',
//     [styles.contrast]: variant === 'contrast',
//   });

//   return (
//     <div className={`${rootClassName} ${className}`}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 95.68623352050781 104.46271514892578"
//         className="logo-svg"
//       >
//         <g transform="matrix(1 0 0 1 -37.08803939819336 -18.940391540527344)">
//           <g>
//             <g>
//               <g>
//                 <g transform="matrix(1.0445680396949917 0 0 1.0445679172996596 36.34559138380523 18.877718021903796)">
//                   <g transform="matrix(1 0 0 1 0 0)">
//                     <defs>
//                       <linearGradient
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                         id="gradient120"
//                         gradientTransform="rotate(-90 .5 .5)"
//                       >
//                         <stop offset="0" stopColor="#1f2022" stopOpacity="1" />
//                         <stop offset="1" stopColor="#635e69" stopOpacity="1" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#gradient120)"
//                       d="M91.5 75.35Q93.05 71.15 91.65 67.7 90.35 64.5 86.65 62.3 83.2 60.3 78.3 59.4 73.85 58.6 68.6 58.7 63.55 58.85 58.8 59.8 54.25 60.75 50.8 62.2 47.4 63.65 45.5 65.35 43.6 67.15 43.5 69.05 43.35 71.3 45.8 73.9 48.05 76.3 52.1 78.6 56.15 80.9 61.05 82.55 66.3 84.3 71.4 84.8 74.7 85.1 77.55 84.9 80.65 84.6 83.3 83.6 86.15 82.5 88.15 80.55 90.4 78.4 91.5 75.35M70.6 67.5Q72.3 68.4 73.1 69.7 73.9 71.15 73.45 73 73.1 74.3 72.3 75.25 71.55 76.1 70.3 76.6 69.25 77.05 67.75 77.25 66.3 77.4 64.85 77.3 62.3 77.15 59.25 76.3 56.6 75.5 54.15 74.3 51.9 73.2 50.45 72 49.05 70.75 49.1 69.8 49.2 69 50.25 68.25 51.3 67.55 53.15 67 55 66.4 57.25 66.1 59.8 65.8 62.1 65.8 64.65 65.85 66.7 66.2 68.9 66.65 70.6 67.5Z"
//                     />
//                   </g>
//                   <g transform="matrix(1 0 0 1 0 0)">
//                     <defs>
//                       <linearGradient
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                         id="gradient121"
//                         gradientTransform="rotate(-180 .5 .5)"
//                       >
//                         <stop offset="0" stopColor="#2087e2" stopOpacity="1" />
//                         <stop offset="1" stopColor="#b63fff" stopOpacity="1" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#gradient121)"
//                       d="M66.6 15.05Q66.4 9.65 63.9 6.05 61.25 2.1 56.1 0.65 54.95 0.3 53.65 0.15 52.5 0 51.3 0.1 50.2 0.1 49.1 0.35 48.15 0.55 47 1 43.3 2.45 40.3 6.1 37.5 9.4 35.5 14.3 33.75 18.45 32.7 23.4 31.7 28.05 31.35 32.85 31.05 37.2 31.3 41.2 31.6 45.15 32.4 48.35 34 54.9 37.3 56.4 37.6 56.55 37.9 56.65L39.2 56.85Q39.45 56.85 39.95 56.8 42.05 56.6 44.7 55.05 47.25 53.5 50.05 50.8 53.05 47.9 55.85 44.05 58.8 40.05 61.1 35.6 63.8 30.35 65.25 25.3 66.75 19.75 66.6 15.05M47.55 23.15Q48.05 23.25 48.4 23.4 52.45 24.8 52.55 29.85 52.6 34 50 39.4 47.85 43.9 44.85 47.3 42.05 50.5 40.15 50.7L39.9 50.75 39.45 50.7 39.2 50.6Q37.8 49.95 37.25 46.35 36.7 42.7 37.3 38 37.95 32.75 39.75 28.8 41.9 24.1 45.05 23.25 45.6 23.1 45.85 23.1 46.25 23.05 46.65 23.05 47.05 23.05 47.55 23.15Z"
//                     />
//                   </g>
//                   <g transform="matrix(1 0 0 1 0 0)">
//                     <defs>
//                       <linearGradient
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                         id="gradient122"
//                         gradientTransform="rotate(-90 .5 .5)"
//                       >
//                         <stop offset="0" stopColor="#100f0f" stopOpacity="1" />
//                         <stop offset="1" stopColor="#49261F" stopOpacity="1" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#gradient122)"
//                       d="M2.7 33.6Q2.1 34.4 1.7 35.35 1.25 36.5 1.05 37.7 0 42.6 2.2 47.2 4 51 8 54.35 11.55 57.3 16 59.15 20.5 61 23.85 60.85 24.5 60.85 25.25 60.7 26 60.55 26.5 60.3 27 60.05 27.45 59.65 27.9 59.25 28.15 58.75 29.35 56.45 27.5 51.65 25.6 47 21.75 42.1 17.75 37 13.4 34.05 8.7 30.9 5.45 31.7 4.65 31.9 3.95 32.4 3.25 32.85 2.7 33.6M10.1 43.55Q10.35 43.1 10.6 42.85 10.85 42.6 11.2 42.4 11.6 42.25 11.9 42.2 13.5 41.9 15.95 43.6 18.15 45.05 20.35 47.7 22.35 50.1 23.55 52.4 24.7 54.75 24.25 55.7 24.15 55.9 24 56 23.85 56.2 23.65 56.25 23.55 56.35 23.25 56.4L22.7 56.5Q21.1 56.6 18.55 55.6 16.05 54.6 13.85 52.95 11.5 51.2 10.35 49.15 9.05 46.8 9.75 44.45 9.9 43.95 10.1 43.55Z"
//                     />
//                   </g>
//                   <g transform="matrix(1 0 0 1 0 0)">
//                     <defs>
//                       <linearGradient
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                         id="gradient123"
//                         gradientTransform="rotate(-180 .5 .5)"
//                       >
//                         <stop offset="0" stopColor="#222020" stopOpacity="1" />
//                         <stop offset="1" stopColor="#49261F" stopOpacity="1" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#gradient123)"
//                       d="M34.95 74.2L34.75 74.2Q33.2 74.15 31.9 75.25 30.7 76.3 29.85 78.25 29.1 80 28.8 82.2 28.5 84.4 28.7 86.65 29.1 91.4 31.5 94.7 34.3 98.5 39.3 99.7L39.4 99.7 39.7 99.8 39.85 99.8Q45.3 100.85 47.15 97.75 48 96.3 48 94.05 47.95 91.9 47.2 89.35 46.45 86.75 45.1 84.15 43.75 81.5 42.05 79.35 40.25 77.1 38.45 75.75 36.55 74.35 34.95 74.2M33.55 80.4Q34.35 78.2 35.6 78.3L35.65 78.3Q36.9 78.45 38.6 80.9 40.3 83.35 41.15 86.05 42.1 89 41.55 90.75 40.9 92.6 38.35 92.25L38.3 92.25 38.25 92.2 38.1 92.2Q35.6 91.7 34.25 89.6 33.1 87.7 32.95 85 32.8 82.35 33.55 80.4Z"
//                     />
//                   </g>
//                   <g transform="matrix(0.9999999999999999 0 0 1 0 5.684341886080802e-14)">
//                     <defs>
//                       <linearGradient
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                         id="gradient124"
//                         gradientTransform="rotate(-180 .5 .5)"
//                       >
//                         {' '}
//                         <stop offset="0" stopColor="#1e1c1c" stopOpacity="1" />
//                         <stop offset="1" stopColor="#49261F" stopOpacity="1" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#gradient124)"
//                       d="M22.7 69.65Q22.25 69.3 21.6 69.05 20.95 68.8 20.25 68.7 19.6 68.55 18.85 68.5 16.7 68.45 14.65 69.15 12.65 69.8 11.4 71.1 10.15 72.5 10.2 74.2 10.25 76.05 11.95 78.2 12.4 78.75 13.05 79.4 13.55 79.9 14.2 80.3 14.7 80.6 15.3 80.85 16 81.1 16.4 81.1 18.2 81.35 19.9 80.35 21.55 79.4 22.75 77.65 24 75.85 24.3 73.95 24.6 71.85 23.55 70.5 23.15 70 22.7 69.65M21.7 71.7Q22.15 72.3 21.9 73.3 21.7 74.25 21 75.25 20.3 76.2 19.4 76.75 18.45 77.35 17.55 77.25L17 77.15Q16.7 77.05 16.45 76.85 16.25 76.75 15.9 76.45 15.7 76.25 15.4 75.9 14.5 74.75 14.7 73.8 14.8 72.95 15.75 72.3 16.6 71.7 17.8 71.4 19 71.1 20.1 71.15L20.65 71.2 21.1 71.3Q21.3 71.4 21.45 71.5L21.7 71.7Z"
//                     />
//                   </g>
//                   <g transform="matrix(1 0 0 1 0 0)">
//                     <defs>
//                       <linearGradient
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                         id="gradient125"
//                         gradientTransform="rotate(-360 .5 .5)"
//                       >
//                         <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.5" />
//                         <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.2" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#gradient125)"
//                       d="M52.6 19.25Q59.6 19.25 66.2 20.95 66.7 17.8 66.6 15.05 66.4 9.65 63.9 6.05 61.25 2.1 56.1 0.65 54.95 0.3 53.65 0.15 52.5 0 51.3 0.1 50.2 0.1 49.1 0.35 48.15 0.55 47 1 43.3 2.45 40.3 6.1 37.5 9.4 35.5 14.3 33.85 18.3 32.8 22.85 42.25 19.25 52.6 19.25Z"
//                     />
//                   </g>
//                   <g transform="matrix(1 0 0 1 0 0)">
//                     <defs>
//                       <linearGradient
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                         id="gradient126"
//                         gradientTransform="rotate(-360 .5 .5)"
//                       >
//                         <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.5" />
//                         <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.2" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       fill="url(#gradient126)"
//                       d="M1.05 37.7Q0 42.6 2.2 47.2 2.95 48.8 4.05 50.25 7.55 41.65 14.4 34.75 14 34.45 13.4 34.05 8.7 30.9 5.45 31.7 4.65 31.9 3.95 32.4 3.25 32.85 2.7 33.6 2.1 34.4 1.7 35.35 1.25 36.5 1.05 37.7Z"
//                     />
//                   </g>
//                 </g>
//               </g>
//               <g transform="matrix(1.219512230276127 0 0 1.2195122143630526 32.82519274395008 88.56945194723018)">
//                 <path fill="#000000" fillOpacity="1" d="" />
//               </g>
//             </g>
//           </g>
//         </g>
//       </svg>
//     </div>
//   );
// };

// LVTV Code

import React, { FC } from 'react';
import cn from 'classnames';
import styles from './OwncastLogo.module.scss';

export type LogoProps = {
  variant?: 'simple' | 'contrast';
  className?: string;
};

export const OwncastLogo: FC<LogoProps> = ({ variant = 'simple', className = '' }) => {
  const rootClassName = cn(styles.root, {
    [styles.simple]: variant === 'simple',
    [styles.contrast]: variant === 'contrast',
  });

  return (
    <div className={`${rootClassName} ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1146 1146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask id="mask0_916_2" maskUnits="userSpaceOnUse" x="0" y="0" width="1146" height="1146">
          <circle cx="573" cy="573" r="573" fill="#ffffff" />
        </mask>
        <g mask="url(#mask0_916_2)">
          <rect x="-214" y="-157" width="1575" height="1575" fill="url(#pattern0_916_2)" />
        </g>
        <defs>
          <pattern id="pattern0_916_2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_916_2" transform="scale(0.002)" />
          </pattern>
          <image
            id="image0_916_2"
            width="500"
            height="500"
            xlinkHref="data:image/png;base64,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dQ5/zLHXG+3ATOQMHZh1Zsp6Cegnr08BIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAT+ADNmoT96WPG7AAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </div>
  );
};
