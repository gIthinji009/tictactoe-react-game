
    // ColorItem component
    function ColorItem(props) {
        return (
            <>
              <button onClick={() => {
                alert(props.index)
              }}>
              <li style={{ color: props.color }}>{props.color}</li>
              </button>
            </>
        );
      }
    
export default function ColorList() {
    const colors = [
      "firebrick",
      "rebeccapurple",
      "salmon",
      "darkslategray",
      "hotpink",
    ];
   // enumerability in collections 
   // listing components 
    const colorElements = colors.map((color,index) => {
        return <ColorItem key={index} color={color} index={index} />;
    });


    return (
      <div>
        <h1>Top 5 CSS Colors</h1>
        <ol>
          {/* display the array of <li> elements here! */}
          {colorElements}
        </ol>
      </div>
    );

  }