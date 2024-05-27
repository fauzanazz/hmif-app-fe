import { useRef, useState } from "react";

export interface CourseData {
  courseId: string;
  code: string;
  name: string;
  class: number;
  credits: number;
}

interface CourseCardProps {
  deleteable?: boolean;
  courseData: CourseData;
  isSwiped: boolean;
  onSwipe: (courseId: string) => void;
  onReset: () => void;
}

export default function CourseCard({ courseData, isSwiped, onSwipe, onReset, deleteable }: CourseCardProps) {
  // Track user horizontal touch movement
  const touchStart = useRef(0);
  const touchCurr = useRef(0);
  const touchDist = useRef(0);

  const MIN_TOUCH_DIST = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!deleteable) return;
    touchStart.current = e.touches[0].clientX;
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!deleteable) return;
    touchCurr.current = e.touches[0].clientX;
    touchDist.current = touchCurr.current - touchStart.current;
  }

  const handleTouchEnd = () => {
    if (!deleteable) return;
    if (touchDist.current < -MIN_TOUCH_DIST) { // Swipe left
      onSwipe(courseData.courseId);
    } else {
      onReset();
    }
  }

  const formatClass = (cls: number) => (
    cls.toLocaleString(undefined, { minimumIntegerDigits: 2 })
  )

  return (
    <div
      className="relative flex items-center rounded-xl w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`z-10 flex items-center rounded-xl bg-white ${isSwiped ? 'w-[85%]' : 'w-[100%]'} transition-all duration-300 ease-out`}
      >
        <div className="flex items-center gap-4 px-5 py-4">
          <div className="flex h-min flex-col items-center gap-1 rounded-md bg-[#305138] px-3 py-2">
            <p className="text-xs text-white">SKS</p>
            <p className="text-2xl font-medium leading-6 text-white">
              {courseData.credits}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <p className="font-bold leading-5">{courseData.code}</p>
              <p className="leading-5">{courseData.name}</p>
            </div>
            <p className="text-xs text-[#6A6B6A]">
              Kelas: {formatClass(courseData.class)}
            </p>
          </div>
        </div>
      </div>
      {isSwiped && <div
        className={`absolute bottom-0 right-0 top-0 flex items-center justify-center rounded-r-xl bg-[#B01212] text-xs text-white transition-all duration-300 ease-out ${isSwiped ? 'pl-[10%] w-[25%] opacity-100' : 'w-[0%] opacity-0'
          }`}
      >
        Delete
      </div>}
    </div>
  );
}
