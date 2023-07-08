import { useGlobalContext } from "./context";
import sublinks from "./data";

function Navlinks() {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((links) => {
        const { pageId, page } = links;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => {
              setPageId(pageId);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
export default Navlinks;
