import React from 'react'

const ResumePreview = ({ formData, qualifications, professionalQualifications, ref }) => {
    return (
        <div className="row" style={{ marginRight: 0, marginLeft: 0 }} ref={ref}>
            <div
                className="col-sm-6"
                style={{
                    width: 700,
                    backgroundColor: "#fff",
                    border: "1px solid #000000",
                    marginTop: 0,
                    padding: 10
                }}
                id="rdiv"
            >
                <div id="main" style={{ width: "100%", padding: "0px 20px 20px" }}>
                    <div style={{ textAlign: "center", width: "100%" }}>
                        <span style={{ fontSize: 25, fontWeight: "bold" }}>
                            <u>Resume</u>
                        </span>
                    </div>
                    <div style={{ width: "65%", float: "left" }}>
                        <p>
                            <span style={{ fontSize: 16, fontWeight: "bold" }}>
                                {formData.name}
                            </span>
                            <br />
                            <strong>Address:</strong>
                            <br />
                            {formData.address}
                            <br />
                            <b>Contact No. : </b>{formData.mobileNumber}
                            <br />
                            <strong>Email id : </strong>{formData.email}
                        </p>
                    </div>
                    <div
                        style={{ textAlign: "center", width: "20%", float: "right" }}
                    >
                        {/* Place Image Here */}
                    </div>
                </div>
                <div style={{ clear: "both" }}>
                    {/* Career Objective */}
                    <div
                        style={{ width: "100%", backgroundColor: "#ccc" }}
                        className=" px="
                    >
                        <span style={{ fontSize: 16, fontWeight: "bold" }}>
                            <u>
                                <i>Career Objective</i>
                            </u>
                        </span>
                    </div>
                    <div style={{ width: "100%", marginTop: 2, marginBottom: 5 }}>
                        <p style={{ marginLeft: 17, textIndent: "-17px" }}>
                            &nbsp;&nbsp;•&nbsp;{formData.careerObjective}
                        </p>
                    </div>

                    {/* Academic Qualification */}
                    <div
                        style={{ width: "100%", backgroundColor: "#ccc" }}
                        className="head"
                    >
                        <span style={{ fontSize: 16, fontWeight: "bold" }}>
                            <u>
                                <i>Academic Qualification</i>
                            </u>
                        </span>
                    </div>
                    <div style={{ width: "100%", marginTop: 2 }}>
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                border: "1px solid black",
                                padding: 10,
                                fontSize: 12,
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Exam Name</b>
                                    </td>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Board / University</b>
                                    </td>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Percentage</b>
                                    </td>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Marks</b>
                                    </td>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Division</b>
                                    </td>
                                </tr>
                                {qualifications?.map((qualification, index) => (
                                    <tr key={index}>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.qualification}
                                        </td>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.board}
                                        </td>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.percentage}
                                        </td>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.marks}
                                        </td>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.division}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Professional Qualification */}
                    <div
                        style={{ width: "100%", backgroundColor: "#ccc", marginTop: 4 }}
                        className="head"
                    >
                        <span style={{ fontSize: 16, fontWeight: "bold" }}>
                            <u>
                                <i>Professional Qualification</i>
                            </u>
                        </span>
                    </div>
                    <div style={{ width: "100%", marginTop: 2 }}>
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                border: "1px solid black",
                                padding: 10,
                                fontSize: 12,
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Exam Name</b>
                                    </td>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Board / University</b>
                                    </td>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Passing year</b>
                                    </td>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Percentage of Marks</b>
                                    </td>
                                    <td align="center" style={{ border: "1px solid black" }}>
                                        <b>Division</b>
                                    </td>
                                </tr>
                                {professionalQualifications?.map((qualification, index) => (
                                    <tr key={index}>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.qualification}
                                        </td>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.university}
                                        </td>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.year}
                                        </td>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.percentage}
                                        </td>
                                        <td style={{ border: "1px solid black" }} align="center">
                                            {qualification.division}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Personal Information */}
                    <div
                        style={{ width: "100%", backgroundColor: "#ccc", marginTop: 10 }}
                        className="head"
                    >
                        <span style={{ fontSize: 16, fontWeight: "bold" }}>
                            <u>
                                <i>Personal Information</i>
                            </u>
                        </span>
                    </div>
                    <div style={{ width: "100%" }}>
                        <table style={{ marginLeft: 50, width: 500, marginTop: 0 }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: 150 }}>Date of Birth</td>
                                    <td style={{ width: 100 }}>:</td>
                                    <td style={{ width: 250 }}>{formData.dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: 150 }}>Father's Name</td>
                                    <td style={{ width: 100 }}>:</td>
                                    <td style={{ width: 250 }}>{formData.fatherName}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: 150 }}>Mother's Name</td>
                                    <td style={{ width: 100 }}>:</td>
                                    <td style={{ width: 250 }}>{formData.motherName}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: 150 }}>Nationality</td>
                                    <td style={{ width: 100 }}>:</td>
                                    <td style={{ width: 250 }}>{formData.nationality}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: 150 }}>Gender</td>
                                    <td style={{ width: 100 }}>:</td>
                                    <td style={{ width: 250 }}>{formData.gender}</td>
                                </tr>
                                {/* <tr>
                            <td style={{ width: 150 }}>Marital Status</td>
                            <td style={{ width: 100 }}>:</td>
                            <td style={{ width: 250 }}>{formData.maritalStatus}</td>
                        </tr> */}
                                <tr>
                                    <td style={{ width: 150 }}>Language</td>
                                    <td style={{ width: 100 }}>:</td>
                                    <td style={{ width: 250 }}>{formData.languagesKnown}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: 150 }}>Hobbies</td>
                                    <td style={{ width: 100 }}>:</td>
                                    <td style={{ width: 250 }}>{formData.hobbies}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Declaration */}
                    <div
                        style={{
                            width: "100%",
                            marginLeft: 50,
                            marginTop: 4,
                            paddingRight: 20,
                        }}
                    >
                        <span style={{ fontSize: 16, fontWeight: "bold" }}>
                            <u>Declaration:</u>
                        </span>
                        <br />{formData.declaration}
                    </div>

                    {/* Date and Place */}
                    <div style={{ width: "100%", marginTop: 5 }}>
                        <p>
                            <span style={{ fontSize: 14, fontWeight: "bold" }}>
                                <i>Date:</i>
                            </span>{" "}
                            <span
                                style={{ fontSize: 14, fontWeight: "bold", float: "right" }}
                            >
                                <i>({formData.name})</i>
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: 14, fontWeight: "bold" }}>
                                <i>Place:</i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumePreview