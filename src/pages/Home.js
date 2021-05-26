import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="accordion" id="accordionExample">
      {Array.from({ length: 3 }).map((_, i) => (
        <div className="accordion-item" key={i}>
          <h2 className="accordion-header" id={`heading${i}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${i}`}
              aria-expanded="true"
              aria-controls={`collapse${i}`}
            >
              {new Date().toString()}
            </button>
          </h2>
          <div
            id={`collapse${i}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${i}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <strong className="display-6">Name</strong> --- email
                </span>
                <span>
                  <Link to={`/edit/${i}`} style={{ textDecoration: "none" }}>
                    Edit
                  </Link>
                  <button className="btn btn-sm btn-danger ms-1">X</button>
                </span>
              </div>
              <p>Message</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
