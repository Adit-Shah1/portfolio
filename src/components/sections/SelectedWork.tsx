import Image from "next/image";
import CaseBlock from "@/components/ui/CaseBlock";
import GestureFigure from "@/components/ui/GestureFigure";
import { selectedWork } from "@/data/projects";

const slsMedia = (
  <div data-reveal className="relative">
    <Image
      src="/images/sls/sls-desktop.png"
      alt="SLS Designs website — desktop homepage"
      width={1440}
      height={900}
      className="w-full rounded-2xl border border-line"
    />
    <Image
      src="/images/sls/sls-mobile.png"
      alt="SLS Designs website on mobile"
      width={390}
      height={844}
      className="absolute right-8 -bottom-10 w-1/5 rounded-xl border border-line shadow-2xl"
    />
  </div>
);

const gestureMedia = (
  <div data-reveal className="overflow-hidden rounded-2xl border border-line bg-panel">
    <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
      <span className="h-3 w-3 rounded-full bg-line" />
      <span className="h-3 w-3 rounded-full bg-line" />
      <span className="h-3 w-3 rounded-full bg-line" />
      <span className="ml-3 font-mono text-xs text-muted">
        gesture_controller.py — python3 · webcam 30fps
      </span>
    </div>
    <div className="grid gap-10 p-8 md:grid-cols-[auto_1fr] md:items-center md:p-12">
      <GestureFigure />
      <div className="font-mono text-xs leading-loose text-muted">
        <p>
          <span className="text-accent">[hand]</span> 21 landmarks · tracking
        </p>
        <p>
          <span className="text-accent">[gesture]</span> palm raised → chime
        </p>
        <p>
          <span className="text-accent">[gesture]</span> pinch 0.87 →{" "}
          <span className="text-fg">music paused</span>
        </p>
        <p>
          <span className="text-accent">[applescript]</span> tell application &quot;Music&quot; to
          pause ✓
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span>pinch</span>
          <div className="h-1 w-40 overflow-hidden rounded bg-line">
            <div className="h-full w-[87%] bg-accent" />
          </div>
          <span>0.87</span>
        </div>
      </div>
    </div>
  </div>
);

const mediaBySlug: Record<string, React.ReactNode> = {
  "sls-designs": slsMedia,
  "gesture-controller": gestureMedia,
};

export default function SelectedWork() {
  return (
    <>
      {selectedWork.map((cs) => (
        <CaseBlock key={cs.slug} cs={cs} media={mediaBySlug[cs.slug]} />
      ))}
    </>
  );
}
