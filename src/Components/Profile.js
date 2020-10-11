import React from 'react'
const h3_style={color:"rgb(155, 4, 41)"}
const h4_style={color:"rgb(42, 114, 1)"}


const Profile=()=>{
             return(<>

              <div className="container-fluid bg-light">
              <h2 className="text-center pt-3">PROFILE</h2>

              <div className="container my-1 bg-light">
                    <div className="row">
                        <div className="col-lg-12 bg-light">
                            <div className="card mt-3 border-0">
                                <div className="card-body">
                                    <h3 style={h3_style}> SCHOOL : </h3>
                                    <ul>
                                       <li><b>TYPE OF EXAMINATION :</b> Secondary School Certificate (SSC)</li>
                                       <li> 2013-2014 </li>
                                       <li><b>SGPA :</b> 8.5</li> 
                                    </ul>
                                </div>
                            </div>
                    </div>
               </div>

                <hr/>


                {/*-- intermediate details --*/}
                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 style={h3_style}> INTERMEDIATE : </h3>
                                    <ul>
                                        <li><b>TYPE OF EXAMINATION :</b> Board Of Intermediate</li>
                                        <li> 2014-2016 </li>
                                        <li><b>PERCENTAGE :</b> 80%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>


                {/*-- btech details --*/}
                <div className="container my-1">
                    <div className="row">
                         <div className="col-lg-12">
                             <div className="card border-0">
                                 <div className="card-body">
                                     <h3 style={h3_style}> BACHELOR DEGREE : </h3>
                                         <ul className="list-none">
                                            <li><b>TYPE OF EXAMINATION :</b> Jawaharlal Nehru Technological University Hyderabad (JNTUH)</li> 
                                            <li>YEAR OF JOINING :<b style={h3_style}> 2016</b></li>
                                            <li>CGPA :<b style={h3_style}>6.8</b></li>
                                            <li>PASSED OUT :<b style={h3_style}> 2020 </b></li>
                                         </ul>
                                  </div>
                             </div>
                        </div>
                     </div>
                </div>
                {/*-- software skills --*/}
                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0 ">
                                <div className="card-body">

                                    <h3 style={h3_style}> TECHNICAL SKILLS : </h3>

                                    <ul>
                                        <li> 
                                            <b>Basics on</b>
                                            <ul>
                                                <li>C</li>
                                                <li>PYTHON (DJANGO)</li>
                                            </ul>
                                        </li>
                                        <li> 
                                            <b>FRONT-END :</b>
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>BOOTSTRAP</li>
                                                <li>JAVASCRIPT</li>
                                                <li>REACT-JS(REDUX)</li>
                                            </ul> 
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <hr/>
                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0">
                               <div className="card-body">
                                    <h3 style={h3_style}>COLLEGE PROJECTS</h3>
                                    <ul>
                                        <li>
                                            <b>MINI PROJECT</b>
                                            <ul>
                                                <li><b style={h4_style}>TITLE : </b> Bio Medical Health monitering System</li>
                                                <li><b style={h4_style}>SOFTWARE USED : </b> Arduino </li>
                                            </ul>
                                        </li>
                                        <li> 
                                            <b> MAJOR PROJECT :</b>
                                            <ul>
                                                <li><b style={h4_style}>TITLE : </b> Internet of Things in Smart Agriculture</li>
                                            </ul> 
                                        </li>
                                    </ul>
                               </div>
                            </div>
                        </div>    
                    </div>
                </div>
                









                </div>
                </div>
              </div>
             </>)
}
export default Profile;