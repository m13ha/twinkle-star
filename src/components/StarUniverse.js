import '../stylesheet/StarUniverseIndex.css';
import '../stylesheet/StarUniverseApp.css';
import { Stage, Layer, Star } from 'react-konva';
import { useEffect, useRef, useState, createRef } from 'react';
import { useAppContext } from '../context/app-context';
import { nanoid } from 'nanoid';

function App() {
  const [starList, setStarList] = useState([]);
  const [starListRef, setStarListRef] = useState([]);
  const [currentActiveRefs, setcurrentActiveRef] = useState([]);
  const [scale, setScale] = useState(0.1);
  const canvasRef = useRef();

  const { isIntroduction, openStarInfoRandom } = useAppContext();

  useEffect(() => {
    if (!isIntroduction) {
      zoom();
    }
  }, [isIntroduction]);
  class StarObject {
    constructor(
      id,
      x,
      y,
      numPoints,
      innerRadius,
      outerRadius,
      rotation,
      type,
      points
    ) {
      this.x = x;
      this.y = y;
      this.numPoints = numPoints;
      this.innerRadius = innerRadius;
      this.outerRadius = outerRadius;
      this.rotation = rotation;
      this.type = type;
      this.points = points;
      this.id = id;
    }
  }

  const randomType = () => {
    let types = [
      'supernova',
      'dwarf-nova',
      'eclipsing-binary',
      'cepheid',
      'planet-transit',
    ];
    let points = [10, 20, 50, 100, 1000];

    let randomNum = Math.floor(Math.random() * 1000);

    if (randomNum < 10) {
      return [types[0], points[4]];
    } else if (randomNum < 50) {
      return [types[1], points[3]];
    } else if (randomNum < 100) {
      return [types[2], points[2]];
    } else if (randomNum < 200) {
      return [types[3], points[1]];
    } else {
      return [types[4], points[0]];
    }
  };

  const generateShapes = () => {
    let starMap = [];
    for (let i = 0; i < 500; i++) {
      let x = Math.random() * canvasRef.current?.clientWidth;
      let y = Math.random() * canvasRef.current?.clientHeight;
      let numPoints = Math.floor(Math.random() * (10 - 5) + 5);
      let innerRadius = Math.floor(Math.random() * (6 - 3) + 3);
      let outerRadius = Math.floor(Math.random() * (10 - 7) + 7);
      let rotation = Math.random() * 180;
      let data = randomType();
      let star = new StarObject(
        nanoid(),
        x,
        y,
        numPoints,
        innerRadius,
        outerRadius,
        rotation,
        data[0],
        data[1]
      );
      starMap.push(star);
    }
    return starMap;
  };

  useEffect(() => {
    let stars = generateShapes();
    setStarList([...stars]);
    if (currentActiveRefs.length === 0) {
      getRandomRefs();
    }
  }, []);

  useEffect(() => {
    setStarListRef((starRefs) =>
      Array(starList.length)
        .fill()
        .map((_, i) => starRefs[i] || createRef())
    );
  }, [starList]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      for (let i = 0; i < currentActiveRefs.length; i++) {
        let star = starListRef[currentActiveRefs[i]];
        star.current?.to({
          scaleX: scale * 1.5,
          scaleY: scale * 1.5,
          duration: 0.5,
          onFinish: () => {
            star.current?.to({
              scaleX: scale,
              scaleY: scale,
              duration: 0.5,
            });
          },
        });
      }
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, [starListRef, currentActiveRefs]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      for (let i = 0; i < starListRef.length; i++) {
        let star = starListRef[i];
        if (star.current?.attrs.x > 0 && star.current?.attrs.y > 0) {
          star.current?.to({
            x: star.current?.attrs.x - 5,
            y: star.current?.attrs.y - 2.5,
          });
        }
      }
    }, 5000);

    let newArray = [...starList];
    const intervalIdTwo = setInterval(() => {
      for (let i = 0; i < newArray.length; i++) {
        let star = newArray[i];
        star.x = star.x - 5;
        star.y = star.y - 2.5;
        if (star.x < 0 || star.y < 0) {
          star.x = Math.floor(
            Math.random() * canvasRef.current?.clientWidth + 500
          );
          star.y = Math.floor(
            Math.random() * canvasRef.current?.clientHeight + 500
          );
        }
      }

      setStarList(newArray);
    }, 5500);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalIdTwo);
    };
  }, [starListRef]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getRandomRefs();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const getRandomRefs = () => {
    let arr = [];
    while (arr.length < 100) {
      let randomNumber = Math.floor(Math.random() * 100);
      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
      }
    }
    setcurrentActiveRef([...arr]);
  };

  const zoom = () => {
    for (let i = 0; i < starListRef.length; i++) {
      let star = starListRef[i];
      star.current.to({
        scaleX: 0.8,
        scaleY: 0.8,
        duration: 1.5,
      });
    }
    setScale(0.9);
  };

  const isBlinking = (e) => {
    let shapeID = e.target.id();
    console.log(shapeID);
    let activeStars = currentActiveRefs;
    if (activeStars.includes(Number(shapeID))) {
      let starData = starList[Number(shapeID)];
      console.log(starData);
      switch (starData.type) {
        case 'planet-transit':
          openStarInfoRandom(4);
          break;
        case 'cepheid':
          openStarInfoRandom(2);
          break;
        case 'dwarf-nova':
          openStarInfoRandom(0);
          break;
        case 'supernova':
          openStarInfoRandom(3);
          break;
        case 'eclipsing-binary':
          openStarInfoRandom(1);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className='StarUniverse' ref={canvasRef}>
      <Stage
        width={canvasRef.current?.clientWidth}
        height={canvasRef.current?.clientHeight}
      >
        {starList.length > 0 && starListRef.length > 0 && (
          <Layer>
            {starList.length > 0 &&
              starListRef.length > 0 &&
              starList.map((star, index) => (
                <Star
                  id={`${index}`}
                  key={index}
                  x={star.x}
                  y={star.y}
                  numPoints={star.numPoints}
                  innerRadius={star.innerRadius}
                  outerRadius={star.outerRadius}
                  fill='#fff'
                  rotation={star.rotation}
                  shadowColor='#fff'
                  shadowBlur={5}
                  scaleX={scale}
                  scaleY={scale}
                  ref={(el) => (starListRef[index].current = el)}
                  onClick={(e) => {
                    isBlinking(e);
                  }}
                  onTap={(e) => {
                    isBlinking(e);
                  }}
                />
              ))}
          </Layer>
        )}
      </Stage>
    </div>
  );
}

export default App;
