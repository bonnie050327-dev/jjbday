import img82 from "figma:asset/e2aafba171b6b78e57876c4f386d149e7e84100f.png";

export default function IPhone1617Pro() {
  return (
    <div className="bg-[#eef6ff] relative size-full" data-name="iPhone 16 & 17 Pro - 6">
      <div className="absolute flex h-[660.326px] items-center justify-center left-[26px] top-[107px] w-[349.651px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[349.651px] relative w-[660.326px]" data-name="主題 8 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img82} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute font-['Caveat:Regular',sans-serif] font-normal h-[326px] leading-[normal] left-[201px] text-[#335a99] text-[30px] text-center top-[256px] w-[250px] whitespace-pre-wrap">
        <p className="mb-0">James,</p>
        <p>
          Happy 25 th Birthday!
          <br aria-hidden="true" />I hope today is as amazing as you are.
          <br aria-hidden="true" />
          You’re the best thing that has ever happened to me, and I feel so lucky to have you. I love you and I can’t wait to see you soon!
        </p>
      </div>
    </div>
  );
}