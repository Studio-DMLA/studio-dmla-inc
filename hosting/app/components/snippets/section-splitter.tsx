
interface Props {
  startColor: string;
  endColor: string;
  split: number;
  offset?: number;
}

export default function SectionSplitter(props: Props) {
  const offset = props.offset || 0;
  const clipping = `polygon(0 0, ${90 + offset}% 0, 100% 100%, 0% 100%)`;
  return (<div className={`bg-color_${props.endColor} full`} style={{minHeight: '1rem', maxHeight: '3rem', height: '3vw'}}>
            <div className={`bg-color_${props.startColor} full`} style={{clipPath: clipping, minHeight: '1rem', maxHeight: '3rem', height: '3vw', width: `${props.split}%`, marginTop: '1px'}}></div>
          </div>);
}