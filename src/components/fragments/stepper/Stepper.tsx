import clsx from "clsx";

type Step = {
  label: string;
};

type Props = {
  steps: Step[];
  currentStep: number; // index mulai dari 0
};

export default function Stepper({ steps, currentStep }: Props) {
  return (
    <div className="w-full ">
      {/* Line background */}
      <div className="relative flex items-center justify-between">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -translate-y-1/2" />

        {/* Progress line */}
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-black -translate-y-1/2 transition-all duration-300"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />

        <div className="flex w-full justify-between items-start">
          {/* Steps */}
          {steps.map((step, index) => {
            const isActive = index <= currentStep;

            return (
              <div
                key={index}
                className="relative max-w-5 z-10 top-5 flex flex-col items-center justify-start text-center"
              >
                {/* Circle */}
                <div
                  className={clsx(
                    "w-6 h-6 rounded-full border flex items-center justify-center text-xs font-medium transition",
                    isActive
                      ? "bg-black border-black text-white"
                      : "bg-white border-gray-300 text-gray-400",
                  )}
                >
                  {index + 1}
                </div>

                {/* Label */}
                <span
                  className={clsx(
                    "mt-2 text-xs",
                    isActive ? "text-black font-medium" : "text-gray-400",
                  )}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
