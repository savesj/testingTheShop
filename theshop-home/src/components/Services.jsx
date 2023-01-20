import React from 'react'

function Services() {
  return (
    <div>
        <section id="services">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/servicesimage.jpg" alt="services" className="w-75 mt-5"/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5">Services</h3>
                        <h1 className="display-6"><b>Auto Repairs</b></h1>
                        <h1 className="display-6"><b>Tire Shop</b></h1>
                        <h1 className="display-6"><b>Bikes Repair</b></h1>
                        <h1 className="display-6"><b>Heavy Duty Repair</b></h1>
                        <h1 className="display-6"><b>Wrap and Detail</b></h1>
                        <h1 className="display-6"><b>Service Repair</b></h1>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                    </div>
                </div>

            </div>
        </section>

    </div>
  )
}

export default Services