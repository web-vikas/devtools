'use client'
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PlusIcon, TrashIcon, DownloadIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import ResumePreview from '@/components/ResumePreview';
import { Card, CardContent } from '@/components/ui/card';
const Resume = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        email: '',
        mobileNumber: '',
        fatherName: '',
        motherName: '',
        dateOfBirth: '',
        nationality: '',
        languagesKnown: '',
        hobbies: '',
        address: '',
        careerObjective: '',
        customCareerObjective: '',
    });

    const [qualifications, setQualifications] = useState([
        { qualification: '', board: '', marks: '', percentage: '', division: '' },
    ]);

    const [professionalQualifications, setProfessionalQualifications] = useState([
        { qualification: '', university: '', institute: '', year: '', percentage: '', division: '' },
    ]);

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleQualificationInputChange = (index, name, value) => {
        const newQualifications = [...qualifications];
        newQualifications[index][name] = value;
        setQualifications(newQualifications);
    };

    const handleProfessionalQualificationInputChange = (index, name, value) => {
        const newProfessionalQualifications = [...professionalQualifications];
        newProfessionalQualifications[index][name] = value;
        setProfessionalQualifications(newProfessionalQualifications);
    };

    const addRow = () => {
        setQualifications([...qualifications, { qualification: '', board: '', marks: '', percentage: '', division: '' }]);
    };

    const addProfessionalRow = () => {
        setProfessionalQualifications([...professionalQualifications, { qualification: '', university: '', institute: '', year: '', percentage: '', division: '' }]);
    };

    const deleteRow = (index) => {
        const newQualifications = [...qualifications];
        newQualifications.splice(index, 1);
        setQualifications(newQualifications);
    };

    const deleteProfessionalRow = (index) => {
        const newProfessionalQualifications = [...professionalQualifications];
        newProfessionalQualifications.splice(index, 1);
        setProfessionalQualifications(newProfessionalQualifications);
    };

    const getQualificationsData = () => {
        return qualifications.map((qualification) => ({
            qualification: qualification.qualification,
            marks: qualification.marks,
            board: qualification.board,
            percentage: qualification.percentage,
            division: qualification.division,
        }));
    };

    const getProfessionalQualificationsData = () => {
        return professionalQualifications.map((qualification) => ({
            qualification: qualification.qualification,
            university: qualification.university,
            institute: qualification.institute,
            year: qualification.year,
            percentage: qualification.percentage,
            division: qualification.division,
        }));
    };

    const handleSubmit = () => {
        const formDataObject = {
            ...formData,
            qualifications: getQualificationsData(),
            professionalQualifications: getProfessionalQualificationsData(),
        };

        console.log('Form Data:', formDataObject);
    };



    return (
        <div className="md:min-h-screen flex-col">
            <div className='max-w-screen-lg mx-auto'>
                <div className="flex flex-col flex-wrap gap-2 p-3 no-print">
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Name</label>
                            <Input type='text' placeholder="John Deo" onChange={(e) => handleInputChange('name', e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Gender</label>
                            <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Gender" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value='Male'>Male</SelectItem>
                                    <SelectItem value='Female'>Female</SelectItem>
                                    <SelectItem value='Others'>Others</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Email</label>
                            <Input type="email" placeholder="hello@johndeo.com" onChange={(e) => handleInputChange('email', e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Mobile Number</label>
                            <Input type="number" placeholder="8723762390" onChange={(e) => handleInputChange('mobileNumber', e.target.value)} />
                        </div>
                    </div>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Father Name</label>
                            <Input type="text" placeholder="Steven Deo" onChange={(e) => handleInputChange('fatherName', e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Mother Name</label>
                            <Input type="text" placeholder="Cloie Ducker" onChange={(e) => handleInputChange('motherName', e.target.value)} />
                        </div>
                    </div>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Date Of Birth</label>
                            <Input type="text" placeholder="05-11-2003" onChange={(e) => handleInputChange('dateOfBirth', e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Nationality</label>
                            <Input type="text" placeholder="Indian" onChange={(e) => handleInputChange('nationality', e.target.value)} />
                        </div>
                    </div>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Language Known</label>
                            <Input type="text" placeholder="Hindi , English" onChange={(e) => handleInputChange('languagesKnown', e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <label className='block mb-1 text-xs font-medium text-neutral-400'>Hobbies</label>
                            <Input type="text" placeholder="Playing Cricket , Traveling" onChange={(e) => handleInputChange('hobbies', e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label className='block mb-1 text-xs font-medium text-neutral-400'>Address </label>
                        <Textarea placeholder="123 Main Street, Cityville, Stateland, Country" onChange={(e) => handleInputChange('address', e.target.value)} />
                    </div>
                    <div>
                        <label className='block my-2 text-md font-medium text-neutral-400'>Career Objective</label>
                        <RadioGroup defaultValue="p2" onValueChange={(e) => handleInputChange('careerObjective', e)}>
                            <div className="flex items-center space-x-2 space-y-1">
                                <RadioGroupItem value="Secure a responsible career opportunity to fully utilize my talent and skills to grow, while making a significant contribution to the success of the company." id="r1" />
                                <Label htmlFor="r1">Secure a responsible career opportunity to fully utilize my talent and skills to grow, while making a significant contribution to the success of the company.</Label>
                            </div>
                            <div className="flex items-center space-x-2 space-y-1">
                                <RadioGroupItem value="Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization." id="r2" />
                                <Label htmlFor="r2">Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization.</Label>
                            </div>
                            <div className="flex items-center space-x-2 space-y-1">
                                <RadioGroupItem value="Urge for a position in an aggressively growing organization where my technical & functional expertise can be effectively utilized and possess good analytical abilities, quick grasping power, zeal for learning new things and excellent communication skills." id="r3" />
                                <Label htmlFor="r3"> Urge for a position in an aggressively growing organization where my technical & functional expertise can be effectively utilized and possess good analytical abilities, quick grasping power, zeal for learning new things and excellent communication skills.</Label>
                            </div>
                            <div className="flex items-center space-x-2 space-y-1">
                                <RadioGroupItem value="To seek a good & responsible job in a professionally managed organization where in my conceptual and functional skills are effectively utilized in a way that contributes to the organization growth coupled with personal growth within the organization." id="r4" />
                                <Label htmlFor="r4">To seek a good & responsible job in a professionally managed organization where in my conceptual and functional skills are effectively utilized in a way that contributes to the organization growth coupled with personal growth within the organization.</Label>
                            </div>
                            <div className="flex items-center space-x-2 space-y-1">
                                <RadioGroupItem value="To make a good position in a reputed company and work enthusiastically in team which provides steady career growth along with job satisfaction, challenges and give value contribution in the success and to build a challenging career with honesty and loyalty by translating my experience knowledge, skills, and abilities into value for an organization." id="r5" />
                                <Label htmlFor="r5">To make a good position in a reputed company and work enthusiastically in team which provides steady career growth along with job satisfaction, challenges and give value contribution in the success and to build a challenging career with honesty and loyalty by translating my experience knowledge, skills, and abilities into value for an organization.</Label>
                            </div>
                            <div className="flex items-center space-x-2 space-y-1">
                                <RadioGroupItem value="To contribute my best to the organization irrespective of the kind of project undertaken and to utilize my skills and to perform the job to the best of my ability with the zeal and willing to learn." id="r6" />
                                <Label htmlFor="r6">To contribute my best to the organization irrespective of the kind of project undertaken and to utilize my skills and to perform the job to the best of my ability with the zeal and willing to learn.</Label>
                            </div>
                        </RadioGroup>
                        <Separator className='my-3' />

                        <label className='block my-3 text-md font-medium text-neutral-400'>OR</label>
                        <Textarea placeholder="Career Objective" onChange={(e) => handleInputChange('customCareerObjective', e.target.value)} />
                    </div>
                    <div>
                        <h2>Academic Qualifications</h2>
                        {qualifications.map((qualification, index) => (
                            <div key={index} className="flex gap-2 flex-wrap p-3 items-center">
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Qualification</label>
                                    <Input
                                        type="text"
                                        placeholder="Qualification"
                                        value={qualification.qualification}
                                        onChange={(e) => handleQualificationInputChange(index, 'qualification', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Board</label>
                                    <Input
                                        type="text"
                                        placeholder="Board"
                                        value={qualification.board}
                                        onChange={(e) => handleQualificationInputChange(index, 'board', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>School</label>
                                    <Input
                                        type="text"
                                        placeholder="Marks"
                                        value={qualification.marks}
                                        onChange={(e) => handleQualificationInputChange(index, 'marks', e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Percentage</label>
                                    <Input
                                        type="text"
                                        placeholder="Percentage"
                                        value={qualification.percentage}
                                        onChange={(e) => handleQualificationInputChange(index, 'percentage', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Division</label>
                                    <Input
                                        type="text"
                                        placeholder="Division"
                                        value={qualification.division}
                                        onChange={(e) => handleQualificationInputChange(index, 'division', e.target.value)}
                                    />
                                </div>
                                {index > 0 && (
                                    <div className=''>
                                        <label className='block mb-1 text-xs font-medium text-neutral-400'>Action</label>
                                        <Button variant="destructive" onClick={() => deleteRow(index)}>
                                            <TrashIcon />
                                        </Button>
                                    </div>
                                )}
                                <Separator className='my-3' />
                            </div>
                        ))}
                        <Button onClick={addRow}><PlusIcon />Add New Row</Button>
                    </div>
                    <div>
                        <h2>Professional Qualifications</h2>
                        {professionalQualifications.map((qualification, index) => (
                            <div key={index} className="flex gap-2 p-3 flex-wrap">
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Qualification</label>
                                    <Input
                                        type="text"
                                        placeholder="Qualification"
                                        value={qualification.qualification}
                                        onChange={(e) => handleProfessionalQualificationInputChange(index, 'qualification', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>University</label>
                                    <Input
                                        type="text"
                                        placeholder="University"
                                        value={qualification.university}
                                        onChange={(e) => handleProfessionalQualificationInputChange(index, 'university', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Institute</label>
                                    <Input
                                        type="text"
                                        placeholder="Institute"
                                        value={qualification.institute}
                                        onChange={(e) => handleProfessionalQualificationInputChange(index, 'institute', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Year</label>
                                    <Input
                                        type="text"
                                        placeholder="Year"
                                        value={qualification.year}
                                        onChange={(e) => handleProfessionalQualificationInputChange(index, 'year', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Percentage OR CGPA</label>
                                    <Input
                                        type="text"
                                        placeholder="Percentage OR CGPA"
                                        value={qualification.percentage}
                                        onChange={(e) => handleProfessionalQualificationInputChange(index, 'percentage', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className='block mb-1 text-xs font-medium text-neutral-400'>Division</label>
                                    <Input
                                        type="text"
                                        placeholder="Division"
                                        value={qualification.division}
                                        onChange={(e) => handleProfessionalQualificationInputChange(index, 'division', e.target.value)}
                                    />
                                </div>
                                {index > 0 && (
                                    <div className=''>
                                        <label className='block mb-1 text-xs font-medium text-neutral-400'>Action</label>
                                        <Button variant="destructive" onClick={() => deleteProfessionalRow(index)}>
                                            <TrashIcon />
                                        </Button>
                                    </div>
                                )}
                                <Separator className='my-3' />
                            </div>
                        ))}
                        <Button onClick={addProfessionalRow}> <PlusIcon /> Add New Row</Button>
                    </div>
                    <Separator />
                    <div>
                        <Button onClick={() => window.print()}> <DownloadIcon className='mr-2' /> Print This Resume</Button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <Card className="py-6 print:!shadow-none print:border-none print:bg-transparent">
                    <CardContent className='overflow-scroll hide-scroll'>
                        <ResumePreview
                            formData={formData}
                            qualifications={qualifications}
                            professionalQualifications={professionalQualifications}
                        />
                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default Resume;
