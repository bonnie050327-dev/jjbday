import imgImg26191 from "figma:asset/6f7f40f9503eae7c4636b8be896369aedb9641c2.png";
import img1 from "figma:asset/c7a6e2f2e0a40ab45b674ba72ec3f084b576f65c.png";
import img21 from "figma:asset/0f7c2fca7a7d31f7f4e30f03f5eb7389c37afac5.png";

function Group() {
  return (
    <div className="absolute contents left-[138px] top-[288px]">
      <div className="absolute h-[146px] left-[138px] top-[336px] w-[125px]" data-name="主題 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute h-[62px] left-[180px] top-[288px] w-[36px]" data-name="主題 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img21} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#335a99] content-stretch flex gap-[8px] h-[52px] items-center justify-center left-[145px] overflow-clip p-[12px] rounded-[50px] top-[596px] w-[103px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px]">Start</p>
    </div>
  );
}

export default function IPhone1617Pro() {
  return (
    <div className="bg-[#eef6ff] relative size-full" data-name="iPhone 16 & 17 Pro - 3">
      <div className="absolute h-[891px] left-[-10px] top-[-9px] w-[501px]" data-name="IMG_2619 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg26191} />
      </div>
      <div className="-translate-x-1/2 absolute font-['Caveat:Bold',sans-serif] font-bold h-[180px] leading-[normal] left-[200.5px] text-[#335a99] text-[32px] text-center top-[490px] w-[345px] whitespace-pre-wrap">
        <p className="mb-0">{`25 Things That `}</p>
        <p>I Love About You</p>
      </div>
      <Group />
      <Button />
    </div>
  );
}