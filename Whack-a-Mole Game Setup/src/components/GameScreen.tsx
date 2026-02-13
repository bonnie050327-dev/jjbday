import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import img71 from "figma:asset/c98624c825ad89e1a20e5637a245023658f0c46f.png";
import img61 from "figma:asset/513ac867bb3066f0c846ba7e60ea22a41a261e68.png";
import img41 from "figma:asset/554a2695ee703ca9bbcb67b7a61dc67428370626.png";
import img31 from "figma:asset/1f618299b0dc458bf01d5d824d9edba52291b396.png";
import img51 from "figma:asset/885a29689a4e03c45801ba09d50e135dca63af82.png";
import img81 from "figma:asset/e2aafba171b6b78e57876c4f386d149e7e84100f.png";
import { loveReasons } from '../data/loveReasons';

interface CandlePosition {
  left: number;
  top: number;
  width: number;
  height: number;
  image: string;
  flipped?: boolean;
  flameTop: number; // Position for flame relative to candle
}

const candlePositions: CandlePosition[] = [
  { left: 41, top: 181, width: 11, height: 105, image: img71, flipped: true, flameTop: -25 },
  { left: 205, top: 181, width: 11, height: 105, image: img71, flipped: true, flameTop: -25 },
  { left: 288, top: 313, width: 11, height: 105, image: img71, flipped: true, flameTop: -25 },
  { left: 41, top: 308, width: 11, height: 116, image: img61, flipped: true, flameTop: -25 },
  { left: 206, top: 308, width: 10, height: 116, image: img61, flipped: true, flameTop: -25 },
  { left: 118, top: 445, width: 11, height: 116, image: img61, flipped: true, flameTop: -25 },
  { left: 288, top: 173, width: 11, height: 117, image: img61, flipped: true, flameTop: -25 },
  { left: 282, top: 578, width: 11, height: 116, image: img61, flipped: true, flameTop: -25 },
  { left: 356, top: 445, width: 11, height: 116, image: img61, flipped: true, flameTop: -25 },
  { left: 41, top: 456, width: 11, height: 93, image: img41, flipped: false, flameTop: -25 },
  { left: 206, top: 456, width: 11, height: 93, image: img41, flipped: false, flameTop: -25 },
  { left: 117, top: 586, width: 12, height: 101, image: img41, flipped: false, flameTop: -25 },
  { left: 282, top: 722, width: 11, height: 93, image: img41, flipped: false, flameTop: -25 },
  { left: 344, top: 591, width: 11, height: 95, image: img41, flipped: false, flameTop: -25 },
  { left: 349, top: 193, width: 11, height: 93, image: img41, flipped: false, flameTop: -25 },
  { left: 41, top: 591, width: 11, height: 85, image: img31, flipped: false, flameTop: -25 },
  { left: 206, top: 591, width: 11, height: 85, image: img31, flipped: false, flameTop: -25 },
  { left: 123, top: 192, width: 11, height: 91, image: img31, flipped: false, flameTop: -25 },
  { left: 112, top: 730, width: 10, height: 84, image: img31, flipped: false, flameTop: -25 },
  { left: 349, top: 724, width: 11, height: 86, image: img31, flipped: false, flameTop: -25 },
  { left: 34, top: 707, width: 11, height: 107, image: img51, flipped: false, flameTop: -25 },
  { left: 123, top: 312, width: 11, height: 116, image: img51, flipped: false, flameTop: -25 },
  { left: 200, top: 702, width: 11, height: 110, image: img51, flipped: false, flameTop: -25 },
  { left: 289, top: 445, width: 10, height: 107, image: img51, flipped: false, flameTop: -25 },
  { left: 356, top: 310, width: 11, height: 108, image: img51, flipped: false, flameTop: -25 },
];

interface CandleProps {
  position: CandlePosition;
  index: number;
  isActive: boolean;
  isCaught: boolean;
  onFlameClick: () => void;
}

function Candle({ position, index, isActive, isCaught, onFlameClick }: CandleProps) {
  const isLit = isActive || isCaught;
  
  return (
    <div 
      className={`absolute ${isActive ? 'cursor-pointer' : ''}`}
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
        width: `${position.width}px`,
        height: `${position.height}px`,
      }}
      onClick={isActive ? onFlameClick : undefined}
    >
      {position.flipped ? (
        <div className="-scale-y-100 flex-none rotate-180 size-full">
          <div className="relative size-full">
            <motion.img 
              alt="" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              src={position.image}
              style={{
                filter: isLit ? 'none' : 'grayscale(100%) brightness(1.3) opacity(0.4)',
              }}
              animate={isActive ? {
                filter: ['grayscale(0%) brightness(1)', 'grayscale(0%) brightness(1.2)', 'grayscale(0%) brightness(1)'],
              } : {}}
              transition={isActive ? {
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              } : {}}
            />
          </div>
        </div>
      ) : (
        <motion.img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
          src={position.image}
          style={{
            filter: isLit ? 'none' : 'grayscale(100%) brightness(1.3) opacity(0.4)',
          }}
          animate={isActive ? {
            filter: ['grayscale(0%) brightness(1)', 'grayscale(0%) brightness(1.2)', 'grayscale(0%) brightness(1)'],
          } : {}}
          transition={isActive ? {
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          } : {}}
        />
      )}
    </div>
  );
}

interface MessagePopupProps {
  reason: string;
  reasonNumber: number;
  onClose: () => void;
}

function MessagePopup({ reason, reasonNumber, onClose }: MessagePopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[156px] w-[295px]">
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={img81} 
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <p className="font-['Caveat:Regular',sans-serif] font-normal text-[#335a99] text-[20px] text-center whitespace-pre-wrap">
            <span className="block mb-1">Reason #{reasonNumber + 1}</span>
            <span className="block">{reason}</span>
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#335a99] text-white px-6 py-2 rounded-full font-['Caveat:Regular',sans-serif] text-lg hover:bg-[#2a4a7f] transition-colors"
        >
          Continue
        </button>
      </motion.div>
    </motion.div>
  );
}

export function GameScreen() {
  const navigate = useNavigate();
  const [caughtCandles, setCaughtCandles] = useState<Set<number>>(new Set());
  const [activeCandle, setActiveCandle] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<{ candleIndex: number; reasonNumber: number; reason: string } | null>(null);

  // Function to pick a random uncaught candle
  const pickRandomCandle = () => {
    const uncaught = candlePositions
      .map((_, i) => i)
      .filter(i => !caughtCandles.has(i));
    
    if (uncaught.length === 0) {
      setActiveCandle(null);
      return;
    }

    const randomIndex = uncaught[Math.floor(Math.random() * uncaught.length)];
    setActiveCandle(randomIndex);
  };

  // Start the game by showing the first flame
  useEffect(() => {
    pickRandomCandle();
  }, []);

  // Whack-a-Mole timer: flame disappears after 2 seconds and appears on another candle
  useEffect(() => {
    if (activeCandle === null || showMessage) return;

    const timer = setTimeout(() => {
      // Flame disappears and appears on a different uncaught candle
      pickRandomCandle();
    }, 2000); // 2 seconds per candle

    return () => clearTimeout(timer);
  }, [activeCandle, caughtCandles, showMessage]);

  const handleFlameClick = (index: number) => {
    if (index !== activeCandle) return;

    // Use the count of caught candles as the reason number (0-indexed becomes 1-indexed)
    const reasonNumber = caughtCandles.size;
    setCurrentMessage({ candleIndex: index, reasonNumber, reason: loveReasons[reasonNumber] });
    setShowMessage(true);
    setActiveCandle(null);
  };

  const handleCloseMessage = () => {
    if (currentMessage) {
      const newCaught = new Set(caughtCandles);
      newCaught.add(currentMessage.candleIndex);
      setCaughtCandles(newCaught);
      setShowMessage(false);
      
      // Check if game is complete
      if (newCaught.size === candlePositions.length) {
        // Navigate to final message immediately
        navigate('/final');
      } else {
        // Slight delay before showing next flame
        setTimeout(() => {
          pickRandomCandle();
        }, 500);
      }
    }
  };

  const isGameComplete = caughtCandles.size === candlePositions.length;

  return (
    <div className="bg-[#eef6ff] relative size-full min-h-screen">
      <p className="-translate-x-1/2 absolute font-['Caveat:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[198.5px] text-[#335a99] text-[24px] text-center top-[102px] w-[345px] whitespace-pre-wrap">
        {caughtCandles.size}/{candlePositions.length} candles collected
      </p>

      {candlePositions.map((position, index) => (
        <Candle
          key={index}
          position={position}
          index={index}
          isActive={activeCandle === index}
          isCaught={caughtCandles.has(index)}
          onFlameClick={() => handleFlameClick(index)}
        />
      ))}

      <AnimatePresence>
        {showMessage && currentMessage && (
          <MessagePopup
            reason={currentMessage.reason}
            reasonNumber={currentMessage.reasonNumber}
            onClose={handleCloseMessage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}