
interface Props {
  startColor: string;
  endColor: string;
  split: number;
  offset?: number;
}

export default function SectionSplitter(props: Props) {
  const offset = props.offset || 0;
  const clipping = `polygon( 0 0, 100% 0%, 100% 100%, ${5 + offset}% 100%)`;
  return (<div className={`bg-color_${props.startColor} full subgrid`} style={{minHeight: '1rem', maxHeight: '3rem', height: '3vw', display: 'grid', gridTemplateColumns: `${props.split/2}% ${props.split/2}% 1fr`, marginBottom: '-3px'}}>
            <div className={`bg-color_${props.startColor}`}></div>
            <div className={`bg-color_${props.startColor}`} ></div>
            <div className={`bg-color_${props.endColor}`}  style={{clipPath: clipping, marginTop: '-3px'}}></div>
          </div>);
}