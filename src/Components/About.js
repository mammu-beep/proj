import React from 'react'
const h3_style={color:"rgb(43,118,1)"}
const h4_style={color:"rgb(42, 114, 1)"}


const About=()=>{
             return(<>
             <h1 className="text-center pt-3">About</h1>

             <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12 bg-light">
                                <div className="card mt-3 border-0">
                                    <div className="card-body">
                                        <h3 style={h3_style}> PERSONAL PROFILE : </h3>

                                        <p><b style={h4_style}>Father's Name :</b> Kasoju Krishna Murthy  Chary </p>
                                        <p><b style={h4_style}>Date Of Birth :</b> 16-08-1998 </p>
                                        <p><b style={h4_style}>Languages Known :</b> English,Hindi,Telugu </p>
                                        <p><b style={h4_style}>Address :</b> House No:11-21-268,
                                        N.T.R Nagar ,LB Nagar,
                                        Hyd,Ranga Reddy,Pin No:5000035. </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
             
             <table>
                 <tr>
                     <td></td>
                 </tr>
             </table>
             
             </>)
}
export default About;