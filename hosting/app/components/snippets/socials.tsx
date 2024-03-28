
interface Props {
  type: string;
}
export default function Socials(props: Props){
  let icon = instagram();
  switch (props.type) {
    case 'linkedin':
      icon = linkedIn();
      break;
    case 'facebook':
      icon = facebook();
      break;
    default:
      icon = instagram();
  }
  return (<a href="" target="_blank">
  {icon}
  </a>)
}


export function linkedIn() {
  return (<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_819_9022)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 45H0V0H45V39.5L39.5 45ZM14.1 37.2V17.36H7.5V37.2H14.1ZM37.88 37.2V25.82C37.88 19.73 34.63 16.89 30.29 16.89C26.79 16.89 25.22 18.81 24.35 20.17V17.36H17.76C17.85 19.22 17.76 37.2 17.76 37.2H24.35V26.12C24.35 25.53 24.39 24.93 24.57 24.51C25.05 23.33 26.13 22.1 27.95 22.1C30.33 22.1 31.29 23.92 31.29 26.59V37.2H37.88ZM10.85 7.8C8.59 7.8 7.12 9.28 7.12 11.23C7.12 13.18 8.55 14.66 10.76 14.66H10.8C13.1 14.66 14.53 13.14 14.53 11.23C14.49 9.29 13.1 7.81 10.84 7.8H10.85Z" fill="#6FB2BC"/>
  </g>
  <defs>
  <clipPath id="clip0_819_9022">
  <rect width="45" height="45" fill="white"/>
  </clipPath>
  </defs>
  </svg>)
}
export function facebook() {
  return (<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_819_9023)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 45H30.14V28.04H35.99L37.1 20.78H30.13V16.07C30.13 14.08 31.1 12.15 34.22 12.15H37.39V5.97C37.39 5.97 34.52 5.48 31.77 5.48C26.03 5.48 22.28 8.96 22.28 15.25V20.78H15.9V28.04H22.28V45H0V0H45V39.5L39.5 45Z" fill="#6FB2BC"/>
  </g>
  <defs>
  <clipPath id="clip0_819_9023">
  <rect width="45" height="45" fill="white"/>
  </clipPath>
  </defs>
  </svg>)
}
  export function instagram() {
  return (<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Insta Button Icon">
  <g id="Layer_1" clip-path="url(#clip0_819_9021)">
  <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M39.5 45H0V0H45V39.5L39.5 45ZM16.16 7.21C14.52 7.28 13.4 7.54 12.43 7.92C11.42 8.31 10.56 8.84 9.71 9.69C8.85 10.55 8.33 11.4 7.94 12.41C7.56 13.39 7.3 14.51 7.23 16.14C7.16 17.78 7.16 27.18 7.23 28.82C7.3 30.46 7.56 31.58 7.94 32.55C8.33 33.56 8.86 34.42 9.71 35.27C10.57 36.13 11.42 36.65 12.43 37.04C13.41 37.42 14.53 37.68 16.16 37.75C17.8 37.82 27.2 37.82 28.84 37.75C30.48 37.68 31.6 37.42 32.57 37.04C33.58 36.65 34.44 36.12 35.29 35.27C36.14 34.42 36.67 33.56 37.06 32.55C37.44 31.57 37.7 30.45 37.77 28.82C37.84 27.18 37.84 17.78 37.77 16.14C37.7 14.5 37.44 13.38 37.06 12.41C36.67 11.4 36.14 10.54 35.29 9.69C34.43 8.84 33.58 8.31 32.57 7.92C31.59 7.54 30.47 7.28 28.84 7.21C27.2 7.14 26.68 7.12 22.5 7.12C22.5 7.12 17.8 7.14 16.16 7.21ZM28.72 9.98C30.22 10.05 31.03 10.3 31.58 10.51C32.3 10.79 32.81 11.12 33.35 11.66C33.89 12.2 34.22 12.71 34.5 13.43C34.71 13.97 34.96 14.79 35.03 16.29C35.1 17.91 35.1 27.1 35.03 28.72C34.96 30.22 34.71 31.03 34.5 31.58C34.22 32.3 33.89 32.81 33.35 33.35C32.81 33.89 32.3 34.22 31.58 34.5C31.04 34.71 30.22 34.96 28.72 35.03C27.1 35.1 17.91 35.1 16.29 35.03C14.79 34.96 13.98 34.71 13.43 34.5C12.71 34.22 12.2 33.89 11.66 33.35C11.12 32.81 10.79 32.3 10.51 31.58C10.3 31.04 10.05 30.22 9.98 28.72C9.91 27.1 9.91 17.91 9.98 16.29C10.05 14.79 10.3 13.98 10.51 13.43C10.79 12.71 11.12 12.2 11.66 11.66C12.2 11.12 12.71 10.79 13.43 10.51C13.97 10.3 14.79 10.05 16.29 9.98C17.91 9.91 27.1 9.91 28.72 9.98ZM22.5 14.6C18.14 14.6 14.6 18.14 14.6 22.5C14.6 26.86 18.14 30.4 22.5 30.4C26.86 30.4 30.4 26.86 30.4 22.5C30.4 18.14 26.86 14.6 22.5 14.6ZM22.5 27.63C19.67 27.63 17.37 25.33 17.37 22.5C17.37 19.67 19.67 17.37 22.5 17.37C25.33 17.37 27.63 19.67 27.63 22.5C27.63 25.33 25.33 27.63 22.5 27.63ZM32.56 14.29C32.56 15.31 31.73 16.14 30.71 16.14C29.69 16.14 28.86 15.31 28.86 14.29C28.86 13.27 29.69 12.44 30.71 12.44C31.73 12.44 32.56 13.27 32.56 14.29Z" fill="#6FB2BC"/>
  </g>
  </g>
  <defs>
  <clipPath id="clip0_819_9021">
  <rect width="45" height="45" fill="white"/>
  </clipPath>
  </defs>
  </svg>)
}