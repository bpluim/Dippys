import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

// Wrapper component to isolate useRive logic that
// renders the <RiveComponent />
const RiveWrapper = () => {
  const { RiveComponent } = useRive({
    src: "skins_demo.riv",
    stateMachines: "Motion",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    })
  });

  return <RiveComponent />;
};

export default RiveWrapper;