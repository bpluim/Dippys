'use client'

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const RiveDemo = () => {
  const { RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "clean_the_car.riv",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: "Motion",
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};

export default function About() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
          <section className="w-full pt-12">    
              <div className="mx-auto container space-y-12 px-4 md:px-6">
                  <h1>About</h1>
                  <p>This is the about page</p>
              </div>
              <div className="RiveContainer">
                <RiveDemo />
              </div>
          </section>
      </main>
  );
};