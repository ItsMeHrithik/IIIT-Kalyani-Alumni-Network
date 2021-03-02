import React from 'react'
import '../extra/batch.css'

export default function Batchleft({data}) {
        return (
                <div>
                        <div className="batch">

                                <div className="row">


                                        <div className="col-lg-6 col-md-6 col-sm-6 batchcontent">
                                                <hr />


                                                <div className="container">

                                                        <div className="header">
                                                                <h1>BATCH {data}</h1>

                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 batchimage">
                                                <img src="" alt="" />
                                        </div>
                                </div>
                        </div>

                </div>
        )
}
