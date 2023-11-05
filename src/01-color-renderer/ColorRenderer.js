import Color from "./Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

export default function ColorRenderer() {
  return (
    // Use the Color component to render each
    //  item in the colors array on the page!
    //"The first thing we need to do is map thru
    //the array of colours"
    //For each color, I'm going to render an instance of the color component. Each color component will need a unique key.
    // color child component receives two props, hex and name. I need to pass that to each instance as well.
    <div>
      {colors.map((c, index) => {
        return (
          <div
            style={{
              border: "1px",
            }}
          >
            <Color key={index} hex={c.hex} name={c.name} />
          </div>
        );
      })}
    </div>
  );
}
