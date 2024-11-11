import React, { useState } from "react";

const UserForm = () => {
    const [formData, setFormData] = useState({ name: "", age: ""});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({ name: "", age: "" });
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">User Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border rounded-md px-3 py-2 w-full"
                    />  
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="border rounded-md px-3 py-2 w-full"
                    />  
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Submit
                </button>
            </form>
            {submittedData && (
                <div className="mt-4">
                    <h3 className="font-semibold text-lg">Submitted Data</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Age: {submittedData.age}</p>
                </div>

                    
            )}
        </div>
    );
};

export default UserForm;