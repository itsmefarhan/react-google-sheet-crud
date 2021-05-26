import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/bff990d0-8ada-43e9-97eb-0ad668bb19ec"
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="accordion" id="accordionExample">
      {data?.map((item, i) => (
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
              {item.date}
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
                  <strong className="display-6">{item.name}</strong> ---{" "}
                  {item.email}
                </span>
                <span>
                  <Link to={`/edit/${i}`} style={{ textDecoration: "none" }}>
                    Edit
                  </Link>
                  <button className="btn btn-sm btn-danger ms-1">X</button>
                </span>
              </div>
              <p>{item.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
