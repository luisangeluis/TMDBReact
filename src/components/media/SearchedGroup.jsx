//Components
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CardMedia from './CardMedia';

const SearchedGroup = ({ media }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });

  useEffect(() => {
    // const group = document.querySelectorAll('.card');
    // console.log(group);
    // if (group) {
    //   console.log(group[0]);
    //   console.log(group[group.length - 1].setAttribute('ref', ref));
    // }
  }, []);

  return (
    <div className="row searched-group">
      {media &&
        media.map((element) => (
          <div className="col-md-4 col-lg-3" key={element.id}>
            <CardMedia item={element} />
          </div>
        ))}
      <h2 ref={ref}>inview {inView}</h2>
    </div>
  );
};

export default SearchedGroup;
