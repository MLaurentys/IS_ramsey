import { connect } from "react-redux";
import "./graph_display.css";

function Graph6Selector(props: any) {
  return (
    <div>
      <p>Graph6 import/export</p>
      <p>Current Graph:</p>
      <textarea></textarea>
      <button>Set Graph</button>
    </div>
  );
}

const GiveGraphStoreAccess: any = connect();
export default GiveGraphStoreAccess(Graph6Selector);
