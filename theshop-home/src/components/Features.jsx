import React from "react";

function Features() {
  return (
    <div>
      <section id="features">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center">Features</h3>
              <h1 className="display-6 text-center mb-4">
                <b>All you need. All in one place.</b>
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 border-0 ">
                <div className="card-body">
                    <i className="bi bi-clipboard-check fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Digital Inspection</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 border-0 ">
                <div className="card-body">
                    <i className="bi bi-receipt fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Estimates</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 border-0 ">
                <div className="card-body">
                    <i className="bi bi-calendar-date fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Schelduling</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 border-0 ">
                <div className="card-body">
                    <i className="bi bi-graph-up-arrow fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Reports</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 border-0 ">
                <div className="card-body">
                    <i className="bi bi-kanban fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">WorkFlow Board</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 border-0 ">
                <div className="card-body">
                    <i className="bi bi-chat-right-dots fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Live Chat</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Features;
